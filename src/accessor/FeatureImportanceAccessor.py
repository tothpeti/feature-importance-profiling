from typing import Any
from sklearn.ensemble import RandomForestClassifier, ExtraTreesClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.feature_selection import mutual_info_classif
from xgboost.sklearn import XGBClassifier


class FeatureImportanceAccessor:
    @classmethod
    def fi_random_forest(cls, x_train: Any, y_train: Any) -> Any:
        model = RandomForestClassifier(n_estimators=100, criterion="gini")
        model.fit(x_train, y_train)
        return model.feature_importances_

    @classmethod
    def fi_xgboost_binary(cls, x_train: Any, y_train: Any) -> Any:
        model = XGBClassifier(objective="binary:logistic")
        model.fit(x_train, y_train)
        return model.feature_importances_

    @classmethod
    def fi_mutual_information(cls, x_train: Any, y_train: Any) -> Any:
        tmp = [mutual_info_classif(x_train[col].values.reshape(-1, 1), y_train) for col in x_train.columns]
        return [value[0] for value in tmp]

    @classmethod
    def fi_logistic_regression(cls, x_train: Any, y_train: Any) -> Any:
        model = LogisticRegression()
        model.fit(x_train, y_train)

    @classmethod
    def fi_extra_trees(cls, x_train: Any, y_train: Any) -> Any:
        pass