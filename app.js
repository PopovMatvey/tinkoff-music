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
            { "id": 101, "title": "Under the green sky", "author": "ATL", "genre": "Hip-Hop", "picturePath": "src/main/resources/songs/under_the_green_sky.jpg", "songPath": null },
            { "id": 102, "title": "Big boy slime", "author": "OG BUDA", "genre": "Hip-Hop", "picturePath": "src/main/resources/songs/big_boy_slime.jpg", "songPath": null },
            { "id": 103, "title": "Blues", "author": "Markul", "genre": "Hip-Hop", "picturePath": "src/main/resources/songs/blues.jpg", "songPath": null },
            { "id": 104, "title": "Sicko mode", "author": "Travis Scott", "genre": "Hip-Hop", "picturePath": "src/main/resources/songs/sicko_mode.jpg", "songPath": null },
            { "id": 105, "title": "Lovely", "author": "Billie Eilish", "genre": "Pop", "picturePath": "src/main/resources/songs/lovely.jpg", "songPath": null },
            { "id": 106, "title": "Rockstar", "author": "DaBaby", "genre": "Hip-Hop", "picturePath": "src/main/resources/songs/rockstar.jpg", "songPath": null },
            { "id": 107, "title": "Never gonna give your up", "author": "Rick Astly", "genre": "Dance-pop", "picturePath": "src/main/resources/songs/never_gonna_give_your_up.jpg", "songPath": null },
            { "id": 108, "title": "We will rock you", "author": "Queen", "genre": "Rock", "picturePath": "src/main/resources/songs/we_will_rock_you.jpg", "songPath": null },
            { "id": 109, "title": "One Republic", "author": "Good Life", "genre": "Rock", "picturePath": "src/main/resources/songs/one_republic.jpg", "songPath": null },
            { "id": 110, "title": "Miyagi & Andy Panda", "author": "Yamakasi", "genre": "Rap", "picturePath": null, "songPath": null },
            { "id": 111, "title": "Post Malone & Ozzy Osbourne", "author": "Take what you want", "genre": "Rap", "picturePath": null, "songPath": null },
            { "id": 112, "title": "kizaru", "author": "Russian most wanted", "genre": "Rap", "picturePath": null, "songPath": null },
            { "id": 113, "title": "Oliver Tree", "author": "Cigarettes", "genre": "Alternative Pop", "picturePath": null, "songPath": null },
            { "id": 114, "title": "Oliver Tree", "author": "Life Goes On", "genre": "Alternative Pop", "picturePath": null, "songPath": null },
            { "id": 115, "title": "Oliver Tree", "author": "Miracle man", "genre": "Alternative Pop", "picturePath": null, "songPath": null },
            { "id": 116, "title": "Valery Meladze", "author": "Heaven", "genre": "Russian Pop", "picturePath": null, "songPath": null },
            { "id": 117, "title": "AC/DC", "author": "Highway To Hell", "genre": "Rock", "picturePath": null, "songPath": null },
            { "id": 118, "title": "ATL", "author": "Serpentine", "genre": "Rap", "picturePath": null, "songPath": null },
            { "id": 119, "title": "Skryptonite", "author": "Chains", "genre": "Rap", "picturePath": null, "songPath": null }
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

