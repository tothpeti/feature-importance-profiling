from flask import Flask, request
from flask_cors import CORS, cross_origin

from core.src.service.DataService import DataService

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/', methods=['POST'])
@cross_origin()
def hello():
    data = request.get_json()
    print(data)
    DataService.set_json_data(data)
    DataService.process_data()
    DataService.run_importance_extraction()

    return "Hello there!"


if __name__ == '__main__':
    app.run(debug=True)
