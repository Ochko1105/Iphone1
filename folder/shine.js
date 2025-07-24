function numbers2(number) {
  star = "";
  for (i = 0; i < number; i++) {
    for (j = 0; j < number; j++) {
      if (j == i) {
        star += "*";
      } else {
        star += "-";
      }
    }

    star = star + "\n";
  }
  return star;
}
console.log(numbers2(5));

function baraa(shirheg) {
  une = 100;
  baraanishirheg = 20;
  zarahune = 150;
  ashig = shirheg * zarahune;

  sum = une * baraanishirheg - ashig;
  return sum;
}
console.log(baraa(20));
function urjver(too) {
  sum = 0;
  for (x = 1; x <= too; x++) {
    sum = too * x;
    return sum;
  }
}
console.log(urjver(5));
