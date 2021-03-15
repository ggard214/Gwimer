from app.models import db, Gameposter

def seed_poster():
    poster1 = Gameposter(poster_url="https://gwimerbucket.s3.amazonaws.com/gameposters/destiny2.jpeg",
    gameId=1)
    poster2 = Gameposter(poster_url="https://gwimerbucket.s3.amazonaws.com/gameposters/halo.jpeg",
    gameId=2)
    poster3 = Gameposter(poster_url="https://gwimerbucket.s3.amazonaws.com/gameposters/fortnite.jpeg",
    gameId=3)

    db.session.add(poster1)
    db.session.add(poster2)
    db.session.add(poster3)

def undo_poster():
    db.session.execute('TRUNCATE profiles RESTART IDENTITY CASCADE;')
    db.session.commit()