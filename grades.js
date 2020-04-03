const mockGrades = [
  { assignment: 'The Price is Right', student: 'Shondra', score: 85 },
  { assignment: 'TV Synopsis', student: 'Evelyn', score: 88 },
  { assignment: 'Order Book', student: 'Steve', score: 100 },
  { assignment: 'TDD Strict Equality', student: 'Jamal', score: 98 },
  { assignment: 'The Price is Right', student: 'Evelyn', score: 89 },
  { assignment: 'Fantasy Scoring', student: 'Jamal', score: 95 },
  { assignment: 'TDD Strict Equality', student: 'Steve', score: 87 },
  { assignment: 'TV Synopsis', student: 'Steve', score: 88 },
  { assignment: 'Fantasy Scoring', student: 'Shondra', score: 96 },
  { assignment: 'TDD Strict Equality', student: 'Evelyn', score: 96 },
  { assignment: 'Fantasy Scoring', student: 'Evelyn', score: 98 },
  { assignment: 'Order Book', student: 'Shondra', score: 78 },
  { assignment: 'The Price is Right', student: 'Jamal', score: 96 },
  { assignment: 'Order Book', student: 'Jamal', score: 100 },
  { assignment: 'The Price is Right', student: 'Steve', score: 90 },
  { assignment: 'TV Synopsis', student: 'Shondra', score: 100 },
  { assignment: 'TDD Strict Equality', student: 'Shondra', score: 92 },
  { assignment: 'Order Book', student: 'Evelyn', score: 100 },
  { assignment: 'Fantasy Scoring', student: 'Steve', score: 93 },
  { assignment: 'TV Synopsis', student: 'Jamal', score: 98 },
]

const averageAll = (accumulator, arr) => {
  return accumulator + arr.score
}

const returnPIRScore = (arr) => {
  if (arr.assignment === 'The Price is Right') {
    return true
  }
}

const returnScoreArrayPIR = (arr) => {
  return arr.filter(returnPIRScore)
}

const PIRobject = returnScoreArrayPIR(mockGrades)

const returnAverage = (PIRobject) => {
  return PIRobject.reduce(averageAll, 0) / PIRobject.length
}

console.log(PIRobject)

console.log(returnAverage(PIRobject))



/* console.log(PIRobject.reduce(averageAll, 0)) */