let secondsHand = document.querySelector(".sec-hand");
let minuteHand = document.querySelector(".min-hand");
let hourhand = document.querySelector(".hour-hand");

let setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds/60)*360)+90;
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
    
    const mins = now.getMinutes();
    const minDegree = ((mins/60)*360)+90;
    minuteHand.style.transform = `rotate(${minDegree}deg)`;

    const hourDegree = ((mins/12)*360)+90;
    hourhand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);