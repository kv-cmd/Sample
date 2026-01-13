document.getElementById('waitlistForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    const statusMsg = document.getElementById('formStatus');
    if(email) {
        statusMsg.style.color = '#64ffda';
        statusMsg.innerText = "Thanks! You're on the list.";
        this.reset();
        console.log(`New lead: ${email}`);
    }
});
