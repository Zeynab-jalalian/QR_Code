const wrapper = document.querySelector(".wrapper"),
    qr_input = wrapper.querySelector(".form input"),
    genBtn = wrapper.querySelector(".form button"),
    qr_img = wrapper.querySelector(".qr-code img");
genBtn.addEventListener("click",()=>{
 let qr_value=qr_input.value;
if(!qr_value) return;
qr_img.src=`https://api.qrserver.com/v1/create-qr-code/?data=${qr_value}&size=100x100`;
wrapper.classList.add("active");
});