import fetchWeatherData from "../fetchWeatherData.js";

const handleIcon = async function () {
    const noonDataArray = await fetchWeatherData("12:00:00");

    if (noonDataArray.length > 0) {
        for (let i = 0; i < noonDataArray.length; i++) {
            // Извлекаем иконку погоды
            const iconCode = noonDataArray[i].weather[0].icon;
            console.log(iconCode);
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
            console.log(iconUrl);
            document.querySelectorAll(".forecast__icon")[i].src = iconUrl;
        }
    } else {
        console.log("Нет данных об изображении погоды на 12:00.");
    }
};

export default handleIcon;

// for (let i = 0; i < noonDataArray.length; i++) {
//     document.querySelectorAll(".forecast__condition")[i].textContent =
//         noonDataArray[i].weather[0].description;
// }
