//Module that deals with the file system 
const fs = require('fs') 

function writeDataToFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
    if (err) {
      console.log(err)
    }
  }) 
}

module.exports = {
  writeDataToFile
}