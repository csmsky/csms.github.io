/* 
Dec 1, 2024 23:59:59 
*/

function countdown() {
    const launchDate = new Date("Nov 13, 2024 20:48:59").getTime();
    const button = document.getElementById("lockBtn");


    const interval = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = launchDate - now;

        if (timeLeft <= 0) {
            clearInterval(interval);
            document.querySelector(".timer").innerHTML = "<h2>Please Proceed :)</h2>";

            button.disabled = false;
            button.innerText = "+1";
            button.onclick = () => {
                window.location.href = "UNINSTALL/index1.html";
            };
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }, 1000);
}

countdown();
