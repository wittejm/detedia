import json


def lambda_handler(event, context):
    puzzle_number = event['queryStringParameters']['puzzle_number']

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',  # Set the allowed origin(s) here
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'  # Add the allowed HTTP methods here
        },
        'body': json.dumps({"puzzleNumber": puzzle_number, "words": ["tears", "petri", "metro"]})
    }
