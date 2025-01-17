import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = { /* Your Firebase Config */ };
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export async function submitPlaceEntry(userId: string, placeId: number, entryData: any) {
  try {
    const userRef = ref(db, `users/${userId}/places/${placeId}`);
    await set(userRef, entryData);
    console.log('Entry submitted successfully!');
  } catch (error) {
    console.error('Error submitting entry:', error);
  }
}

export { db };
