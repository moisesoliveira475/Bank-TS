import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (value: number) => {
        if(this.getStatus() === true) {
            this.setBalance(value)
        } 
        throw new Error('a conta nao esta ativa')
    }

    deposit = (): number => {
        return 100
    }



}