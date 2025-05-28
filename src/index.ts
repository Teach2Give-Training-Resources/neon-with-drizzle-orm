import express from 'express';
import user from './auth/auth.router';
import todo from './todo/todo.router';
const app = express()

// middleware
app.use(express.json())

// routes
user(app)
todo(app)

app.get('/', (req, res) => {
    res.send('Hello Express!')
})


app.listen(8081, () => {
    console.log('Server is running on http://localhost:8081');
})