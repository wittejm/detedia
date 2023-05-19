from flask import Flask, request
from flask_cors import CORS

from puzzle.lambda_function import lambda_handler as puzzleHandler
app = Flask(__name__)
CORS(app)

@app.route('/puzzle', methods=['GET'])
def puzzle():
    args = request.args
    return puzzleHandler({"queryStringParameters":{"puzzle_number":args.get("puzzle_number", default=0, type=int)}}, {})

if __name__ == '__main__':
    app.run()
