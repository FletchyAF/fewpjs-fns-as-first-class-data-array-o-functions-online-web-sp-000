function wakeDog(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`
}

function leashDog(dogName, dogBreed) {
 console.log(`Leash ${dogName} the ${dogBreed}`);
 return `Leash ${dogName} the ${dogBreed}`
}

function walkToPark(dogName, dogBreed) {
 console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
 return walk
}

function throwFrisbee(dogName, dogBreed) {
 let frisbee = console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
 return frisbee
}

function walkHome(dogName, dogBreed) {
 let home = console.log(`Walk home with ${dogName} the ${dogBreed}`);
 return home
 
}

function unleashDog(dogName, dogBreed) {
 let unleash = console.log(`Unleash ${dogName}n the p${dogBreed}`);
 return unleash
}

var routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
 return routine.map(fn => fn(dogName, dogBreed))
}
