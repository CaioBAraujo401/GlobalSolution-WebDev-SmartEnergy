const form = document.getElementById('registerForm');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Limpa mensagens de erro anteriores
            document.getElementById('usernameError').textContent = "";
            document.getElementById('emailError').textContent = "";
            document.getElementById('passwordError').textContent = "";
            document.getElementById('confirmPasswordError').textContent = "";

            // Pega os valores dos campos de entrada
            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const confirmPassword = document.getElementById('confirmPassword').value.trim();

            let isValid = true;

            // Validação do campo de nome de usuário
            if (username === "") {
                document.getElementById('usernameError').textContent = "Por favor, insira o nome de usuário.";
                document.getElementById('usernameError').style.display = "block";
                isValid = false;
            }

            // Validação do campo de e-mail
            if (email === "") {
                document.getElementById('emailError').textContent = "Por favor, insira o e-mail.";
                document.getElementById('emailError').style.display = "block";
                isValid = false;
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                document.getElementById('emailError').textContent = "Por favor, insira um e-mail válido.";
                document.getElementById('emailError').style.display = "block";
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

            // Validação do campo de confirmação de senha
            if (confirmPassword === "") {
                document.getElementById('confirmPasswordError').textContent = "Por favor, confirme sua senha.";
                document.getElementById('confirmPasswordError').style.display = "block";
                isValid = false;
            } else if (confirmPassword !== password) {
                document.getElementById('confirmPasswordError').textContent = "As senhas não correspondem.";
                document.getElementById('confirmPasswordError').style.display = "block";
                isValid = false;
            }

            // Se tudo estiver válido, exibe uma mensagem de sucesso ou envia o formulário
            if (isValid) {
                alert("Registro realizado com sucesso!");
                form.submit(); // Substitua por uma lógica de registro, se necessário
                window.location.href = "login.html";
            }
        });