const fs = require("fs")
const process = require("process")
const axios = require("axios")

function handleAppendFile(text, file){
    if (file){
        fs.writeFile(file, 'utf8', function(err){
            if (err) {
                console.log(`There was an error with writing ${text} to ${file}`)
                console.log(err)
                process.exit(3)
            }
        })
    }
    console.log(text)
}

function cat(filePath, appendToFile) {
    fs.readFile(filePath, 'utf8', function(err, data){
        if (err) {
            console.log(`There was an erro trying to read the file ${filePath}`)
            console.log(err)
            process.exit(1)
        }
        if (appendToFile) {
            handleAppendFile(data, appendToFile)
        }
        console.log(data)
    })
}


async function webCat(url, appendToFile) {
    try {
        let response = await axios.get(url)
        if (appendToFile) {
            handleAppendFile(response, appendToFile)
        }
        else {
            console.log(response.data)
        }
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

master(hello.txt)