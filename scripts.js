document.addEventListener("DOMContentLoaded", function() {
    const loginSection = document.getElementById("loginSection");
    const appSection = document.getElementById("appSection");
    const mainContent = document.getElementById("mainContent");
    const loginButton = document.getElementById("loginButton");
    const createAccountButton = document.getElementById("createAccountButton");
    const inboxLink = document.getElementById("inboxLink");
    const sentLink = document.getElementById("sentLink");
    const unreadLink = document.getElementById("unreadLink");
    const composeButton = document.getElementById("composeButton");
    const menuToggle = document.getElementById("menuToggle");
    const loginError = document.getElementById("loginError");

    const users = {
        "usuario1": "password1",
        "usuario2": "password2"
    };

    loginButton.addEventListener("click", handleLogin);
    createAccountButton.addEventListener("click", handleCreateAccount);
    inboxLink.addEventListener("click", () => displayEmails("inbox"));
    sentLink.addEventListener("click", () => displayEmails("sent"));
    unreadLink.addEventListener("click", () => displayEmails("unread"));
    composeButton.addEventListener("click", displayComposeEmail);
    menuToggle.addEventListener("click", toggleMenu);

    function handleLogin() {
        const username = document.getElementById("user").value;
        const password = document.getElementById("passwd").value;

        if (users[username] && users[username] === password) {
            alert("¡Inicio de sesión exitoso!");
            loginSection.style.display = "none";
            appSection.style.display = "flex";
            displayEmails("inbox");
        } else {
            loginError.style.display = "block";
        }
    }

    function handleCreateAccount() {
        alert("¡Cuenta creada exitosamente!");
    }

    function displayEmails(type) {
        mainContent.innerHTML = "";
        const emails = [
            { subject: `Correo de ${type}`, body: `Contenido del correo de ${type}` }
        ];

        emails.forEach(email => {
            const emailItem = document.createElement("div");
            emailItem.className = "email-item";
            emailItem.innerHTML = `
                <div class="email-info">
                    <span class="email-subject">${email.subject}</span>
                    <span class="email-body">${email.body}</span>
                </div>
            `;
            mainContent.appendChild(emailItem);
        });
    }

    function displayComposeEmail() {
        mainContent.innerHTML = `
            <div class="compose-email">
                <input type="text" placeholder="Destinatario">
                <input type="text" placeholder="Asunto">
                <textarea placeholder="Mensaje"></textarea>
                <button class="button">Enviar</button>
            </div>
        `;
    }

    function toggleMenu() {
        document.querySelector(".sidebar").classList.toggle("collapsed");
    }
});