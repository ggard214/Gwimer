from .db import db

class Gameposter(db.Model):
    __tablename__ = 'gameposters'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    poster_url = db.Column(db.String)
    gameId = db.Column(db.Integer, db.ForeignKey("games.id"), nullable=False)

    game = db.relationship("Game", back_populates="gameposter")

    def to_dict(self):
        return {
            "id": self.id,
            "poster_url": self.poster_url,
            "gameId": self.gameId,
        }