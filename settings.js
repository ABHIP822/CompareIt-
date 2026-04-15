window.onload = function() {
    // ലോഗിൻ ചെയ്യുമ്പോൾ നിങ്ങൾ നൽകിയ കീ (Key) അനുസരിച്ച് ഇവിടെ മാറ്റം വരുത്തുക
    const name = localStorage.getItem('userName') || "Not set";
    const age = localStorage.getItem('userAge') || "Not set";
    const gender = localStorage.getItem('userGender') || "Not set";
    const email = localStorage.getItem('userEmail') || "Not set";

    // വിവരങ്ങൾ ഡിസ്‌പ്ലേ ചെയ്യുന്നു
    document.getElementById('disp-name').innerText = name;
    document.getElementById('disp-age').innerText = age;
    document.getElementById('disp-gender').innerText = gender;
    document.getElementById('disp-email').innerText = email;

    // പേരിന്റെ ആദ്യ അക്ഷരം ഐക്കണിൽ മാറ്റുന്നു
    if (name !== "Not set") {
        document.getElementById('initial').innerText = name.charAt(0).toUpperCase();
    }
};

function logout() {
    if (confirm("Are you sure you want to log out?")) {
        // ലോഗിൻ പേജിലേക്ക് പോകുന്നു
        window.location.href = 'login.html';
    }
}
