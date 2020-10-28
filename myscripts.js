function mottoColor() {
    document.getElementById("motto").style.color = "#ec9706";
    document.getElementById("motto").style.transition = "all 0.5s ease-in-out";
}

function mottoRevert() {
    document.getElementById("motto").style.color = "#c95b0c";
    document.getElementById("motto").style.transition = "all 0.5s ease-in-out";
}

/* Index Email Validation: https://www.w3resource.com/javascript/form/email-validation.php is the link I utilized to help me validate the email form. */
function validateEmail(inputText) {
    var emailsubscribe = document.getElementById('enteremail').value;
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if(inputText.value.match(mailFormat)) {
        document.getElementById("message").innerHTML = ('Check ' + emailsubscribe + ' to be updated on Precious Pets.');
        alert('Check ' + emailsubscribe + ' to be updated on Precious Pets.');
    } else {
        document.getElementById("message").innerHTML = "You have entered an invalid email address.";
    }
}

function changeForm() {
    var formType = document.getElementById('how?').value;
    if (formType == 'donation') {
        document.getElementById("donationform").style.display = "block";
        document.getElementById("volunteerform").style.display = "none";
    } else if (formType == 'volunteer') {
        document.getElementById("donationform").style.display = "none";
        document.getElementById("volunteerform").style.display = "block";
    }
}

/* Whereas the subscribe email has both input data formatting validation and form fill-in validation, these functions
only validates whether the required form fields have been filled in. Checking the data formatting for these forms would
simply take too much of my time. */

function donationValidation() {
    var firstname = document.getElementById("first").value;
    var lastname = document.getElementById("last").value;
    var email = document.getElementById("address").value;
    var call = document.getElementById("phone").value;
    var donationchoices = document.getElementById("donationchoices").value;
    var donationamount = document.getElementById("donationamount").value;
    var creditcard = document.getElementById("creditcard").value;
    var cvv = document.getElementById("cvv").value;
    var expirationdate = document.getElementById("expirationdate").value;

    // JS Operators Reference: https://www.w3schools.com/jsref/jsref_operators.asp
    if (firstname == "" || lastname == "" || email == "" || call == "" || donationchoices == "blank" ||
    donationamount == "" || creditcard == "" || cvv == "" || expirationdate == "") {
        /* So what the if statement means is if any of the inputs above are blank, it will not submit the form and
        an error message will be displayed. If all the inputs above are filled, then it will perform another function. */
        document.getElementById("formresult").innerHTML = 'Your donation form is incomplete.';
        /* Return: https://www.w3schools.com/JSREF/jsref_return.asp */
        return false;
    } else {
        // Function with a function comes from currently studying DSDN142
        contributeMessage();
    }
}

function contributeMessage() {
    var payFrequency = document.getElementById('donationchoices').value;

    if(payFrequency == 'once') {
        document.getElementById("formresult").innerHTML = 'Thank you for your charity.';
        alert('Thank you for your charity.');
    } else if(payFrequency == 'monthly') {
        document.getElementById("formresult").innerHTML = 'Your ongoing support is precious to us. Feel free to contact us if you need to revise your monthly donation.'
        alert('Your ongoing support is precious to us. Feel free to contact us if you need to revise your monthly donation.');
    }
}

function applicationValidation() {
    var first = document.getElementById("firstname").value;
    var last = document.getElementById("lastname").value;
    var address = document.getElementById("email").value;
    var phone = document.getElementById("call").value;
    var birthday = document.getElementById("birthday").value;
    var whywork = document.getElementById("whywork").value;
    var experience = document.getElementById("experience").value;
    var hearabout = document.getElementById("hearabout").value;
    var hours = document.getElementById("hours").value;

    // JS Operators Reference: https://www.w3schools.com/jsref/jsref_operators.asp
    if (firstname == "" || lastname == "" || email == "" || call == "" || birthday == "" ||
    whywork == "" || experience == "" || hours == "" || hearabout == "empty") {
        /* So what the if statement means is if any of the inputs above are blank, it will not submit the form and
        an error message will be displayed. If all the inputs above are filled, then it will perform another function. */
        document.getElementById("applicationresult").innerHTML = 'Your volunteer application is incomplete.';
        /* Return: https://www.w3schools.com/JSREF/jsref_return.asp */
        return false;
    } else {
        // Function with a function comes from currently studying DSDN142
        document.getElementById("applicationresult").innerHTML = 'Your volunteer form has been sent. We will contact you within the next couple of working days.'
        alert('Your volunteer form has been sent. We will contact you within the next couple of working days.');
    }
}

function questionValidation() {
    var full = document.getElementById("full").value;
    var myemail = document.getElementById("myemail").value;
    var subject = document.getElementById("subjectline").value;
    var messagebox = document.getElementById("messagebox").value;

    // JS Operators Reference: https://www.w3schools.com/jsref/jsref_operators.asp
    if(full !== "", myemail !== "", subject !== "", messagebox !== "") {
        /* So what the if statement means is if all the inputs above are not blank, it will submit the form and
        display a successful message. If any of the inputs above are not filled, then it not submit the form and an error message will be displayed. */
        document.getElementById("messageresult").innerHTML = 'We appreciate your queries. A Precious Pets representative will reply to you as soon as they can.';
        alert('We appreciate your queries. A Precious Pets representative will reply to you as soon as they can.');
    } else {
        document.getElementById("messageresult").innerHTML = 'Your message is incomplete.';
        return false; /* Return: https://www.w3schools.com/JSREF/jsref_return.asp */
    }
}

