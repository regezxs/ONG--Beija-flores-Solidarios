// FUNCIONALIDADE 1: mostrar ou ocultar as orientações de participação.
const botaoAjuda = document.getElementById('botao-ajuda');
const orientacoes = document.getElementById('orientacoes');

function alternarOrientacoes() {
  if (orientacoes.hidden) {
    orientacoes.hidden = false;
    botaoAjuda.textContent = 'Ocultar orientações';
    botaoAjuda.setAttribute('aria-expanded', 'true');
  } else {
    orientacoes.hidden = true;
    botaoAjuda.textContent = 'Como posso ajudar?';
    botaoAjuda.setAttribute('aria-expanded', 'false');
  }
}

// O mesmo arquivo é usado nas quatro páginas. O botão só existe em Projetos.
if (botaoAjuda) {
  botaoAjuda.addEventListener('click', alternarOrientacoes);
}

// FUNCIONALIDADE 2: validar o formulário sem enviar ou armazenar dados.
const formulario = document.getElementById('formulario-contato');
const mensagemFormulario = document.getElementById('mensagem-formulario');

function mostrarErro(texto, campo) {
  mensagemFormulario.textContent = texto;
  mensagemFormulario.className = 'mensagem erro';
  campo.focus();
}

function validarFormulario(evento) {
  // Impede o envio e o recarregamento padrão do navegador.
  evento.preventDefault();

  const campoNome = document.getElementById('nome');
  const campoEmail = document.getElementById('email');
  const campoAssunto = document.getElementById('assunto');
  const campoMensagem = document.getElementById('mensagem');

  // trim() remove espaços do começo e do fim antes da validação.
  const nome = campoNome.value.trim();
  const email = campoEmail.value.trim();
  const assunto = campoAssunto.value.trim();
  const mensagem = campoMensagem.value.trim();
  campoEmail.value = email;

  // Cada return encerra a função para permitir a correção do primeiro erro.
  if (nome.length < 3) {
    mostrarErro('Digite um nome com pelo menos 3 caracteres.', campoNome);
    return;
  }
  if (email === '' || !campoEmail.checkValidity()) {
    mostrarErro('Digite um e-mail válido, como nome@exemplo.com.', campoEmail);
    return;
  }
  if (assunto === '') {
    mostrarErro('Escolha o assunto da mensagem.', campoAssunto);
    return;
  }
  if (mensagem.length < 10) {
    mostrarErro('Escreva uma mensagem com pelo menos 10 caracteres.', campoMensagem);
    return;
  }

  // textContent altera somente o texto no HTML. Não há requisição de rede.
  mensagemFormulario.textContent = 'Validação concluída! Esta é uma simulação acadêmica. Nenhuma mensagem foi enviada e nenhum dado foi coletado ou armazenado.';
  mensagemFormulario.className = 'mensagem sucesso';
}

if (formulario) {
  formulario.addEventListener('submit', validarFormulario);
}

// Anima os blocos da página Sobre quando entram na tela.
const elementosRevelar = document.querySelectorAll('.revelar');

if (elementosRevelar.length && 'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('tem-js');

  const observadorRevelar = new IntersectionObserver((itens, observador) => {
    itens.forEach((item) => {
      if (item.isIntersecting) {
        item.target.classList.add('visivel');
        observador.unobserve(item.target);
      }
    });
  }, { threshold: 0.15 });

  elementosRevelar.forEach((elemento) => observadorRevelar.observe(elemento));
}
