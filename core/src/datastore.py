
class DataStore:
    json_data_list = []

    @classmethod
    def add_json_data(cls, data):
        cls.json_data_list = data
    
    @classmethod
    def process_data(cls):
        """
        Process incoming json data to use for initializing
        machine learning algortihms
        :return:
        """

        for item in cls.json_data_list:
            print(item)
