const botaomodal = document.querySelector("[data-modal-control]")//acionei tudo no meu html que está com o
//data-modal-control

    botaomodal.addEventListener("click",function(){//apos eu clicar no meu botão que tem o data-modal-control
   //vai pegar com getatribute tudo no meu html que tem o id senha e apos eu acessar meu id com getelementby
   //id vou pegar a class show-modal e ativar o css dela com toggle, resumindo apos clicar no botão esqueceu
   //a senha vai mostrar meu modal, vai pegar todo o html e css do meu id senha e com show-modal vai dar um
   //display flex acionando para que mostre na tela o html e css que está com meu id senha, como meu modal 
   //inteiro estava com display none com show-modal vou ativar o display para flez e mostrara o modal
    let valormodal = botaomodal.getAttribute("data-modal-control")
    document.getElementById(valormodal).classList.toggle("show-modal")
    console.log(document.getElementById(valormodal))

    })

const botaoremover = document.querySelector(".modalclose")
botaoremover.addEventListener("click",function(){
    let valorbotao = botaoremover.getAttribute("data-modal-control")
    document.getElementById(valorbotao).classList.toggle("show-modal")
})
//apos eu clicar no meu span que tem a class .modalclose que é um X
// vou pegar com getAtribute o id do data-modal-control que é o todo html que tem id senha, que nesse caso
// a class modalclose tbm tem id senha, vou pegar esse id com getelementbyid e pegar a class show-modal nova
//mente só que dessa vez vai desativar, por que o toggle serve para alternar em ativar e desativar o estilo
// da class pedida, quando clicamos a primeira vez ativa e quando clicamos segunda vez desativa 