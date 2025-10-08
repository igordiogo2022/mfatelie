const listaProdutosNovidade = [
    ["Produto1", "imagens/pulseiraCard.jpg", "nomeDoProduto", "preço"],
    ["Produto2", "imagens/lacoCard.jpg", "nomeDoProdutobrancovermelhozuzol", "preço"],
    ["Produto3", "endereçoDaImagem", "nomeDoProduto", "preço"],
    ["Produto4", "endereçoDaImagem", "nomeDoProduto", "preço"]
];

function carregarProdutosNovidade(){
    imagemHtml = document.querySelectorAll(".cardNovidadeImagem");
    nomeHtml = document.querySelectorAll(".cardNovidadeTexto");
    precoHtml = document.querySelectorAll(".cardNovidadePreco");
    for (let i=0; i<4; i++){
        imagemHtml[i].src = listaProdutosNovidade[i][1];
        nomeHtml[i].innerHTML = listaProdutosNovidade[i][2];
        precoHtml[i].innerHTML = listaProdutosNovidade[i][3];
    }
}

const listaProdutos = [
    ["imagens/produtos/laco1.jpg", "Nome do Produto", "R$ 10,00", "laco"],
    ["imagens/produtos/faixa1.jpg", "Nome do Produto", "R$ 10,00", "outros"],
    ["imagens/produtos/laco2.jpg", "Nome do Produto", "R$ 10,00", "laco"],
    ["imagens/produtos/chaveiro1.jpg", "Nome do Produto", "R$ 10,00", "outros"],
    ["imagens/produtos/laco3.jpg", "Nome do Produto", "R$ 10,00", "laco"],
    ["imagens/produtos/laco4.jpg", "Nome do Produto", "R$ 10,00", "laco"],
    ["imagens/produtos/laco5.jpg", "Nome do Produto", "R$ 10,00", "laco"],
    ["imagens/produtos/bolsa1.jpg", "Nome do Produto", "R$ 10,00", "outros"],
    ["imagens/produtos/caneta1.jpg", "Nome do Produto", "R$ 10,00", "outros"],
    ["imagens/produtos/tiara1.jpg", "Nome do Produto", "R$ 10,00", "tiara"],
    ["imagens/produtos/tiara2.jpg", "Nome do Produto", "R$ 10,00", "tiara"],
    ["imagens/produtos/terco1.jpg", "Nome do Produto", "R$ 10,00", "outros"],
    ["imagens/produtos/laco6.jpg", "Nome do Produto", "R$ 10,00", "laco"],
    ["imagens/produtos/tiara3.jpg", "Nome do Produto", "R$ 10,00", "tiara"],
    ["imagens/produtos/tiara4.jpg", "Nome do Produto", "R$ 10,00", "tiara"],
    ["imagens/produtos/tiara5.jpg", "Nome do Produto", "R$ 10,00", "tiara"],
    ["imagens/produtos/pulseira1.jpg", "Nome do Produto", "R$ 10,00", "pulseira"],
    ["imagens/produtos/faixa2.jpg", "Nome do Produto", "R$ 10,00", "outros"],
    ["imagens/produtos/chaveiro2.jpg", "Nome do Produto", "R$ 10,00", "outros"],
    ["imagens/produtos/pulseira2.jpg", "Nome do Produto", "R$ 10,00", "pulseira"],
    ["imagens/produtos/chaveiro3.jpg", "Nome do Produto", "R$ 10,00", "outros"],
    ["imagens/produtos/pulseira3.jpg", "Nome do Produto", "R$ 10,00", "pulseira"],
    ["imagens/produtos/pulseira4.jpg", "Nome do Produto", "R$ 10,00", "pulseira"], 
    ["imagens/produtos/pulseira5.jpg", "Nome do Produto", "R$ 10,00", "pulseira"]
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
            nomeProduto = document.createElement("p");
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
            
            // atributos preço
            precoProduto.classList.add("cardProdutoPreco");
            precoProduto.innerHTML = listaProdutos[i][2];
            
            // atributos botão
            botao.classList.add("cardProdutoBotao");
            botao.innerHTML = "Fazer pedido";
            
            card.appendChild(imagem);
            card.appendChild(nomeProduto);
            card.appendChild(precoProduto);
            card.appendChild(botao);
            
            main.appendChild(card);
            
        }
    }
}
