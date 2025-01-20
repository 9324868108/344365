document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const switchToSignup = document.getElementById("switch-to-signup");
    const switchToLogin = document.getElementById("switch-to-login");
    const todoContainer = document.getElementById("todo");
    const authContainer = document.getElementById("auth");
    const colorButtons = document.querySelectorAll(".color-btn");
    const addTaskButton = document.getElementById("add-task");
    const taskInput = document.getElementById("task");
    const reminderInput = document.getElementById("reminder");
    const importanceInput = document.getElementById("importance");
    const tasksList = document.getElementById("tasks-list");
    const motivationalQuote = document.getElementById("motivational-quote");
    const logoutButton = document.getElementById("logout");

    const motivationalQuotes = [
        "Great job! Keep climbing! 🚀",
        "Every step counts. You're making progress! 🌟",
        "Done and dusted! Keep shining! ✨",
        "Another one bites the dust! Keep going! 💪",
        "Task completed! Onwards and upwards! 🚀",
        "Success is the sum of small efforts. Keep it up! 🌟",
        "You're unstoppable! Keep crushing it! 🚀",
    ];

    // Default Background Color
    const defaultColor = "lightblue";
    const savedColor = localStorage.getItem("backgroundColor") || defaultColor;
    document.body.style.backgroundColor = savedColor;

    // Digital Clock
    setInterval(() => {
        const clock = document.getElementById("clock");
        const now = new Date();
        clock.innerText = now.toLocaleTimeString();
    }, 1000);

    // Switch Forms
    switchToSignup.addEventListener("click", () => {
        loginForm.classList.add("hidden");
        signupForm.classList.remove("hidden");
    });

    switchToLogin.addEventListener("click", () => {
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });

    // Login and Signup Simulation
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Account created! Please log in.");
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        authContainer.classList.add("hidden");
        todoContainer.classList.remove("hidden");
    });

    // Background Color Change
    colorButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedColor = button.dataset.color;
            document.body.style.backgroundColor = selectedColor;
            localStorage.setItem("backgroundColor", selectedColor);
        });
    });

    // Add Task
    addTaskButton.addEventListener("click", () => {
        const task = taskInput.value.trim();
        const reminder = reminderInput.value;
        const importance = importanceInput.value;

        if (task) {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${task} [${importance}] - ${reminder}</span>
                <button class="complete-task">Done</button>
            `;
            tasksList.appendChild(li);

            taskInput.value = "";
            reminderInput.value = "";
        }
    });

    // Complete Task
    tasksList.addEventListener("click", (e) => {
        if (e.target.classList.contains("complete-task")) {
            e.target.parentElement.remove();

            const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
            motivationalQuote.textContent = randomQuote;
            motivationalQuote.classList.remove("hidden");

            const audio = new Audio("https://www.soundjay.com/button/beep-07.mp3");
            audio.play();

            setTimeout(() => {
                motivationalQuote.classList.add("hidden");
            }, 5000); // 5-second animation
        }
    });

    logoutButton.addEventListener("click", () => {
        authContainer.classList.remove("hidden");
        todoContainer.classList.add("hidden");
    });
});
