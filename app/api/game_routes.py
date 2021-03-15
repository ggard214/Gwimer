from flask import Blueprint, jsonify, request
from flask_login import login_required
from sqlalchemy import desc
from app.models import User, Profile, Profpic, Game, Gameposter, db
from app.config import Config
from app.s3_helpers import (upload_file_to_s3, allowed_file, get_unique_filename)
from werkzeug.utils import secure_filename

game_routes = Blueprint('games', __name__)

@game_routes.route('/')
def games():
    games = Game.query.all()
    posters = Gameposter.query.all()
    return {"games": [game.to_dict() for game in games],
    "posters": [poster.to_dict() for poster in posters]}