from flask import Flask , jsonify , request
from keras.models import load_model
import base64
app = Flask(__name__)
import cv2
import numpy as np
from werkzeug.utils import secure_filename
import os
from PIL import Image
import io
from numpy import asarray
import tensorflow as tf
import urllib.request

from PIL import Image

IMAGES_UPLOAD_DIRECTORY = r"./static/uploads"
app.config['UPLOAD_FOLDER']=IMAGES_UPLOAD_DIRECTORY
ALLOWED_FILE_TYPE = set(['jpg','jpeg','png'])

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.',1)[1].lower() in ALLOWED_FILE_TYPE

def getModel():
    global model
    model = load_model('plant_disease_ditection_model_v2.h5')
    print("*! Models are loaded")

print("========================== Loading custom model ===============================")
getModel()


@app.route('/',methods=['GET'])
def index():
    return jsonify({"API":"This is the python API for getting the predictions from the models"})


@app.route('/predictDisease',methods=['POST'])
def getMoodPrediction():
    data = request.get_json(force=True)
    encoded = data['image']

    imageURL = "http://192.168.1.8:3003/uploads/"+encoded
    url = imageURL.replace(" ", "%20")
    print(url)
    urllib.request.urlretrieve(url,"uploadedImage.jpeg")
    image = Image.open("uploadedImage.jpeg")
    response = {
        'prediction': encoded
    }
    if allowed_file(image.filename):
        data = asarray(image)
        resized_image = cv2.resize(np.array(data), (224, 224))
        newArray = []
        newArray.append(resized_image)
        newArray = np.array(newArray)
        pred = np.argmax(model.predict(newArray))
        classes = [
            "Tomato___Bacterial_spot",
            "Tomato___Early_blight",
            "Tomato___healthy",
            "Tomato___Late_blight",
            "Tomato___Leaf_Mold",
            "Tomato___Septoria_leaf_spot",
            "Tomato___Spider_mites Two-spotted_spider_mite",
            "Tomato___Target_Spot",
            "Tomato___Tomato_mosaic_virus",
            "Tomato___Tomato_Yellow_Leaf_Curl_Virus"
        ]
        predictedDisease = classes[pred]
        print(predictedDisease)
        return jsonify({"PredictedDisease": predictedDisease}), 201

    return jsonify({"ERROR":"AN ERROR HAPPENED"}), 201

if __name__ == "__main__":
    app.run(debug=True,port=5000)

