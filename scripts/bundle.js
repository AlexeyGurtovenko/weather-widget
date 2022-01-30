const fs = require( 'fs' );
const path = require( 'path' );
const concat = require( 'concat' );

concat( [
    path.resolve( __dirname, '../dist', './weather-widget', 'runtime.js' ),
    path.resolve( __dirname, '../dist', './weather-widget', 'polyfills.js' ),
    path.resolve( __dirname, '../dist', './weather-widget', 'main.js' )
],
    path.resolve( __dirname, '../dist', 'weather-widget.js' )
);

const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <weather-widget></weather-widget>
        <script src="./weather-widget.js"></script>
    </body>
    </html>
`

fs.writeFileSync( path.resolve( __dirname, '../dist', 'index.html' ), html );

