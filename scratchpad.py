import openai
import os
from typing import List

# Set up your OpenAI API credentials
key = os.getenv("OPENAI_API_KEY")
openai.api_key = key

def call_openai_api(prompt):
    # Define the parameters for the completion
    params = {
        'model': 'text-davinci-003',  # The model you want to use
        'prompt': prompt,
        'max_tokens': 3000  # The maximum number of tokens to generate
    }

    # Call the OpenAI API
    response = openai.Completion.create(**params)

    # Retrieve the generated text from the API response
    generated_text = response.choices[0].text.strip()

    return generated_text

def execute_python_code(code):
    try:
        exec(code)
        return "Execution successful"
    except Exception as e:
        return f"Execution failed: {str(e)}"


def read_csv_first_n_lines(file_path: str, n: int) -> List[str]:
    lines: List[str] = []
    with open(file_path, 'r') as csv_file:
        for line in range(n):
            lines.append(csv_file.readline())
    return lines

# Example usage
csv_path = 'data/chats.csv'
n_lines = 10
raw = read_csv_first_n_lines(csv_path, n_lines)

question = "Who are the most active users"

prompt = """
My data looks like this:
START_DATA
{raw}
END_DATA

The data is stored in {csv_path}

You are an expert data scientist. 
Write some python code with pandas to transform the data such that it answers the following question:
{question}
After the transformation of the data is done, the code should create the most relelvant matplotlib plot and save it to a file in output/imgs/
The code should create an output csv file if the file does not exist.
Make it always runnable python code.
The code should create the file in the './output/' folder.
""".format(raw='\n'.join(raw), csv_path=csv_path, question=question)

print(prompt)
openai_response = call_openai_api(prompt)
print(openai_response)

# Example usage
execution_result = execute_python_code(openai_response)
print(execution_result)