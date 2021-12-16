from flask import Flask, make_response, render_template, jsonify, after_this_request, send_from_directory

app = Flask(__name__)


@app.route('/<path:path>')
def send_js(path):
    @after_this_request
    def add_header(response):
        response.headers['Access-Control-Allow-Origin'] = '*'
        return response
    return send_from_directory('data', path)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
