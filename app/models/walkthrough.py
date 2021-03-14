from .db import db

class Walkthrough(db.Model):
    __tablename__ = 'walkthroughs'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    title = db.Column(db.String, nullable=False)
    walkimage = db.Column(db.String)
    walkbody = db.Column(db.String, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    gameId = db.Column(db.Integer, db.ForeignKey("games.id"), nullable=False)

    user = db.relationship("User", back_populates="walkthrough")
    game = db.relationship("Game", back_populates="walkthrough")
    walkcomment = db.relationship("Walkcomment", back_populates="walkthrough")

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "walkimage": self.walkimage,
            "walkbody": self.walkbody,
            "userId": self.userId,
            "gameId": self.gameId,
        }
