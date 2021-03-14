from .db import db

class Walkcomment(db.Model):
    __tablename__ = 'walkcomments'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    comment = db.Column(db.String, nullable=False)
    walkId = db.Column(db.Integer, db.ForeignKey("walkthroughs.id"), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    walk = db.relationship("Walkthrough", back_populates="walkcomment")
    user = db.relationship("User", back_populates="walkcomment")
