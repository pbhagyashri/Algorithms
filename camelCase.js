// let s = saveChangesInTheEditor

// function camelcase(s) {
//   let counter = 0;

//   let splitwords = s.split(/[A-Z]/)
//   console.log(splitwords)
//   //return counter;

// }

// camelcase(s)

let n = 3;
let password = '1ab'

function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  let newPass = password
  let result = 0;
  i = 0

  while (i < 5) {

    if(!newPass.match(/[a-z]/g)) {
      result += 1
      newPass += 'a'
      console.log('1', newPass)
    } 
    
    if (!newPass.match(/[A-Z]/g)) {
      result += 1   
      newPass += 'A'
      console.log('2', newPass)
    }
    
    if (!newPass.match(/[0-9]/g)) {
      result += 1
      newPass += '1' 
      console.log('3', newPass)
    }
    if (!newPass.match(/[!@#$%^&*()-+]/g)) {
      result += 1 
      newPass += '@'
      console.log('4', newPass)
    }
    i++
  }
 
  console.log(result)

}

minimumNumber(n, password)

