function displaySummary(data) {
    // This function demonstrates DOM manipulation (Part 4).
    const summarySection = document.getElementById('survey-summary');
    const summaryMessageEl = document.getElementById('summary-message');
    const summaryContentEl = document.getElementById('summary-content');

    // Example: Display the summary data in the DOM
    summarySection.style.display = 'block';
    summaryMessageEl.textContent = `Thank you, ${data.ownerName}, for submitting your survey!`;
    summaryContentEl.innerHTML = `
        <p>Pet Name: ${data.petName}</p>
        <p>Pet Age: ${data.petAge}</p>
        <p>Selected Services: ${data.services.join(', ')}</p>
        <p>Comments: ${data.comments}</p>
    `;
}

// Add the event listener outside the displaySummary function
document.addEventListener('DOMContentLoaded', function() {
    const surveyForm = document.getElementById('survey-form');
    if (!surveyForm) return;

    surveyForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Gather data from the form fields
        const ownerName = document.getElementById('owner-name').value;
        const petName = document.getElementById('pet-name').value;
        const petAge = document.getElementById('pet-age').value;
        const comments = document.getElementById('comments').value;

        const selectedServices = [];
        const checkedBoxes = document.querySelectorAll('input[name="service"]:checked');
        
        for (const checkbox of checkedBoxes) {
            selectedServices.push(checkbox.value);
        }
        
        // Organize all data 
        const surveyData = {
            ownerName: ownerName,
            petName: petName,
            petAge: petAge,
            services: selectedServices,
            comments: comments
        };

        console.log('Survey Data Submitted:', surveyData);
        displaySummary(surveyData);
    });
});