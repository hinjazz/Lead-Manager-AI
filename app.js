function askAI() {
    const input = document.getElementById('input').value.toLowerCase();
    const chat = document.getElementById('chat');
    let reply = "I'm not sure about that. Let me get the shop owner to call you! What's your number?";

    if (input.includes("airpods") || input.includes("pro")) {
        reply = "Jambo! AirPods Pro 2 are 29,500 KES. Free delivery to Nyali or Bamburi today! Should I reserve a pair?";
    } else if (input.includes("price") || input.includes("how much")) {
        reply = "Our prices are the best in Mombasa! iPhone covers start at 1,200 KES and AirPods at 29,500 KES.";
    }

    chat.innerHTML += `<div class='mb-2 text-right'><span class='bg-blue-100 p-2 rounded-lg inline-block'>${input}</span></div>`;
    chat.innerHTML += `<div class='mb-4 text-left'><span class='bg-gray-200 p-2 rounded-lg inline-block'><b>AI:</b> ${reply}</span></div>`;
    
    // Clear input and scroll to bottom
    document.getElementById('input').value = "";
    chat.scrollTop = chat.scrollHeight;
}
function askAI() {
    const input = document.getElementById('input').value.toLowerCase();
    const chat = document.getElementById('chat');
    let reply = "I'm not sure about that. Let me get the owner to call you! What's your WhatsApp number?";

    // Keywords for Pricing
    const priceKeywords = ["price", "how much", "cost", "bei", "ngapi"];
    // Keywords for Delivery
    const deliveryKeywords = ["delivery", "ship", "bring", "lete", "tuma", "nyali", "bamburi"];

    if (input.includes("airpods") || input.includes("pro")) {
        reply = "Jambo! AirPods Pro 2 are 29,500 KES. We have 3 pairs left today. Should I reserve one?";
    } 
    else if (priceKeywords.some(key => input.includes(key))) {
        reply = "Our current bestsellers: AirPods Pro 2 (29,500 KES) and Premium iPhone Covers (1,200 KES). Which one do you like?";
    }
    else if (deliveryKeywords.some(key => input.includes(key))) {
        reply = "We offer FREE delivery to Nyali and Bamburi for orders over 5,000 KES. Where should we send yours?";
    }

    // Update the screen
    chat.innerHTML += `<div class='mb-2 text-right'><span class='bg-blue-100 p-2 rounded-lg inline-block'>${input}</span></div>`;
    chat.innerHTML += `<div class='mb-4 text-left'><span class='bg-gray-200 p-2 rounded-lg inline-block'><b>AI:</b> ${reply}</span></div>`;
    
    document.getElementById('input').value = "";
    chat.scrollTop = chat.scrollHeight;
}
