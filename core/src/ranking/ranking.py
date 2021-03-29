from collections import Counter
from sklearn.model_selection import cross_validate
from sklearn.feature_selection import mutual_info_classif
import scipy.stats as ss


class Ranking:
    @classmethod
    def frequency_rank(cls, result_dict):
        frequency_list = []

        for key, value in result_dict.items():
            two_most_common = Counter(value).most_common(2)

            if len(two_most_common) >= 2 and two_most_common[0][1] == two_most_common[1][1]:
                mean = (two_most_common[0][0] + two_most_common[1][0]) / 2
                frequency = int(round(mean, 0))
                frequency_list.append(frequency)
            else:
                frequency_list.append(two_most_common[0][0])

    @classmethod
    def avg_rank(cls):
        pass

    @classmethod
    def success_rate_ratio(cls):
        pass

    @classmethod
    def borda_count(cls):
        pass

    @classmethod
    def instant_runoff(cls):
        pass

    @staticmethod
    def _get_estimator_rank_data(feature_importance, result_dict):
        for idx, rank in enumerate(ss.rankdata(feature_importance)):
            col_name = 'x' + str(idx + 1)
            result_dict[col_name].append(abs(int(round(rank, 0))))
        return result_dict

    @staticmethod
    def get_coef_rank_data(estimator, features, target, result_dict, cv=5):
        estimators_cv = cross_validate(estimator, X=features, y=target, cv=cv, return_estimator=True)

        for est in estimators_cv['estimator']:
            result_dict = Ranking._get_estimator_rank_data(
                est.coef_[0], result_dict=result_dict
            )

        return result_dict

    @staticmethod
    def get_features_importance_rank_data(estimator, features, target, result_dict, cv=5):
        estimators_cv = cross_validate(estimator, X=features, y=target, cv=cv, return_estimator=True)

        for est in estimators_cv['estimator']:
            result_dict = Ranking._get_estimator_rank_data(
                est.feature_importances_, result_dict=result_dict
            )

        return result_dict

    @staticmethod
    def get_mutual_info_rank_data(features, target, result_dict):
        list_mutual_info = []

        for column in features.columns:
            list_mutual_info.append(
                mutual_info_classif(features[column].values.reshape(-1, 1), target)
            )

        return Ranking._get_estimator_rank_data(list_mutual_info, result_dict)
