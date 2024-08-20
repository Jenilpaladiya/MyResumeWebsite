let JavascriptCards = document.querySelector(".JavascriptCards");
let backgroundStaicImage = document.querySelector(".backgroundStaicImage");

var wordpressProjects = [
    {
        "title": "Carbon Square - Lab Grown Diamond Website",
        "description": "Designed and developed the Carbon Square Diamond website.Implemented advanced filtering features to enhance user experience and streamline content accessibility.",
        "imgUrl":"src/images/website-laptop-images/carbon-square-min.png",
        "websiteUrl":"https://carbonsquare.co/"

    },
    {
        "title": "Arin Luxury - Diamond Jewellery Website",
        "description": "Custom-designed and developed a Wordpress e-commerce website for Arin Luxury, catering to specific client requirements. Implemented a user-friendly system for product management and customer interaction",
        "imgUrl":"src/images/website-laptop-images/arin_luxury.png",
        "websiteUrl":"https://arinluxury.com/"

    },
    {
        "title": "Glow Lab Diamonds - Diamond Jewellery Website",
        "description": "Custom-designed and developed a Shopify e-commerce website for House of Heere, catering to specific client requirements. Implemented a user-friendly system for product management and customer interaction.",
        "imgUrl":"src/images/website-laptop-images/glowlabdiamonds_laptop.png",
        "websiteUrl":"https://glowlabdiamonds.com/"
    },
    {
        "title": "Agile Solutions Consultants Portfolio Website",
        "description": "Developed a portfolio website for Agile Solutions Consultants, tailored to their specific requirements and branding. I mplemented a contact form to facilitate communication with visitors and collect their email addresses.",
        "imgUrl":"src/images/website-laptop-images/agile-laptop-image.png",
        "websiteUrl":"http://agilesolutionsconsultants.com/"
    }
];

var javascriptProjects = [
    {
        "title": "Word Counter",
        "img": "src/images/word-counter.jpg",
        "description": "You can check character, Words, Sentences, Paragraphs by pasting text.",
        "buttonText": "Count Your Text",
        "buttonUrl": "https://raw.githack.com/Jenilpaladiya/WordCounter/main/index.html"
    },
    {
        "title": "Dice Roll",
        "img": "src/images/diceroll.jpg",
        "description": "You can scroll dice and Generate Random Number.",
        "buttonText": "Roll your Dice",
        "buttonUrl": "https://raw.githack.com/Jenilpaladiya/DiceRoll/main/index.html"
    },
    {
        "title": "Calculator",
        "img": "src/images/calculator.webp",
        "description": "Simple Calculatorto sum, extract and many more.",
        "buttonText": "Calulate now",
        "buttonUrl": "https://raw.githack.com/Jenilpaladiya/Calculator/main/index.html"
    },
    {
        "title": "Check Town Weather",
        "img": "src/images/check weather.jpg",
        "description": "You can check your city and country Weather by simple search it",
        "buttonText": "Check Weather",
        "buttonUrl": "https://raw.githack.com/Jenilpaladiya/CheckYourTownWeather/main/index.html"
    },
    {
        "title": "Music Player",
        "img": "src/images/music player.jpg",
        "description": "You can listen add favorite music and control it here",
        "buttonText": "Open Music Player",
        "buttonUrl": "https://raw.githack.com/Jenilpaladiya/MusicPlayer/main/index.html"
    },
    {
        "title": "Memory Card Game",
        "img": "src/images/memory-game.jpg",
        "description": "Swipe card and match two cards",
        "buttonText": "Play Now",
        "buttonUrl": "https://raw.githack.com/Jenilpaladiya/MemoryCardGame/main/index.html"
    },
    {
        "title": "Joke Generator",
        "img": "src/images/joke generator.jpg",
        "description": "Using of this, I will get joke from api and fetch in Html",
        "buttonText": "Read Jokes",
        "buttonUrl": "https://raw.githack.com/Jenilpaladiya/JokeGenerator/main/index.html"
    },
    {
        "title": "Box Color Game",
        "img": "src/images/box color game generator.webp",
        "description": "You can hover on box and change random color automatically.",
        "buttonText": "Play Now",
        "buttonUrl": "https://raw.githack.com/Jenilpaladiya/BoxColorGame/main/index.html"
    },
    {
        "title": "Stop Watch",
        "img": "src/images/stop-watch.jpg",
        "description": "Create Stop Watch, In this you can start, Lap, Stop and reset time.",
        "buttonText": "Start Stop Watch",
        "buttonUrl": "https://raw.githack.com/Jenilpaladiya/StopWatch/main/index.html"
    },
    {
        "title": "Counter Number",
        "img": "src/images/counter number.jpg",
        "description": "You can count people for any event",
        "buttonText": "Start Stop Watch",
        "buttonUrl": "https://raw.githack.com/Jenilpaladiya/CounterNumber/main/index.html"
    },
    {
        "title": "Random Password Generator",
        "img": "src/images/random password generator.png",
        "description": "You can generate password using number, character and special character.",
        "buttonText": "Generate Password",
        "buttonUrl": "https://raw.githack.com/Jenilpaladiya/RandomPasswordGenerator/main/index.html"
    },
    {
        "title": "To-do-list",
        "img": "src/images/to do list.jpg",
        "description": "You can make your task list and track it, according to your need.",
        "buttonText": "Start Stop Watch",
        "buttonUrl": "https://raw.githack.com/Jenilpaladiya/To-do-list/main/todolist.html"
    }

]


function fetchJavascriptCards(javascriptProjects) {

    console.log(javascriptProjects.length);

    for (let i = 0; i < javascriptProjects.length; i++) {
        JavascriptCards.innerHTML += `
        <div class="col-md-3 mb-3 JavascriptProjectCard"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <div class="card col-md-12" style="width: 18rem;" >
                    <img class="card-img-top" src="${javascriptProjects[i].img}" alt="Card image cap">
                    <div class="card-body flex-column d-flex">
                        <h5 class="card-title">${javascriptProjects[i].title}</h5>
                        <p class="card-text">${javascriptProjects[i].description}</p>
                        <a href="${javascriptProjects[i].buttonUrl}" class="mt-auto btn-modern btn-modern-primary text-center">${javascriptProjects[i].buttonText}</a>
                    </div>
                </div>
            </div>
    `;
        console.log(javascriptProjects[0].title);
    }



    for (i = 0; i < wordpressProjects.length; i++) {


        backgroundStaicImage.innerHTML += `
        <div class="carousel-item bannerSlide">
                    <div class="wordpreProject-caption row justify-content-center">
                        <div class="col-md-4">
                            <h5>${wordpressProjects[i].title}</h5>
                            <p>${wordpressProjects[i].description}</p>
                            <button class="btn-modern btn-modern-primary exploreNowButton"><a href="${wordpressProjects[i].websiteUrl}" target="_blank" >Explore Now</a></button>

                        </div>
                        <div class="col-md-4">
                            <img src="${wordpressProjects[i].imgUrl}"
                                 class="d-block w-100">
                        </div>
                    </div>
                </div>
    `;
    document.querySelector(".backgroundStaicImage .bannerSlide:first-child").classList.add("active");

    }
}
fetchJavascriptCards(javascriptProjects);