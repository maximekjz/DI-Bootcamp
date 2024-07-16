document.getElementById('change').addEventListener('click', function(event1){
    let curr_from = document.getElementById('currencies_from').value.substring(0,3)
    console.log(curr_from)
    let curr_to = document.getElementById('currencies_to').value.substring(0,3)
    change = document.getElementById('currencies_from').value
    document.getElementById('currencies_from').value = document.getElementById('currencies_to').value
    document.getElementById('currencies_to').value = change
    if(document.getElementById('amount').value===''){
        alert('Please enter an amount to convert')
    }
    else{
    convert_currency()
    }
})

document.getElementById('button').addEventListener('click', function(event){
    if(document.getElementById('amount').value===''){
        alert('Please enter an amount to convert')
    }
    else{
    convert_currency()
    }})

function convert_currency(){
        let curr_from = document.getElementById('currencies_from').value.substring(0,3)
        console.log(curr_from)
        let curr_to = document.getElementById('currencies_to').value.substring(0,3)
        fetch(`https://v6.exchangerate-api.com/v6/8e85da3db670fea65aa1615c/latest/${curr_from}`)
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                console.log(data)
                let curr_to = document.getElementById('currencies_to').value.substring(0,3);
                let conv_rate = data.conversion_rates[curr_to];
                console.log(conv_rate);
                let result = document.getElementById('result');
                let amount = document.getElementById('amount').value;
                let conv_res = amount * conv_rate
                result.textContent = `${conv_res} ${curr_to}`;
            })
            .catch((e)=>{
                console.error(e)
            })
    }
