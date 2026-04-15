  <div class="profile-card">
        <div class="avatar" id="initial">A</div>

        <div class="info-row">
            <span class="label">Name</span>
            <span class="value" id="disp-name"></span>
        </div>
        <div class="info-row">
            <span class="label">Age</span>
            <span class="value" id="disp-age"></span>
        </div>
        <div class="info-row">
            <span class="label">Gender</span>
            <span class="value" id="disp-gender"></span>
        </div>
        <div class="info-row">
            <span class="label">Email</span>
            <span class="value" id="disp-email"></span>
        </div>

        <button class="logout-btn" onclick="logout()">
            <span>Logout</span>
        </button>
    </div>

    <script>
        // ലോഗിൻ സമയത്ത് നൽകിയ വിവരങ്ങൾ ഇവിടെ കാണിക്കുന്നു
        document.getElementById('disp-name').innerText = localStorage.getItem('userName') || "Not set";
        document.getElementById('disp-age').innerText = localStorage.getItem('userAge') || "Not set";
        document.getElementById('disp-gender').innerText = localStorage.getItem('userGender') || "Not set";
        document.getElementById('disp-email').innerText = localStorage.getItem('userEmail') || "Not set";

        // ആദ്യത്തെ അക്ഷരം ലോഗോയിൽ കാണിക്കാൻ
        const name = localStorage.getItem('userName');
        if(name) document.getElementById('initial').innerText = name.charAt(0).toUpperCase();

        function logout() {
            localStorage.clear(); // വിവരങ്ങൾ നീക്കം ചെയ്യുന്നു
            window.location.href = 'login.html'; // തിരികെ ലോഗിൻ പേജിലേക്ക്
        }
    </script>
</body>
</html>

