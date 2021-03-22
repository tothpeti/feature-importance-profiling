from sklearn.ensemble import RandomForestClassifier, ExtraTreesClassifier
from sklearn.svm import LinearSVC
from sklearn.feature_selection import mutual_info_classif
from xgboost.sklearn import XGBClassifier

from core.src.repository.DataRepository import DataRepository


class DataService:

    @classmethod
    def set_json_data(cls, data):
        DataRepository.set_json_data_list(data=data)

    @classmethod
    def process_data(cls):

        tmp_json_data = DataRepository.get_json_data_list()

        for algorithm in tmp_json_data['algorithms']:
            cls.extract_algorithm(algorithm=algorithm)

        print(DataRepository.get_initialized_models())
        """
        for ranking_method in tmp_json_data['ranking']:
            cls.extract_ranking_methods(methods=ranking_method)
        """

    @classmethod
    def extract_algorithm(cls, algorithm: dict):
        model_name = algorithm['algoName']

        if model_name == 'LinearSVC':
            params = {
                'C': algorithm['cPenalty'],
                'penalty': algorithm['penalty'],
                'tol': algorithm['tol'],
                'max_iter': algorithm['maxIter']
            }

            model = LinearSVC(**params)
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
            DataRepository.add_initialized_model(model_name=model_name, model=model)

        elif model_name == 'XGBoostClassifier':
            params = {
                'eta': algorithm['eta'],
                'max_depth': algorithm['maxDepth'],
                'min_child_weight': algorithm['minChildWeight'],
                'gamma': algorithm['gamma'],
                'sub_sample': algorithm['subsample'],
                'colsample_bytree': algorithm['colsampleByTree']
            }

            model = XGBClassifier(**params, objective='binary:logistic')
            DataRepository.add_initialized_model(model_name=model_name, model=model)

        else:
            DataRepository.add_initialized_model(model_name=model_name, model=None)

    @classmethod
    def extract_ranking_methods(cls, methods: dict):
        pass