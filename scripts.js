<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>
    <h1>Login</h1>
    <form id="loginForm">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>

        <label for="senha">Senha:</label>
        <input type="password" id="senha" name="senha"><br><br>

        <button type="submit">Login</button>
    </form>

    <div id="message"></div>

    <script>
        document.getElementById("loginForm").addEventListener("submit", function (e) {
            e.preventDefault();
            var email = document.getElementById("email").value;
            var senha = document.getElementById("senha").value;

            // Enviar dados de login para o servidor Node.js
            fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, senha }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        // Login bem-sucedido
                        window.location.href = "pagina_de_sucesso.html";
                    } else {
                        // Login mal-sucedido
                        document.getElementById("message").textContent = "Usuário ou senha não encontrados.";
                    }
                });
        });
    </script>
</body>
</html>
