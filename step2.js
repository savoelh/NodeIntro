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


async function webCat(url) {
    try {
        let response = await axios.get(url)
        console.log(response.data)
    }
    catch {
        console.log(`There was an error with ${url}`)
        process.exit(2)
    }

}

function master(input){
    if (input.startsWith("http")) {
        webCat(input)
    }
    else {
        cat(input)
    }
}