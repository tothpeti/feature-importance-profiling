from backend.app import app
from core.src.repository.DataRepository import DataRepository

class FeatureImportanceProfiler:

    def __init__(self, dataset, estimator):
        self.dataset = dataset
        self.estimator = estimator

    def visualize(self):
        DataRepository.set_estimator()
        DataRepository.set_dataset()
        app.run(debug=True)
        pass

    def return_filtered_dataset(self):
        pass