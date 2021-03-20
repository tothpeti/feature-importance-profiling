from flask import Flask, request
from core.src.datastore import DataStore

app = Flask(__name__)


@app.route('/', methods=['POST'])
def hello():
    data = request.get_json()
    DataStore.add_json_data(data)
    return "Hello"


@app.route('/c')
def ho():
    print(DataStore.json_data_list)
    DataStore.process_data()
    return 'Hi'


if __name__ == '__main__' :
    app.run(debug=True)