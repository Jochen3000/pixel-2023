/**
 * whatsapp simulation
 */

const whatsApp = () => {

    /* select elements and hide */
    const isTyping = document.querySelector('.contact-tap');
    const messagesComputer = document.querySelectorAll('.message-computer');
    const messagesUser = document.querySelectorAll('.message-user');
    const textEntryName = document.querySelector('.text-entry-name');
    const messageSend = document.querySelector('.message-send');
    const textEntryMessage = document.querySelector('.text-entry-message');
    const textEntryContact = document.querySelector('.text-entry-contact');
    const textEntryButton = document.querySelector('.submit-arrow-button');
    const formSubmitButton = document.querySelector('.submit-button');
    const whatsappForm = document.querySelector(".whatsapp-form");
    const chatContainer = document.querySelector('.chat-container');
    const chatContainerInner = document.querySelector('.chat-container-inner');


    /* display time in top bar */
    currentTime()
    setInterval(currentTime, 30000);

    function currentTime() {
        let d = new Date();
        let hours = d.getHours();
        let minutes = d.getMinutes()
        let minutesString = minutes <= 9 ? (`0${minutes}`) : (`${minutes}`);
        document.querySelector('.time-display').innerHTML = `${hours}:${minutesString}`;
    }

    isTyping.classList.add('hide');
    messagesUser[0].classList.add('hide');
    messagesUser[1].classList.add('hide');
    messagesUser[2].classList.add('hide');
    messagesComputer[1].classList.add('hide');
    messagesComputer[2].classList.add('hide');
    messagesComputer[3].classList.add('hide');
    messagesComputer[4].classList.add('hide');
    textEntryMessage.classList.add('hide');
    textEntryContact.classList.add('hide');
    formSubmitButton.classList.add('hide');

    // function to display computer messages
    const displayComputerMessage = (id) => {
        isTyping.classList.remove('hide');
        setTimeout(function () {
            isTyping.classList.add('hide');
            messagesComputer[id].classList.remove('hide');
            scrollUp();
        }, 1000);
    }

    // Show first message on scroll visible
    const appear = messagesComputer[0];
    const cb = function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                displayComputerMessage(0);
            }
        });
    }

    // Show second message on focus textEntryName 
    textEntryName.addEventListener("focus", () => {
        displayComputerMessage(1);
    });

    // Press submit button to send user messages
    textEntryButton.addEventListener("click", () => {
        displayUserMessage();
    });

    // Press enter key to send user messages
    whatsappForm.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            displayUserMessage();
            e.preventDefault();
        }
    });

    // scroll up window if needed
    const scrollUp = () => {
        if (chatContainerInner.clientHeight > chatContainer.clientHeight) {
            chatContainer.scrollTop = chatContainerInner.clientHeight - chatContainer.clientHeight;
        }
    }

    // Check which fields are filled and display
    const displayUserMessage = () => {
        if (textEntryContact.value) {
            messagesUser[2].firstElementChild.firstElementChild.firstElementChild.innerText = textEntryContact.value;
            messagesUser[2].classList.remove('hide');
            textEntryButton.classList.add('hide');
            displayComputerMessage(4);
            formSubmitButton.click();
            scrollUp();
        }
        else if (textEntryMessage.value) {
            messagesUser[1].firstElementChild.firstElementChild.firstElementChild.innerText = textEntryMessage.value;
            messagesUser[1].classList.remove('hide');
            textEntryContact.classList.remove('hide');
            textEntryContact.focus();
            textEntryMessage.classList.add('hide');
            displayComputerMessage(3);
            scrollUp();
        }
        else if (textEntryName.value) {
            messagesUser[0].firstElementChild.firstElementChild.firstElementChild.innerText = textEntryName.value;
            messagesUser[0].classList.remove('hide');
            textEntryMessage.classList.remove('hide');
            textEntryMessage.focus();
            textEntryName.classList.add('hide');
            displayComputerMessage(2);
            scrollUp();
        }
    }

    // netlify form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => {
                setTimeout(function () {
                    messageSend.classList.add('hide');
                    console.log('form submitted');
                }, 1000);
            })
            .catch((error) => alert(error));
    };

    document
        .querySelector("form")
        .addEventListener("submit", handleSubmit);
}

export default defineNuxtPlugin((nuxtApp) => {
    // Doing something with nuxtApp
    nuxtApp.whatsApp = whatsApp;
})