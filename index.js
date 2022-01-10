import express from 'express'
const App = express()

App.get('/', (req, res) => {
    res.send("yelle")
})

// raje padle waooaoaoa fish


App.listen(5050, () => {
    console.log("listning")
})