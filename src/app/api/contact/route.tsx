import { transporter } from "@/services/mail.service";

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("msg");
  const htmlEmail = `<div>
    <h1>Contact from site</h1>
    <div>
    <p> Sent by ${email}</p>
    <p>${message}</p>
    </div>
  </div>`;

  const newMailOption = {
    from: "ContactUs sevice", // sender address
    to: process.env.RECEIPT_EMAIL, // receiver (use array of string for a list)
    subject: subject, // Subject line
    html: htmlEmail, // plain text bod
  };

  await transporter.sendMail(newMailOption);

  return Response.json({ email, subject, message });
}
