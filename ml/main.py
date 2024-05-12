from typing import Union
from typing import List

from fastapi import FastAPI
from openai import OpenAI
import re

import spacy
import pandas as pd
import ast

import requests


app = FastAPI()


#Dependency Functions
def get_LLM_response(prompt):
  client = OpenAI(
      api_key = 'sk-proj-F2jn5z5HRBNU3GaruHJpT3BlbkFJaYwwpsoF03FyWxJZoaCG',
  )
  prompt = prompt + " list down 5 relevent job keywords , only keywords"
  stream = client.chat.completions.create(
      model="gpt-3.5-turbo-0125",
      messages=[{"role": "user", "content": prompt}],
      stream=True,
  )

  output_string = ""
  for chunk in stream:
      if chunk.choices[0].delta.content is not None:
          output_string += chunk.choices[0].delta.content

  # Define the regex pattern
  pattern = r'\d+\.\s(.*?)\s*(?=\d+\.|\Z)'

  # Use re.findall() to convert the string to a list
  return re.findall(pattern, output_string)



def similarity(phrases, keyword_list):
    # Load the pre-trained word embedding model
    nlp = spacy.load('en_core_web_md')

    # Calculate similarity scores for each phrase and each keyword
    similarity_scores = {}
    for keyword in keyword_list:
        similarity_scores[keyword] = []
        doc2 = nlp(keyword)
        for phrase in phrases:
            doc1 = nlp(phrase)
            similarity_score = doc1.similarity(doc2)
            similarity_scores[keyword].append(similarity_score)

    # Create a DataFrame from the similarity scores
    df = pd.DataFrame(similarity_scores, index=phrases)
    df = df.transpose()
    df['Average'] = df.mean(axis=1)
    df = df.sort_values(by='Average', ascending=False)

    index_list = df.index.tolist()

    return index_list

@app.get("/keywords/{description}")
def get_getKeywords(description: str):
    keywords = get_LLM_response(description)
    return {"keywords": keywords}


@app.get("/priority/{phrases}")
def get_priority(phrases: str):

    skills = ast.literal_eval(phrases)

    response = requests.get('http://3.110.207.10:8000/api/task/listAllTaskKeywords')
    parsed_data = response.json()
    key = parsed_data['data']

    index = similarity(skills, key)
    return {"item_id": index}

