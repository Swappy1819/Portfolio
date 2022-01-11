import express from 'express'
import ejsMate from 'ejs-mate';
import path from 'path';
const __dirname = path.resolve();
const app = express()

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))



app.get('/', (req, res) => {
    res.render("portfolio/portfolio");
})

app.listen(5050, () => {
    console.log("listning")
})