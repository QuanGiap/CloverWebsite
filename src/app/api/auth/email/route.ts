import { NextResponse } from "next/server";
// import sendgrid from '@sendgrid/mail';

// sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req: Request) {
    const {email} = await req.json();
    if(!email){
        return NextResponse.json({message: 'Email is required'},{status:400});
    }
    const code = '123456';
    // For now, send the code directly through the response
    return NextResponse.json({ code },{status:200});

    // Uncomment the following code to send the code via email
    /*
    const msg = {
        to: 'recipient@example.com', // Change to your recipient
        from: 'sender@example.com', // Change to your verified sender
        subject: 'Your Verification Code',
        text: `Your verification code is ${code}`,
        html: `<strong>Your verification code is ${code}</strong>`,
    };

    try {
        await sendgrid.send(msg);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error sending email' });
    }
    */
}