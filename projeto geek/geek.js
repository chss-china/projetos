let itens = {
    objeto1: {
      imagem: "https://kenzie-academy-brasil-developers.github.io/-Kenzie-Academy-Brasil-Developers-m1-entrega-loja-geek_chss-china/assets/img/actions/animewoman.jpg",
      name: "animewoman",
      type: "frame",
      price: "R$15,00",
    },
    objeto2: {
      imagem: "https://kenzie-academy-brasil-developers.github.io/-Kenzie-Academy-Brasil-Developers-m1-entrega-loja-geek_chss-china/assets/img/actions/dragonballpersonagem.jpg",
      name: "dragonball",
      type: "figure ação",
      price: "R$25,00",
    },
    objeto3: {
      imagem:"https://kenzie-academy-brasil-developers.github.io/-Kenzie-Academy-Brasil-Developers-m1-entrega-loja-geek_chss-china/assets/img/actions/starwarspersonagem.jpg",
      name: "starwars",
      type: "figure ação",
      price: "R$40,00",
    },
    objeto4: {
      imagem: "https://kenzie-academy-brasil-developers.github.io/-Kenzie-Academy-Brasil-Developers-m1-entrega-loja-geek_chss-china/assets/img/painting/clock.jpg",
      name: "clock",
      type: "figure ação",
      price: "R$200,00",
    },
    objeto5: {
      imagem: "https://kenzie-academy-brasil-developers.github.io/-Kenzie-Academy-Brasil-Developers-m1-entrega-loja-geek_chss-china/assets/img/painting/gamepad.jpg",
      name: "gamepad",
      type: "frame",
      price: "R$80,00",
    },
    objeto6: {
      imagem: "https://kenzie-academy-brasil-developers.github.io/-Kenzie-Academy-Brasil-Developers-m1-entrega-loja-geek_chss-china/assets/img/painting/personagem.jpg",
      name: "personagem",
      type: "frame",
      price: "R$350,00",
    },
  };
  
  var figuracao = [{}];
  
  let figurasframe = [{}];
  function separeitens() {
    if (itens.objeto1.type === "figure ação") {
      figuracao[0] = itens.objeto1;
  
      console.log(figuracao);
    }
    if (itens.objeto2.type === "figure ação") {
      figuracao[1] = itens.objeto2;
    }
    if (itens.objeto3.type === "figure ação") {
      figuracao[2] = itens.objeto3;
    }
    if (itens.objeto4.type === "figure ação") {
      figuracao[3] = itens.objeto4;
    }
    if (itens.objeto5.type === "figure ação") {
      figuracao[4] = itens.objeto5;
    }
    if (itens.objeto6.type === "figure ação") {
      figuracao[5] = itens.objeto6;
    } else if (itens.objeto1.type === "frame") {
      figurasframe[0] = itens.objeto1;
    } else if (itens.objeto2.type === "frame") {
      figurasframe[1] = itens.objeto2;
    } else if (itens.objeto3.type === "frame") {
      figurasframe[2] = itens.objeto3;
    } else if (itens.objeto4.type === "frame") {
      figurasframe[3] = itens.objeto4;
    }
    if (itens.objeto5.type === "frame") {
      figurasframe[2] = itens.objeto5;
    }
    if (itens.objeto6.type === "frame") {
      figurasframe[3] = itens.objeto6;
    }
  }
  separeitens();
  
  let elementolista1 = document.createElement("li");
  elementolista1.id = "elemento1listaframe";
  let h1 = document.createElement("h4");
  h1.innerHTML = figurasframe[0].name;
  
  h1.id = "tituloli1";
  let precolista1 = document.createElement("span");
  precolista1.innerHTML = figurasframe[0].price;
  
  precolista1.id = "precoanimewoman";
  let img1 = document.createElement("img");
  //img1.innerHTML = figurasframe[0].imagem
  img1.src = figurasframe[0].imagem;
  img1.id = "imganimewoman";
  elementolista1.append(img1, h1, precolista1);
  console.log(elementolista1);
  
  let elementolista2 = document.createElement("li");
  elementolista2.id = "element2listaframe";
  let h2 = document.createElement("h4");
  h2.innerHTML = figurasframe[2].name;
  h2.id = "titulogamepad";
  let precolista2 = document.createElement("span");
  precolista2.innerHTML = figurasframe[2].price;
  precolista2.id = "precogamepad";
  let img2 = document.createElement("img");
  img2.src = figurasframe[2].imagem;
  img2.id = "imggamepad";
  elementolista2.append(img2, h2, precolista2);
  
  console.log(figurasframe[2].name);
  console.log(elementolista2);
  
  let elementolista3 = document.createElement("li");
  elementolista3.id = "elemento3listaframe";
  let h = document.createElement("h4");
  h.innerHTML = figurasframe[3].name;
  h.id = "titulopersonagem";
  let precolista3 = document.createElement("span");
  precolista3.innerHTML = figurasframe[3].price;
  precolista3.id = "precopersonagem";
  let img3 = document.createElement("img");
  img3.src = figurasframe[3].imagem;
  img3.id = "imgpersonagem";
  elementolista3.append(img3, h, precolista3);
  
  console.log(elementolista3);
  
  let ulframe = document.querySelector(".secaoframeul");
  console.log(ulframe);
  ulframe.appendChild(elementolista3);
  ulframe.appendChild(elementolista2);
  ulframe.appendChild(elementolista1);
  
  let corpo = document.getElementsByTagName("body");
  
  let elementolistaaction1 = document.createElement("li");
  elementolistaaction1.id = "elemento1listaction";
  let h4 = document.createElement("h4");
  h4.innerHTML = figuracao[1].name;
  h4.id = "titulodragon";
  console.log(figuracao);
  let preco1 = document.createElement("span");
  preco1.innerHTML = figuracao[1].price;
  preco1.id = "precodragon";
  let imgaction1 = document.createElement("img");
  imgaction1.src = figuracao[1].imagem;
  imgaction1.id = "imgdragonball";
  elementolistaaction1.append(imgaction1, h4, preco1);
  
  let elementolistaaction2 = document.createElement("li");
  elementolistaaction2.id = "elemento2listaction";
  let h5 = document.createElement("h4");
  h5.innerHTML = figuracao[2].name;
  h5.id = "titulostar";
  let preco2 = document.createElement("span");
  preco2.innerHTML = figuracao[2].price;
  preco2.id = "precostar";
  let imgaction2 = document.createElement("img");
  imgaction2.src = figuracao[2].imagem;
  imgaction2.id = "imgstarwars";
  elementolistaaction2.append(imgaction2, h5, preco2);
  
  let elementolistaaction3 = document.createElement("li");
  elementolistaaction3.id = "elemento3listaction";
  let h6 = document.createElement("h4");
  h6.innerHTML = figuracao[3].name;
  h6.id = "tituloclock";
  let preco3 = document.createElement("span");
  preco3.innerHTML = figuracao[3].price;
  preco3.id = "precoclock";
  let imgaction3 = document.createElement("img");
  imgaction3.src = figuracao[3].imagem;
  imgaction3.id = "imgclock";
  elementolistaaction3.append(imgaction3, h6, preco3);
  
  let ulaction = document.querySelector(".secaofigureul");
  ulaction.appendChild(elementolistaaction3);
  ulaction.appendChild(elementolistaaction2);
  ulaction.appendChild(elementolistaaction1);
  let body2 = document.getElementsByTagName("body");
  corpo.appendChild(ulframe);
  body2.appendChild(ulaction);
  