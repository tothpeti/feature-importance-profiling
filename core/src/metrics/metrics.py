from typing import Any
from sklearn.metrics import confusion_matrix, matthews_corrcoef, accuracy_score, f1_score, precision_score, recall_score


class Metrics:
    @classmethod
    def matthews_corr(cls, y_test: Any, y_pred: Any) -> float:
        return matthews_corrcoef(y_test, y_pred)

    @classmethod
    def accuracy(cls, y_test: Any, y_pred: Any) -> float:
        return accuracy_score(y_test, y_pred)

    @classmethod
    def f1(cls, y_test: Any, y_pred: Any) -> float:
        return f1_score(y_test, y_pred)

    @classmethod
    def precision(cls, y_test: Any, y_pred: Any) -> float:
        return precision_score(y_test, y_pred)

    @classmethod
    def recall(cls, y_test: Any, y_pred: Any) -> float:
        return recall_score(y_test, y_pred)

    @classmethod
    def confusion_matrix(cls, y_pred: Any, y_test: Any) -> Any:
        return confusion_matrix(y_test, y_pred)
