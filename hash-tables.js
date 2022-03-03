let hashtable = []

hashtable.push(['test', 'test'])
hashtable 

let maptable = new Map()
maptable.name = 'Steven'
maptable.age = 25
maptable

/**
 * 
 * @param {string} value 
 */
function hash(value, arrLen) {
  let total = 0

  for (let i = 0; i < value.length; i++) {
    const element = value[i];
    total += element.charCodeAt() - 96
  }
  return total % arrLen // 11 is length of array 
}

const hashVal = hash('tan', 10) 
hashVal

function hash2(key, arrLen){
  let total = 0
  let WEIRD_PRIME = 31 
  for(let i = 0; i < Math.min(key.length, 100); i++){
    let char = key[i]
    let value = char.charCodeAt(0) - 96 
    total = (total * WEIRD_PRIME + value) % arrLen //?
  }
  return total 
}
hash2('green', 11) //?


