function insert(num){
    document.form.text.value += num
}

function clean() {
    document.form.text.value = ''
}
function back() {
    let exp = document.form.text.value;
    document.form.text.value = exp.substring(0 , exp.length-1)
}

function havasar(){
    let exp = document.form.text.value;
    if(exp){
        document.form.text.value = eval(exp)
    }
}