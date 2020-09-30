const words = ["javascript", "function", "arguments", "debugger", "extends", "package", "protected", "continue", "boolean", "string", "undefined", "switch", "volatile"];

// document.getElementById("first").innerHTML = words[0];

window.addEventListener("DOMContentLoaded", selectWord());


function selectWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    // document.querySelector("#first").textContent = words[randomIndex];
    let node = document.createElement("p");
    
}


