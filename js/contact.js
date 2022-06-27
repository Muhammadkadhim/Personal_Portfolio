window.onload = function () {
    let TEMPLATE = config.EMAIL_JS_TEMPLATE;
    let SERVICE = config.EMAIL_JS_SERVICE;
    document
        .getElementById("contact_form")
        .addEventListener("submit", function (event) {
            event.preventDefault();

            // generate a five digit number for the contact_number variable
            this.contact_number.value = (Math.random() * 100000) | 0;
            // these IDs from the previous steps
            emailjs.sendForm(`${SERVICE}`, `${TEMPLATE}`, this).then(
                function () {
                    alert("Your message was sent successfully!");
                },
                function (error) {
                    console.log("FAILED...", error);
                    alert("Sorry! an error has occured");
                }
            );

            // event.reset();
        });
};
