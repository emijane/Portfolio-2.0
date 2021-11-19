
// Adds functionality to toggle between dark and light mode themes
const bulb_toggle = document.getElementById('toggle');
const data_toggle = document.querySelectorAll('.data-toggle');
const contact_toggle = document.getElementById("contact");
const input_toggle = document.querySelector('input-toggle');

bulb_toggle.addEventListener("click", function () { 
    // Checks if bulb contains "light-bulb" class
    if ( bulb_toggle.classList.contains('light-bulb') ) {
        bulb_toggle.classList.add('dark-bulb');
        bulb_toggle.classList.remove('light-bulb');

        // Change styles to dark mode
        document.body.classList.add('background-dark');
        document.body.classList.remove('background-light');

        data_toggle.forEach(function (toggle) {
            // toggle is every element basically (current one in the loop)
            toggle.classList.add('text-dark-mode');
        })

        contact_toggle.classList.add('contact-dark');

    } else  {
        // Checks if bulb contains "dark-bulb" class
        ( bulb_toggle.classList.contains('dark-bulb') ) 
        bulb_toggle.classList.add('light-bulb');
        bulb_toggle.classList.remove('dark-bulb');

        // Change styles to light mode
        document.body.classList.add('background-light');
        document.body.classList.remove('background-dark');

        data_toggle.forEach(function (toggle) {
            // toggle is every element basically (current one in the loop)
            toggle.classList.remove('text-dark-mode');
        })

        contact_toggle.classList.remove('contact-dark');

    }
});