
class DataRepository:
    _json_data_list = []
    _algorithms_list = []
    _ranking_methods_list = []

    @classmethod
    def get_json_data_list(cls):
        return cls._json_data_list

    @classmethod
    def get_algorithms_list(cls):
        return cls._algorithms_list

    @classmethod
    def get_ranking_methods_list(cls):
        return cls._ranking_methods_list

    @classmethod
    def set_json_data_list(cls, data):
        cls._json_data_list = data

    @classmethod
    def set_algorithms_list(cls, algorithms):
        cls._algorithms_list = algorithms

    @classmethod
    def set_ranking_methods_list(cls, methods):
        cls._ranking_methods_list = methods
