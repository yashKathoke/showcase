import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, password } = body;

        // Simple validation
        if (!name || !email || !password) {
            return NextResponse.json({ error: 'All fields are required: name, email, password' }, { status: 400 });
        }

        // Check if the email is already in use
        const userExists = await User.findOne({ email });
        if (userExists) {
            return NextResponse.json({ error: 'User with this email already exists' }, { status: 409 });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        // Save the user to the database
        await newUser.save();

        return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}