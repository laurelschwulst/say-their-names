var names = [
  "GEORGE FLOYD",
  "BREONNA TAYLOR",
  "AHMAUD ARBERY",
  "SANDRA BLAND",
  "MICHAEL BROWN",
  "PHILANDO CASTILE",
  "TAMIR RICE",
  "ERIC GARNER",
  "FREDDIE GRAY",
  "TRAYVON MARTIN"
];

var counter = 0;

function change() {
  if (counter == names.length) { counter = 0; }
  var currentName = names[counter];
  var textElement = document.querySelector("p");
  var pageTitle = document.querySelector("title");
  textElement.innerHTML = currentName;
  pageTitle.innerHTML = currentName;
  setTimeout(change, 3000);
  counter++;
}

change();