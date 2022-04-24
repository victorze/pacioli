const { Transaction } = require('../../../app/entities/transaction')
const { Entry } = require('../../../app/entities/entry')

test('two balanced entries', () => {
  const transaction = new Transaction()
  transaction.addEntry(new Entry(100))
  transaction.addEntry(new Entry(-100))

  expect(transaction.isBalanced()).toBeTruthy()
})

test('three balanced entries', () => {
  const transaction = new Transaction()
  transaction.addEntry(new Entry(100))
  transaction.addEntry(new Entry(-20))
  transaction.addEntry(new Entry(-80))

  expect(transaction.isBalanced()).toBeTruthy()
})

test('total debits and credits', () => {
  const transaction = new Transaction()
  transaction.addEntry(new Entry(100))
  transaction.addEntry(new Entry(50))
  transaction.addEntry(new Entry(-70))
  transaction.addEntry(new Entry(-80))

  expect(transaction.totalDebits()).toBe(150)
  expect(transaction.totalCredits()).toBe(150)
  expect(transaction.isBalanced()).toBeTruthy()
})

test('unbalanced entries', () => {
  const transaction = new Transaction()
  transaction.addEntry(new Entry(90))
  transaction.addEntry(new Entry(-100))

  expect(transaction.isBalanced()).toBeFalsy()
})

test('a single entry throws error', () => {
  const transaction = new Transaction()
  transaction.addEntry(new Entry(100))

  expect(() => transaction.isBalanced()).toThrow(/two entries/)
})

