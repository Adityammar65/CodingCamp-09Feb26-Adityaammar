document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const message = document.getElementById('message').value;
        
        const genderValue = gender ? gender.value : 'Not specified';
        
        const formattedDate = date ? new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }) : 'Not specified';
        
        const alertMessage = `Submitted Information:\n\nName: ${name || 'Not provided'}\nDate: ${formattedDate}\nGender: ${genderValue}\nMessage: ${message || 'No message provided'}`;
        
        alert(alertMessage);
        
        form.reset();
    });
});