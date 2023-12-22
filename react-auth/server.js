import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.use('/login', (req, res) => {
    //simulate gettting a token from the auth method
    const token = 'tokenakbara';

    res.cookie('token', token, { maxAge: 360000, httpOnly: true });

    res.send({
        token: token
    });
});

app.listen(8080, () => console.log('API is running on localhost:8080/login '))