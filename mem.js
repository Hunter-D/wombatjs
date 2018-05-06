
"use strict"

if(window.File && window.FileReader && window.FileList && window.Blob){
    console.log("All File APIs supported!");
} else {
    alert("Sorry, the File APIs are not fully supported in this browser!");
}


const MEMINIT_SIZE = 576;
const MEM_SIZE = 512;
var memory = [];
const instructions = ['STOP', 'LOAD', 'STORE', 'READ', 'WRITE', 'ADD',
                    'SUBTRACT', 'MULTIPLY', 'DIVIDE', 'JMPZ', 'JMPN',
                    'JMP', 'ADDI', 'LOADI', 'STOREI'];

//Initialize memory locations to 0000
(function initMemLocs(){
    let parent = document.getElementById('mem-locs');
    var hex = 0;
    for(var x = 0; x < MEMINIT_SIZE; x++){
        let child = document.createElement('div');
        child.id = 'mem-loc';
        if(x%9 === 0){
            /*Changing the style of the memory
              location representation box */
            child.style['background-color'] = "green";
            child.style['color'] = "white";
            child.style['border-color'] = 'grey';
            child.append(hex.toString(16).padStart(3, "0") + "X");
            hex++;
        } else {
            child.append("0000");
            
            /*Put all actual memory locations in array
              for later use */
            memory.push(child);
        }
        parent.append(child);
    }
})();

function toMem(loc, x){
    memory[loc].style['color'] = 'black';
    memory[loc].innerHTML = x;
}

function fromMem(loc){
    return parseInt(memory[loc].innerHTML);
}

function readFile(event){
    var contents = [];
    var file = event.target.files[0];
    if(file){
        var reader = new FileReader();
        reader.onload = function (e) {
            contents = e.target.result.split("\n");
            loadMemory(contents);
        }
        reader.readAsText(file);
    } else {
        console.log("Couldn't read file");
    }
}

function hasNumber(myString){
    return /\d/.test(myString);
}

function loadMemory(contents){
    var loc = 0;
    var mempos = 0;
    for(var i = 0; i < contents.length; i++){
        var cmd;
        var arg;
        contents[i] = contents[i].trim();
        if(hasNumber(contents[i])){
            /* This handles a line with an instruction then a number
               as an argument */
            cmd = contents[i].substr(0, contents[i].indexOf(' ')).toUpperCase();
            arg = parseInt(contents[i].substr(contents[i].indexOf(' ')+1));
            var ArgStr = arg.toString(16);
            ArgStr = ArgStr.slice(ArgStr.length-3);

            /*Writes instruction and argument to memory, keeping a bit
              length of 4 */
            toMem(mempos, "".concat(instructions.indexOf(cmd).toString(16), ArgStr.padStart(3, '0')));
            mempos++;
        } else if(contents[i] === '' || contents[i].charAt(0) === ';'){
            console.log('comment or empty string')
        } else {
            /* If the line does not have a  number as an argument,
               writes the instruction to memory */
            cmd = contents[i].toUpperCase();
            toMem(mempos, instructions.indexOf(cmd).toString(16).padEnd(4, "0"));
            mempos++;
        }
    }
}


document.getElementById('fileinput').addEventListener('change', readFile, false);