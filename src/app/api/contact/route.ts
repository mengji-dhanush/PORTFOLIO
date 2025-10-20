import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const transporter: nodemailer.Transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mengjidhanush@gmail.com",
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    const { name, email, msg } = await req.json();

    const message = {
      from: "mengjidhanush@gmail.com",
      to: "mengji.dhanush16@gmail.com",
      subject: `mail from ${email} from portfolio website`,
      text: `${name} says: ${msg}`,
    };
    await transporter.sendMail(message);
    return NextResponse.json({
      status: "success",
      msg: "email sent successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: "fail",
      msg: "email not sent.some error occurred",
      error: String(error),
    });
  }
}
