import fetchWeatherData from "../fetchWeatherData.js";

const handleNoonWeatherData = async function () {
    const noonWeatherDataArray = await fetchWeatherData("12:00:00");

    if (noonWeatherDataArray.length > 0) {
        for (let i = 0; i < noonWeatherDataArray.length; i++) {
            document.querySelectorAll(".forecast__temp--day span")[i].textContent = Math.round(
                noonWeatherDataArray[i].main.temp
            );
        }
    } else {
        console.log("Нет данных о погоде на 12:00.");
    }
};

export default handleNoonWeatherData;

// const dateString = "2024-10-12 21:00:00"; // пример даты из API

// // Создаем объект Date из строки даты
// const date = new Date(dateString);

// // Получаем день недели (0 = воскресенье, 1 = понедельник, ... , 6 = суббота)
// const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const dayOfWeek = daysOfWeek[date.getDay()];

// console.log(dayOfWeek); // Выведет: "Суббота"
