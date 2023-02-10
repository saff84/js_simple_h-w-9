const widjet = document.querySelector(".chat-widget");
const messages = document.querySelector(".chat-widget__messages");

let message = "";

widjet.addEventListener("click", () => {
    widjet.classList.add("chat-widget_active")

        setTimeout(() => {
            if (document.querySelectorAll(".message").length === 1) {
                addMessage("АлллоооЭЭэээ")}
        }, 30000)
    
})

addMessage("Приветствую Вас") // приветственное сообщение


document.addEventListener('keyup', e => {

    if (e.key === "Enter" && message.trim().length !== 0) {
        addMessage(message, true)
        getAnswer()

        document.querySelector(".chat-widget__input").value = ""; // сброс поля ввода
        message = "";
        messages.scrollIntoView(false); // прокрутка

    } else if (e.key.length === 1) message += e.key;
});


function getAnswer() {
    const answers = [
        'Почему?',
        'Зачем?',
        'Куда?',
        'Для чего?',
    ],
        index = Math.floor(Math.random() * answers.length);

    return addMessage(answers[index])
}

function addMessage(message, clientOrNot) {
    let date = new Date();
    messages.innerHTML += `
    <div class="message ${clientOrNot ? "message_client" : "" }">
        <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
        <div class="message__text">
        ${message}
        </div>
    </div>
    `;
}