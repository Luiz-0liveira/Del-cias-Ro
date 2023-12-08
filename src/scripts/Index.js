document.addEventListener("DOMContentLoaded", function() {
  // Encontre todos os links no menu de navegação
  const links = document.querySelectorAll(".menu-items a");

  //
  links.forEach(function(link) {
      link.addEventListener("click", function(e) {
          e.preventDefault();
          const targetId = link.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
              // Role suavemente para a seção alvo
              window.scrollTo({
                  behavior: "smooth",
                  top: targetElement.offsetTop,
              });
          }
      });
  });
});

function enviarEmail() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    var data = {
        nome: nome,
        email: email,
        mensagem: mensagem
    };

    fetch('processar_formulario.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.success) {
            alert('E-mail enviado com sucesso!');
        } else {
            alert('Ocorreu um erro ao enviar o e-mail. Tente novamente mais tarde.');
        }
    })
    .catch((error) => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao enviar o e-mail. Tente novamente mais tarde.');
    });
}


