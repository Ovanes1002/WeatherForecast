const handleDateData = async function () {
    const dateNow = new Date();
    const currentDate = dateNow.getDate();

    const currentMonth = dateNow.getMonth();
    const months = ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"];

    const dateElements = document.querySelectorAll(".forecast__date");

    for (let i = 0; i < 5; i++) {
        const newDate = new Date(dateNow); // Создаем новую дату, чтобы не изменять оригинал
        newDate.setDate(currentDate + i);
        dateElements[i].textContent = `${newDate.getDate()} ${months[newDate.getMonth()]}`;
    }
};

export default handleDateData;
