import execjs
import requests

# http://tool.liumingye.cn/music/?page=audioPage&type=migu&name=%E5%91%8A%E7%99%BD%E6%B0%94%E7%90%83

with open('test.js', 'r', encoding='UTF-8') as f:
    ctx = execjs.compile(f.read())
    data = ctx.call('encode', 'text=告白气球&page=1&type=migu')

cookies = {
    'UM_distinctid': '16f1e700acb451-020ff17d0e6e1b-353166-144000-16f1e700acc438',
    'CNZZDATA1277593802': '620896084-1576759316-%7C1576772822',
}

headers = {
    'Pragma': 'no-cache',
    'Origin': 'http://tool.liumingye.cn',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'en,zh;q=0.9,zh-CN;q=0.8',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Accept': '*/*',
    'Cache-Control': 'no-cache',
    'X-Requested-With': 'XMLHttpRequest',
    'Connection': 'keep-alive',
}

data = {
  'data': data
}

response = requests.post('http://tool.liumingye.cn/music/ajax/search', headers=headers, cookies=cookies, data=data)
print(response.json())
