function toggleChat() {
    var chatContainer = document.getElementById("chat-container");
    chatContainer.style.display = chatContainer.style.display === "none" ? "block" : "none";
}

function ask() {
    // Your chat handling logic goes here
    var input = document.getElementById("input").value.toLowerCase();
    var output = document.getElementById("chat-history");
    var messages = output.getElementsByClassName("chat-message").length;

    // Check for keywords in the user input
    if (input.includes("cybersecurity")) {
        output.innerHTML += '<div class="chat-message bot"><p>Cybersecurity refers to the practice of protecting systems, networks, and data from digital attacks. These attacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes.</p></div>';
    } else if (input.includes("emerging threats")) {
        output.innerHTML += '<div class="chat-message bot"><p>In 2024, cybersecurity professionals are facing several emerging threats including Generative AI (GenAI), Unsecure Employee Behavior, Third-Party Risks, Continuous Threat Exposure, Boardroom Communication Gaps, and Identity-First Approaches to Security.</p></div>';
    } else if (input.includes("threats")) {
        output.innerHTML += '<div class="chat-message bot"><p>Common cybersecurity threats include malware, phishing, ransomware, and denial of service (DoS) attacks.</p></div>';
    } else if (input.includes("instagram")) {
        output.innerHTML += '<div class="chat-message bot"><p>Instagram: <a href="https://www.instagram.com/vex.man_?igsh=MTl0OGNyb3ZvNWVpbw==" target="_blank">@vex.man_</a></p></div>';
    } else if (input.includes("linkedin")) {
        output.innerHTML += '<div class="chat-message bot"><p>LinkedIn: <a href="https://www.linkedin.com/in/venukamatchi-p-8b5a1797?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">VENUKAMATCHI</a></p></div>';
    } else if (input.includes("whatsapp group")) {
        output.innerHTML += '<div class="chat-message bot"><p>WhatsApp Group: <a href="https://chat.whatsapp.com/H4Tee1PbtdE0rKgeDI0lpO" target="_blank">Join our WhatsApp Group</a></p></div>';
    } else if (input.includes("twitter")) {
        output.innerHTML += '<div class="chat-message bot"><p>Twitter: <a href="https://twitter.com/VEXMAN__" target="_blank">@VEXMAN__</a></p></div>';
    } 
    else {
        output.innerHTML += '<div class="chat-message bot"><p>Sorry, I don\'t understand that question. Please ask something else.</p></div>';
    } 

    // Clean chat history after every 3 messages
    if ((messages + 1) % 10 === 0) {
        output.innerHTML = "";
    }
}
