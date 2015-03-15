from flask import Flask, jsonify, render_template, request


app = Flask(__name__)
comments = []
app.config['DEBUG'] = True

@app.route("/")
def page():
    return render_template('index.html')

if __name__ == "__main__":
    app.run()
