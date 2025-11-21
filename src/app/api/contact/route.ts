import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Simulate email sending delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Log the "email" to the server console
        console.log('--- NEW CONTACT FORM SUBMISSION ---');
        console.log(`From: ${name} <${email}>`);
        console.log(`To: profile@walkingjupiter.com`);
        console.log(`Message: ${message}`);
        console.log('-----------------------------------');

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
