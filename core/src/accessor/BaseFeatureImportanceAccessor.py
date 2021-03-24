from abc import ABC, abstractmethod
from typing import Any


class BaseFeatureImportanceAccessor(ABC):

    @staticmethod
    @abstractmethod
    def fi_random_forest(x_train: Any, y_train: Any):
        pass

    @staticmethod
    @abstractmethod
    def fi_xgboost(x_train: Any, y_train: Any):
        pass

    @staticmethod
    @abstractmethod
    def fi_mutual_information(x_train: Any, y_train: Any):
        pass

    @staticmethod
    @abstractmethod
    def fi_linear_svc(x_train: Any, y_train: Any):
        pass

    @staticmethod
    @abstractmethod
    def fi_extra_trees(x_train: Any, y_train: Any):
        pass

