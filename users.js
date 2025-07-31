// This script runs inside the users.html window

async function renderUserList() {
    const userListContainer = document.getElementById('user-list');
    if (!userListContainer) return;

    userListContainer.innerHTML = '<p class="text-gray-400">Loading users...</p>';

    const data = await window.api.getUserData();
    const allUsers = data.allUsers || [];
    const currentUser = data.currentUser;

    if (allUsers.length > 0) {
        userListContainer.innerHTML = '';
        allUsers.forEach(user => {
            const userItem = document.createElement('div');
            userItem.className = 'flex justify-between items-center p-3 bg-gray-800 rounded-lg shadow-md';

            let actionButtonsHtml = '';

            // Only show buttons for users who are NOT the currently logged-in admin
            // And only if the current user is an admin (handled by main process security)
            if (currentUser && user.username === currentUser.username) {
                actionButtonsHtml = `<span class="text-xs text-gray-500 italic">Current Admin</span>`;
            } else {
                actionButtonsHtml = `
                    <div class="space-x-2">
                        <button class="modify-user-btn bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-1 px-3 rounded transition-colors duration-200" data-username="${user.username}">Modify</button>
                        <button class="delete-user-btn btn-danger text-xs font-bold py-1 px-3 rounded transition-colors duration-200" data-username="${user.username}">Delete</button>
                            </div>
                        `;
            }

            userItem.innerHTML = `
                        <span class="font-medium">${user.username}</span>
                        ${actionButtonsHtml}
                    `;
            userListContainer.appendChild(userItem);
        });
    } else {
        userListContainer.innerHTML = '<p>No other users found.</p>';
    }
}

// MODIFICATION: This function shows our custom password input modal
function askForPassword(title, message) {
    return new Promise((resolve, reject) => {
        const modal = document.getElementById('password-modal');
        const titleEl = document.getElementById('modal-title');
        const messageEl = document.getElementById('modal-message');
        const inputEl = document.getElementById('modal-password-input');
        const confirmBtn = document.getElementById('modal-confirm-btn');
        const cancelBtn = document.getElementById('modal-cancel-btn');
        const errorEl = document.getElementById('modal-error');

        titleEl.textContent = title;
        messageEl.textContent = message;
        inputEl.value = '';
        errorEl.classList.add('hidden');
        modal.classList.remove('hidden');
        inputEl.focus();

        const onConfirm = () => {
            const password = inputEl.value;
            if (password) {
                cleanup();
                resolve(password);
            } else {
                errorEl.textContent = 'Password cannot be empty.';
                errorEl.classList.remove('hidden');
            }
        };

        const onCancel = () => {
            cleanup();
            reject(new Error('User cancelled action.'));
        };

        const onKeyup = (e) => {
            if (e.key === 'Enter') onConfirm();
            if (e.key === 'Escape') onCancel();
        };

        // Add event listeners
        confirmBtn.addEventListener('click', onConfirm);
        cancelBtn.addEventListener('click', onCancel);
        inputEl.addEventListener('keyup', onKeyup);

        // Cleanup function to remove listeners and hide modal
        function cleanup() {
            modal.classList.add('hidden');
            confirmBtn.removeEventListener('click', onConfirm);
            cancelBtn.removeEventListener('click', onCancel);
            inputEl.removeEventListener('keyup', onKeyup);
        }
    });
}

// Main event listener for the user list container (Modify/Delete buttons)
document.getElementById('user-list').addEventListener('click', async (e) => {
    const target = e.target;
    try {
        // Handle Modify Button Click
        if (target.classList.contains('modify-user-btn')) {
            const usernameToModify = target.dataset.username;
            const newPassword = await askForPassword('Change Password', `Enter the NEW password for user "${usernameToModify}":`);
            const adminPassword = await askForPassword('Admin Confirmation', 'To confirm this change, please enter your admin password:');

            const result = await window.api.modifyUser({ usernameToModify, newPassword, adminPassword });

            if (result.success) {
                alert('User password updated successfully.');
            } else {
                alert(`Error: ${result.message}`);
            }
        }

        // Handle Delete Button Click
        if (target.classList.contains('delete-user-btn')) {
            const usernameToDelete = target.dataset.username;
            // Use custom modal for confirmation instead of browser's confirm()
            const confirmDelete = await askForPassword('Confirm Deletion', `Are you sure you want to permanently delete user "${usernameToDelete}"? Enter admin password to confirm.`);

            // If user enters password, it means they confirmed.
            if (confirmDelete) {
                const adminPassword = confirmDelete; // The password entered in the modal is the admin password
                const result = await window.api.deleteUser({ usernameToDelete, adminPassword });

                if (result.success) {
                    alert('User deleted successfully.');
                    renderUserList(); // Refresh the list
                } else {
                    alert(`Error: ${result.message}`);
                }
            }
        }
    } catch (error) {
        console.log(error.message); // Log "User cancelled action." or other errors from askForPassword
    }
});

// Event listener for the new "Add New User" button
document.getElementById('add-new-user-btn').addEventListener('click', () => {
    document.getElementById('add-user-modal').classList.remove('hidden');
    document.getElementById('new-username').value = '';
    document.getElementById('new-user-password').value = '';
    document.getElementById('add-user-admin-password').value = '';
    document.getElementById('add-user-error').classList.add('hidden');
    document.getElementById('new-username').focus();
});

// Event listener for the "Cancel" button in the Add User modal
document.getElementById('cancel-add-user-btn').addEventListener('click', () => {
    document.getElementById('add-user-modal').classList.add('hidden');
});

// Event listener for the "Add User" form submission
document.getElementById('add-user-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-user-password').value;
    const adminPassword = document.getElementById('add-user-admin-password').value;
    const errorEl = document.getElementById('add-user-error');

    errorEl.classList.add('hidden');

    if (!username || !adminPassword) { // Password is now optional
        errorEl.textContent = 'Username and Admin Password are required.';
        errorEl.classList.remove('hidden');
        return;
    }

    const result = await window.api.addUser({ username, password, adminPassword, isNoLoginUser: password === '' }); // Pass flag if no password

    if (result.success) {
        alert('User added successfully!');
        document.getElementById('add-user-modal').classList.add('hidden');
        renderUserList(); // Refresh the list
    } else {
        errorEl.textContent = result.message;
        errorEl.classList.remove('hidden');
    }
});


// Initial load of the user list
renderUserList();
