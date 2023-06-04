import flask
import requests
import json
import pathlib

app = flask.Flask(__name__)
url = "https://api-bcbe5a.stack.tryrelevance.com/latest/studios/03c4b731-3c31-4e5b-9126-5126e2135364/trigger_limited"

csv_path = pathlib.Path('/home/seedship/LLM/LLM_hackathon/LLM\ Stack\ Hackathon/messages.csv')

@app.route('/')
def main():
    question = flask.request.args.get('question')
    answer = call_relevance(question)
    print(csv_path.is_file())
    return f'<p>{question}</p><br \>\n<p>{answer}</p>'

def call_relevance(question: str) -> str:
    headers = {
        "Content-Type": "application/json"
    }

    # Construct the request body
    payload = {
        "params": {
            "question": question
        },
        "project": "3cb747b44eae-4106-a39c-960abd7fc3e2"
    }

    # Make the API call
    response = requests.post(url, headers=headers, data=json.dumps(payload))
    # Check the response status code
    if response.status_code == 200:
        # API call was successful
        retval = f"{response.json()['output']['answer']}"
    else:
        # API call failed
        retval = f"API call failed with status code: {response.status_code}"
    return retval
