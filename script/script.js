document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('contact-form');
    const resultBox = document.getElementById('result-box');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const message = document.getElementById('message').value;

        const genderValue = gender ? gender.value : 'Not specified';

        const formattedDate = date
            ? new Date(date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
              })
            : 'Not specified';

        resultBox.innerHTML = `
            <h3>Submitted Data</h3>
            <p><strong>Name:</strong> ${name || 'Not provided'}</p>
            <p><strong>Date:</strong> ${formattedDate}</p>
            <p><strong>Gender:</strong> ${genderValue}</p>
            <p><strong>Message:</strong> ${message || 'No message'}</p>
        `;

        form.reset();
    });

});
