import { addPlayer } from "../firebase.js"; // ✅ Import function

// ✅ Ensure the page loads before running scripts
document.addEventListener("DOMContentLoaded", () => {
    const addPlayerForm = document.getElementById("addPlayerForm");

    if (addPlayerForm) {
        addPlayerForm.addEventListener("submit", async (e) => {
            e.preventDefault();
    
            let name = document.getElementById("playerNameInput").value.trim();
            let gameMode = document.getElementById("playerGameMode").value; // ✅ Dropdown selection
            let tier = document.getElementById("playerTier").value; // ✅ Dropdown selection

            if (!name || !gameMode || !tier) {
                alert("❌ All fields are required!");
                return;
            }
    
            try {
                await addPlayer(name, gameMode, tier);
                alert("✔️ Player added successfully!");
                window.location.reload();  // ✅ Refresh the page to update the leaderboard
            } catch (error) {
                console.error("❌ Error adding player:", error);
            }
        });
    } else {
        console.error("❌ Error: 'addPlayerForm' not found.");
    }
});
