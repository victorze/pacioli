class Transaction {
  constructor() {
    this.entries = []
  }

  addEntry(entry) {
    this.entries.push(entry)
  }

  isBalanced() {
    if (this.entries.length < 2) {
      throw new Error('A transaction must have at least two entries')
    }
    return this.totalDebits() == this.totalCredits()
  }

  totalDebits() {
    return this.entries
      .filter(entry => entry.amount >= 0)
      .map(entry => entry.amount)
      .reduce((a, b) => a + b)
  }

  totalCredits() {
    return this.entries
      .filter(entry => entry.amount < 0)
      .map(entry => -entry.amount)
      .reduce((a, b) => a + b)
  }
}

module.exports = {
  Transaction
}
