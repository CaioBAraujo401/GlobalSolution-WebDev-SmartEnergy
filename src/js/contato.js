document.getElementById('contatoForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário antes da validação

    // Pegando os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const numero = document.getElementById('numero').value.trim();

    // Pegando os elementos das mensagens de erro
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const telefoneError = document.getElementById('telefoneError');

    // Resetando mensagens de erro (ocultando as divs novamente)
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    telefoneError.style.display = 'none';

    let isValid = true;

    // Validação do campo Nome
    if (nome === '') {
        nameError.textContent = 'O nome é obrigatório.';
        nameError.style.display = 'block';
        isValid = false;
    } else if (nome.length < 3) {
        nameError.textContent = 'O nome deve ter pelo menos 3 caracteres.';
        nameError.style.display = 'block';
        isValid = false;
    }

    // Validação do campo E-mail
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === '') {
        emailError.textContent = 'O e-mail é obrigatório.';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = 'Insira um e-mail válido.';
        emailError.style.display = 'block';
        isValid = false;
    }

    // Validação do campo Telefone
    if (numero === '') {
        telefoneError.textContent = 'O telefone é obrigatório.';
        telefoneError.style.display = 'block';
        isValid = false;
    } else if (numero.length < 10 || numero.length > 11) {
        telefoneError.textContent = 'O telefone deve ter entre 10 e 11 dígitos.';
        telefoneError.style.display = 'block';
        isValid = false;
    }

    // Se todos os campos forem válidos
    if (isValid) {
        alert('Formulário enviado com sucesso! \nVocê receberá um E-mail com mais informações!');
        window.location.href = "index.html";
    }
});

