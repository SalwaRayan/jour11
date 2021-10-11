var prompt = require('prompt')
var randomWordFR = require('random-word-fr');


// Vous connaissez le jeu du **Pendu** ? 
// Aujourd'hui on va le coder en utilisant le module npm prompt ! 
// Petit rappel des règles :

// - Un mot mystère est proposé, chaque lettre est indiquée par un tiret bas `_`
// - Le joueur a dix tentatives pour deviner le mot mystère, et pour chaque tentative il propose une lettre :
//   - Si la lettre est dans le mot mystère, chaque lettre correspondante est affichée
//   - Si la lettre n'est pas dans le mot, le message suivant s'affiche : "oups... plus que x chances !" 
//    (x sera remplacé par le nombre de tentatives restantes)

// ⇒ Afficher un message en cas de victoire ou défaite

var mysteryWord = randomWordFR()
var attempts = 10

prompt.start()

function play() {
  prompt.get({name: 'input', description: 'Trouver le mot mystère'}, function(err, result){
  if (attempts === 0) {
    console.log("Tu n'as pas trouvé le bon mot")
  }

  if (result.input === mysteryWord){
    console.log("Bravo!")
  }

  mysteryWord.forEach(function(letters) {
    var letterInput = result.input
    
    if(letters === letterInput) {
      letters
    }
  })

}


// {
//   description: 'Enter your password',     // Prompt displayed to the user. If not supplied name will be used.
//   type: 'string',                 // Specify the type of input to expect.
//   pattern: /^\w+$/,                  // Regular expression that input must be valid against.
//   message: 'Password must be letters', // Warning message to display if validation fails.
//   hidden: true,                        // If true, characters entered will either not be output to console or will be outputed using the `replace` string.
//   replace: '*',                        // If `hidden` is set it will replace each hidden character with the specified string.
//   default: 'lamepassword',             // Default value to use if no value is entered.
//   required: true                        // If true, value entered must be non-empty.
//   before: function(value) { return 'v' + value; } // Runs before node-prompt callbacks. It modifies user's input
// }