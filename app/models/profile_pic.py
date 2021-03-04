from .db import db

class Profpic(db.Model):
  __tablename__ = 'profile_pics'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
  pic_url = db.Column(db.String(255))

  user = db.relationship("User", back_populates="profile_pics")

  def to_dict(self):
      return {
          "id": self.id,
          "user_id": self.user_id,
          "pic_url": self.pic_url
      }