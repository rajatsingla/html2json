import express from 'express';
import morgan from 'morgan';
import {convert} from './src/converter.js';
const app = express();
const PORT = 3007;
app.use(morgan('combined'));
// Middleware to parse JSON body data
app.use(express.json());
// Middleware to handle form-data (for HTML data)
app.use(express.urlencoded({ extended: true }));

app.post('/h2j', (req, res) => {
    const htmlData = req.body.html;
    if (!htmlData) {
        return res.status(400).json({ error: 'HTML data is required' });
    }
    return res.json({ html: convert(htmlData) });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
