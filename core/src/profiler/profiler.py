from typing import Optional

from backend.app import app
from core.src.repository.DataRepository import DataRepository


class FeatureImportanceProfiler:

    def __init__(self, dataset, estimator, train_size: Optional[float] = 0.6):
        DataRepository.set_estimator(estimator=estimator)
        DataRepository.set_dataset(dataset=dataset)
        DataRepository.set_train_test_split(train_size=train_size)

    def visualize(self):
        app.run(debug=True)

    def return_filtered_dataset(self):
        pass