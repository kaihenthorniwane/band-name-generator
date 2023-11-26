$(".results-wrapper").hide();
$("#form").on('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    function isEmpty(value) {
        return (value == null || value.length === 0);
    }

    // Create a URL-encoded string of form data
    let formData = new URLSearchParams(new FormData(this)).toString();

    let formDataCheck = new FormData(this);
    

    function isFormDataValid(formDataCheck) {
        for (let [key, value] of formDataCheck.entries()) {
            if (value === '' || value === undefined) {
                return false; // Return false if any value is empty or undefined
            }
        }
        return true; // Return true if all values are valid
    }

    // Send the form data using fetch
    if (isFormDataValid(formDataCheck)) {

        // Assuming 'formData' is your FormData object
        const iterator = formDataCheck.entries();

        // Retrieve the first parameter
        const firstParam = iterator.next().value; // This is an array [key, value]

        // Retrieve the second parameter
        const secondParam = iterator.next().value; // This is an array [key, value]

        // If you just need the values
        const firstValue = firstParam[1];
        const secondValue = secondParam[1];

        $('#myText').text("Your pet is named " + firstValue + secondValue);
        $(".results-wrapper").removeClass("error");
        $(".results-wrapper").show();
        $(".results-wrapper").animate({ height: "150px" }, 200, "easeOutCubic");
    } else {
        $('#myText').text("Please fill all fields.");
        $(".results-wrapper").addClass("error");
        $(".results-wrapper").show();
        $(".results-wrapper").animate({ height: "150px" }, 200, "easeOutCubic");
    }
});
