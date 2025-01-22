
import { NextResponse } from 'next/server.js';
import '../../../tool/envConfig.ts';
import jwt from 'jsonwebtoken';
const fakeUserData = {
    email: 'user@example.com',
    verificationCode: '123456'
};

export async function POST(req: Request) {
    const { email, code } = await req.json();
    if (email === fakeUserData.email && code === fakeUserData.verificationCode) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET||"", { expiresIn: '1h' });
        return NextResponse.json({ token },{status:200});
    } else {
        return NextResponse.json({ message: 'Invalid code' },{status:401});
    }
}