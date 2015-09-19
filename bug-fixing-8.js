'use strict'

// Reducing Problems - bug fixing #8
function calculateTotal(team1, team2) {
  var t1s = (!team[0]) ? 0 : team1.reduce((t,c) => t + c);
  var t2s = (!team[0]) ? 0 : team2.reduce((t,c) => t + c);
  console.log(t1s);
  console.log(t2s);
  return t1s > t2s;
}

var team1 = [1,2,2];
var team2 = [1,0,0];

console.log(calculateTotal(team1, team2));
