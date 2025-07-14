const monthYear = document.getElementById("month-year");
const calendarDays = document.getElementById("calendar-days");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentDate = new Date();

function renderCalendar(date) {
  calendarDays.innerHTML = "";

  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const startDay = firstDay.getDay();
  const totalDays = lastDay.getDate();

  const today = new Date();
  const isCurrentMonth =
    today.getFullYear() === year && today.getMonth() === month;

  monthYear.textContent = `${date.toLocaleString("default", {
    month: "long",
  })} ${year}`;

  // Fill blank spaces for first week
  for (let i = 0; i < startDay; i++) {
    const empty = document.createElement("div");
    calendarDays.appendChild(empty);
  }

  // Fill days of month
  for (let day = 1; day <= totalDays; day++) {
    const dayDiv = document.createElement("div");
    dayDiv.textContent = day;

    if (isCurrentMonth && day === today.getDate()) {
      dayDiv.classList.add("today");
    }

    calendarDays.appendChild(dayDiv);
  }
}

prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

renderCalendar(currentDate);
