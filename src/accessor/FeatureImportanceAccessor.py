from typing import Any
from sklearn.ensemble import RandomForestClassifier, ExtraTreesClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.feature_selection import mutual_info_classif
from xgboost.sklearn import XGBClassifier

from accessor import BaseFeatureImportanceAccessor


class BinaryFeatureImportanceAccessor(BaseFeatureImportanceAccessor):
    @staticmethod
    def fi_random_forest(x_train: Any, y_train: Any) -> Any:
        model = RandomForestClassifier(n_estimators=100, criterion="gini")
        model.fit(x_train, y_train)
        return model.feature_importances_

    @staticmethod
    def fi_xgboost(x_train: Any, y_train: Any) -> Any:
        model = XGBClassifier(objective="binary:logistic")
        model.fit(x_train, y_train)
        return model.feature_importances_

    @staticmethod
    def fi_mutual_information(x_train: Any, y_train: Any) -> Any:
        tmp = [mutual_info_classif(x_train[col].values.reshape(-1, 1), y_train) for col in x_train.columns]
        return [value[0] for value in tmp]

    @staticmethod
    def fi_logistic_regression(x_train: Any, y_train: Any) -> Any:
        model = LogisticRegression()
        model.fit(x_train, y_train)
        return model.coef_[0]

    @staticmethod
    def fi_extra_trees(x_train: Any, y_train: Any) -> Any:
        model = ExtraTreesClassifier()
        model.fit(x_train, y_train)
        return model.feature_importances_
