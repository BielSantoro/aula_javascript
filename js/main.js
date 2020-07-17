function botao(){
    document.getElementById("agradecimento").innerHTML ="<b>Obrigado</b>";
    // console.log(document.getElementById("agradecimento"))
    // alert("Fui pressionado!!")
}

function redirecionar(){
    // window.open("https://www.google.com/");
    // window.location.href = "https://www.google.com/"
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Magia!";
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Se gostou da magia, passe novamente!";
}

function load(){
    console.log("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
// function soma(n1,n2){
//     return n1 + n2;
// }

// function setReplace(frase,nome,novo_nome){
//     return frase.replace(nome,novo_nome)
// }

// function validaIdade(idade){
//     if (idade >= 18){
//         var validar = true;
//     }else{
//         validar = false;
//     }
//     return validar;
// }

// var idade = prompt("Qual sua idade?")
// console.log(validaIdade(idade))

// console.log(soma(5,10));
// console.log(setReplace("Vai Japão", "Japão", "Brasil"));


// var idade = prompt("Digite sua idade");
// if (idade >= 18){
//     alert("Maior de idade");
// } else{
//     alert("Menor de idade");
// }

// var lista = ["maça", "pera", "laranja"];
// console.log(lista[1]);
// lista.push("uva");
// console.log(lista);
// lista.pop();
// console.log(lista);
// console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista.join(" "));

// var fruta = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
// console.log(fruta[1].nome);