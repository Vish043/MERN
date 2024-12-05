/*An ATM allows withdrawals in denominations of $10 only. Each transaction is limited to a maximun of $500 
and the system should check if account has sufficient funds before processing the withdrawal.

Question 1: Write a Javascript function atamiithdrawal (balance, amount) that:
Checks if the requested amount is in multiples of 10.
Checks if the amount is less than or equal to 1500.
Checks if the balance is enough for the requested withdrawal.
Returns a success message if the withdrawal is allowed, or an error message if my condition falls*/

function atmwithdrawal(balance,amount){
    if( balance>500)
    {
        if(amount%10==0)
        {
            if(balance>=amount)
            return "success withdrawal";
            else
            return "Error: Insufficient funds";
        }
        else 
            return "Error: Amount should be in multiples of 10";

    }
    else
        return "Error: Amount is less than or equal to 500";
}
let b=600
let a=700

console.log(atmwithdrawal(b,a));