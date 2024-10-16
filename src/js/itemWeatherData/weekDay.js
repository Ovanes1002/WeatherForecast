const handleWeekDayData = async function () {
    const today = new Date();
    const currentDay = today.getDay();
    const daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

    const weekDayElements = document.querySelectorAll(".forecast__week-day");

    for (let i = 0; i < 5; i++) {
        weekDayElements[i].textContent = daysOfWeek[(currentDay + i) % 7];
    }
};

export default handleWeekDayData;
