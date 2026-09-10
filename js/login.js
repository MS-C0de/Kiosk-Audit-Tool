const VALID_USERS = [
    { user: "Libor", passHash: "c05e7fb529fd488f8df45421bb3bd25489e5d14f5914254e94ee3a7e85449c52" },
    { user: "Adam",  passHash: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8" }
];

async function hashString(string) {
    const utf8 = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}


function togglePasswordVisibility() {
    const passInput = document.getElementById('passInput');
    const eyeIcon = document.getElementById('eyeIcon');
    
    if (passInput.type === 'password') {
        passInput.type = 'text';
        eyeIcon.innerHTML = '<path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.17c0-1.66-1.34-3-3-3l-.17.02z"/>';
    } else {
        passInput.type = 'password';
        eyeIcon.innerHTML = '<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>';
    }
}

async function handleLogin() {
    const user = document.getElementById('userInput').value;
    const pass = document.getElementById('passInput').value;
    const errorBox = document.getElementById('loginError');

    const passHash = await hashString(pass);

    const isValid = VALID_USERS.some(u => u.user === user && u.passHash === passHash);

    if (isValid) {
        document.getElementById('loginOverlay').style.display = 'none';
        document.getElementById('appContainer').style.display = 'block';
        document.title = "IKT - Dashboard";
        initAuditApp();
    } else {
        errorBox.style.display = 'block';
    }
}


document.addEventListener('keydown', (e) => {
    const loginOverlay = document.getElementById('loginOverlay');
    if (loginOverlay.style.display !== 'none' && e.key === 'Enter') {
        e.preventDefault(); 
        
        const userInput = document.getElementById('userInput');
        const passInput = document.getElementById('passInput');
        
        if (document.activeElement === userInput && userInput.value.trim() !== '') {
            passInput.focus();
        } 
        else if (userInput.value.trim() !== '' && passInput.value !== '') {
            handleLogin();
        }
    }
});

