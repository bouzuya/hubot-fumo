# Description
#   A Hubot script that send ω
#
# Configuration:
#   None
#
# Commands:
#   ふも - ω
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  robot.hear /ふも/gi, (res) ->
    res.send [0...res.match.length].reduce(((s) -> s + 'ω'), '')
