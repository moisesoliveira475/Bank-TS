import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { VipAccount } from './class/VipAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(123456789, `mateus`, 1)
const companyAccount: CompanyAccount = new CompanyAccount(`DIO`, 1)

peopleAccount.deposit(1000)
peopleAccount.withdraw(700)
peopleAccount.getBalance()
peopleAccount.getName()
peopleAccount.getStatus()
peopleAccount.setBalance(1000)

console.log(companyAccount)
companyAccount.getLoan(1000)
console.log(companyAccount)

const vipAccount: VipAccount = new VipAccount('vip', 1)
console.log(vipAccount)
vipAccount.deposit(100)
console.log(vipAccount)