const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ed@edstoner.dev",
    subject: "Thanks for joining in!",
    text: `Hello ${name}, thanks for subscribing!`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ed@edstoner.dev",
    subject: "Goodbye",
    text: `Sorry to see you go, ${name}`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
