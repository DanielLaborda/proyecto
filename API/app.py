from flask import Flask, request, json, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:Dani060990@127.0.0.1/dlmotor'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

# MODEL RACING
class Racing(db.Model):
    _id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(45))
    slogan = db.Column(db.String(50))
    description = db.Column(db.String(250))
    # description2 = db.Column(db.String(250))

    def __init__(self, _id, name, slogan, description):#, description2):
        self._id = _id
        self.name = name
        self.slogan = slogan
        self.description = description
        # self.description2 = description2

db.create_all()

class RacingSchema(ma.Schema):
    class Meta:
        fields = ('_id', 'name', 'slogan', 'description')#,'description2')
racing_schema = RacingSchema()
racings_schema = RacingSchema(many=True)

#routes
##racing
@app.route('/get_racing', methods=['GET'])
def get_racing():
    all_tasks = Racing.query.all()
    result = racings_schema.dump(all_tasks)
    return jsonify(result)

@app.route('/post_racing', methods=["POST"])
def add_racing():
    name = request.json['name']
    slogan = request.json['slogan']
    description = request.json['description']
    #description2 = request.json(['description2'])
    new_racing = Racing( name, slogan, description)#,description2)

    db.session.add(new_racing)
    db.session.commit()

    racing = Racing.query.get(new_racing._id)
    result = racing_schema.dump(racing)
    return  jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
