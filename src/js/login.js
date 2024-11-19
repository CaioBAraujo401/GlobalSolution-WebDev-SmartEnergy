const form = document.getElementById('loginForm');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Limpa mensagens de erro anteriores
            document.getElementById('usernameError').textContent = "";
            document.getElementById('passwordError').textContent = "";

            // Pega os valores dos campos de entrada
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            let isValid = true;

            // Validação do campo de nome de usuário
            if (username === "") {
                document.getElementById('usernameError').textContent = "Por favor, insira o nome de usuário.";
                document.getElementById('usernameError').style.display = "block";
                isValid = false;
            }

            // Validação do campo de senha
            if (password === "") {
                document.getElementById('passwordError').textContent = "Por favor, insira a senha.";
                document.getElementById('passwordError').style.display = "block";
                isValid = false;
            } else if (password.length < 8) {
                document.getElementById('passwordError').textContent = "A senha deve ter pelo menos 8 caracteres.";
                document.getElementById('passwordError').style.display = "block";
                isValid = false;
            }

            // Se tudo estiver válido, exibe uma mensagem de sucesso e redireciona para a página inicial
            if (isValid) {
                alert("Login realizado com sucesso!");
                window.location.href = "quiz.html"; // Redireciona para o quiz
            }
        });