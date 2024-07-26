// Get the input field and chat history div
var inputField = document.getElementById("input");
var chatHistory = document.getElementById("chat-history");

// Function to handle user input
function ask() {
    // Get user input
    var userInput = inputField.value;

    // Create a new chat message for user input
    var userMessage = document.createElement("div");
    userMessage.classList.add("chat-message");
    userMessage.innerHTML = "<p><strong>You:</strong> " + userInput + "</p>";

    // Append user message to chat history
    chatHistory.appendChild(userMessage);

    // Clear input field after sending message
    inputField.value = "";

    // Simulate bot response (replace this with actual bot logic)
    var botResponse = "This is a placeholder bot response. Replace this with actual  logic.";

    // Create a new chat message for bot response
    var botMessage = document.createElement("div");
    botMessage.classList.add("chat-message");
    botMessage.innerHTML = "<p><strong>Bot:</strong> " + botResponse + "</p>";

    // Append bot message to chat history after a short delay to simulate bot response time
    setTimeout(function() {
        chatHistory.appendChild(botMessage);
        // Scroll to the bottom of chat history to show latest messages
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }, 500); // Adjust the delay time as needed
}
