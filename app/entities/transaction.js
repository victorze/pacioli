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

    const amounts = this.entries.map(entry => entry.amount)
    return amounts.reduce((a, b) => a + b) == 0
  }
}

module.exports = {
  Transaction
}
