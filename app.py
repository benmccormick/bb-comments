from flask import Flask, jsonify, render_template, request


app = Flask(__name__)
comments = []
app.config['DEBUG'] = True

@app.route("/")
def page():
    return render_template('index.html')

@app.route("/comments", methods=['GET'])
def get_comments():
    return jsonify({ 'comments': comments});

@app.route("/comments", methods=['POST','OPTIONS'])
def create_comment():
    json = request.get_json()
    comments.append({
        'text': json['text'],
        'name': json['name'],
    })
    return ''

if __name__ == "__main__":
    app.run()
