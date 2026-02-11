📊 Survey Stats

Petit exercice JavaScript qui analyse les réponses d’un sondage.

🎯 Objectif

Créer une fonction :

surveyStats(answers)


Qui reçoit un tableau de réponses comme :

["yes", "no", "yes", "maybe", "YES", " no "]


Et retourne :

{
  yes: 2,
  no: 2,
  maybe: 1,
  invalid: 1
}

✅ Règles

Réponses valides : "yes", "no", "maybe"

Ignorer la casse (YES = yes)

Ignorer les espaces (" no " = "no")

Toute autre valeur → invalid

🛠 Concepts utilisés

Boucles (for ou forEach)

Méthodes de chaînes :

trim()

toLowerCase()

Conditions (if / else)

🚀 Exemple d’utilisation
const answers = ["yes", "no", "yes", "maybe", "YES", " no "];

console.log(surveyStats(answers));
