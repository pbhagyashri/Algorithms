let h = 5;
let m = 15;

function timeInWords(h, m) {
  let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight']

  if (m == 00) {
    console.log(`${nums[h]} o' clock`)
  } else if (m === 15) {
    console.log(`quarter past ${nums[h]}`)
  } else if (m === 30) {
    console.log(`half past ${nums[h]}`)
  } else if (m === 45) {
    console.log(`quarter to ${nums[h + 1]}`)
  } else if (m === 1) {
    console.log(`${num[m]} minute past ${nums[h]}`)
  } else if (m > 1 && m < 30) {
    console.log(`${num[m]} minutes past ${nums[h]}`)
  } else if (m > 30 && m < 60) {
    let minutesLeft = 60 - m
    console.log(`${num[minutesLeft]} minutes to ${nums[h + 1]}`)
  } 

}

timeInWords(h, m) 