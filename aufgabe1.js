function aufgabe1(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log(reversed);
}

// Hier wird "Hallo Welt" rückwärts ausgegeben!
aufgabe1("Hallo Welt");
