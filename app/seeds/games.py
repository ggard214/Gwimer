from app.models import db, Game

def seed_game():
    game1 = Game(game_name="Destiny 2",
    publisher="Bungie",
    release_year=2017,
    about="Destiny 2 (also known as Destiny 2: New Light) is a free-to-play online-only multiplayer first-person shooter video game developed by Bungie.",
    )
    game2 = Game(game_name="Halo: Combat Evolved",
    publisher="Bungie",
    release_year=2001,
    about="Halo: Combat Evolved, simply known as Halo, is a first-person shooter video game developed by Bungie and published by Microsoft Game Studios.",
    )
    game3 = Game(game_name="Fortnite",
    publisher="Epic Games",
    release_year=2017,
    about="Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine: Fortnite: Save the World, a cooperative hybrid-tower defense-shooter-survival game for up to four players to fight off zombie-like creatures and defend objects with traps and fortifications they can build; Fortnite Battle Royale, a free-to-play battle royale game in which up to 100 players fight to be the last person standing; and Fortnite Creative, in which players are given complete freedom to create worlds and battle arenas.",
    )


    db.session.add(game1)
    db.session.add(game2)
    db.session.add(game3)

def undo_game():
    db.session.execute('TRUNCATE profiles RESTART IDENTITY CASCADE;')
    db.session.commit()