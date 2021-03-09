from .db import db

class Profile(db.Model):
  __tablename__ = 'profiles'

  id = db.Column(db.Integer, primary_key=True, nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
  about_me = db.Column(db.String(255))
  location = db.Column(db.String(50))
  nin_gt = db.Column(db.String(50))
  ps_gt = db.Column(db.String(50))
  xbox_gt = db.Column(db.String(50))
  steam_gt = db.Column(db.String(50))
  discord_gt = db.Column(db.String(50))

  user = db.relationship("User", back_populates="profile")

  def to_dict(self):
      return {
          "id": self.id,
          "user_id": self.user_id,
          "about_me": self.about_me,
          "location": self.location,
          "nin_gt": self.nin_gt,
          "ps_gt": self.ps_gt,
          "xbox_gt": self.xbox_gt,
          "steam_gt": self.steam_gt,
          "discord_gt": self.discord_gt
      }