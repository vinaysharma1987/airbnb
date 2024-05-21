import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
export async function POST(req: Request) {
    const body = await req.json();
    const { email, name, password } = body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await prisma.user.create({
            data: {
                email,
                name,
                hashedPassword
            }
        });
        return NextResponse.json(user);
    } catch (error) {
        console.error(error);
        return NextResponse.error(); // Remove the argument from the function call
    }
}