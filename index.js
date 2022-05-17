let express = require("express");
let app = express();
const port = 3000;

app.get('/',function(req,res){
    res.send('ROTA GET');
});

app.get('/apresentar', function (req,res){
    let param1 = parseInt(req.query.n1);
    let param2 = parseInt(req.query.n2);
    let soma = parseInt(param1) + parseInt(param2);
    res.send("O resultado é: " + soma);
});

app.get('/cadastrar', function (req,res){
    res.json(req.query)
});

app.listen(3000,function(){
    console.log(`application running in port: ${port}`);
}); 