import {NextResponse} from "next/server";
/// fix database with real name later 
//import { clover } from '@/app/firebase/clover'









export async function POST(request: Request) {
    try {
      // Get the submitted data from request body
      const data = await request.json()
      
      // Validate the incoming data
      if (!data.email || !data.placeNumber || !data.score || !data.timeSpent) {
        return NextResponse.json(
          { error: 'Missing required fields' },
          { status: 400 }
        )
      }
  
      // Structure the entry data
      const entry = {
        email: data.email,
        placeNumber: parseInt(data.placeNumber),
        score: parseInt(data.score),
        timeSpent: parseFloat(data.timeSpent),
        timestamp: new Date().toISOString()
      }
  
      // Save to Firebase
      const result = await db.submitPlaceEntry(entry)
  
      // Return success response
      return NextResponse.json({ 
        success: true, 
        id: result,
        message: 'Place entry submitted successfully' 
      })
  
    } catch (error) {
      console.error('Error in POST /api/places:', error)
      return NextResponse.json(
        { error: 'Failed to submit place entry' },
        { status: 500 }
      )
    }
  }
  





export async function GET() {
    return new Response('Hello from the server!');
}