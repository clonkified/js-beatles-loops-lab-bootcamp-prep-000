function theBeatlesPlay(musicians, instruments) {
  var ar = [];
  for(var i = 0; i < musicians.length; i++) {
    ar.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return ar;
}

function johnLennonFacts(facts) {
  var i = 0;
  while(i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var ar = [];
  do {
    ar.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return ar;
}
