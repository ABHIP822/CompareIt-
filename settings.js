document.getElementById('logout-btn').addEventListener('click', function() {
    const confirmLogout = confirm("Are you sure you want to log out?");
    if (confirmLogout) {
        // ലോഗ് ഔട്ട് ചെയ്ത ശേഷം ഹോം പേജിലേക്ക് പോകുന്നു
        window.location.href = "home.html"; 
    }
});
