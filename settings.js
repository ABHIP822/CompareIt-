<script>
    // പേജ് തുറക്കുമ്പോൾ തന്നെ വിവരങ്ങൾ അപ്ഡേറ്റ് ചെയ്യാൻ
    window.onload = function() {
        // LocalStorage-ൽ നിന്ന് വിവരങ്ങൾ എടുക്കുന്നു
        const name = localStorage.getItem('userName') || "Not Set";
        const age = localStorage.getItem('userAge') || "Not Set";
        const gender = localStorage.getItem('userGender') || "Not Set";
        const email = localStorage.getItem('userEmail') || "Not Set";

        // പേജിലെ സ്പാനുകളിലേക്ക് വിവരങ്ങൾ നൽകുന്നു
        document.getElementById('disp-name').innerText = name;
        document.getElementById('disp-age').innerText = age;
        document.getElementById('disp-gender').innerText = gender;
        document.getElementById('disp-email').innerText = email;

        // പേരിന്റെ ആദ്യ അക്ഷരം ഐക്കണിൽ കാണിക്കാൻ
        if (name !== "Not Set") {
            document.getElementById('initial').innerText = name.charAt(0).toUpperCase();
        }
    };

    // ലോഗൗട്ട് ഫങ്ക്ഷൻ
    function logout() {
        if(confirm("ലോഗൗട്ട് ചെയ്യണോ?")) {
            // വിവരങ്ങൾ വേണമെന്നുണ്ടെങ്കിൽ clear() ചെയ്യേണ്ടതില്ല
            // നേരെ ലോഗിൻ പേജിലേക്ക് വിടാം
            window.location.href = 'login.html';
        }
    }
</script>
