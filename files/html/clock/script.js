setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock(){
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() /60 //divide by 60 to know how far to rotate the seconds hand
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) /60 
    const HoursRatio = ( minutesRatio + currentDate.getHours()) /12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, HoursRatio)
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()