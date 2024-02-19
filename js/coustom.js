

const btn = document.querySelectorAll('.seat-number');
let totalCount = 0;
let totalPrice = 0;
const coupon1 = 'NEW15';
const coupon2 = 'Couple 20';
const grandTotal = document.getElementById('grand-total');

for (let i = 0; i < btn.length; i++){
    const seat = btn[i];
    seat.addEventListener('click',function(event){
        
        

        const totalSelectedSeat = document.getElementById('count');
        let selectedSeatCount = parseInt(totalSelectedSeat.innerText);
        if (selectedSeatCount === 4) {
            // Disable event listener
            return;
        }
        totalCount = selectedSeatCount + 1;
        totalSelectedSeat.innerText = totalCount;
        if(totalCount < 5){
            seat.style.backgroundColor = '#1dd100';
            const totalSeatElement = document.getElementById('total-seat');
        let seatCount = parseInt(totalSeatElement.innerText);
        const seatLeft = seatCount - 1;
        totalSeatElement.innerText = seatLeft;
        const p = document.createElement('p');
        p.innerText = event.target.innerText;
        document.getElementById('seat-name').appendChild(p);
        
        const p2 = document.createElement('p');
        p2.innerText ='economy class';
        document.getElementById('class-name').appendChild(p2);

        const p3 = document.createElement('p');
        const price = 550
        p3.innerText = price;
        document.getElementById('price').appendChild(p3);
        totalPrice = totalPrice + price;
        const totalPriceId = document.getElementById('total-price');
        totalPriceId.innerText = totalPrice;
        
        
        grandTotal.innerText = totalPrice;
        if(totalCount === 4){
            couponBtn.removeAttribute('disabled');
            couponBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
}});
};

const couponBtn = document.getElementById('coupon-btn');
couponBtn.addEventListener('click', function () {
    const getCouponValueId = document.getElementById('coupon-value');
    const getCouponValue = getCouponValueId.value;
    const inputFiled = document.getElementById('input-filed');
    const totalDescount = document.getElementById('total-descount');
    const descount = document.getElementById('descount');
    
    if (coupon1 === getCouponValue){
        inputFiled.classList.add('hidden')
        const descountPrice = totalPrice * .15;
        totalDescount.innerText = descountPrice;
        descount.classList.remove('hidden');
        grandTotal.innerText = totalPrice - descountPrice;
    }
    else if (coupon2 === getCouponValue){
        inputFiled.classList.add('hidden')
        const descountPrice = totalPrice * .20;
        totalDescount.innerText = descountPrice;
        descount.classList.remove('hidden');
        grandTotal.innerText = totalPrice - descountPrice;
    }
    else{
        alert('Invelitet Copune!')
    }
});

const mobileNumber = document.getElementById('mobile');
const nexBtn = document.getElementById('nex-btn');

mobileNumber.addEventListener('input', function() {
    const numberValue = mobileNumber.value.trim(); // Trim any leading/trailing spaces
    const convertNumber = parseInt(numberValue);

    if (!isNaN(convertNumber) && numberValue.length === 11) {
        nexBtn.removeAttribute('disabled');
        nexBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
});
nexBtn.addEventListener('click', function(){
    document.getElementById('header').classList.add('hidden');
    document.getElementById('main').classList.add('hidden')
    document.getElementById('popup').classList.remove('hidden')
});



