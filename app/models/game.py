from .db import db

class Game(db.Model):
    __tablename__ = 'games'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    game_name = db.Column(db.String(255), nullable=False)
    publisher = db.Column(db.String(255), nullable=False)
    release_year = db.Column(db.Integer, nullable=False)
    about = db.Column(db.String)

    gameposter = db.relationship("Gameposter", back_populates="game")

    def to_dict(self):
        return {
            "id": self.id,
            "game_name": self.game_name,
            "publisher": self.publisher,
            "release_year": self.release_year,
            "about": self.about,
        }