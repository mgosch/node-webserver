
const http = require('http');

http.createServer((req, res) => {
    console.log(req);

    // const persona = {
    //     id: 1,
    //     nombre: 'Victoria'
    // }

    // mensaje de cabecera
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.write(JSON.stringify(persona));
    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.write(persona);


    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'application/csv'});
    // res.write('id, nombre\n');
    // res.write('1, Victoria\n');
    // res.write('2, Santiago\n');
    // res.write('3, Jose\n');
    // res.write('4, Pedro\n');

    res.write('Hola Mundo');
    res.end();
})
.listen(8080);

console.log('Escuchando el puerto', 8080);