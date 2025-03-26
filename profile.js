import { getPlayerByName } from "../firebase.js";

// ✅ Search for a Player
window.searchPlayer = async function () {
    let input = document.getElementById("searchPlayer").value.toLowerCase();
    let player = await getPlayerByName(input);

    if (player) {
        document.getElementById("playerName").innerText = player.name;
        document.getElementById("playerOverallRank").innerText = `#Overall Rank: ${player.overallRank}`;
        document.getElementById("nethPotTier").innerText = player.nethPotTier || "Unranked";
        document.getElementById("diamondPotTier").innerText = player.diamondPotTier || "Unranked";
        document.getElementById("axeShieldTier").innerText = player.axeShieldTier || "Unranked";
        document.getElementById("smpKitTier").innerText = player.smpKitTier || "Unranked";

        document.getElementById("profileSection").style.display = "block";
    } else {
        document.getElementById("profileSection").style.display = "none";
    }
};
