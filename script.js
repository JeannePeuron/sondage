// Tu reçois des réponses à un sondage sous forme de tableau :

// ["yes", "no", "yes", "maybe", "YES", " no "]
// Écris surveyStats(answers) qui retourne :

// {
//   yes: 2,
//   no: 2,
//   maybe: 1,
//   invalid: 1
// }
// Règles :

// réponses valides : "yes", "no", "maybe"

// ignore la casse + espaces

// tout le reste va dans invalid

// Je dois crée un nouveau tableau donc je l'initialise
// Dans ce tableau j'ai un objet avec 4 clés. Dois-je les initialiser ?
// Parcourir le tableau pour lire les réponses
// Quand je parcoure le tableau avec forEach, quand je croise une valeur qui est ok j'augmente le compteur initialisé

function surveyStats(answers) {
  // Il faut d'abord parcourir le tableau pour enlever les espaces avec trim
  // Dans l'exemple le YES maj n'est pas pris en compte mais je vais quand même faire en sorte
  // qu'il le soit avec to lowercar !

  for (let i = 0; i < answers.length; i++) {
    answers[i] = answers[i].trim().toLowerCase();
  }

  let newObject = {
    yes: 0,
    no: 0,
    maybe: 0,
    invalid: 0,
  };
  answers.forEach((element) => {
    if (element == "yes") {
      newObject.yes += 1;
    } else if (element == "no") {
      newObject.no += 1;
    } else if (element == "maybe") {
      newObject.maybe += 1;
    } else {
      newObject.invalid += 1;
    }
  });
  return newObject;
}

const array = ["yes", "no", "yes", "maybe", "YES", " no ", "yas"];

console.log(surveyStats(array));
