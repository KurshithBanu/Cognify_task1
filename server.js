const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/submit', (req, res) => {
    const { name, email, phone, gender, nationality, comments } = req.body;
    res.send(`
        <h1>Thank You!</h1>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone Number: ${phone}</p>
        <p>Gender: ${gender}</p>
        <p>Nationality: ${nationality}</p>
        <p>Comments: ${comments || "No comments"}</p>
        <a href="/">Back to the form</a>
    `);
});
``
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
