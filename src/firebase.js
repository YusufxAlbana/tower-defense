import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBrSTR6OyNvwzLGPpm3dA3rW-pz6PZSlqU",
  authDomain: "tower-defense-785bd.firebaseapp.com",
  projectId: "tower-defense-785bd",
  storageBucket: "tower-defense-785bd.firebasestorage.app",
  messagingSenderId: "129718667702",
  appId: "1:129718667702:web:7cf07310a659679fad5917",
  measurementId: "G-RJK7LVSVEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Save player data to Firestore
export const savePlayerData = async (userId, data) => {
  try {
    await setDoc(doc(db, "players", userId), {
      ...data,
      updatedAt: new Date().toISOString()
    }, { merge: true });
    console.log("Player data saved!");
    return true;
  } catch (error) {
    console.error("Error saving player data:", error);
    return false;
  }
};

// Load player data from Firestore
export const loadPlayerData = async (userId) => {
  try {
    const docRef = doc(db, "players", userId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Player data loaded!");
      return docSnap.data();
    } else {
      console.log("No player data found, using defaults");
      return null;
    }
  } catch (error) {
    console.error("Error loading player data:", error);
    return null;
  }
};

// Anonymous auth for simple user identification
export const initAuth = (callback) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      callback(user.uid);
    } else {
      signInAnonymously(auth)
        .then((result) => {
          callback(result.user.uid);
        })
        .catch((error) => {
          console.error("Auth error:", error);
          callback(null);
        });
    }
  });
};

export { db, auth };
