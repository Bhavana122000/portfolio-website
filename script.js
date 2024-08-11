document.getElementById("contact_form").addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name==='' || email==='' || message===''){
        alert("Please fill in all fields.");
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!emailPattern.test(email)){
        alert("Please enter a valid email address.");
        return;
    }

    //form submission using formspree
    fetch('https://formspree.io/f/mqazblnb',{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, message})
    }).then(response => {
        if(response.ok){
            alert('Thank you! your message has been sent.');
            document.getElementById("contact_form").reset();
        }else{
            alert('Oops! There was a problem with your submissio.');
        }
    })
    .catch(error => {
        alert("Error:" + error.message);
    });
})