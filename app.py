
from flask import Flask, render_template, request

#import model
import json
import base64
from urllib.parse import unquote

import os
port = int(os.environ.get("PORT", 5000))	
PORT_NUMBER = port

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
@app.route("/")
def root():
	return render_template("index.html")

@app.route("/index")
def index():
	return render_template("index.html")


@app.route("/buscar")
def buscar():
	return render_template("buscar.html")


if __name__ == "__main__":
	app.run(host='0.0.0.0',port=PORT_NUMBER,debug = True)
1
