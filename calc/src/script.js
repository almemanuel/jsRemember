function calc(type, value){
    if(type === 'action'){
        if(type === 'c'){
            document.getElementById('result').value = ''
        } else if(value === '+' || value === '-' || value === '*' || value === '/' || value === '.'){
            document.getElementById('result').value += value
        }
    } else if(type === 'value'){
        document.getElementById('result').value += value
    }

    if(value === '=') {
        var valueField = eval(document.getElementById('result').value)
        document.getElementById('result').value = valueField
    }
}