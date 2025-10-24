// Function to generate age options for the dropdown list
 function generateAgeOptions() {     const ageSelect = document.getElementById('age');     for (let i = 18; i <= 99; i++) {         const option = document.createElement('option');         option.value = i;         option.textContent = i;         ageSelect.appendChild(option);     } } 
 
// Event listener for form submission 
document.getElementById('registration-form').addEventListener('submit' , function(event) {     event.preventDefault(); // Prevents the form from submitting normally          
//Get form data   
  const firstName = document.getElementById('first-name').value;     const lastName = document.getElementById('last-name').value;     const phone = document.getElementById('phone').value;     const email = document.getElementById('email').value;     const age = document.getElementById('age').value;     const gender = document.querySelector('input[name="gender"]:checked'); 
         // Simple validation (can be more complex)  
            if (!gender) {         alert("Please select gender");        return;     }          // Display a confirmation message   
              alert( 'Thank you     ، ${firstName} ${lastName} Your information has been received . We will contact you soon via email . ${email}');          // Reset the form   
                this.reset(); }); 
 
// Call the function when the page loads
 document.addEventListener('DOMContentLoaded', generateAgeOptions);
