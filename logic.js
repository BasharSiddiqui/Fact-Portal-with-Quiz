const facts = [
    "The peregrine falcon is the fastest bird in the world.",
    "The Andes is the longest mountain range in the world.",
    "The polar bear is the largest carnivorous mammal in the world.",
    "The bee hummingbird is the smallest bird in the world.",
    "The Challenger Deep is the deepest part of the ocean.",
    "The box jellyfish is the most venomous animal in the world.",
    "The wandering albatross has the largest wingspan of any bird.",
    "A grove of aspen trees in Utah is the oldest known living organism on Earth.",
    "The sailfish is the fastest fish in the world.",
    "The Rafflesia arnoldii is the largest flower in the world.",
];  
const factContainer = document.getElementById("fact-container");
const animalImage = document.querySelector(".animal");
function displayFact() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factContainer.classList.add("fade-in");
    setTimeout(() => {
        factContainer.textContent = randomFact;
        factContainer.classList.remove("fade-in");
    }, 350);
    if (randomFact.includes("mountain")) {
        animalImage.src = "range.jpg";
    } 
    else if (randomFact.includes("polar bear")) {
        animalImage.src = "bear.png";
    }
    else if (randomFact.includes("peregrine")) {
        animalImage.src = "bird.jpg";
    }
    else if (randomFact.includes("bee")) {
        animalImage.src = "tinybird.jpg";
    }
    else if (randomFact.includes("jellyfish")) {
        animalImage.src = "jelly.jpg";
    }
    else if (randomFact.includes("albatross")) {
        animalImage.src = "span.jpg";
    }
    else if (randomFact.includes("trees")) {
        animalImage.src = "trees.jpg";
    }
    else if (randomFact.includes("arnoldii")) {
        animalImage.src = "flower.jpg";
    }
    else if (randomFact.includes("ocean")) {
        animalImage.src = "deep.jpg";
    }
    else {
        animalImage.src = "fish.jpg";
    }
    
}
displayFact();
const nextButton = document.getElementById("next-btn");
nextButton.addEventListener("click", displayFact);
