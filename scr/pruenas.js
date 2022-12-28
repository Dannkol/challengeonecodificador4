const dict = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

function encriptar(text) {
  return text
    .toLowerCase()
    .split("")
    .map((data) => (dict[data] == undefined ? data : dict[data]))
    .join("");
}

function desencriptar(text) {
  let textsplit = text.toLowerCase().split(" ");
  const key = Object.keys(dict);
  const value = Object.values(dict);

  function filte(element) {
    for(let i =0; i < value.length ; i++){
        let rexg = new RegExp(value[i], 'gm')
        element = element.replace(rexg, key[value.indexOf(value[i])])
      }
    return element;
  }
  
  let datos = textsplit.map((element) => filte(element));
  console.log(datos);
  return datos.map((element) => filte(element)).join(" ");
}

console.log(desencriptar("¡pufatenterdenter!"));
