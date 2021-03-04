from app.models import db, Profpic, User

def seed_profpics():
    user = User.query.filter_by(username = "Demo").first()
    pic1 = Profpic(
        user=user,
        pic_url="https://gwimerbucket.s3.amazonaws.com/profilepics/demobutton.jpg",
    )

    db.session.add(pic1)
    db.session.commit()

def undo_profpics():
    db.session.execute('TRUNCATE profiles CASCADE;')
    db.session.commit()