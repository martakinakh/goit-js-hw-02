// Задача 2. Форматування повідомлення

function formatMessage(message, maxLength) {
    if (message.length <= maxLength) {
        return message;
    } else {
        return message.slice(0, maxLength) + "...";
    }
}

