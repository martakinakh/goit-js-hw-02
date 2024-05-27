// Задача 3. Перевірка спаму

function checkForSpam(message) {
   return message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale");
}
