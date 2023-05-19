import json


def lambda_handler(event, context):
    puzzle_number = event['queryStringParameters']['puzzle_number']

    return {
        'statusCode': 200,
        'body': json.dumps({"puzzleNumber": puzzle_number, "words": ["tears", "petri", "metro"]})
    }
