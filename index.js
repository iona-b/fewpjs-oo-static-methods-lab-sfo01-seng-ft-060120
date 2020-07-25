class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize( string ) {
    let stringArray = string.split(" ")
    let newStringArray = [];
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    for (let i = 0; i < stringArray.length; i++) {
      if (i == 0) {
        newStringArray.push(this.capitalize(stringArray[i]))
      } else if (exceptions.includes(stringArray[i])) {
        newStringArray.push(stringArray[i])
      } else {
        newStringArray.push(this.capitalize(stringArray[i]))
      }
    }
    return newStringArray.join(" ");
  }
}