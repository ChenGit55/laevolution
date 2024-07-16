import { transporter } from "@/services/mail.service";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const program = formData.get("program");
    const name = formData.get("name");
    const gender = formData.get("gender");
    const dob = formData.get("dob");
    const add_inf = formData.get("add_inf");
    const p_name = formData.get("p_name");
    const address = formData.get("address");
    const city = formData.get("city");
    const state = formData.get("state");
    const zip = formData.get("zip");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const emergency_name = formData.get("emergency_name");
    const emergency_email = formData.get("emergency_email");
    const emergency_phone = formData.get("emergency_phone");

    const htmlEmail = `<div>
    <h1>${name} INFO</h1>
    <div>
    <p>Program - ${program}</p>
    <p>Name - ${name}</p>
    <p>Gender - ${gender}</p>
    <p>Birth - ${dob}</p>
    <p>Addtional information - ${add_inf}</p>
    <p>Parent Name - ${p_name}</p>
    <p>Address - ${address}</p>
    <p>City - ${city}</p>
    <p>State - ${state}</p>
    <p>Zip - ${zip}</p>
    <p>Email - ${email}</p>
    <p>Phone - ${phone}</p>
    <p>Emergency Contact Name - ${emergency_name}</p>
    <p>Emergency Contact Email - ${emergency_email}</p>
    <p>Emergency Contact Phone - ${emergency_phone}</p>
    </div>
  </div>`;

    try {
      const newMailOption = {
        from: "Enroll sevice", // sender address
        to: process.env.RECEIPT_EMAIL, // receiver (use array of string for a list)
        subject: `${name} - ${email}`, // Subject line
        text: htmlEmail,
        html: htmlEmail,
      };

      await transporter.sendMail(newMailOption);
      console.log("Email successfully sent.");
    } catch (error) {
      console.log("Send email error -", error);
    }

    return Response.json(formData);
  } catch (err) {
    console.error("FAIL:", err);
  }
}
