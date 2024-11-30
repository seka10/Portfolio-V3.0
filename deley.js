const scrollRevealOption = {
    distance: "50px",
    origin: "left",
    duration: 1000,
};
ScrollReveal().reveal(".main-content .h-shape", {
    ...scrollRevealOption,
    origin: "right",
    delay: 100,})

    var input = document.querySelector("#phone");
    var iti = window.intlTelInput(input, {
      initialCountry: "eg", 
      preferredCountries: ["eg", "sa"],  
      separateDialCode: true 
    });    