const alfabeto = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const deslocamento = 5; 

function encrypt() { 
    var value_input = document.getElementById("input_decoder");
    var text_input = value_input.value; 
    value_input.value = "";
    var encrypt_text_output = document.getElementById("encrypt_text_output"); 
    var section_output_standard = document.getElementById("section_output_standard");

    display_output(text_input, deslocamento);
}

function copy_text() { 
    var encrypt_text = document.getElementById("encrypt_text").innerText; 
    navigator.clipboard.writeText(encrypt_text);
}

function decrypt() { 
    var value_input = document.getElementById("input_decoder");
    var text_input = value_input.value; 
    value_input.value = "";

    display_output(text_input, -deslocamento);

}

function display_output(text_input, i) {
    const text_result = text_input.split("").map((char) => { 
        if(alfabeto.includes(char)) { 
            return alfabeto[(alfabeto.indexOf(char) + i) % 26]; 
        } else { 
            return char; 
        }
    }).join("");
    
    section_output_standard.style.display = "none";
    encrypt_text_output.style.display = "flex";
    encrypt_text_output.style.justifyContent = "space-between";

    encrypt_text_output.innerHTML = `
        <p id="encrypt_text">${text_result}</p>
        <button class="copy_button" onClick="copy_text()">Copiar</button>
    `;
}