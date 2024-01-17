const nodemailer = require ('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'abdaiemmohamedamine@gmail.com',
      pass: 'hgil vavq ujuz zszn'
    }
  });
  
  var mailOptions = {
    from: 'abdaiemmohamedamine@gmail.com',
    to: 'seif.abichou20@gmail.com',
    subject: 'hello',
    html:'<h1>hello world!<h1/>\n<p>the one who lives<p/>\n<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers-clan.com%2Ffr%2Fdesktop-wallpapers%2Fone-piece-angry-monkey-d-luffy%2F&psig=AOvVaw2yl3rHsPK5e3mn4F6a4Dqz&ust=1705577001638000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDMi92n5IMDFQAAAAAdAAAAABAD"/>\n'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });