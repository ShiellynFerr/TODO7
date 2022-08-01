import prompt from "prompt-sync";

function ordenarCss () { 
const arr = [];
const entrada = prompt();
while (true) {
    const prompt = entrada ('Entre com a sua lista de propriedades CSS: ');
    if (prompt.toLowerCase() === 'sair') {
        console.log (arr.sort ());
        break;
    } else {
        arr.push (prompt);
    }
}
}
ordenarCss ();