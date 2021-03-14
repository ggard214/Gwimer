from flask_wtf import FlaskForm
from wtforms import FileField
from wtforms.validators import DataRequired, ValidationError
from app.models import Profpic

class ProfPicForm(FlaskForm):
    profile_photo_file = FileField('Profile photo', validators=[DataRequired()])