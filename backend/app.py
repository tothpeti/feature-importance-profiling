from flask import Flask, request
from flask_cors import CORS, cross_origin

from core.src.repository.DataRepository import DataStore

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/', methods=['POST'])
@cross_origin()
def hello():
    data = request.get_json()
    print(data)
    DataStore.add_json_data(data)
    return "Hello"


@app.route('/c')
def ho():
    print(DataStore.json_data_list)
    DataStore.process_data()
    return 'Hi'


if __name__ == '__main__' :
    app.run(debug=True)