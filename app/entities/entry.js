class Entry {
  constructor(amount, account, date, description) {
    this.amount = amount
    this.account = account
    this.date = date
    this.description = description
  }

  get code() {
    return this.account.code
  }

  isDebited() {
    return this.amount >= 0
  }

  isCredited() {
    return this.amount < 0
  }
}

module.exports = {
  Entry
}
