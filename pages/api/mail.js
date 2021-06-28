// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const body = JSON.parse(req.body);

  const message = ` 
    Ime i prezime: ${body.name}\r\n
    Broj Telefona: ${body.phone}\r\n
    Tema poruke: ${body.subject}\r\n
    Poruka: ${body.message}
  `;

  const data = {
    to: "office@safetytex.rs",
    from: "contact@safetytex.rs",
    subject: "Poruka sa webstranice Safetytex",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);

  res.status(200).json({
    message: "Vaša poruka je uspješno poslana. Hvala vam na povjerenju.",
  });
};