function editPlaceholder() {
    // Function with a function comes from currently studying DSDN142
    generateCosts();
    var servicetext = document.getElementById("servicechoice").value;

    // The Service Costs
    document.getElementsByName("AdditionalInformation")[0].value="";
    document.getElementsByName('appointment')[0].value="";
    if(servicetext == "boarding") {
        // Placeholder Text: https://stackoverflow.com/questions/13506481/change-placeholder-text#:~:text=If%20you%20wanna%20use%20Javascript,see%20the%20below%20code...&text=I%20have%20been%20facing%20the,placeholder%20text%20won%27t%20show.
        document.getElementsByName('appointment')[0].placeholder="Drop-off time? Check with our hours.";
        document.getElementsByName('AdditionalInformation')[0].placeholder='Is there anything else we need to know? How long will you board your pet? How does your pet behave with other animals?';
    } else if(servicetext == "grooming") {
        document.getElementsByName('appointment')[0].placeholder="Appointment time? Check with our hours."
        document.getElementsByName('AdditionalInformation')[0].placeholder="Is there anything else we need to know? Any part of your pet's body you want especially cleaned?";
    } else if(servicetext == "socializing") {
        document.getElementsByName('appointment')[0].placeholder="Session start? Check with our hours.";
        document.getElementsByName('AdditionalInformation')[0].placeholder='Is there anything else we need to know? How trained and socialized is your pet already?';
    } else if(servicetext == "vetting") {
        document.getElementsByName('appointment')[0].placeholder="Appointment time? Check with our hours."
        document.getElementsByName('AdditionalInformation')[0].placeholder='Is there anything else we need to know? Does your pet have any injuries or conditions? What kind of checkup are you looking for?';
    } else if(servicetext == "visits") {
        document.getElementsByName('appointment')[0].placeholder="Drop-off time? Check with our hours.";
        document.getElementsByName('AdditionalInformation')[0].placeholder='Is there anything else we need to know which might affect your experience with our pets? How long do you want the visit to last?';
    } else {
        document.getElementsByName('appointment')[0].placeholder="Appointment time? Check with our hours."
        document.getElementsByName('AdditionalInformation')[0].placeholder='Is there anything else we need to know?';
    }
}

function generateCosts() {
    var service = document.getElementById("servicechoice").value;
    var pet = document.getElementById("petchoice").value;
    var servicecost;
    var petfactor;

    // The Service Costs
    if(service == "boarding") {
        var servicecost = 60;
    } else if(service == "grooming") {
        var servicecost = 90;
    } else if(service == "socializing") {
        var servicecost = 150;
    } else if(service == "vetting") {
        var servicecost = 180;
    } else if(service == "visits") {
        var servicecost = 120;
    } else {
        var servicecost = 0;
    }

    // The Pet Factor
    if(pet == "bigdog") {
        var petfactor = 1.4;
    } else if(pet == "smalldog") {
        var petfactor = 1.2;
    } else if(pet == "cat") {
        var petfactor = 1;
    } else if(pet == "rodent") {
        var petfactor = 0.6;
    } else if(pet == "rabbit") {
        var petfactor = 0.8;
    } else {
        var petfactor = 0;
    }

    var exactprice = (servicecost * petfactor) * 1.15;
    // Rounding To 2 Decimal Places: https://www.codegrepper.com/code-examples/javascript/javascript+round+to+2+decimal+places
    var finalprice = exactprice.toFixed(2);

    // Adding The Text
    if(pet == "fluff") {
        document.getElementById("costs").innerHTML = 'Please choose the kind of pet we are servicing.';
    } else if(service == "filler") {
        document.getElementById("costs").innerHTML = 'Please choose one of our services.';
    } else if(service == "boarding") {
        document.getElementById("costs").innerHTML = '<b>How much will it cost?</b> $' + finalprice + ' per day.';
    // JS Operators Reference: https://www.w3schools.com/jsref/jsref_operators.asp
    } else if(service == "visits" || service == "socializing") {
        document.getElementById("costs").innerHTML = '<b>How much will it cost?</b> $' + finalprice + ' per session.';
    } else if(service == "grooming") {
        document.getElementById("costs").innerHTML = '<b>How much will it cost?</b> $' + finalprice + ' for a full groom.';
    } else {
        document.getElementById("costs").innerHTML = '<b>How much will it cost?</b> $' + finalprice + '.';
    }
}

function bookingValidation() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var tele = document.getElementById("tele").value;
    var bookingdate = document.getElementById("bookingdate").value;
    var appointmenttime = document.getElementById("appointmenttime").value;
    var servicechoice = document.getElementById("servicechoice").value;
    var petchoice = document.getElementById("petchoice").value;
    var additionalinformation = document.getElementById("additionalinformation").value;

    // JS Operators Reference: https://www.w3schools.com/jsref/jsref_operators.asp
    if (name == "" || address == "" || tele == "" || bookingdate == "" || appointmenttime == "" ||
    servicechoice == "filler" || petchoice == "fluff" || additionalinformation == "") {
        /* So what the if statement means is if any of the inputs above are blank, it will not submit the form and
        an error message will be displayed. If all the inputs above are filled, then it will perform another function. */
        document.getElementById("bookingmessage").innerHTML = 'Your booking appointment form is incomplete.';
        /* Return: https://www.w3schools.com/JSREF/jsref_return.asp */
        return false;
    } else {
        // Function with a function comes from currently studying DSDN142
        document.getElementById("bookingmessage").innerHTML = 'Thank you for submitting. We will contact you soon to confirm your booking.';
        alert('Thank you for submitting. We will contact you soon to confirm your booking.');
    }
}
