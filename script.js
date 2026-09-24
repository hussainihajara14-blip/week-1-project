const subtitle = document.querySelector("subtitle");

subtitle.textContent = "I am from soko3to state"

const button = document.createElement("button");
button.textContent = "click me";
button.style.backgroundColor = "lightblue";
button.style.margin = "0 10px";

const about = document.querySelector("#about");
about.appendChild(button);

button.addEventListener("click", function() { 
    const message = document.createElement("p");
    message.textContent = "You have clicked the button";
    about.appendChild(message);
    message.style.color = "reen";
    button.style.backgroundColor = "green"
})




const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const sucessMessage = document.createElement("p");
sucessMessage.style.color = "green";
sucessMessage.style.margin = "20px";
sucessMessage.style.fontsize = "18px";

const contactsection = document.querySelector("#contact");


    form.addEventListener("submit", function(event) {
         event.preventDefault()

         const formData = {
            name: nameinput.value,
            email: emailinput.value,
            message: messageinput.value
         };

         sucessMessage.textContent = `Hello, ${formData.name}, We have received your message: ${formData.message}`
         contactsection.appendChild(sucessMessage);
        })
