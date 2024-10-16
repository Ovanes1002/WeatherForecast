import fetchWeatherData from "../fetchWeatherData.js";

const handleConditionData = async function () {
    const noonDataArray = await fetchWeatherData("12:00:00");

    if (noonDataArray.length > 0) {
        for (let i = 0; i < noonDataArray.length; i++) {
            document.querySelectorAll(".forecast__condition")[i].textContent =
                noonDataArray[i].weather[0].description;
        }
    } else {
        console.log("Нет данных о состоянии погоды на 12:00.");
    }
};

export default handleConditionData;
