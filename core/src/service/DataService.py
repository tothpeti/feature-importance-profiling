from sklearn.ensemble import RandomForestClassifier, ExtraTreesClassifier
from sklearn.svm import LinearSVC
from xgboost.sklearn import XGBClassifier
from numpy.random import RandomState
from collections import defaultdict

from core.src.ranking.ranking import Ranking
from core.src.repository.DataRepository import DataRepository
from core.src.accessor.BinaryFeatureImportanceAccessor import BinaryFeatureImportanceAccessor


class DataService:

    @classmethod
    def set_json_data(cls, data):
        DataRepository.set_json_data_list(data=data)

    @classmethod
    def process_data(cls):
        tmp_json_data = DataRepository.get_json_data_list()

        for algorithm in tmp_json_data['algorithms']:
            cls.extract_algorithm(algorithm=algorithm)

        cls.extract_ranking_methods(methods=tmp_json_data['ranking'])

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
        for ranking_name in DataRepository.get_ranking_methods_list():
            result_list = Ranking.select_ranking_method(

            )

        print(result_dict)

    @classmethod
    def extract_algorithm(cls, algorithm: dict):
        model_name = algorithm['algoName']

        rng = RandomState(0)

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
    def extract_ranking_methods(cls, methods: dict):
        DataRepository.set_ranking_methods_list(methods=methods)
