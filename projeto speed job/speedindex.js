for (let i = 0; i < frontEndJobs.length; i++) {//fiz um for que vai percorrer todo meu objeto

    let ulfrontend = document.querySelector(".cardsfrontend");//criei minha ul que vai minha li com itens dentro
    let lifrontend = document.createElement("li");//criei minha li que vai os itens dentro
    lifrontend.classList.add("lifrontend");
    let divpai = document.createElement("div");//criei uma div pai que vai letra G do meu site e o titulo
    // dentro, assim consigo colocar display flex na div e deixar meu G e meu titulo um do lado do outro
    divpai.className = "divpai";
  
    let spang = document.createElement("span");//criei meu span que vai a letra G
    spang.innerHTML = "G";
    spang.classList.add("spang");
  
    let titulofront = document.createElement("h3");//criei meu titulo do meu card
    titulofront.innerHTML = frontEndJobs[i].title;
    titulofront.classList.add("titulofront");
  
    divpai.append(spang, titulofront);//coloquei que minha div pai vai dentro minha letra G e meu titulo
  
    let descricaofront = document.createElement("p");
    descricaofront.innerHTML = frontEndJobs[i].descrription;//criei meu paragrafo que vai ser a descrição
    //do meu objeto percorrendo todo objeto e pegando todas descrição do meu objeto
  
    let divpaimodality = document.createElement("div");//criei uma div pai que vai dentro as 2 modalidades
    //do meu objeto, criei a div pra dar um display flex nela e colocar minhas 2 modalidades uma do lado
    //da outra
    divpaimodality.classList.add("divpaimodality");
  
    let modalityfront0 = document.createElement("span");
    modalityfront0.classList.add("modalidade0");
    modalityfront0.innerHTML = frontEndJobs[i].modality[0];//criei minha modalidade numero 1 que é meu objeto
    //perocorrendo ele todo e pegando todas modalidade na posição 0 que é a minha primeira modalidade do meu
    //array de modalidades
  
    let modalityfront1 = document.createElement("span");
    modalityfront1.classList.add("modalidade1");
    modalityfront1.innerHTML = frontEndJobs[i].modality[1];//criei minha modalidade numero 2 que é meu objeto
    //perocorrendo ele todo e pegando todas modalidade na posição 1 que é a minha segunda modalidade do meu
    //array de modalidades
  
    divpaimodality.append(modalityfront0, modalityfront1);//coloquei que minha div pai vai dentro as 2 modalidade
  
    lifrontend.append(divpai, descricaofront, divpaimodality);//coloquei que minha li vai dentro a divpai com
    //titulo do card e letra G dentro, depois coloquei minha descrição do meu card dentro, e a div com 
    //as duas modalidades dentro tbm, lembrando que a ordem é muito importante para modificar no css

    ulfrontend.append(lifrontend);//minha ul vai dentro minha li com os itens dentro
    let secaofront = document.querySelector(".secaofront");
    secaofront.append(ulfrontend);//selecionei minha seção que vai dentro toda minha minha li e meu titulo
    // criado no html tbm vai dentro da seção para quando diminuir e aumentar minha pagina meu titulo fique
    // dentro da minha seção e não pule fora caso tenha que aumentar e diminuir a pagina
  }

  //a mesma coisa que fiz para o frontend tbm fiz para o backend que é outro objeto e tem tudo igual
  for (let j = 0; j < backEndJobs.length; j++) {
    let ulbackend = document.querySelector(".cardsbackend");
    let libackend = document.createElement("li");
    libackend.classList.add("libackend");
  
    let divpaiback = document.createElement("div");
    divpaiback.classList.add("divpaiback");
  
    let spang2 = document.createElement("span");
    spang2.innerHTML = "G";
    spang2.classList.add("spang");
  
    let tituloback = document.createElement("h3");
    tituloback.innerHTML = backEndJobs[j].title;
    tituloback.classList.add("titulofront");
  
    divpaiback.append(spang2, tituloback);
  
    let descricaoback = document.createElement("p");
    descricaoback.innerHTML = backEndJobs[j].descrription;
  
    let divpaimodalityback = document.createElement("div");
  
    let modalityback0 = document.createElement("span");
    modalityback0.classList.add("modalidade0");
    modalityback0.innerHTML = backEndJobs[j].modality[0];
  
    let modalityback1 = document.createElement("span");
    modalityback1.classList.add("modalidade1");
    modalityback1.innerHTML = backEndJobs[j].modality[1];
  
    divpaimodalityback.append(modalityback0, modalityback1);
  
    libackend.append(divpaiback, descricaoback, divpaimodalityback);
  
    ulbackend.append(libackend);
    let secaoback = document.querySelector(".secaoback");
    secaoback.append(ulbackend);
  }