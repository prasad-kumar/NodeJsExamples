
let name = 'Prasad Kumar';

const add = (a, b) => {
  return a + b
}

const sub = (a, b) => {
    return a - b
  }

const isMajor = (age) => {
   return age >= 18 ? true : false
}


module.exports =  {add, sub, isMajor, name};

