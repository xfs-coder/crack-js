# coding='utf-8'

# https://hotel.bestwehotel.com/NewLogin/

import execjs


def main():
	with open('test.js', 'r') as f:
		ctx = execjs.compile(f.read(), cwd=r'E:\nodejs\node_global\node_modules')
		black_box = ctx.call('black_box')
		print(black_box)
		

if __name__ == '__main__':
	main()