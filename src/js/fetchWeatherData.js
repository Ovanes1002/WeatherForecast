const url =
    "https://api.openweathermap.org/data/2.5/forecast?lat=55.755825&lon=37.617298&appid=4cbfc1ccf65de302be4772a36770fe02&units=metric&lang=ru";

const fetchWeatherData = async function (daytime) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.list) {
            // Фильтруем элементы, чтобы выбрать только те, у которых в "dt_txt" время параметр daytime
            const filteredDaytimeItems = data.list.filter((item) => item.dt_txt.includes(daytime));
            // console.log(filteredDaytimeItems);
            return filteredDaytimeItems;
        } else {
            console.error("List not found in the response.");
        }
    } catch (error) {
        console.log(error.message);
    }
};

export default fetchWeatherData;
