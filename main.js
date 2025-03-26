import { getPlayers } from "./firebase.js"; // ✅ Corrected Import Path

document.addEventListener("DOMContentLoaded", async () => {
    const topPlayersList = document.getElementById("topPlayersList");

    try {
        // ✅ Fetch players and sort by overall rank (lower = better)
        let players = await getPlayers();
        players.sort((a, b) => a.overallRank - b.overallRank);

        // ✅ Show Top 3 Players
        topPlayersList.innerHTML = ""; // Clear placeholder text
        if (players.length === 0) {
            topPlayersList.innerHTML = "<li>No players found.</li>";
            return;
        }

        players.slice(0, 3).forEach((player, index) => {
            let rankEmoji = ["🥇", "🥈", "🥉"][index] || "";
            topPlayersList.innerHTML += `<li>${rankEmoji} ${player.name} - Rank #${player.overallRank}</li>`;
        });

    } catch (error) {
        console.error("❌ Error loading players:", error);
        topPlayersList.innerHTML = "<li>Error loading players. Try again later.</li>";
    }
});
