const { Account } = require('../../../app/entities/account')
const { Entry } = require('../../../app/entities/entry')

test('access account code', () => {
  const account = new Account('101', 'Caja', 'A')
  const entry = new Entry(100, account, new Date(2022, 2, 20), 'Cobranza')

  expect(entry.code).toBe('101')
})

test('entry debited', () => {
 const entry = new Entry(100)

  expect(entry.isDebited()).toBeTruthy()
})

test('entry credited', () => {
 const entry = new Entry(-100)

  expect(entry.isCredited()).toBeTruthy()
})
