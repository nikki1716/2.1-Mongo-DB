The Player with the most touchdown passes:
db.players.find({"touchdown_passes": {"$max": 1}}).limit(1);

The Player with the most rushing yards:
db.players.find({"rushing_yards": {"$max": 1}}).limit(1);

The Player with the least rushing yards:
db.players.find({"rushing_yards": {"$min": 1}}).limit(1);

A list of players sorted from most to fewest field goals made:
db.players.find().sort({"made_field_goals": -1});

The Player with the most number of sacks:
db.players.find({"sacks": {"$max": 1}}).limit(1);
