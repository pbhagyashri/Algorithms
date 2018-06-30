const capitalize = (string) => {
  let capitalizedString = ''
  capitalisedString = string.split(' ').forEach(word => word.toUpperCase())
  return capitalizedString
}

console.log(capitalize("a short sentence"))