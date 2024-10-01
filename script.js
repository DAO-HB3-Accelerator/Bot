document.getElementById("chat-header").addEventListener("click", function() {
    const chatBody = document.getElementById("chat-body");
    chatBody.style.display = chatBody.style.display === "none" ? "block" : "none";
  });
  
  document.getElementById("send-button").addEventListener("click", function() {
    const message = document.getElementById("chat-input").value;
    if (message.trim() === "") return;
  
    // Добавляем сообщение пользователя в чат
    const userMessage = document.createElement("div");
    userMessage.innerHTML = `<b>Вы:</b> ${message}`;
    document.getElementById("chat-messages").appendChild(userMessage);
    
    // Очищаем поле ввода
    document.getElementById("chat-input").value = "";
  
    // Отправляем сообщение на сервер GPT для получения ответа
    fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer YOUR_API_KEY`
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: message,
        max_tokens: 150
      })
    })
    .then(response => response.json())
    .then(data => {
      const botMessage = document.createElement("div");
      botMessage.innerHTML = `<b>Бот:</b> ${data.choices[0].text}`;
      document.getElementById("chat-messages").appendChild(botMessage);
    })
    .catch(error => {
      console.error("Ошибка:", error);
    });
  });  