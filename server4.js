const express = require("express");
const app = express();
const port = 8000;

app.set('view engine', 'pug');
app.set('views', `./views`);


app.get('/home/:name', function(req, res){
    res.render('dashboard', {
        name: req.params.name,
    });
 });

app.listen(port, function(){
    console.log(`App has started on port ${port}`)
})

