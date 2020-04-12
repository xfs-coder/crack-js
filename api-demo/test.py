import requests
import json


url = 'http://127.0.0.1:9090/md5'

params = {"city": 'Manhattan'}

resp = requests.get(url, params=params)

print(resp.text)

url = 'http://127.0.0.1:9090/encode'

data = {'user': '18011112222' ,'pwd': 'a123456'}

resp = requests.post(url, data)

print(resp.text)

