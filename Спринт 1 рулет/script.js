// =========================================================
// 📌 ДАННЫЕ РАСПИСАНИЯ И ОБЪЯВЛЕНИЙ
// 👉 МЕНЯЙ ЗДЕСЬ ПОД СВОЙ КОЛЛЕДЖ!
// =========================================================

// Расписание: 6 дней (Пн–Сб). В субботу — удалёнка.
// Максимум 5 пар в день. Если пар меньше — просто оставь меньше объектов.
const schedule = {
    "Понедельник": [
        { time: "08:30–10:00", subject: "Математика",   room: "305", teacher: "Иванов И.И." },
        { time: "10:15–11:45", subject: "Физика",       room: "210", teacher: "Петров П.П." },
        { time: "12:00–13:30", subject: "Информатика",  room: "401", teacher: "Сидоров С.С." }
    ],
    "Вторник": [
        { time: "08:30–10:00", subject: "Английский",   room: "112", teacher: "Смирнова А.В." },
        { time: "10:15–11:45", subject: "История",      room: "205", teacher: "Кузнецов В.М." },
        { time: "12:00–13:30", subject: "Литература",   room: "308", teacher: "Попова Е.Н." },
        { time: "13:45–15:15", subject: "Физкультура",  room: "Спортзал", teacher: "Орлов Д.К." }
    ],
    "Среда": [
        { time: "08:30–10:00", subject: "Программирование", room: "401", teacher: "Сидоров С.С." },
        { time: "10:15–11:45", subject: "Базы данных",      room: "402", teacher: "Николаев Р.А." },
        { time: "12:00–13:30", subject: "Математика",       room: "305", teacher: "Иванов И.И." }
    ],
    "Четверг": [
        { time: "08:30–10:00", subject: "Физика",       room: "210", teacher: "Петров П.П." },
        { time: "10:15–11:45", subject: "Английский",   room: "112", teacher: "Смирнова А.В." },
        { time: "12:00–13:30", subject: "Информатика",  room: "401", teacher: "Сидоров С.С." },
        { time: "13:45–15:15", subject: "История",      room: "205", teacher: "Кузнецов В.М." },
        { time: "15:30–17:00", subject: "Литература",   room: "308", teacher: "Попова Е.Н." }
    ],
    "Пятница": [
        { time: "08:30–10:00", subject: "Программирование", room: "401", teacher: "Сидоров С.С." },
        { time: "10:15–11:45", subject: "Базы данных",      room: "402", teacher: "Николаев Р.А." },
        { time: "12:00–13:30", subject: "Физкультура",      room: "Спортзал", teacher: "Орлов Д.К." }
    ],
    "Суббота": "REMOTE" // 👈 специальная пометка — будет отображаться как «Удалёнка»
};

// Объявления колледжа
const announcements = [
    "📅 15 ноября — день открытых дверей в колледже",
    "📚 С 20 ноября начинается зимняя сессия",
    "🎓 1 декабря — собрание старост в 14:00, актовый зал",
    "⚠️ Не забудьте сдать курсовые до 10 декабря!"
];

// =========================================================
// 🎨 ОТРИСОВКА ОБЪЯВЛЕНИЙ
// =========================================================
function renderAnnouncements() {
    const list = document.getElementById("announcements-list");
    list.innerHTML = announcements.map(text => `<li>${text}</li>`).join("");
}

// =========================================================
// 🗓 ОТРИСОВКА РАСПИСАНИЯ
// =========================================================
function renderSchedule() {
    const table = document.getElementById("schedule-table");
    const days = Object.keys(schedule); // ["Понедельник", ..., "Суббота"]

    // Определяем текущий день недели (1=Пн ... 6=Сб, 0=Вс)
    const todayIndex = new Date().getDay(); // 0..6
    const dayMap = { 1: "Понедельник", 2: "Вторник", 3: "Среда",
                     4: "Четверг", 5: "Пятница", 6: "Суббота" };
    const todayName = dayMap[todayIndex] || "";

    // Заголовок таблицы
    let html = "<tr><th>№ пары</th>";
    days.forEach(day => {
        const cls = (day === todayName) ? ' class="today-column"' : "";
        html += `<th${cls}>${day}</th>`;
    });
    html += "</tr>";

    // 5 строк (пар)
    for (let pair = 1; pair <= 5; pair++) {
        html += `<tr><td><strong>${pair}</strong></td>`;
        days.forEach(day => {
            const isToday = (day === todayName);
            const cellClass = isToday ? ' class="today-column"' : "";

            // Если суббота — «удалёнка»
            if (schedule[day] === "REMOTE") {
                if (pair === 1) {
                    html += `<td${cellClass} colspan="1">
                               <div class="remote-day">🏠 Удалёнка</div>
                             </td>`;
                } else {
                    html += `<td${cellClass}></td>`;
                }
                return;
            }

            const lessons = schedule[day];
            const lesson = lessons[pair - 1]; // пара №pair — это индекс pair-1

            if (lesson) {
                html += `<td${cellClass}>
                    <strong>${lesson.subject}</strong><br>
                    <small>${lesson.time}</small><br>
                    <small>🚪 ${lesson.room}</small><br>
                    <small>👨‍🏫 ${lesson.teacher}</small>
                </td>`;
            } else {
                html += `<td${cellClass}>—</td>`;
            }
        });
        html += "</tr>";
    }

    table.innerHTML = html;
}

// =========================================================
// 📝 РАБОТА С ЗАМЕТКАМИ (localStorage)
// =========================================================
const STORAGE_KEY = "college_notes";

// Получить все заметки из памяти браузера
function getNotes() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

// Сохранить заметки
function saveNotes(notes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

// Отрисовка списка заметок
function renderNotes() {
    const list = document.getElementById("notes-list");
    const notes = getNotes();

    // Сортируем: сначала по дате, потом по времени (ближайшие сверху)
    notes.sort((a, b) => {
        if (a.date !== b.date) return a.date.localeCompare(b.date);
        return a.time.localeCompare(b.time);
    });

    if (notes.length === 0) {
        list.innerHTML = "<li style='color:#888; padding:10px;'>Пока нет заметок. Добавь первую ✨</li>";
        return;
    }

    list.innerHTML = notes.map(n => `
        <li class="note-item">
            <div class="note-info">
                <strong>${n.title}</strong>
                <small>📅 ${n.date} в ${n.time}</small>
                <p>${n.text}</p>
            </div>
            <button class="delete-btn" data-id="${n.id}">🗑 Удалить</button>
        </li>
    `).join("");

    // Навешиваем обработчики на кнопки «Удалить»
    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = Number(btn.dataset.id);
            const updated = getNotes().filter(n => n.id !== id);
            saveNotes(updated);
            renderNotes();
        });
    });
}

// Обработка формы добавления заметки
document.getElementById("note-form").addEventListener("submit", (e) => {
    e.preventDefault(); // чтобы страница не перезагружалась

    const newNote = {
        id: Date.now(), // уникальный ID на основе времени
        date:  document.getElementById("note-date").value,
        time:  document.getElementById("note-time").value,
        title: document.getElementById("note-title").value,
        text:  document.getElementById("note-text").value
    };

    const notes = getNotes();
    notes.push(newNote);
    saveNotes(notes);

    // Очищаем форму
    e.target.reset();
    renderNotes();
});

// =========================================================
// 🚀 ЗАПУСК ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// =========================================================
renderAnnouncements();
renderSchedule();
renderNotes();