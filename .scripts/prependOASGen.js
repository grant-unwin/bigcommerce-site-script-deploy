const fs = require("fs")
const path = require("path")

const getAllFiles = function (dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file))
    }
  })

  return arrayOfFiles
}

const prependNoCheck = function (filePath) {
  const nocheckCode = "// @ts-nocheck";
  const content = fs.readFileSync(filePath);
  if (content.indexOf(nocheckCode) == -1) {
    const fd = fs.openSync(filePath, 'w+')
    const insert = Buffer.from(`${nocheckCode}\n`)
    fs.writeSync(fd, insert, 0, insert.length, 0)
    fs.writeSync(fd, content, 0, content.length, insert.length)
    fs.close(fd, (err) => {
      if (err) throw err;
    });
  }
}


try {
  const arrayOfFiles = getAllFiles("src/types/bigcommerce/")

  arrayOfFiles.forEach(prependNoCheck);

  console.log(arrayOfFiles)
} catch (e) {
  console.log(e)
}