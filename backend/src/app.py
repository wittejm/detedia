from flask import Flask
from flask_cors import CORS

from puzzle.lambda_function import lambda_handler as puzzleHandler
app = Flask(__name__)
CORS(app)

@app.route('/puzzle')
def puzzle():
    return puzzleHandler({}, {})

if __name__ == '__main__':
    app.run()
