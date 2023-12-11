
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS from flask_cors
from openai import OpenAI
from config import key

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


@app.route('/generate-image', methods=['POST'])
def generate_image():
    try:
        client = OpenAI(api_key=key)
        response = client.images.generate(model="dall-e-3",
                                          prompt=request.json.get(
                                              'prompt', ''),
                                          n=1,
                                          size="1024x1024")
        image_url = response.data[0].url
        return jsonify({'image_url': image_url})
    except Exception as e:
        return jsonify({'error': str(e)})

app.run(port=5000)
