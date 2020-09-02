const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(season) {
  let test = season.find(function(s) {return s.result === 'W'})
  if (test === undefined) {
    return undefined
  } else {
    return test.year
  }
}