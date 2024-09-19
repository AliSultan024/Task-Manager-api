const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail =(email)=>{
    sgMail.send({
        to:email,
        from:'aleaysultan@gmail.com',
        subject:'Thanks for joining in',
        text:'Welcome to the app '
    })
    
}
const sendCancellationEmail=(email)=>{
    console.log('goodbye user')
    sgMail.send({
        to: email,
        from:'aleaysultan@gmail.com',
        subject:'Cancellation Email',
        text:'Goodbye'
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancellationEmail
}