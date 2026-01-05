//coding
console.log("Hello, World!");
console.log("This is Mika's index.js file.");



// My birthday


const birthdayMonth= 2; // March
const birthdayDay= 7;

function updateCountdown() {
    const now = new Date();
    let year = now.getFullYear();

    // Create birthday date for this year
    let birthday = new Date(year, birthdayMonth, birthdayDay);

    // If birthday has passed this year, set to next year
    if (now > birthday) {
        birthday = new Date(year + 1, birthdayMonth, birthdayDay);
    }

    const diff = birthday - now;

    if (diff <= 0) {
        document.getElementById("countdown").textContent = "🎉 Happy Birthday! 🎉";
        return;
    }

    // Calculate time parts
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").textContent =
        `${days}d ${hours}h ${minutes}m ${seconds}s until Mika's birthday 🎂`;
}

// Update every second
document.addEventListener('DOMContentLoaded', () => {
    updateCountdown(); // Call once immediately
    setInterval(updateCountdown, 1000); //1000 milliseconds = 1 second
});
updateCountdown(); // Initial call