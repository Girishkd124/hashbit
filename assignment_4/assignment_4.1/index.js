function swapTheme() {
    const app = document.querySelector('#app');
    const button = document.querySelector('#swap');

    // if (app.classList.contains("day")) {
    //     app.classList.add("night");
    //     app.classList.remove("day");
    //     button.classList.add("button_night");
    //     button.classList.remove("button_day");
    // } else {
    //     app.classList.add("day");
    //     app.classList.remove("night");
    //     button.classList.add("button_day");
    //     button.classList.remove("button_night");
    // }
        //    ##### OR  ####
    app.classList.toggle('day')
    app.classList.toggle("night")
    button.classList.toggle("button_day")
    button.classList.toggle("button_night")
}