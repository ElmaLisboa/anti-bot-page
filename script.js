setTimeout(function(){

const botao=document.getElementById("continuar");

botao.innerHTML="Continuar";

botao.disabled=false;

botao.style.opacity="1";

botao.onclick=function(){

window.location.href="https://SEUSITE.COM";

}

},4000);
