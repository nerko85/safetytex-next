// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Molim vas da me obavjestite o novostima u ponudi kompanije Safetytex\r\n 
    Email adresa: ${body.email}\r\n
  `;

  const data = {
    to: "office@safetytex.rs",
    from: "contact@safetytex.rs",
    subject: "Newsletter sa Safetytex.rs",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);

  res.status(200).json({
    message: "Hala vam što ste se preplatili na naš newsletter",
  });
};
