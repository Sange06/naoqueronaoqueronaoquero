botaoDeAcessibilidade.addEventListener(‘click’, function (){
botaoDeAcessibilidade.classList.toggle(‘rotacao-botao’);
opcoesDeAcessibilidade.classList.toggle(‘apresenta-lista’);
const botaoSelecionado = botaoDeAcessibilidade.getAttribute
(‘aria-expanded’) === ‘true’;
botaoDeAcessibilidade.setAttribute(‘aria-expanded’,
!botaoSelecionado);
})
document.addEventListener(‘DOMContentLoaded’, function(){
const aumentaFonteBotao = document. getElementById(‘aumentar-fonte’);
et tamanhoAtualFonte = 1;

aumentaFonteBotao.addEventListener(‘click’, function(){
tamanhoAtualFonte += 0.1;
document.body.style.fontSize = `${tamanhoAtualFonte}rem`
}

})
<body>
...
<script src=”script.js”></script>

</body>
document.addEventListener(‘DOMContentLoaded’, function(){
const aumentaFonteBotao = document.getElementById(‘aumentar-fonte’);
const diminuirFonteBotao = document.getElementById(diminuir-fonte’);
let tamanhoAtualFonte = 1;
aumentaFonteBotao.addEventListener(‘click’, function(){
tamanhoAtualFonte += 0.1;
document.body.style.fontSize = `${tamanhoAtualFonte}rem`
}
diminuirFonteBotao.addEventListener(‘click’, function(){
tamanhoAtualFonte -= 0.1;
document.body.style.fontSize = `${tamanhoAtualFonte}rem`
}
})
