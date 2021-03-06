from flask import Blueprint, jsonify, request
from flask_login import login_required
from sqlalchemy import desc
from app.models import User, Profile, Profpic, db
from app.forms import ProfileForm, ProfPicForm
from app.config import Config
from app.s3_helpers import (upload_file_to_s3, allowed_file, get_unique_filename)
from werkzeug.utils import secure_filename

user_routes = Blueprint('users', __name__)

@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}

@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/profile/<int:user_id>')
@login_required
def user_profile(user_id):
    profile = Profile.query.filter(Profile.user_id==user_id).first()
    if profile:
        return profile.to_dict()
    return {}

@user_routes.route('/profpic/<int:user_id>')
@login_required
def user_profpic(user_id):
    profpic = Profpic.query.filter(Profpic.user_id==user_id).first()
    if profpic:
        return profpic.to_dict()
    return {}

@user_routes.route('/profpic/<int:user_id>', methods=['PUT'])
def profile_pic_submit(user_id):
    form = ProfPicForm()
    file = request.files.get("profile_photo_file")
    print("this is to see what file is", file)
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        file = form.data['profile_photo_file']
        if file:
            file.filename = secure_filename(file.filename)
            s3_pic_url = upload_file_to_s3(file)
        
        profpic = Profpic.query.filter(Profpic.user_id==user_id).first()
        if profpic:
            profpic.pic_url=s3_pic_url['url']
        else:
            profpic = Profpic(
                pic_url=s3_pic_url['url'],
                user_id=user_id
            )
            db.session.add(profpic)
        db.session.commit()
        return profpic.to_dict()
        


@user_routes.route('/profile/<int:user_id>', methods=['PUT'])
def profile_form_submit(user_id):
    form = ProfileForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        profile = Profile.query.filter(Profile.user_id==user_id).first()
        if profile:
            profile.about_me=form.data['about_me']
            profile.location=form.data['location']
            profile.nin_gt=form.data['nin_gt']
            profile.ps_gt=form.data['ps_gt']
            profile.xbox_gt=form.data['xbox_gt']
            profile.steam_gt=form.data['steam_gt']
            profile.discord_gt=form.data['discord_gt']
        else:
            profile = Profile(
                user_id=user_id,
                about_me=form.data['about_me'],
                location=form.data['location'],
                nin_gt=form.data['nin_gt'],
                ps_gt=form.data['ps_gt'],
                xbox_gt=form.data['xbox_gt'],
                steam_gt=form.data['steam_gt'],
                discord_gt=form.data['discord_gt'],
                
            )
        db.session.add(profile)
        db.session.commit()
        return profile.to_dict()
