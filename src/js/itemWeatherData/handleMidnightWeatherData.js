import fetchWeatherData from "../fetchWeatherData.js";

const handleMidnightWeatherData = async function () {
    const midnightWeatherDataArray = await fetchWeatherData("21:00:00");

    if (midnightWeatherDataArray.length > 0) {
        for (let i = 0; i < midnightWeatherDataArray.length; i++) {
            document.querySelectorAll(".forecast__temp--night span")[i].textContent = Math.round(
                midnightWeatherDataArray[i].main.temp
            );
        }
    } else {
        console.log("Нет данных о погоде на 21:00.");
    }
};

export default handleMidnightWeatherData;
