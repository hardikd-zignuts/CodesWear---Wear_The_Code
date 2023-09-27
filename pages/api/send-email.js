const nodemailer = require("nodemailer");

export default function handler(req, res) {

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "hp676913@gmail.com",
            pass: process.env.NEXT_PUBLIC_EMAIL_PASS
        }
    })

    const mailOptions = {
        from: "hp676913@gmail.com",
        to: "hardikdesaitech@gmail.com",
        subject: "Test Mail",
        text: "Test sending Gmail using Node JS"
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send(error)
        } else {
            console.log("Email sent: " + info.response);
            res.status(200).send("Email sent")
        }
    })
}