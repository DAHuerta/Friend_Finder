var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var info = req.body;
    for (var i = 0; i < info.scores.length; i++) {
      info.scores[i] = parseInt(info.scores[i]);
    }
  });

  var friendIndex = 0;
  var discrepancy = 40;

  for (var i = 0; i < friends.length; i++) {
    var totalDiff = 0;
    for (var f = 0; f < friends[i].scores.length; f++) {
      var difference = Math.abs(info.scores[f] - friends[i].scores[f]);
      totalDiff += difference;
    }

    if (totalDiff < discrepancy) {
      friendIndex = i;
      discrepancy = difference;
    }
  }

  friends.push(info);

  res.json(friends[friendIndex]);
};
