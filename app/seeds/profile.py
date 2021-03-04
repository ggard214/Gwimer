from app.models import db, Profile, User

def seed_profile():
    user = User.query.filter_by(username = "Demo").first()
    demoprof = Profile(
        user=user, 
        about_me="This is a sample profile setup for our Demo user",
        location="Arizona",
        nin_gt="Nintendo1",
        ps_gt="PlaystationRox",
        xbox_gt="xboxRulz",
        steam_gt="PCMasterRace",
        discord_gt="ChatmeUp",
        )
        
    db.session.add(demoprof)
    db.session.commit()


def undo_profile():
    db.session.execute('TRUNCATE profiles CASCADE;')
    db.session.commit()