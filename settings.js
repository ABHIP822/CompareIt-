 body {
    font-family: 'Arial', sans-serif;
    background-color: #f8f9fa;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.profile-card {
    background: white;
    width: 90%;
    max-width: 380px;
    padding: 30px 20px;
    border-radius: 20px;
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
    text-transform: uppercase;
}

.info-group {
    text-align: left;
    margin-bottom: 20px;
}

.info-row {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid #f0f0f0;
}

.label {
    color: #888;
    font-size: 14px;
}

.value {
    font-weight: bold;
    color: #333;
    font-size: 15px;
}

.logout-button {
    width: 100%;
    background-color: #ff4d4d;
    color: white;
    border: none;
    padding: 14px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    transition: background 0.3s;
}

.logout-button:active {
    background-color: #e60000;
}
