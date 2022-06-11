const http = require('http');
const fs = require('fs');
const requests = require('requests');


const homeFile = fs.readFileSync('home.html', 'utf-8');

const replaceVal = (tempVal, orgVal) =>{
    let temperature = tempVal.replace('{%tempval%}', orgVal.main.temp);
    temperature = temperature.replace('{%tempmin%}', orgVal.main.temp_min);
    temperature = temperature.replace('{%tempmax%}', orgVal.main.temp_max);
    temperature = temperature.replace('{%location%}', orgVal.name);
    temperature = temperature.replace('{%country%}', orgVal.sys.country);

    return temperature
}

const server = http.createServer((req, res) => {

    if(req.url == '/'){
        requests("http://api.openweathermap.org/data/2.5/weather?q=Pune&APPID=8392dc2fa014bb44ef92959255be34fc")
        .on("data", function(chunk){

            const objData = JSON.parse(chunk)
            const arrData = [objData]

            const realTimeData = arrData.map((val) =>replaceVal(homeFile, val)).join('');
            res.end(realTimeData)
            console.log(realTimeData);
        })
        .on("end", function(err){
            if(err)
                console.log(err);
            res.end();
        });
    }

});


server.listen(3001, "localhost");