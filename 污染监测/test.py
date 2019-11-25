from Crypto.Cipher import AES
import base64
import execjs

# aHR0cDovLzU4LjU2Ljk4Ljc4Ojg4MDEvd3J5ZmIvTWFwTWFpblQuaHRtbA==

def js_decrypt(text):
	with open('test.js', 'r') as f:
		ctx = execjs.compile(f.read())
		result = ctx.call('decrypt', text)
		return base64.b64decode(result).decode('utf-8')

def py_decrypt(text):
	key = '9E@@34B19E@@34B1'.encode('utf-8')
	iv = '9E@@34B19E@@34B1'.encode('utf-8')
	cipher = AES.new(key, AES.MODE_CBC, iv)
	return cipher.decrypt(base64.b64decode(text)).decode('utf-8').strip('\0')


if __name__ == '__main__':
	text = "BTiXdgrm2F1i6Lv7uq6WehCcdMeo6sPY/1foLD8oh2oJtGAYoKkJ7Tp3Ux+whswWbCTmY2h9SEzy3CTcf1A6eeYyapDmmn34t5QcPM8p/34QUOrZasgWzLVnRHkGDYZ7w9dhFmhehZ7a5nhrGfHtuMbmMJyrdALGPP4Nx9CX3UDkN6b3/XcbZA5mvYpYKDdkiq8Py2+4HUmpn4HUk14qc6nRXCGgWG0S6UWYKdkkZn2qHoxfgPHqraXt5m2kfQMaI51Gb0Ib+cGQYEj8ghlkIQPevQSPSMKtCKFxOUD1dxYjp6rUesph8yywgHza5626mNw4Sv6wcIWOR7SyrzaSfqeiI7Z205ljnThQ71Mk4VOdhBiWMiJyicB69q5hlKGdJqtqoZWqBF1aX6tJ0Qs3VMae+wPxGq1xGEfwmB1R9oRKKyjXp34gYP6n5wp18oZAEwfmGEeRJbck+GjpGQ0JnxZ1SJe5Mg3MhmihWNUvG58/q/DOEMM8BrX0QPBO8B0l5PDwmVWHeUHMmu1x5C31WR4RWiAI2sdVkM4xdik5w8g6Pb3YxLONAC2B8k26Tj/ZXiVRlZvt9Zt82uvzCMvWlm+dhrjFNsM1MVD10FeFm0mlaGAyL7/HVNRxWKtCavfuuaTqTQoPPJ+65G6NtU8ySaM8rupYVtc6AjllB48bWpBfU+9Lqd4kB5u1fg511AgBYinTZ1Tjiy86POnEZdHsS/yiaupBsAVvWc/gojR3y1IUxX4X5O3wAyzpbJA/2CRr7Ooz58Pz9XOodyUUjwO2xuYt+LLz+O7bu0IMh1OY/QtcBtlijubbDc084l6aTI/4"
	print(py_decrypt(text))
	print('*'*50)
	print(js_decrypt(text))
