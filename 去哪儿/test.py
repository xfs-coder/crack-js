import execjs 

# 暂未测试是否有效

def get_sensor_data():
    with open('sensor_data.js', 'r') as f:
        ctx = execjs.compile(f.read())
        sensor_data = ctx.call('get_sensor_data')
        return sensor_data
        
def get_es():
    with open('es.js', 'r') as f:
        ctx = execjs.compile(f.read())
        es = ctx.call('get_es')
        return es


if __name__ == '__main__':
    print(get_sensor_data())
    print('*'*50)
    print(get_es())