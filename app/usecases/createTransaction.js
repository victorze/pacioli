const { Transaction } = require('../entities/transaction')
const { UnbalancedTransactionError } = require('./errors')

class CreateTransaction {
  constructor(transactionRepository) {
    this.transactionRepository = transactionRepository
  }

  execute(entries) {
    const transaction = new Transaction()
    entries.forEach(entry => transaction.addEntry(entry))

    if (transaction.isBalanced()) {
      return this.transactionRepository.add(transaction)
    } else {
      throw new UnbalancedTransactionError(
        `Unbalanced: debit ${transaction.totalDebits()} and credit ${transaction.totalCredits()}`)
    }
  }
}

module.exports = {
  CreateTransaction
}
