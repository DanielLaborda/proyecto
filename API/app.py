from operator import truediv
from os import pipe
import re
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from marshmallow.fields import Email
from sqlalchemy.orm import session

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:Dani060990@127.0.0.1/dlmotor'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

# MODEL userType
class UsersType(db.Model):
    usertype_id = db.Column(db.Integer, primary_key=True)
    usertype_name = db.Column(db.String(45))
    def __init__(self, usertype_name):
        self.usertype_name = usertype_name
        

# MODEL users
class Users(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(50))
    user_password = db.Column(db.String(50))
    user_email = db.Column(db.String(50))
    user_type_id = db.Column(db.Integer, db.ForeignKey('users_type.usertype_id'))

    def __init__(self, user_name, user_password, user_email, user_type_id):
        self.user_name = user_name
        self.user_password = user_password
        self.user_email = user_email
        self.user_type_id = user_type_id
        
db.create_all()


class UserTypesSchema(ma.Schema):
    class Meta:
        fields = ('usertype_id', 'usertype_name')
userType_schema = UserTypesSchema()
userTypes_schema = UserTypesSchema(many=True)

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('user_id', 'user_name', 'user_password', 'user_email', 'user_type_id')
user_schema = UsersSchema()
users_schema = UsersSchema(many=True)


## ROUTES

## Users types
@app.route('/user_types', methods=['POST'])
def create_userTypes():
    usertype_name = request.json['usertype_name']

    new_userType = UsersType( usertype_name )
    db.session.add(new_userType)
    db.session.commit()

    userType = UsersType.query.get(new_userType.usertype_id)
    result = userType_schema.dump(userType)
    return  jsonify(result)

@app.route('/user_types', methods=['GET'])
def get_userTypes():
    all_userTypes = UsersType.query.all()
    result = userTypes_schema.dump(all_userTypes)
    return jsonify(result)

@app.route('/user_types/<_id>', methods=['GET'])
def get_userTypes_id(_id):
    userTypes = UsersType.query.get(_id)
    return userType_schema.jsonify(userTypes)

@app.route('/user_types/<_id>', methods=['PUT'])
def update_userTypes(_id):
    userTypes = UsersType.query.get(_id)
    name = request.json['name']

    userTypes.name = name
    db.session.commit()

    return userType_schema.jsonify(userTypes)

@app.route('/user_types/<_id>', methods=['DELETE'])
def delete_userTypes(_id):
    userTypes = UsersType.query.get(_id)
    
    db.session.delete(userTypes)
    db.session.commit()

    return userType_schema.jsonify(userTypes)


## Users types
@app.route('/users', methods=['GET'])
def get_users():
    all_users = Users.query.all()
    result = users_schema.dump(all_users)
    return jsonify(result)


@app.route('/users/<_id>', methods=['GET'])
def get_users_id(_id):
    user = Users.query.get(_id)
    typeU = UsersType.query.get(user.user_type_id)

    result = {
        "user_id": user.user_id,
        "user_name": user.user_name,
        "user_password": user.user_password,
        "user_email": user.user_email,
        "userType":[
            {
                "usertype_id": typeU.usertype_id, 
                "usertype_name": typeU.usertype_name
            }
        ]
        
    }
    return result

@app.route('/users', methods=['POST'])
def create_user():
    user_name = request.json['user_name']
    user_password = request.json['user_password']
    user_email = request.json['user_email']
    user_type_id = request.json['user_type_id']
    

    new_user = Users( user_name, user_password, user_email, user_type_id )
    db.session.add(new_user)
    db.session.commit()

    user = Users.query.get(new_user.user_id)
    result = user_schema.dump(user)
    return  jsonify(result)

@app.route('/users/<_id>', methods=['PUT'])
def update_user(_id):
    user = Users.query.get(_id)
    user_name = request.json['user_name']
    user_password = request.json['user_password']
    user_email = request.json['user_email']
    user_type_id = request.json['user_type_id']

    user.user_name = user_name
    user.user_password = user_password
    user.user_email = user_email
    user.user_type_id = user_type_id
    db.session.commit()

    return user_schema.jsonify(user)

@app.route('/users/<_id>', methods=['DELETE'])
def delete_user(_id):
    user = Users.query.get(_id)
    
    db.session.delete(user)
    db.session.commit()

    return user_schema.jsonify(user)

# Session
@app.route('/sessions', methods=['GET'])
def session():
    email = request.json['email']
    password = request.json['password']
    user = Users.query.filter_by(user_email = email).first()

    if(user):
        if (user.user_password == password):
            return get_users_id(user.user_id)
        else:
            return "password no correcta"
    else:
        return "no existe"

    
    


if __name__ == '__main__':
    app.run(debug=True)



# from flask import Flask, request, json, jsonify
# from flask_sqlalchemy import SQLAlchemy
# from flask_marshmallow import Marshmallow


# app = Flask(__name__)

# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:Dani060990@127.0.0.1/dlmotor'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy(app)
# ma = Marshmallow(app)

# # MODEL RACING
# class UserType(db.Model):
#     _id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(45))

#     def __init__(self, _id, name):
#         self._id = _id
#         self.name = name
        
# db.create_all()

# class RacingSchema(ma.Schema):
#     class Meta:
#         fields = ('_id', 'name')
# racing_schema = RacingSchema()
# racings_schema = RacingSchema(many=True)

# #routes
# ##racing
# @app.route('/get_racing', methods=['GET'])
# def get_racing():
#     all_tasks = Racing.query.all()
#     result = racings_schema.dump(all_tasks)
#     return jsonify(result)

# @app.route('/post_racing', methods=["POST"])
# def add_racing():
#     name = request.json['name']
#     slogan = request.json['slogan']
#     description = request.json['description']
#     #description2 = request.json(['description2'])
#     new_racing = Racing( name, slogan, description)#,description2)

#     db.session.add(new_racing)
#     db.session.commit()

#     racing = Racing.query.get(new_racing._id)
#     result = racing_schema.dump(racing)
#     return  jsonify(result)

# if __name__ == '__main__':
#     app.run(debug=True)
