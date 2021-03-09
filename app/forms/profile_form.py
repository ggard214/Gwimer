from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField

class ProfileForm(FlaskForm):
    about_me = StringField('About Me')
    location = StringField('Location')
    nin_gt = StringField('Nintendo Gamer Tag')
    ps_gt = StringField('Playstation Gamer Tag')
    xbox_gt = StringField('Xbox Gamer Tag')
    steam_gt = StringField('Steam Gamer Tag')
    discord_gt = StringField('Discord Gamer Tag')
    submit = SubmitField('Submit')