from collections import defaultdict


class DataRepository:
    _json_data_list = []
    _algorithms_list = []
    _ranking_methods_list = []
    _initialized_models_dict = {}
    _features_importance_result_dict: defaultdict[list] = {}
    _dataset = []
    _estimator = None

    @classmethod
    def get_json_data_list(cls):
        return cls._json_data_list

    @classmethod
    def get_algorithms_list(cls):
        return cls._algorithms_list

    @classmethod
    def get_algorithm_by_name(cls, name):
        return cls._initialized_models_dict[name]

    @classmethod
    def get_ranking_methods_list(cls):
        return cls._ranking_methods_list

    @classmethod
    def get_initialized_models(cls):
        return cls._initialized_models_dict

    @classmethod
    def add_initialized_model(cls, model_name, model):
        cls._initialized_models_dict[model_name] = model

    @classmethod
    def set_json_data_list(cls, data):
        cls._json_data_list = data

    @classmethod
    def set_algorithms_list(cls, algorithms):
        cls._algorithms_list = algorithms

    @classmethod
    def set_ranking_methods_list(cls, methods):
        cls._ranking_methods_list = methods

    @classmethod
    def get_features_importance_dict(cls):
        return cls._features_importance_result_dict

    @classmethod
    def set_feature_importance(cls, result_dict):
        cls._features_importance_result_dict = result_dict

    @classmethod
    def set_estimator(cls, estimator):
        cls._estimator = estimator

    @classmethod
    def set_dataset(cls, dataset):
        cls._dataset = dataset