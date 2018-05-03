function changeIR(){
    let instruction = document.getElementById("ir-content");
    let input = document.getElementById('reg-input').value;
    instruction.innerHTML = input; 
    let command = document.getElementById("ir-command");

    switch(+instruction.innerHTML){
        case 0: command.innerHTML = "STOP"; break;
        case 1: command.innerHTML = "LOAD"; break;
        case 2: command.innerHTML = "STORE"; break;
        case 3: command.innerHTML = "READ"; break;
        case 4: command.innerHTML = "WRITE"; break;
        case 5: command.innerHTML = "ADD"; break;
        case 6: command.innerHTML = "SUBTRACT"; break;
        case 7: command.innerHTML = "MULTIPLY"; break;
        case 8: command.innerHTML = "DIVIDE"; break;
        case 9: command.innerHTML = "JMPZ"; break;
        case 10: command.innerHTML = "JMPN"; break;
        case 11: command.innerHTML = "JMP"; break;
        case 12: command.innerHTML = "ADDI"; break;
        case 13: command.innerHTML = "LOADI"; break;
        case 14: command.innerHTML = "STOREI"; break;
        default: command.innerHTML = "unkown"; break;
    }
    document.getElementById('reg-input').value = '';
}

function changeBUS(){
    let bus = document.getElementById("bus");
    let input = document.getElementById('reg-input').value;
    bus.innerHTML = input;  
    document.getElementById('reg-input').value = '';
}

function changeACC(){
    let acc = document.getElementById("acc-content");
    let input = document.getElementById('reg-input').value;
    acc.innerHTML = input;  
    document.getElementById('reg-input').value = '';
}

function changeMAR(){
    let mar = document.getElementById("mar-content");
    let input = document.getElementById('reg-input').value;
    mar.innerHTML = input;  
    document.getElementById('reg-input').value = '';
}

function changeMDR(){
    let mdr = document.getElementById("mdr-content");
    let input = document.getElementById('reg-input').value;
    mdr.innerHTML = input;  
    document.getElementById('reg-input').value = '';
}

function changePC(){
    let pc = document.getElementById("pc-content");
    let input = document.getElementById('reg-input').value;
    pc.innerHTML = input;  
    document.getElementById('reg-input').value = '';
}

