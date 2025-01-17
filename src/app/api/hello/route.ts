
import { db } from '@/firebase'; 
import { ref, set, get, child, query, orderByChild } from "firebase/database";
import { NextApiRequest, NextApiResponse } from 'next';


async function submitUserEntry(userId: number, email: string, placeStamp: number, rank: number, timeTaken: number)  {
    try {
        // Ensure the placeStamp is between 1 and 9 (for valid place IDs)
        if (placeStamp < 1 || placeStamp > 9) {
          throw new Error("Invalid placeStamp. It should be between 1 and 9.");
        }
    
        // Example: Save user entry to Firebase Database using the user ID and place stamp
        const userRef = ref(db, `users/${userId}/places/${placeStamp}`); // Path using userId and placeStamp
        const entryData = {
          email,        // Unique email as identifier
          rank,         // User's rank for this place
          timeSpent: timeTaken,  // Time spent by the user at this place
          timestamp: new Date().toISOString() // Timestamp of the entry submission
        };
    
        // Save data in Firebase database
        await set(userRef, entryData);
        console.log('User entry saved successfully:', entryData);
    
      } catch (error) {
        console.error('Error submitting user entry:', error);
      }
    }


// will figure out how to connect to unity later 
export async function getEntriesForPlace(placeId: number) {
    try {
        const usersRef = ref(db, 'users');
        const placeQuery = query(usersRef, orderByChild(`placeEntries/${placeId}`));
        const snapshot = await get(placeQuery);
        const entries = snapshot.val();
        return entries ? Object.values(entries) : [];
    } catch (error) {
        console.error('Error retrieving entries for place:', error);
        return [];
    }
}

export { submitUserEntry };