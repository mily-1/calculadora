const button=document.querySelector(".buttonabrir")
const popup = document.querySelector(".popup-wrapper")
const closeButton = document.querySelector(".popup-close")
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const valor3 = document.getElementById("valor3");
const igual = document.getElementById("igual");
const resultado = document.getElementById("resultado");
const iso = document.querySelector(".div_1");
const esc = document.querySelector(".div_2");
const equ = document.querySelector(".div_3");
const acu = document.querySelector(".div_4");
const biso= document.querySelector(".bisob");
const besc= document.querySelector(".bescb");
const bequ= document.querySelector(".bequb");
const bacu= document.querySelector(".bacub");
const bisoe= document.querySelector(".bisoe");
const besce= document.querySelector(".besce");
const beque= document.querySelector(".beque");
const bacue= document.querySelector(".bacue");

button.addEventListener("click", () => {
    popup.style.display = "block";
})
biso.addEventListener("click", () => {
    iso.style.display = "block";
})
besc.addEventListener("click", () => {
    esc.style.display = "block";
})
bequ.addEventListener("click", () => {
    equ.style.display = "block";
})
bacu.addEventListener("click", () => {
    acu.style.display = "block";
})

closeButton.addEventListener("click", () =>{
    popup.style.display="none";
    document.getElementById("valor1").value = "";
    document.getElementById("valor2").value = "";
    document.getElementById("valor3").value = "";
    document.getElementById("resultado").innerHTML = "";
})

bisoe.addEventListener("click", () =>{
  iso.style.display="none";
})
besce.addEventListener("click", () =>{
  esc.style.display="none";
})
beque.addEventListener("click", () =>{
  equ.style.display="none";
})
bacue.addEventListener("click", () =>{
  acu.style.display="none";
})

igual.addEventListener("click", function() {
  var pri = parseFloat(valor1.value);
  var seg = parseFloat(valor2.value);
  var ter = parseFloat(valor2.value);
  var res;
  if (pri==seg || seg==ter || ter==pri) {
    res="Triângulo isósceles"
  }
  if (pri!=seg || seg!=ter || ter!=pri) {
    res="Triângulo escaleno"
  }
  if (pri==seg && seg==ter) {
    res="Triângulo equilátero"
  }
  if (pri<90 && seg<90 && ter<90) {
    res="Triângulo acutângulo"
    if (pri==seg && seg==ter) {
      res="Triângulo equilátero e acutângulo"
    }
  }
  resultado.textContent = res;
});
