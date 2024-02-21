import { EmailTemplate } from "../../_components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST({req }) {
  const responce = await req.json();
  try {
    const data = await resend.emails.send({
      from: 'sammytest@resend.dev',
      to: ['bomzza01@gmail.com'],
      subject: 'Hello world',
      react:EmailTemplate({ firstName :'John' }),
    });

    return <NextResponse json={data} />;
  } catch (error) {
    return <NextResponse json={{ error }} />;
  }
}
