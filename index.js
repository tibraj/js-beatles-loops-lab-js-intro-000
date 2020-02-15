// add solution here
function theBeatlesPlay(players, instruments) {
  var members = [];
  for (var i = 0; i < players.length; i++) {
    members.push(players[i] + " plays " + instruments[i]);
  }
  return members;
}

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
  var exclaimedFacts = [];
  var i = 0;
  while (i < facts.length) {
    exclaimedFacts.push(facts[i] + "!!!");
  }
  return exclaimedFacts;
}

function iLoveTheBeatles (num) {
  var praise = [];
  do{
    praise.push("I love the Beatles!");
    num++;
  } while(num < 15);
  return praise;
}