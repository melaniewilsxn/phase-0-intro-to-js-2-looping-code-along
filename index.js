const names = [];

function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
    names[i] = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return names;
}

function countDown(a) {
    let i = a;
    while (a >= 0){
        console.log(a);
        a--;
    }
}