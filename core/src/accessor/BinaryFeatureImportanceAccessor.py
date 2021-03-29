from typing import Any

from core.src.accessor.BaseFeatureImportanceAccessor import BaseFeatureImportanceAccessor
from core.src.repository.DataRepository import DataRepository
from core.src.ranking.ranking import Ranking


class BinaryFeatureImportanceAccessor(BaseFeatureImportanceAccessor):

    @staticmethod
    def fi_random_forest(features, target, result_dict) -> Any:
        model = DataRepository.get_algorithm_by_name('RandomForestClassifier')
        result_dict = Ranking.get_features_importance_rank_data(
            estimator=model,
            features=features,
            target=target,
            result_dict=result_dict
        )

        return result_dict

    @staticmethod
    def fi_xgboost(features, target, result_dict) -> Any:
        model = DataRepository.get_algorithm_by_name('XGBoostClassifier')
        result_dict = Ranking.get_features_importance_rank_data(
            estimator=model,
            features=features,
            target=target,
            result_dict=result_dict
        )

        return result_dict

    @staticmethod
    def fi_mutual_information(features, target, result_dict) -> Any:
        result_dict = Ranking.get_mutual_info_rank_data(
            features=features,
            target=target,
            result_dict=result_dict
        )
        return result_dict

    @staticmethod
    def fi_linear_svc(features, target, result_dict) -> Any:
        model = DataRepository.get_algorithm_by_name('LinearSVC')
        result_dict = Ranking.get_coef_rank_data(
            estimator=model,
            features=features,
            target=target,
            result_dict=result_dict
        )

        return result_dict

    @staticmethod
    def fi_extra_trees(features, target, result_dict) -> Any:
        model = DataRepository.get_algorithm_by_name('ExtraTreesClassifier')
        result_dict = Ranking.get_features_importance_rank_data(
            estimator=model,
            features=features,
            target=target,
            result_dict=result_dict
        )

        return result_dict

    @staticmethod
    def select_fi_algorithm(features, target, result_dict, model_name: str):
        if model_name == 'LinearSVC':
            return BinaryFeatureImportanceAccessor.fi_linear_svc(
                features=features,
                target=target,
                result_dict=result_dict
            )

        elif model_name == 'RandomForestClassifier':
            return BinaryFeatureImportanceAccessor.fi_random_forest(
                features=features,
                target=target,
                result_dict=result_dict
            )

        elif model_name == 'ExtraTreesClassifier':
            return BinaryFeatureImportanceAccessor.fi_extra_trees(
                features=features,
                target=target,
                result_dict=result_dict
            )

        elif model_name == 'XGBoostClassifier':
            return BinaryFeatureImportanceAccessor.fi_xgboost(
                features=features,
                target=target,
                result_dict=result_dict
            )

        else:
            return BinaryFeatureImportanceAccessor.fi_mutual_information(
                features=features,
                target=target,
                result_dict=result_dict
            )
