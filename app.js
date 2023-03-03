/*Libs*/
const cors = require('cors')                  // allow api requests/response
const express = require('express');         // api requests lib
const path = require('path');               // for init static directory
const app = express();                      // app iniy
app.use(express.json());                    // use json for requests
/*Mail depenpencies*/
require('dotenv').config();                 // work with .env file
const nodeMailer = require('nodemailer')    // mail lib
/*Varibles*/
const PORT_APP = 2001;                      // app port
const urlRequest = '/api/mail/';             // url request api

app.use(cors());

/*Requests*/
//GET
app.get(`${urlRequest}`, (request, response) => {
    response.status(200).json(
        [
            {
                "index": 0,
                "nameTrack": "Drake - Forever",
                "authorTrack": "акак",
                "preViewImagePath": "/tracks/images/Travis_Scott_Astroworld.jpg",
                "trackPath": "tracks/audio/muzlome_Travis_Scott_-_SICKO_MODE_57796090.mp3",
                "progress": 0,
                "length": 0,
            },
            {
                "index": 1,
                "nameTrack": "Linking Park - In the end",
                "authorTrack": "seonfoi",
                "preViewImagePath": "/tracks/images/JackBoys.jpg",
                "trackPath": "tracks/audio/travis_scott_-_goosebumps_feat_kendrick_lamar_muzati.net.mp3",
                "progress": 0,
                "length": 0,
            },
            {
                "index": 2,
                "nameTrack": "Travis Scott - Stop trina be God",
                "authorTrack": "seoццйnfoi",
                "preViewImagePath": "/tracks/images/Travis_Scott_Astroworld.jpg",
                "trackPath": "tracks/audio/muzlome_Travis_Scott_-_SICKO_MODE_57796090.mp3",
                "progress": 0,
                "length": 0,
            },
        ]
    )
});

//POST
app.post(`${urlRequest}`, (request, response) => {
    /*Mail varible*/
    const serviseMail = 'gmail';                            // Servise mail
    const mailFromSent = process.env.EMAIL;                 // Sent mail
    const mailToSent = "popov.matvey.s62@gmail.com";                   // Got mail
    const nameRequest = request.body.name;                  // Deserelize object (name)
    const phoneRequest = request.body.phone;                // Deserelize object (phone) 
    const emailRequest = request.body.email;                // Deserelize object (email)
    const shortMessageRequest = request.body.message;       // Deserelize object (short message)
    // Send message
    const subjectLetter = `Заказчик ООО "Термобетон"`;      // Subject letter
    const textLetter = `\n
                        Имя: ${nameRequest} \n
                        Телефон: ${phoneRequest}\n
                        Почта ${emailRequest}\n
                        Сообщение ${shortMessageRequest}\n                         
                         `;                                 // Text letter

    const transporter = nodeMailer.createTransport(
        {
            service: serviseMail,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            }
        })

    const mailOptions = {
        from: mailFromSent,
        to: mailToSent,
        subject: subjectLetter,
        text: textLetter,
    }

    transporter.sendMail(
        mailOptions,
        (error) => {
            if (error !== null) {
                console.log(error);
                response.sendStatus(500);
            } else {
                console.log('Message has been sent');
                response.sendStatus(200);
            }
        }
    );
});

//DELETE
app.delete(`${urlRequest}/:id`, (request, response) => {

});

//PUT
app.put(`${urlRequest}/:id`, (request, response) => {

});

/*Directory*/
// init statics
app.use(express.static(path.resolve(__dirname, 'client')));

// lisening all get requests
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", 'index.html'))
});

// default massage
app.listen(PORT_APP, () => console.log(`Server has been started on port ${PORT_APP}`));

