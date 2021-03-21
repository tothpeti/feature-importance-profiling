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

        for ranking_method in tmp_json_data['ranking']:
            cls.extract_ranking_methods(methods=ranking_method)

    @classmethod
    def extract_algorithm(cls, algorithm: dict):
        if algorithm['algoName'] == 'LinearSVC':
            params = {
                'C': algorithm['cPenalty'],
                'penalty': algorithm['penalty'],
                'tol': algorithm['tol'],
                'max_iter': algorithm['maxIter']
            }
        elif algorithm['algoName'] == 'RandomForestClassifier':
            params = {
                'n_estimators': algorithm['nEstimators'],
                'max_depth': None if algorithm['maxDepth'] is None else algorithm['maxDepth'],
                'min_samples_split': algorithm['minSamplesSplit'],
                'min_samples_leaf': algorithm['minSamplesLeaf'],
                'max_features': algorithm['maxFeatures'],
                'criterion': algorithm['criterion']
            }
        elif algorithm['algoName'] == 'ExtraTreesClassifier':
            params = {
                'n_estimators': algorithm['nEstimators'],
                'max_depth': None if algorithm['maxDepth'] is None else algorithm['maxDepth'],
                'min_samples_split': algorithm['minSamplesSplit'],
                'min_samples_leaf': algorithm['minSamplesLeaf'],
                'max_features': algorithm['maxFeatures'],
                'criterion': algorithm['criterion']
            }
        elif algorithm['algoName'] == 'XGBoostClassifier':
            params = {
                'eta': algorithm['eta'],
                'max_depth': algorithm['maxDepth'],
                'min_child_weight': algorithm['minChildWeight'],
                'gamma': algorithm['gamma'],
                'sub_sample': algorithm['subsample'],
                'colsmple_bytree': algorithm['colsampleByTree']
            }
        else:
            'MutualInformation'

    @classmethod
    def extract_ranking_methods(cls, methods: dict):
        pass