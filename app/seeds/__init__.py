from flask.cli import AppGroup
from .users import seed_users, undo_users
from .profile import seed_profile, undo_profile
from .prof_pic import seed_profpics, undo_profpics
from .games import seed_game, undo_game
from .game_posters import seed_poster, undo_poster

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_game()
    seed_poster()
    seed_profile()
    seed_profpics()
    
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_game()
    undo_poster()
    undo_profile()
    undo_profpics()
    
    # Add other undo functions here
