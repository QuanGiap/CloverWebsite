// Assuming you're using firebase.js to initialize Firebase
import firebase from 'firebase/app';
import 'firebase/database';

// Assuming you've initialized Firebase and have a reference to the database
const db = firebase.database();

async function submitUserEntry(userId, placeId, rank, timeTaken, stamp) {
    try {
      const userRef = db.ref('users').child(userId).child('placeEntries').child(placeId);
      await userRef.set({
        rank: rank,
        timeTaken: timeTaken,
        stamp: stamp
      });
      console.log('User entry saved!');
    } catch (error) {
      console.error('Error saving user entry:', error);
      throw new Error('Failed to submit user entry');
    }
  }


// will figure out how to connect to unity later 
export async function getEntriesForPlace(placeId) {
    try {
      const snapshot = await db.ref('users').orderByChild('placeEntries/' + placeId).once('value');
      const entries = snapshot.val();
      return entries ? Object.values(entries) : [];
    } catch (error) {
      console.error('Error retrieving entries for place:', error);
      return [];
    }
  }

    
export { submitPlaceEntry };
