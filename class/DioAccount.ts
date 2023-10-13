export abstract class DioAccount {
    private name: string
    private accountNumber: number
    private balance:number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    getName = (): string => {
        return this.name
    }

    deposit = (value: number) => {
        if(this.validateStatus()) {
            return this.balance += value
        }
    }
    withdraw = (value: number)  => {
        if(this.validateBalance(value)) {
            return this.balance -= value
        }
    }
    setBalance = (value: number): number => {        
        return this.balance += value
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    getStatus = () => {
        return this.status
    }

    private validateStatus = (): boolean => {
        if(this.status) {
            return this.status
        }
        throw new Error('a conta esta desativada')
    }

    private validateBalance = (value: number): boolean => {
        if(this.balance > value) {
            return true
        }
        throw new Error('a conta nao te saldo suficiente')
    }
}