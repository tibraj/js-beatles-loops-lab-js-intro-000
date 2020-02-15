// add solution here
function theBeatlesPlay(players, instruments) {
  var members = [];
  for (var i = 0; i < players.length; i++) {
    members.push(players[i] + " plays " + instruments[i]);
  }
  return members;
}

function johnLennonFacts(facts) {
  var exclaimedFacts = [];
  var i = 0;
  while (i < facts.length) {
    exclaimedFacts.push(facts[i] + "!!!");
    i++;
  }
  return exclaimedFacts;
}

function iLoveTheBeatles (num) {
  var praise = [];
  do{
    praise.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return praise;
}
