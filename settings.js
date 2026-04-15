body {
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.settings-header {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 15px;
    background: white;
    border-bottom: 1px solid #ddd;
}

.back-btn {
    text-decoration: none;
    font-size: 24px;
    color: black;
    margin-right: 20px;
}

.settings-header h1 {
    font-size: 20px;
    margin: 0;
}

.profile-card {
    background: white;
    width: 90%;
    max-width: 400px;
    margin-top: 30px;
    padding: 30px 20px;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    text-align: center;
}

.avatar-circle {
    width: 80px;
    height: 80px;
    background-color: #00a2e8;
    color: white;
    font-size: 32px;
    font-weight: bold;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 30px;
}

.info-group {
    text-align: left;
    margin-bottom: 30px;
}

.info-row {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid #f0f0f0;
}

.label {
    color: #888;
    font-size: 14px;
}

.value {
    font-weight: bold;
    color: #333;
}

.email {
    font-size: 13px;
}

.logout-button {
    width: 100%;
    background-color: #ff4d4d;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.logout-button:active {
    background-color: #e60000;
}

document.getElementById('logout-btn').addEventListener('click', function() {
    const confirmLogout = confirm("Are you sure you want to log out?");
    if (confirmLogout) {
        // ലോഗ് ഔട്ട് ചെയ്ത ശേഷം ഹോം പേജിലേക്ക് പോകുന്നു
        window.location.href = "home.html"; 
    }
});