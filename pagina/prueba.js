const currentUrl = window.location.href;
const parsedUrl= (new URL(currentUrl)).origin;

function openYoutube() {
    // Open YouTube page in a new tab/window
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
}

function sha256(message) {
    const hash = CryptoJS.SHA256(message);
    return hash.toString(CryptoJS.enc.Hex);
}

function openWithData() {
    const email = document.getElementById("Email").value;
    
    const password = document.getElementById("Password").value; // obtener la contraseñal y generar un SHA256
    const passwordHash = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
    
    console.log('Loading script:', "abriendo pagina con datos")
    window.location.href= (parsedUrl + "?email=" + email +"&password=" + passwordHash); //cambiar la pestania actual a...
}

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;

    // Basic validation (optional, can be extended)
    if (email.trim() === '' || password.trim() === '') {
        alert('Please enter both email and password.');
        return;
    }

    // Client-side SHA-256 hashing (optional, consider security implications)
    const passwordHash = sha256(password);

    // Submit form data (including passwordHash if implemented) to server for secure processing
    form.submit();
    })