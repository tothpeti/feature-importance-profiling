from profiler.profiler import FeatureImportanceProfiler
import pandas as pd

from sklearn.linear_model import LogisticRegression

if __name__ == '__main__':

    # 'D:/Egyetem/MSc/Master_Thesis/datasets/diabetes.csv'
    # 'D:/Egyetem/MSc/Master_Thesis/datasets/normal.csv'

    # Absolute path to file
    path_to_file = 'D:/Egyetem/MSc/Master_Thesis/datasets/bernoulli/1.csv'

    df = pd.read_csv(path_to_file)
    estimator = LogisticRegression()

    feature_profiler = FeatureImportanceProfiler(dataset=df, estimator=estimator, train_size=0.7)
    feature_profiler.visualize()
