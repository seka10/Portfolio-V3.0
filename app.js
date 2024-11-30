(function() {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

const words = ["Sayed Ayman", "Front-End Developer", "Web Designer", "UI/UX Expert", "Software Engineer"];
let wordIndex = 0; // Index for the current word
let charIndex = 0; // Index for the current character
const textElement = document.getElementById("text");

function typeWriter() {
    const currentWord = words[wordIndex];
    
    // Add the next character of the word
    textElement.textContent = currentWord.slice(0, charIndex);
    charIndex++;

    // If the word is complete
    if (charIndex > currentWord.length) {
        // Wait a moment before clearing the text and moving to the next word
        setTimeout(() => {
            deleteWord();
        }, 1000);
    } else {
        // Call the function again to continue typing
        setTimeout(typeWriter, 100);
    }
}

function deleteWord() {
    const currentWord = words[wordIndex];
    
    // Remove the last character of the word
    textElement.textContent = currentWord.slice(0, charIndex);
    charIndex--;

    // If the word is fully deleted
    if (charIndex < 0) {
        // Move to the next word and reset the charIndex
        wordIndex = (wordIndex + 1) % words.length;
        charIndex = 0;
        // Start typing the next word
        setTimeout(typeWriter, 500);
    } else {
        // Call the function again to continue deleting
        setTimeout(deleteWord, 50);
    }
}

// Start the typewriter effect
typeWriter();

function sendMail(event) {
    event.preventDefault(); // Prevent form submission

    var params = {
        name: document.getElementById("username").value,
        number: document.getElementById("num").value,
        email: document.getElementById("mail").value,
        message: document.getElementById("fullMessage").value,
    };

    emailjs.send("service_93p1flp", "template_3hnag25", params)
        .then((res) => {
            console.log(res);
            alert("Thanks! Your message was sent successfully!");
        })
        .catch((err) => console.log(err));
};

