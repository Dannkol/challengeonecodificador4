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
    for (let i = 0; i < value.length; i++) {
      let rexg = new RegExp(value[i], "gm");
      element = element.replace(rexg, key[value.indexOf(value[i])]);
    }
    return element;
  }

  let datos = textsplit.map((element) => filte(element));
  console.log(datos);
  return datos.map((element) => filte(element)).join(" ");
}
function onclickInputEncript() {
  const datos = document.getElementById("dato").value;
  const view = document.getElementById("result");
  console.log(encriptar(datos));
  view.innerHTML = encriptar(datos);
}

function onclickInputDencript() {
  const datos = document.getElementById("dato").value;
  const view = document.getElementById("result");
  console.log(desencriptar(datos));
  view.innerHTML = desencriptar(datos);
}

function onclickCopy(){
  const copy = document.getElementById('result').innerHTML;
  const alert = document.getElementById('alerta');
  navigator.clipboard.writeText(copy);

  function alertas(texto){
    const funt = "this.parentElement.style.display='none';";
    alert.innerHTML += '  <div class="alert"><span class="closebtn" onclick="'+funt+'">&times;</span> <strong>¡'+texto+'!</strong></div>'
  }  

  return copy=== ''? alertas('Exribe un texto') : alertas('Texto Copiado') ;
}