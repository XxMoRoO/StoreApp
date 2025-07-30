// This script runs inside the users.html window

async function renderUserList() {
    const userListContainer = document.getElementById('user-list');
    if (!userListContainer) return;

    const data = await window.api.getUserData();
    const allUsers = data.allUsers || [];
    const currentUser = data.currentUser;

    userListContainer.innerHTML = 'Loading...';

    if (allUsers.length > 0) {
        userListContainer.innerHTML = '';
        allUsers.forEach(user => {
            const userItem = document.createElement('div');
            userItem.className = 'flex justify-between items-center p-3 bg-gray-800 rounded-lg shadow-md';

            let actionButtonsHtml = `<span class="text-xs text-gray-500 italic">Current Admin</span>`;
            // Only show buttons for users who are NOT the currently logged-in admin
            if (currentUser && user.username !== currentUser.username) {
                actionButtonsHtml = `
                    <div class="space-x-2">
                        <button 
                            class="modify-user-btn bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-1 px-3 rounded transition-colors duration-200" 
                            data-username="${user.username}">
                            Modify
                        </button>
                        <button 
                            class="delete-user-btn bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-1 px-3 rounded transition-colors duration-200" 
                            data-username="${user.username}">
                            Delete
                        </button>
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

// Main event listener for the user list container
document.getElementById('user-list').addEventListener('click', async (e) => {
    const target = e.target;

    // --- Handle Modify Button Click ---
    if (target.classList.contains('modify-user-btn')) {
        const usernameToModify = target.dataset.username;
        const newPassword = prompt(`Enter the NEW password for user "${usernameToModify}":`);

        if (!newPassword) {
            alert("Password cannot be empty. Modification cancelled.");
            return;
        }

        const adminPassword = prompt("To confirm this change, please enter your admin password:");
        if (adminPassword === null) return; // User cancelled

        const result = await window.api.modifyUser({ usernameToModify, newPassword, adminPassword });

        if (result.success) {
            alert('User password updated successfully.');
        } else {
            alert(`Error: ${result.message}`);
        }
    }

    // --- Handle Delete Button Click ---
    if (target.classList.contains('delete-user-btn')) {
        const usernameToDelete = target.dataset.username;
        const adminPassword = prompt(`Enter your admin password to delete user "${usernameToDelete}":`);

        if (adminPassword === null) return; // User clicked cancel

        if (confirm(`Are you sure you want to permanently delete user "${usernameToDelete}"?`)) {
            const result = await window.api.deleteUser({ usernameToDelete, adminPassword });
            if (result.success) {
                alert('User deleted successfully.');
                renderUserList(); // Refresh the list after deletion
            } else {
                alert(`Error: ${result.message}`);
            }
        }
    }
});

// Initial load of the user list
renderUserList();