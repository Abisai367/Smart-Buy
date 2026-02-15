const phone = document.getElementById('phone');
const amount = document.getElementById('amount');
const airtime = document.getElementById('airtime');
const data = document.getElementById('data');
const confirmation = document.getElementById('confirmation');
const bonus = document.getElementById('bonus');
const network = document.getElementById('network');
const rebuy = document.getElementById('rebuy');
const purchase = document.getElementById('purchase');
let ushuru;
let payable;
let phoneNum;

purchase.onclick = function() {
    payable = Number(amount.value);
    ushuru = 0;
    confirmation.textContent = '';
    bonus.textContent = '';
    network.textContent = '';
    
    if (phone.value.match(/[a-zA-Z]/)) {
        confirmation.textContent = `Your Phone Number Can't contain Alphabets`
    }
   else if (phone.value.length != 10) {
       confirmation.textContent = `Your Phone Number Can't contain Less than or more than 10 characters`
    }
    else if (amount.value < 10) {
        confirmation.textContent = `You can't purchase Airtime or Data Less than Ksh.10`
    }
    else if (amount.value > 1000) {
        confirmation.textContent = `You can't spend more than 1000.`
    }
    else if (!airtime.checked && !data.checked) {
        confirmation.textContent = `Please select either Airtime or Data`;
    }
    else {
        if (amount.value >= 500) {
            ushuru = Number(amount.value) * 0.1;
            payable = Number(amount.value) - ushuru;
        }
        else if (amount.value >= 200 && data.checked) {
            ushuru = `free 50 MB`;
            payable = Number(amount.value);
        }
        else if (amount.value >= 100) {
            payable = Number(amount.value) ;
            ushuru = payable * 0.05 + ` Airtime`;
        }
        
        phoneNum = phone.value.substring(0, 3);
        if (phoneNum == '071' || phoneNum == '072' || phoneNum == '079') {
            network.textContent = `Network: Safaricom`;
            }
        else if (phoneNum == '073' || phoneNum == '074') {
            network.textContent = `Network: Airtel`;
        }
        else if (phoneNum == '078') {
            network.textContent = `Network: Telkom`;
        }
        else{
            network.textContent = `Network: Unknown`;
        }
    confirmation.textContent = `You have successfully purchased Ksh.${payable} worth of ${airtime.checked ? 'Airtime' : 'Data'} to ${phone.value}`;
    bonus.textContent = `Bonus: ${ushuru}`;


    }
}
document.body.style.backgroundColor = "#0f172A";

rebuy.onclick = function() {
    location.reload();

}