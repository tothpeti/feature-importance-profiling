from typing import Any
from sklearn.ensemble import RandomForestClassifier, ExtraTreesClassifier
from sklearn.svm import LinearSVC
from sklearn.feature_selection import mutual_info_classif

from core.src.accessor import BaseFeatureImportanceAccessor
from core.src.repository.DataRepository import DataRepository
from core.src.ranking.ranking import Ranking


class BinaryFeatureImportanceAccessor(BaseFeatureImportanceAccessor):
    @staticmethod
    def fi_random_forest(result_dict) -> Any:
        model = DataRepository.get_algorithm_by_name('RandomForestClassifier')
        result_dict = Ranking.get_features_importance_rank_data(
            estimator=model
        )

        return result_dict

    @staticmethod
    def fi_xgboost(result_dict) -> Any:
        model = DataRepository.get_algorithm_by_name('XGBoostClassifier')
        result_dict = Ranking.get_features_importance_rank_data(
            estimator=model,
        )

        return result_dict

    @staticmethod
    def fi_mutual_information(result_dict) -> Any:
        result_dict = Ranking.get_mutual_info_rank_data()
        return result_dict

    @staticmethod
    def fi_linear_svc(result_dict) -> Any:
        model = DataRepository.get_algorithm_by_name('LinearSVC')
        result_dict = Ranking.get_coef_rank_data(

        )

        return result_dict

    @staticmethod
    def fi_extra_trees(result_dict) -> Any:
        model = DataRepository.get_algorithm_by_name('ExtraTreesClassifier')
        result_dict = Ranking.get_features_importance_rank_data(

        )

        return result_dict
