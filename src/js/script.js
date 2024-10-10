const selectTheme = document.getElementById("theme");

selectTheme.addEventListener("change", () => {
    selectTheme.classList.toggle("theme__select--light");
    selectTheme.classList.toggle("theme__select--dark");
});
