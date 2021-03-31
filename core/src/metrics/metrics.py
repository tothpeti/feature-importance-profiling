from typing import Any
from sklearn.metrics import confusion_matrix, \
    matthews_corrcoef, accuracy_score, f1_score, \
    precision_score, recall_score, make_scorer, roc_auc_score


class Metrics:
    @staticmethod
    def matthews_corr(y_test: Any, y_pred: Any) -> float:
        return matthews_corrcoef(y_test, y_pred)

    @staticmethod
    def accuracy(y_test: Any, y_pred: Any) -> float:
        return accuracy_score(y_test, y_pred)

    @staticmethod
    def f1(y_test: Any, y_pred: Any) -> float:
        return f1_score(y_test, y_pred)

    @staticmethod
    def precision(y_test: Any, y_pred: Any) -> float:
        return precision_score(y_test, y_pred)

    @staticmethod
    def recall(y_test: Any, y_pred: Any) -> float:
        return recall_score(y_test, y_pred)

    @staticmethod
    def confusion_matrix(y_pred: Any, y_test: Any) -> Any:
        return confusion_matrix(y_test, y_pred)

    @staticmethod
    def roc_auc_scorer():
        return make_scorer(roc_auc_score)
