function findFileExtension(filename) {
  return filename.substring(filename.lastIndexOf('.'))
}
findFileExtension('sample.ex.jpeg')

function isImageFileExtension(filename) {
  if (filename === null && filename === undefined) {
    return false
    //.png, .jpg, .jpeg, .gif, .svg
  } else if (filename.endsWith('.') === '.png') {
    return true
  } else if (filename.endsWith('.') === '.jpg') {
    return true
  } else if (filename.endsWith('.') === 'jpeg') {
    return true
  } else if (filename.endsWith('.') === '.gif') {
    return true
  } else if (filename.endsWith('.') === '.svg') {
    return true
  }
  return false
}
console.log(isImageFileExtension('sample.png'))
console.log(isImageFileExtension('sample.jpg'))
console.log(isImageFileExtension('sample.jpeg'))
console.log(isImageFileExtension('sample.gif'))
console.log(isImageFileExtension('sample.svg'))
console.log(isImageFileExtension(null))
console.log(isImageFileExtension(undefined))
console.log(isImageFileExtension('sample.sve'))
