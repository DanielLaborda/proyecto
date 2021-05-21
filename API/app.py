from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:Dani060990@127.0.0.1/proyecto'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)

class Racing(db.Model):
    racing_id = db.Column(db.Integer, primary_key=True)
    racing_name = db.Column(db.String(45))
    racing_description = db.Column(db.String(250))
    racing_description2 = db.Column(db.String(250))
    racing_images = db.Column(db.String(250))

    def __init__(self, racing_id, racing_name, racing_description, racing_description2, racing_images):
        self.racing_id = racing_id
        self.racing_name = racing_name
        self.racing_description = racing_description
        self.racing_description2 = racing_description2
        self.racing_images = racing_images

db.create_all()

class RacingSchema(ma.Schema):
    class Meta:
        fields = ('racing_id', 'racing_name', 'racing_description', 'racing_description2', 'racing_images')
racing_schema = RacingSchema()
racings_schema = RacingSchema(many=True)

@app.route('/', methods=['GET'])
def get_racing():
    all_tasks = Racing.query.all()
    result = racings_schema.dump(all_tasks)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
