import nodemailer from "nodemailer"; //Import de mailing
import envs from "../config/env.config.js";//Import de variables de entorno
import __dirname from "../../dirname.js";//Import de dirname

export const sendMail = async (email, subject, message, template) =>{
    const transporter = nodemailer.createTransport({
        service: "hotmail",
        port: 587,
        auth:{
            user: "a.marin@hotmail.com.ar",
            pass: envs.GOOGLE_MAIL_PASS
        }
    });//Objeto de config transporter de mailing

    await transporter.sendMail({
        from: "a.marin@hotmail.com.ar",
        to: email,
        subject,
        text: message,
        html: template,
        attachments: [
            {
                filename: "cat2.jpeg",
                path: __dirname + "/public/img/cat2.jpeg",
                cid: "cat2"
            }
        ]
    });//Objeto de config para envio de mails
};
//Export de funcion para envio de mails