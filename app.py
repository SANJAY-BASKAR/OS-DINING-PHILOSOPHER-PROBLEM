from flask import Flask, jsonify, render_template
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

# Simulate philosopher states (thinking, hungry, eating)
@app.route('/philosophers', methods=['GET'])
def get_philosopher_states():
    states = [random.choice(["thinking", "hungry", "eating"]) for _ in range(5)]
    return jsonify(states)

if __name__ == '__main__':
    app.run(debug=True)
