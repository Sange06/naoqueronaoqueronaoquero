botaoDeAcessibilidade.addEventListener(‘click’, function (){
botaoDeAcessibilidade.classList.toggle(‘rotacao-botao’);
opcoesDeAcessibilidade.classList.toggle(‘apresenta-lista’);
const botaoSelecionado = botaoDeAcessibilidade.getAttribute
(‘aria-expanded’) === ‘true’;
botaoDeAcessibilidade.setAttribute(‘aria-expanded’,
!botaoSelecionado);
})
