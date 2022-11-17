for (let i = 0; i < data.length; i++) {
    let ul = document.querySelector(".todoscard");
  
    let li = document.createElement("li");
    li.classList.add("itenscard");
  
    let img = document.createElement("img");
    img.src = data[i].img;
    console.log(data[i].img)
    console.log(img.src)
    img.id = "itenimg";
  
    let spantag = document.createElement("span");
    spantag.id = "itentag";
    spantag.innerHTML = data[i].tag;
  
    let h3 = document.createElement("h3");
    h3.id = "itenname";
    h3.innerHTML = data[i].nameItem;
  
    let p = document.createElement("p");
    p.id = "itendescricao";
    p.innerHTML = data[i].description;
  
    let spanpreco = document.createElement("span");
    spanpreco.id = "itenpreco";
    spanpreco.innerHTML = " R$ " + data[i].value + ".00";
    let array = [];
    let botao = document.createElement("button");
    botao.classList.add("botaocarrinho");
    botao.innerText = data[i].addCart;
    li.append(img, spantag, h3, p, spanpreco, botao);
    ul.append(li);
    var contcarrinho = 0;
    botao.addEventListener("click", function () {
      contcarrinho++;
      console.log(contcarrinho);
      let elementid = data[i].id;
      console.log(elementid);
      let produtos = procuraid(elementid);
      console.log(produtos);
      console.log(produtos.id);
      cardcarrinho(produtos);
      console.log(data[i].id);
      array.push(produtos);
      console.log(array);
    });
  }
  
  function procuraid(meuid) {
    for (let j = 0; j < data.length; j++) {
      if (data[j].id === meuid) {
        console.log(data[j]);
        return data[j];
      } else if (data[j].id !== data[j].id) {
        console.log("produto não encontrado");
      }
  
      // return "produto não encontrado";
    }
  }
  procuraid();
  
  document.querySelector("aside").insertAdjacentHTML(
    "beforeend",
    `
  <input id="inputpesquisa" type="text"placeholder="Digite aqui sua pesquisa"required="true">
  <label class="descricaopesquisar" for="pesquisar">Pesquisar</label><br><br><br>
  <label class="carrinhocompras"for="carrinhocompras">Carrinho de Compras </label>`
  );
  let soma = 0;
  
  function cardcarrinho(produtos) {
    let card = document.createElement("li");
    card.classList.add("carrinhocard");
    card.id = produtos.id;
    array = card;
  
    let p3 = document.createElement("p");
    p3.id = "somacarrinho";
  
    p3.innerHTML = `${"Total: R$ "}${(soma += produtos.value)}${".00"}`;
    if (soma < 0) {
      p3.remove();
    }
  
    let ul = document.createElement("ul");
    ul.id = "ulcarrinhocard";
  
    let qtditens = document.createElement("p");
    qtditens.id = "qtditens";
    qtditens.innerHTML = "Quantidade: " + contcarrinho;
  
    let img = document.createElement("img");
    img.id = "imgcarrinho";
  
    let p = document.createElement("p");
    p.id = "nomecarrinho";
  
    let p2 = document.createElement("p");
    p2.id = "precocarrinho";
  
    let botaoremover = document.createElement("button");
  
    img.src = produtos.img;
    p.innerHTML = `${produtos.nameItem} `;
    p2.innerHTML = `${" R$ " + produtos.value + ".00"}`;
  
    botaoremover.innerHTML = "Remover";
    botaoremover.id = produtos.value;
    //botaoremover.id = produtos.id;
    botaoremover.classList.add("botaoremover");
    botaoremover.addEventListener("click", function (event) {
      event.target.parentNode.remove();
      let preco = event.target.id;
      preco.innerHTML = `${soma - soma}`;
      //console.log(event.target.parentNode.childNodes[2].innerText)
      document.querySelector("#qtditens");
      contcarrinho--;
      //  qtditens.innerHTML = "Quantidade: " + contcarrinho;
      // qtditens.remove()
  
      p3.innerHTML = `${(soma -= produtos.value)}`;
      console.log(contcarrinho);
      console.log(produtos.id);
      // let li = document.querySelector(".carrinhocard");
      // li.remove();
    });
  
    card.append(img, p, p2, botaoremover);
    ul.appendChild(card);
  
    let paidecard = document.querySelector("aside");
    paidecard.append(card, ul, qtditens, p3);
  }
  