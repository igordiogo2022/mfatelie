const listaProdutosNovidade = [
    ["Produto1", "imagens/produtos/laco5.jpg", "Laço Stitch", "R$ 10,00"],
    ["Produto2", "imagens/produtos/laco3.jpg", "Laço com nome Isadora", "R$ 10,00"],
    ["Produto3", "imagens/produtos/tiara3.jpg", "Tiara azul", "R$ 10,00"],
    ["Produto4", "imagens/produtos/bolsa1.jpg", "Bolsa azul e branco", "R$ 10,00"]
];

function carregarProdutosNovidade(){
    imagemHtml = document.querySelectorAll(".cardNovidadeImagem");
    nomeHtml = document.querySelectorAll(".cardNovidadeTexto");
    precoHtml = document.querySelectorAll(".cardNovidadePreco");
    for (let i=0; i<4; i++){
        imagemHtml[i].src = listaProdutosNovidade[i][1];
        nomeHtml[i].innerHTML = listaProdutosNovidade[i][2];
        nomeHtml[i].title = listaProdutosNovidade[i][2];
        precoHtml[i].innerHTML = listaProdutosNovidade[i][3];
    }
}

const listaProdutos = [
    ["imagens/produtos/laco1.jpg", "Laço com lápis", "R$ 10,00", "laco"],
    ["imagens/produtos/faixa1.jpg", "Faixas para bebê", "R$ 10,00", "outros"],
    ["imagens/produtos/laco2.jpg", "Laço rosa com detalhes verdess", "R$ 10,00", "laco"],
    ["imagens/produtos/chaveiro1.jpg", "Chaveiro de letra", "R$ 10,00", "outros"],
    ["imagens/produtos/laco3.jpg", "Laço com nome Isadora", "R$ 10,00", "laco"],
    ["imagens/produtos/laco4.jpg", "Laço rosa", "R$ 10,00", "laco"],
    ["imagens/produtos/laco5.jpg", "Laço Stitch", "R$ 10,00", "laco"],
    ["imagens/produtos/bolsa1.jpg", "Bolsa azul e branco", "R$ 10,00", "outros"],
    ["imagens/produtos/caneta1.jpg", "Caneta Stitch", "R$ 10,00", "outros"],
    ["imagens/produtos/tiara1.jpg", "Tiara junina azul", "R$ 10,00", "tiara"],
    ["imagens/produtos/tiara2.jpg", "Tiara vermelha com pompom", "R$ 10,00", "tiara"],
    ["imagens/produtos/terco1.jpg", "Terço branco", "R$ 10,00", "outros"],
    ["imagens/produtos/laco6.jpg", "Laço com orelhas de coelho", "R$ 10,00", "laco"],
    ["imagens/produtos/tiara3.jpg", "Tiara azul", "R$ 10,00", "tiara"],
    ["imagens/produtos/tiara4.jpg", "Tiaras vermelhas com laço", "R$ 10,00", "tiara"],
    ["imagens/produtos/tiara5.jpg", "Tiara colorida com nome", "R$ 10,00", "tiara"],
    ["imagens/produtos/pulseira1.jpg", "Pulseira com nome Rodrigo", "R$ 10,00", "pulseira"],
    ["imagens/produtos/faixa2.jpg", "Touca vermelha", "R$ 10,00", "outros"],
    ["imagens/produtos/chaveiro2.jpg", "Chaveiro do Corinthians com nome", "R$ 10,00", "outros"],
    ["imagens/produtos/pulseira2.jpg", "Pulseira com nome Jesus", "R$ 10,00", "pulseira"],
    ["imagens/produtos/chaveiro3.jpg", "Chaveiros azul e rosa", "R$ 10,00", "outros"],
    ["imagens/produtos/pulseira3.jpg", "Pulseira vinho", "R$ 10,00", "pulseira"],
    ["imagens/produtos/pulseira4.jpg", "Pulseira azul", "R$ 10,00", "pulseira"], 
    ["imagens/produtos/pulseira5.jpg", "Pulseira verde", "R$ 10,00", "pulseira"]
];

function carregarProdutos(){
    main = document.querySelector("main");

    const params = new URLSearchParams(window.location.search);
    const filtro = params.get("filtro");

    for (let i=0; i<listaProdutos.length; i++){
        filtroProduto = listaProdutos[i][3];
        if(filtroProduto==filtro || filtro=="todos"){
            // cria os elementos
            card = document.createElement("div");
            imagem = document.createElement("img");
            nomeProduto = document.createElement("abbr");
            precoProduto = document.createElement("p");
            botao = document.createElement("a");

            // atributos do card
            card.classList.add("cardProduto");
            
            //atributos imagem
            imagem.classList.add("cardProdutoImagem");
            imagem.src = listaProdutos[i][0];
            
            // atributos nome
            nomeProduto.classList.add("cardProdutoTexto");
            nomeProduto.innerHTML = listaProdutos[i][1];
            nomeProduto.title = listaProdutos[i][1];
            
            // atributos preço
            precoProduto.classList.add("cardProdutoPreco");
            precoProduto.innerHTML = listaProdutos[i][2];
            
            // atributos botão
            botao.classList.add("cardProdutoBotao");
            botao.innerHTML = "Fazer pedido";
            botao.href = "contato.html";    
            
            card.appendChild(imagem);
            card.appendChild(nomeProduto);
            card.appendChild(precoProduto);
            card.appendChild(botao);
            
            main.appendChild(card);
            
        }
    }
}
