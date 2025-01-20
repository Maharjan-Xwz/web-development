//--------------feeback-----//
function submitfeedback() {
    // filling the form
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const rating = document.querySelector('input[name="rating"]:checked')?.value;
    const likes = document.getElementById('likes').value.trim();
    const suggestions = document.getElementById('suggestions').value.trim();
    const formMessage = document.getElementById('formMessage'); // Ensure it exists in HTML

    // Checking the form
    if (rating && name && email) {
        // Preparing the form
        const feedbackData = {
            name: name || 'Anonymous',
            email: email || 'Not provided',
            rating: rating,
            likes: likes,
            suggestions: suggestions,
        };

        // Displaying success
        if (formMessage) {
            formMessage.textContent = 'Thank you, ' + (name || 'Anonymous') + '! Your feedback has been submitted successfully.';
            formMessage.className = 'successful';
            formMessage.style.display = 'block';
        }

        console.log('Feedback submitted:', feedbackData);

        // Clear 
        document.getElementById('feedbackform').reset();
    } else {
        
        alert('Please fill out all required fields (Rating, emails, and names).');
    }
}


   


//----------------contact-----------------//
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    if (name && email && message) {
        formMessage.textContent = 'Thank you, ' + name + '! Your message has been sent successfully.';
        formMessage.className = 'message success';
        formMessage.style.display = 'block';

        // Clearing the form
        document.getElementById('contactForm').reset();
    } else {
        formMessage.textContent = 'Please fill out all fields before submitting.';
        formMessage.className = 'message error';
        formMessage.style.display = 'block';
    }
});


//-------------------------product you may like----------------------//

function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}