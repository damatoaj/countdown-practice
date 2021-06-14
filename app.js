const birthDay = document.querySelector('input[type="date"]');
const male = document.getElementById('male');
const female = document.getElementById('female');
const smoker = document.getElementById('smoker');
const nonsmoker = document.getElementById('nonsmoker');

console.log(birthDay, male, female, smoker, nonsmoker)
console.log(birthDay.value)
console.log(male.value)
console.log(female.value)

const countdown = () => {
    const countDate = new Date('July 20, 2021, 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;
};

setInterval(countdown, 1000);