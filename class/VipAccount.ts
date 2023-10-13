import { DioAccount } from "./DioAccount";

export class VipAccount extends DioAccount {

    deposit = (value: number) => {
        if(this.getStatus() === true) {
            return this.setBalance(value + 10)
        }   
    }
}