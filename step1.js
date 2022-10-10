const fs = require("fs")
const process = require("process")
const axios = require("axios")

function cat(filePath) {
    fs.readFile(filePath, 'utf8', function(err, data){
        if (err) {
            console.log(`There was an erro trying to read the file ${filePath}`)
            console.log(err)
            process.exit(1)
        }
        console.log(data)
    })
}