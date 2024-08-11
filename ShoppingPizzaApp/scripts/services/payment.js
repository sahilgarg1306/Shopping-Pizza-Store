document.getElementById('rzp-button1').onclick = function(e){
    e.preventDefault();

    const totalDiv = document.querySelector('#total').innerText;
    const totalAmount = parseFloat(totalDiv.replace('Total: ', '')) * 100; // Convert to paise

    var options = {
        "key": "rzp_test_xQJcS49E6NLbJj", 
        "amount": totalAmount.toFixed(0), // Set amount dynamically
        "currency": "INR",
        "name": "Pizza Shop",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
        "handler": function(response){
            alert("Payment Done....");
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature);
        },
        "prefill": {
            "name": "Customer Name",
            "email": "customer@example.com",
            "contact": "CustomerPhoneno"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };

    var rzp1 = new Razorpay(options);

    rzp1.on('payment.failed', function(response){
        alert("Payment Fail");
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
    });

    rzp1.open();
}
