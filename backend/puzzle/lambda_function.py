import json

def lambda_handler(event, context):
    event.puzzle_number = 1
    return {
        'statusCode': 200,
        'body': json.dumps(f"Puzzle {event.puzzle_number}!'")
    }
