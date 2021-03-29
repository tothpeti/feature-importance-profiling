from typing import Optional

from backend.app import app
from core.src.repository.DataRepository import DataRepository


class FeatureImportanceProfiler:

    def __init__(self, dataset, estimator, train_size: Optional[int] = 0.6):
        # self.dataset = dataset
        # self.estimator = estimator

        DataRepository.set_estimator(estimator=estimator)
        DataRepository.set_dataset(dataset=dataset)
        DataRepository.set_train_test_split(train_size=train_size)

    def visualize(self):
        app.run(debug=True)
        pass

    def return_filtered_dataset(self):
        pass