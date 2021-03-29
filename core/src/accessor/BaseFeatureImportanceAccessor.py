from abc import ABC, abstractmethod
from typing import Any


class BaseFeatureImportanceAccessor(ABC):

    @staticmethod
    @abstractmethod
    def fi_random_forest(features, target, result_dict):
        pass

    @staticmethod
    @abstractmethod
    def fi_xgboost(features, target, result_dict):
        pass

    @staticmethod
    @abstractmethod
    def fi_mutual_information(features, target, result_dict):
        pass

    @staticmethod
    @abstractmethod
    def fi_linear_svc(features, target, result_dict):
        pass

    @staticmethod
    @abstractmethod
    def fi_extra_trees(features, target, result_dict):
        pass

