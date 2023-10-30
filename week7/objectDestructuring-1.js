const mail = {
  sender: "SIT, KMUTT",
  recipent: "Umaporn Sup",
  title: "Welcome to KMUTT",
  sentDate: new Date(Date.now()),
};
//Object destructuring
let { recipent } = mail;
let { sentDate: mailDate, title: header } = mail; //sentDate, header
console.log(recipent);
console.log(mailDate);
console.log(header);
