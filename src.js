var addbtn = document.getElementById('add')

var subbtn = document.getElementById('sub')

var counter = 0
function addnumber() {
    var number = document.getElementById('numid')

    counter += 1
    number.innerText = counter

}

function subnumber() {
    var number = document.getElementById('numid')

    counter -= 1
    number.innerText = counter

}


addbtn.addEventListener('click', addnumber)

subbtn.addEventListener('click', subnumber)