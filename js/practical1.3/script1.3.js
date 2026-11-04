"use strict";

const form = document.getElementById("student-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent = "Форму заповнено правильно. Валідація успішна. Дані не надсилалися на сервер.";
});

form.addEventListener("input", () => {
    status.textContent = "";
});

form.addEventListener("change", () => {
    status.textContent = "";
});
