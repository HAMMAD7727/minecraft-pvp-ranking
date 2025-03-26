import { getPlayers } from "../firebase.js";

// ✅ Table Mapping
const tables = {
    "NethPot": document.querySelector("#nethPotTable tbody"),
    "DiamondPot": document.querySelector("#diamondPotTable tbody"),
    "AxeShield": document.querySelector("#axeShieldTable tbody"),
    "SMPKit": document.querySelector("#smpKitTable tbody")
};

// ✅ Load Players into Leaderboard
async function loadLeaderboard() {
    let players = await getPlayers();

    // ✅ Clear old data
    Object.values(tables).forEach(table => table.innerHTML = "");

    players.forEach((player, index) => {
        let row = `<tr>
            <td>${index + 1}</td>
            <td>${player.name}</td>
            <td>${player.tier}</td>
        </tr>`;

        if (tables[player.gameMode]) {
            tables[player.gameMode].innerHTML += row;
        }
    });
}

// ✅ Function to Toggle Leaderboard Tables
window.toggleTable = function (tableId) {
    let table = document.getElementById(tableId);
    table.classList.toggle("hidden");
};

// ✅ Load leaderboard when the page loads
document.addEventListener("DOMContentLoaded", loadLeaderboard);
