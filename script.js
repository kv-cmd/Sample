document.getElementById('waitlistForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input').value;
    const statusMsg = document.getElementById('formStatus');
    
    if(email) {
        // Simulate API call
        statusMsg.style.color = '#64ffda';
        statusMsg.innerText = "Thanks! You're on the list.";
        this.reset();
        
        // Log to console (in real life, send to database)
        console.log(`New lead: ${email}`);
    }
});
