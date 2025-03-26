import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

// ✅ Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzIZpmllUv3LCHZ6kDYtPjkIAyMdGWq7Y",
  authDomain: "minecraftranking-c632d.firebaseapp.com",
  projectId: "minecraftranking-c632d",
  storageBucket: "minecraftranking-c632d.appspot.com",
  messagingSenderId: "441778208304",
  appId: "1:441778208304:web:595531714e21429419f7f5",
  measurementId: "G-TTPPE6W44C"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Function to Get All Players
async function getPlayers() {
    const querySnapshot = await getDocs(collection(db, "players"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// ✅ Function to Add Player (🔥 Now Works with Dropdown)
async function addPlayer(name, gameMode, tier) {
    if (!name || !gameMode || !tier) {
        console.error("❌ Error: Missing required fields (name, gameMode, tier)");
        return;
    }

    try {
        await addDoc(collection(db, "players"), {
            name,
            gameMode,  
            tier
        });
        console.log(`✔️ Player ${name} added successfully.`);
    } catch (error) {
        console.error("❌ Error adding player:", error);
    }
}

// ✅ Export Functions
export { db, getPlayers, addPlayer };
