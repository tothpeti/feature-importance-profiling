from collections import defaultdict
from typing import Optional

import pandas as pd
from sklearn.model_selection import train_test_split
from numpy.random import RandomState


class DataRepository:
    _json_data_list = []
    _algorithms_list = []
    _ranking_methods_list = []
    _initialized_models_dict = {}
    _features_importance_result_dict = defaultdict(list)
    _features = None
    _target = None
    _estimator = None
    _train_size = 0.7
    # _x_train = None
    # _x_test = None
    # _x_val = None
    # _y_train = None
    # _y_test = None
    # _y_val = None

    @classmethod
    def get_json_data_list(cls):
        return cls._json_data_list

    @classmethod
    def get_algorithms_list(cls):
        return cls._algorithms_list

    @classmethod
    def get_algorithms_names(cls):
        return cls._initialized_models_dict.keys()

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
    def get_features_set(cls):
        return cls._features

    @classmethod
    def get_target_set(cls):
        return cls._target

    @classmethod
    def set_estimator(cls, estimator):
        cls._estimator = estimator

    @classmethod
    def get_estimator(cls):
        return cls._estimator

    @classmethod
    def set_dataset(cls, dataset: pd.DataFrame):
        cls._features = dataset.iloc[:, :-1]
        cls._target = dataset.iloc[:, -1]

    # @classmethod
    # def set_train_test_val_split(cls, train_size: Optional[float] = 0.7):
    #     # Set random_state value
    #     rng = RandomState(0)
    #
    #     test_size = 1.0 - train_size
    #     validate_size = train_size * test_size
    #
    #     # Splitting data into train and test sets
    #     cls._x_train, cls._x_test, cls._y_train, cls._y_test =\
    #         train_test_split(cls._features, cls._target, train_size=train_size, random_state=rng)
    #
    #     # Splitting train set into train and validate sets
    #     cls._x_train, cls._x_val, cls._y_train, cls._y_val =\
    #         train_test_split(cls._x_train, cls._y_train, test_size=validate_size, random_state=rng)

    @classmethod
    def get_train_test_split(cls, features, target):
        rng = RandomState(0)
        return train_test_split(features, target, train_size=cls._train_size, random_state=rng)

    @classmethod
    def set_train_size(cls, train_size: Optional[float] = 0.7):
        cls._train_size = train_size
