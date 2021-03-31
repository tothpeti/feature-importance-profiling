from sklearn.ensemble import RandomForestClassifier, ExtraTreesClassifier
from sklearn.svm import LinearSVC
from sklearn.model_selection import cross_validate
from xgboost.sklearn import XGBClassifier
import numpy as np
from collections import defaultdict

from core.src.ranking.ranking import Ranking
from core.src.repository.DataRepository import DataRepository
from core.src.accessor.BinaryFeatureImportanceAccessor import BinaryFeatureImportanceAccessor
from core.src.metrics.metrics import Metrics


class DataService:

    @classmethod
    def set_json_data(cls, data):
        DataRepository.set_json_data_list(data=data)

    @classmethod
    def process_data(cls):
        tmp_json_data = DataRepository.get_json_data_list()

        for algorithm in tmp_json_data['algorithms']:
            cls._extract_algorithm(algorithm=algorithm)

        cls._extract_ranking_methods(methods=tmp_json_data['ranking'])

    @classmethod
    def run_profiling(cls):
        result_dict = defaultdict(list)
        features = DataRepository.get_features_set()
        target = DataRepository.get_target_set()

        # Run feature importance extraction for all the initialized models
        for model_name in DataRepository.get_algorithms_names():
            result_dict =\
                BinaryFeatureImportanceAccessor.select_fi_algorithm(
                    model_name=model_name,
                    result_dict=result_dict,
                    features=features,
                    target=target
                )

        # Rank all each features based on result_dict's values
        test_results = {}
        for ranking_name in DataRepository.get_ranking_methods_list():

            # Select and run ranking method on result_dict
            rank_list = Ranking.select_ranking_method(
                method_name=ranking_name,
                result_dict=result_dict
            )

            # Get filtered columns
            test_results[ranking_name]['filtered_columns'] =\
                Ranking.filter_columns_by_ranks(rank_list=rank_list, feature_columns=features.columns)

        print(result_dict)

    @classmethod
    def test_estimator_on_original_dataset(cls, estimator, features, target):
        x_train, x_test, y_train, y_test = DataRepository.get_train_test_split(features=features, target=target)

        estimator_cross = cross_validate(estimator=estimator, X=x_train, y=y_train, cv=10, scoring=Metrics.roc_auc_scorer())

        estimator_cross_max_auc_index = np.argmax(estimator_cross['test_score'])
        best_estimator = estimator_cross['estimator'][estimator_cross_max_auc_index]

        y_pred = best_estimator.predict(x_test)

    @classmethod
    def test_estimator_on_filtered_dataset(cls, estimator, features, target):
        x_train, x_test, y_train, y_test = DataRepository.get_train_test_split(features=features, target=target)



    @classmethod
    def _extract_algorithm(cls, algorithm: dict):
        model_name = algorithm['algoName']

        rng = np.random.RandomState(0)

        if model_name == 'LinearSVC':
            params = {
                'C': algorithm['cPenalty'],
                'penalty': algorithm['penalty'],
                'tol': algorithm['tol'],
                'max_iter': algorithm['maxIter'],
                'dual': False
            }

            model = LinearSVC(**params)
            model.set_params(random_state=rng)
            DataRepository.add_initialized_model(model_name=model_name, model=model)

        elif model_name == 'RandomForestClassifier':
            params = {
                'n_estimators': algorithm['nEstimators'],
                'max_depth': None if algorithm['maxDepth'] is None else algorithm['maxDepth'],
                'min_samples_split': algorithm['minSamplesSplit'],
                'min_samples_leaf': algorithm['minSamplesLeaf'],
                'max_features': algorithm['maxFeatures'],
                'criterion': algorithm['criterion']
            }

            model = RandomForestClassifier(**params)
            model.set_params(random_state=rng)
            DataRepository.add_initialized_model(model_name=model_name, model=model)

        elif model_name == 'ExtraTreesClassifier':
            params = {
                'n_estimators': algorithm['nEstimators'],
                'max_depth': None if algorithm['maxDepth'] is None else algorithm['maxDepth'],
                'min_samples_split': algorithm['minSamplesSplit'],
                'min_samples_leaf': algorithm['minSamplesLeaf'],
                'max_features': algorithm['maxFeatures'],
                'criterion': algorithm['criterion']
            }

            model = ExtraTreesClassifier(**params)
            model.set_params(random_state=rng)
            DataRepository.add_initialized_model(model_name=model_name, model=model)

        elif model_name == 'XGBoostClassifier':
            params = {
                'eta': algorithm['eta'],
                'max_depth': algorithm['maxDepth'],
                'min_child_weight': algorithm['minChildWeight'],
                'gamma': algorithm['gamma'],
                'sub_sample': algorithm['subsample'],
                'colsample_bytree': algorithm['colsampleByTree'],
                'objective': 'binary:logistic',
                'use_label_encoder': False
            }

            model = XGBClassifier(**params)
            DataRepository.add_initialized_model(model_name=model_name, model=model)

        else:
            # this branch is used for adding MutualInformation to the list
            DataRepository.add_initialized_model(model_name=model_name, model=None)

    @classmethod
    def _extract_ranking_methods(cls, methods: dict):
        DataRepository.set_ranking_methods_list(methods=methods)
