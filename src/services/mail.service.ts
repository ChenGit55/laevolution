let nodemailer = require("nodemailer");

const mailOptions = {
  from: "roger", // sender address
  to: process.env.RECEIPT_EMAIL, // receiver (use array of string for a list)
  subject: "Subject of your email", // Subject line
  html: "<p>Your html here 20</p>", // plain text body
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export { mailOptions, transporter };
