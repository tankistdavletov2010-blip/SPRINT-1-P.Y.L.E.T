// =========================================================
// ДАННЫЕ РАСПИСАНИЯ И ОБЪЯВЛЕНИЙ
// МЕНЯЙ ЗДЕСЬ ПОД СВОЙ КОЛЛЕДЖ!
// =========================================================

// Расписание: 6 дней (Пн–Сб). Максимум 7 пар в день.
// Если в какой-то день пар меньше — просто оставляй меньше объектов.
// Если пара начинается не с самого утра — ставь пустые объекты {} на первые позиции.
const schedule = {
    "Понедельник": [
        { time: "08:30–09:15", subject: "Практическая подготовка", room: "к504", teacher: "Сенькина Д.С." },
        { time: "09:15–10:00", subject: "Разработка встраиваемых", room: "к401", teacher: "Ухаров А.С." },
        { time: "10:20–11:05", subject: "Математика",              room: "к303", teacher: "Аникина И.В." },
        { time: "11:05–11:50", subject: "Физическая культура",     room: "к105", teacher: "Орлов Д.К." }
    ],
    "Вторник": [
        { time: "08:30–09:15",  subject: "Информатика",              room: "к409", teacher: "Худошина М.А." },
        { time: "09:15–10:00",  subject: "Разработка встраиваемых",  room: "к401", teacher: "Ухаров А.С." },
        { time: "10:20–11:05",  subject: "Проектный менеджмент",     room: "к504", teacher: "Сенькина Д.С." },
        { time: "11:05–11:50",  subject: "Практическая подготовка",  room: "к504", teacher: "Сенькина Д.С." },
        { time: "12:20–13:05",  subject: "Индивидуальный проект",    room: "к409", teacher: "Сенькина Д.С." },
        { time: "13:05–13:50",  subject: "Разработка встраиваемых",  room: "к401", teacher: "Ухаров А.С." },
        { time: "14:10–14:55",  subject: "Математика",               room: "к303", teacher: "Аникина И.В." }
    ],
    "Среда": [
        { time: "08:30–09:15",  subject: "Разработка встраиваемых",  room: "к401", teacher: "Ухаров А.С." },
        { time: "09:15–10:00",  subject: "Проектный менеджмент",     room: "к504", teacher: "Сенькина Д.С." },
        { time: "10:20–11:05",  subject: "Русский язык",             room: "к403", teacher: "Попова Е.Н." },
        { time: "11:05–11:50",  subject: "Физика",                   room: "к304", teacher: "Вакансия В.Ф." },
        { time: "12:20–13:05",  subject: "Проектный менеджмент",     room: "к504", teacher: "Сенькина Д.С." },
        { time: "13:05–13:50",  subject: "Химия",                    room: "к301", teacher: "Белова А.А." },
        { time: "14:10–14:55",  subject: "Математика",               room: "к303", teacher: "Аникина И.В." }
    ],
    "Четверг": [
        {}, // 1-я пара пустая
        {}, // 2-я пара пустая
        { time: "10:20–11:05", subject: "Математика",              room: "к303", teacher: "Аникина И.В." },
        { time: "11:05–11:50", subject: "Математика",              room: "к303", teacher: "Аникина И.В." },
        { time: "12:20–13:05", subject: "История",                 room: "к405", teacher: "Кузнецов В.М." },
        { time: "13:05–13:50", subject: "Физика",                  room: "к304", teacher: "Вакансия В.Ф." },
        { time: "14:10–14:55", subject: "Информатика",             room: "к409", teacher: "Худошина М.А." }
    ],
    "Пятница": [
        {}, // 1-я пара пустая
        { time: "08:30–09:15",  subject: "Проектный менеджмент",    room: "к504", teacher: "Сенькина Д.С." },
        { time: "09:15–10:00",  subject: "Разработка встраиваемых", room: "к401", teacher: "Ухаров А.С." },
        { time: "10:20–11:05",  subject: "Разработка встраиваемых", room: "к401", teacher: "Ухаров А.С." },
        { time: "11:05–11:50",  subject: "Проектный менеджмент",    room: "к504", teacher: "Сенькина Д.С." },
        { time: "12:20–13:05",  subject: "История",                 room: "к405", teacher: "Кузнецов В.М." },
        { time: "13:05–13:50",  subject: "Информатика",             room: "к409", teacher: "Худошина М.А." }
    ],
    "Суббота": [
        {}, // 1-я пара пустая
        { time: "09:45–10:30", subject: "Биология",             room: "—", teacher: "Лебедева О.С." },
        { time: "10:40–11:25", subject: "География",            room: "—", teacher: "Морозов И.П." },
        { time: "11:25–12:10", subject: "Иностранный язык",     room: "—", teacher: "Смирнова А.В." },
        { time: "12:20–13:05", subject: "Обществознание",       room: "—", teacher: "Волкова Н.И." },
        { time: "13:05–13:50", subject: "ОБЖ",                  room: "—", teacher: "Громов С.А." },
        { time: "14:00–14:45", subject: "Литература",           room: "—", teacher: "Попова Е.Н." }
    ]
};

// Объявления колледжа
const announcements = [
    "15 ноября — день открытых дверей в колледже",
    "С 20 ноября начинается зимняя сессия",
    "1 декабря — собрание старост в 14:00, актовый зал",
    "Не забудьте сдать курсовые до 10 декабря!"
];

// =========================================================
// ОТРИСОВКА ОБЪЯВЛЕНИЙ
// =========================================================
function renderAnnouncements() {
    const list = document.getElementById("announcements-list");
    list.innerHTML = announcements.map(text => `<li>${text}</li>`).join("");
}

// =========================================================
// ОТРИСОВКА РАСПИСАНИЯ
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

    // 7 строк (пар) — увеличено с 5 до 7, чтобы влезло всё расписание
    for (let pair = 1; pair <= 7; pair++) {
        html += `<tr><td><strong>${pair}</strong></td>`;
        days.forEach(day => {
            const isToday = (day === todayName);
            const cellClass = isToday ? ' class="today-column"' : "";

            const lessons = schedule[day];
            const lesson = lessons[pair - 1]; // пара №pair — это индекс pair-1

            // Если объект пустой {} или undefined — значит пары нет
            if (lesson && lesson.subject) {
                html += `<td${cellClass}>
                    <strong>${lesson.subject}</strong><br>
                    <small>${lesson.time}</small><br>
                    <small>${lesson.room}</small><br>
                    <small>${lesson.teacher}</small>
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
// РАБОТА С ЗАМЕТКАМИ (localStorage)
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
                <small> ${n.date} в ${n.time}</small>
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
//  ЗАПУСК ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// =========================================================
renderAnnouncements();
renderSchedule();
renderNotes();