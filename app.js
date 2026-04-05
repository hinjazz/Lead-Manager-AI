function askAI() {
    const input = document.getElementById('input').value.toLowerCase();
    const chat = document.getElementById('chat');
    
    // Default reply if the AI doesn't understand
    let reply = "That's a great question! Let me check our current international stock. Could you leave your WhatsApp or Email so I can get back to you immediately?";

    // 1. GREETINGS (Global)
    const greetings = ["hi", "hello", "jambo", "hey", "habari"];
    
    // 2. PRICING & PRODUCTS (Generic)
    const priceKeywords = ["price", "cost", "how much", "bei", "ngapi", "catalog", "available"];
    
    // 3. SHIPPING & LOCATION (Worldwide)
    const shippingKeywords = ["delivery", "ship", "shipping", "send", "location", "where", "country"];

    // LOGIC
    if (greetings.some(word => input.includes(word))) {
        reply = "Hello! I am your Global Sales Assistant. I can help you with product pricing, worldwide shipping info, and order tracking. What are you looking for today?";
    } 
    else if (priceKeywords.some(word => input.includes(word))) {
        reply = "We offer competitive global pricing! Please specify which item you are interested in, and I will give you the latest quote including any current discounts.";
    }
    else if (shippingKeywords.some(word => input.includes(word))) {
        reply = "We ship worldwide! Whether you are in East Africa, Europe, or the Americas, we use express couriers to reach you in 3-7 business days. Where are you located?";
    }

    // Display the messages
    chat.innerHTML += `<div class='mb-2 text-right'><span class='bg-blue-100 p-2 rounded-lg inline-block text-sm shadow-sm'>${input}</span></div>`;
    chat.innerHTML += `<div class='mb-4 text-left'><span class='bg-gray-200 p-2 rounded-lg inline-block text-sm shadow-sm'><b>AI:</b> ${reply}</span></div>`;
    
    document.getElementById('input').value = "";
    chat.scrollTop = chat.scrollHeight;
}
