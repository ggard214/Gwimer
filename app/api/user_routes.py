from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Profile, Profpic, db
from app.forms import ProfileForm

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
    profile = Profile.query.filter(Profile.user_id==user_id)
    if profile[0]:
        return profile[0].to_dict()
    return {}

@user_routes.route('/profile/<int:user_id>', methods=['PUT'])
@login_required
def profile_form_submit(user_id):
    form = ProfileForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        profile = Profile.query.filter(Profile.user_id==user_id)
        if profile:
                profile=Profile(
            about_me=form.data['about_me'],
            location=form.data['location'],
            nin_gt=form.data['nin_gt'],
            ps_gt=form.data['ps_gt'],
            xbox_gt=form.data['xbox_gt'],
            steam_gt=form.data['steam_gt'],
            discord_gt=form.data['discord_gt'],)
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
        print("!!!!!!!", profile)
        db.session.add(profile)
        db.session.commit()
        return profile.to_dict()
