// Description
//   A Hubot script that send ω
//
// Configuration:
//   None
//
// Commands:
//   ふも - ω
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  return robot.hear(/ふも/gi, function(res) {
    var _i, _ref, _results;
    return res.send((function() {
      _results = [];
      for (var _i = 0, _ref = res.match.length; 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
      return _results;
    }).apply(this).reduce((function(s) {
      return s + 'ω';
    }), ''));
  });
};
