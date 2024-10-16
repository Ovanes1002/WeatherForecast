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
