const { CreateTransaction, UnbalancedTransactionError } = require('../../../app/usecases/createTransaction')

test('create transaction', () => {
  const entries = [
    { amount: 200 },
    { amount: -100 },
    { amount: -100 }
  ]

  const transactionRepository = {}
  transactionRepository.add = jest.fn(transaction => null)

  const createTransaction = new CreateTransaction(transactionRepository)
  const newTransaction = createTransaction.execute(entries)

  expect(transactionRepository.add.mock.calls.length).toBe(1)
  expect(newTransaction).toBeDefined()
})

test('unbalanced transaction', () => {
  const entries = [
    { amount: 200 },
    { amount: -100 },
    { amount: -50 }
  ]

  const transactionRepository = {}
  transactionRepository.add = jest.fn(transaction => null)
  const createTransaction = new CreateTransaction(transactionRepository)

  expect(() => createTransaction.execute(entries)).toThrow(UnbalancedTransactionError)
  expect(() => createTransaction.execute(entries)).toThrow("Unbalanced: debit 200 and credit 150")
  expect(transactionRepository.add.mock.calls.length).toBe(0)
})
