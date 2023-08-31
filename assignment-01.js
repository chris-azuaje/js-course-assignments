const country = 'USA';
const continent = 'North America';
let population = 331000000;

const isIsland = false;
const language = 'english';

let finlandPopulation = 6000000;
let avgPopulation = 33000000;

let description = `${country} is in ${continent}, and its ${population} people speak ${language}`;

// Visible through Quokka extension
console.log(country);
console.log(continent);
console.log(population);

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log(population / 2);
population++;
console.log(population);
console.log(finlandPopulation > population);
console.log(avgPopulation > population);

console.log(description);

if (population > avgPopulation) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${avgPopulation - population} below average`
  );
}

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// --------------------------------------------------------------

/*
let numNeighbours = prompt(
  'How many neighbour countries does your country have?'
);
if (numNeighbours == 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border!');
} else {
  console.log('No borders!');
}
*/

if (language === 'english' && population < 50000 && isIsland === false) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}

switch (language) {
  case 'chinese':
    console.log('MOST number of native speakers');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
}

console.log(
  `USA's population is ${
    population > avgPopulation ? 'above' : 'below'
  } average`
);
