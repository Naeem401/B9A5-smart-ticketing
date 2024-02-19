const mobileNumber = document.getElementById('mobile');
const nexBtn = document.getElementById('nex-btn');
const numberValue = mobileNumber.value.trim(); // Trim any leading/trailing spaces
    const convertNumber = parseInt(numberValue);

nexBtn.addEventListener('click', function() {
    

    if (!isNaN(convertNumber) && numberValue.length === 11) {
        // Do something when the conditions are met
        console.log("Conditions met!");
    }
});