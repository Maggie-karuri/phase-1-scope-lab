
var customerName = 'bob';
global.bestCustomer = undefined;
function upperCaseCustomerName() {
    if (typeof customerName !== 'undefined') {
        customerName = customerName.toUpperCase();
    }
    console.log(upperCaseCustomerName);
}
    function setBestCustomer() {
    bestCustomer = 'not bob';
    } 
    function overwriteBestCustomer() {
     bestCustomer = 'maybe bob'
    }
    const leastFavoriteCustomer = 'someone';
    function changeLeastFavoriteCustomer() {
        throw new Error('Assignment to constant variable.');
        console.log(leastFavoriteCustomer);
}
console.log(customerName);
console.log(bestCustomer);