var express = require("express");
var app = express(); // create an app

/*********************************************************************
 *  Configuration
***********************************************************************/

//enable CORS

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE");
    res.header("Access-Control-Allow-Header", "Origin, X-Rquested-With, Content-Type, Accept");
    next();
});




/*********************************************************************
 *   Web server endpoints
***********************************************************************/

app.get('/', (req, res) => {
    console.log("Someone wants the root page");
    res.send("Hello, my friend!");
});

app.get('/contact', (req, res) =>{
    console.log("Someone is on the contact page");
    res.send("This will be the contact page, people working over here!!!");
});

app.get('/aboutme', (req, res) =>{
    console.log("Someone wants to know about you");
    res.send("<h1 style='color:red;'>My name is Josh Paige</h1>");
});

app.get('/exc/:message', (req, res) =>{
    console.log("message from client: ", req.params.message);
    var msj = req.params.message;
    var vowels = '';
    var allVowels = ['a','e','i','o','u','y'];
    //1 travel the msj string and print on the console each letter
    for(var i = 0; i<msj.length; i++){
        var letter = msj[i];
    //2 check if each letter is a vowel
        // if it is, add the vowel to the vowels string    
        if(allVowels.indexOf(letter.toLowerCase()) != -1){
            vowels += letter;
        }
        //3 (homework) return each vowel ONLY ONCE
        var filter = [new Set(vowels)];
        
    }
    
    res.status(202);
    res.send(vowels);
    console.log(filter);
    
});
/*********************************************************************
 *   API END POINTS
***********************************************************************/

app.post('/api/items', (req, res) => {
    console.log("Clients wants to store items");
    res.status(201); // 201 => created
    res("OK");
});

/*********************************************************************
 *   START Server
 **********************************************************************/


app.listen(8080, function() {
    console.log("Server running at http://localhost:8080");
    console.log("Press Ctrl+C to kill it");
});

