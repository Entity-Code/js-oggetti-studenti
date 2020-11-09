// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

// oggetto studente
var studente = {
   "nome": 'Mattia',
   "cognome": 'Tummolillo',
   "eta": 19
}
// console.log(studente);

// for in per stampare le proprietà e valori di studente
for (var key in studente) {
   console.log(key + ": " + studente[key]);
}




// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

// array studenti
var studenti =
  [
   {   //studente 1
      "nome" : 'Mattia',
      "cognome" : 'Tummolillo',
      "eta" : 19,
      "sesso" : 'Maschio',
      "classe" : '5H'
   },
   {   //studente 2
      "nome" : 'Alessandro',
      "cognome" : 'Barretta',
      "eta" : 20,
      "sesso" : 'Maschio',
      "classe" : '5F'
   },
   {   //studente 3
      "nome" : 'Mario',
      "cognome" : 'Rossi',
      "eta" : 16,
      "sesso" : 'Maschio',
      "classe" : '3B'
   },
   {   //studente 4
      "nome" : 'Martina',
      "cognome" : 'Russo',
      "eta" : 17,
      "sesso" : 'Femmina',
      "classe" : '4A'
   },
   {   //studente 5
      "nome" : 'Alessia',
      "cognome" : 'Bianchi',
      "eta" : 14,
      "sesso" : 'Femmina',
      "classe" : '1C'
   },
];

// ciclo l'array studenti
for (var i = 0; i < studenti.length; i++) {
   console.log(studenti[i]["nome"] + " " + studenti[i]["cognome"]);
}






// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

setTimeout(function () {
var nome = prompt("Inserisci il tuo nome");
var cognome = prompt("Inserisci il tuo cognome");
var eta = parseInt(prompt("Inserisci la tua età"));

var newUser = {
   "nome": nome,
   "cognome": cognome,
   "eta": eta
}

console.log(newUser);














}, 3000);
