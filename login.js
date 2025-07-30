// --- DOM Element Selection ---
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const setAdminPasswordForm = document.getElementById('set-admin-password-form');

const loginError = document.getElementById('login-error-message');
const signupError = document.getElementById('signup-error-message');
const setAdminPasswordError = document.getElementById('set-admin-password-error');

const loginView = document.getElementById('login-view');
const signupView = document.getElementById('signup-view');
const setAdminPasswordView = document.getElementById('set-admin-password-view');

const showSignupBtn = document.getElementById('show-signup');
const showLoginBtn = document.getElementById('show-login');
const showSetAdminPasswordBtn = document.getElementById('show-set-admin-password');
const backToLoginBtn = document.getElementById('back-to-login');


// --- View Switching Logic ---

/**
 * Hides all views and shows the specified one.
 * @param {HTMLElement} viewToShow - The view element to display.
 */
function switchToView(viewToShow) {
    // Hide all views and error messages first
    [loginView, signupView, setAdminPasswordView].forEach(view => view.classList.add('hidden'));
    [loginError, signupError, setAdminPasswordError].forEach(error => error.classList.add('hidden'));
    // Show the requested view
    viewToShow.classList.remove('hidden');
}

showSignupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    switchToView(signupView);
});

showLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    switchToView(loginView);
});

showSetAdminPasswordBtn.addEventListener('click', (e) => {
    e.preventDefault();
    switchToView(setAdminPasswordView);
});

backToLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    switchToView(loginView);
});


// --- Form Submission Logic ---

// Handle login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loginError.classList.add('hidden');
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Send credentials to the main process.
    // This is an asynchronous "fire-and-forget" call.
    // The response is handled by the 'onLoginFailed' listener.
    window.api.login({ username, password });
});

// Handle sign-up form submission
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    signupError.classList.add('hidden');
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const adminPassword = document.getElementById('signup-admin-password').value;

    if (!username || !password || !adminPassword) {
        signupError.textContent = 'All fields are required.';
        signupError.classList.remove('hidden');
        return;
    }

    // Correctly call the 'addUser' function which is available via preload
    // This is an 'invoke' call, so it returns a promise we can await.
    const result = await window.api.addUser({ username, password, adminPassword });

    if (result.success) {
        alert('Account created successfully! Please log in.');
        signupForm.reset();
        switchToView(loginView);
    } else {
        signupError.textContent = result.message; // Use 'message' from the main process response
        signupError.classList.remove('hidden');
    }
});

// Handle setting the admin password
setAdminPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    setAdminPasswordError.classList.add('hidden');

    const oldPassword = document.getElementById('old-admin-password').value;
    const newPassword = document.getElementById('new-admin-password').value;
    const confirmPassword = document.getElementById('confirm-new-admin-password').value;

    if (newPassword !== confirmPassword) {
        setAdminPasswordError.textContent = "New passwords do not match.";
        setAdminPasswordError.classList.remove('hidden');
        return;
    }

    const result = await window.api.changeAdminPassword({ oldPassword, newPassword });

    if (result.success) {
        alert('Admin password changed successfully!');
        setAdminPasswordForm.reset();
        switchToView(loginView);
    } else {
        setAdminPasswordError.textContent = result.message;
        setAdminPasswordError.classList.remove('hidden');
    }
});


// --- API Event Listeners ---

// FIXED: Listen for the 'login-failed' event from the main process
// This is the correct way to handle login errors.
window.api.onLoginFailed((event, message) => {
    loginError.textContent = message || 'Incorrect username or password.';
    loginError.classList.remove('hidden');
});


// --- Utility: Password visibility toggle ---
document.querySelectorAll('.password-toggle-icon').forEach(icon => {
    icon.addEventListener('click', function () {
        const passwordInput = this.closest('.password-container').querySelector('input');
        const isPassword = passwordInput.getAttribute('type') === 'password';
        passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
    });
});
