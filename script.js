import * as sections from './index.js'

function createCodeZone(id) {
    const textArea = document.getElementById(`codeEditor-${id}`);
    const codeEditor = CodeMirror.fromTextArea(textArea, {
        mode: "javascript",
        theme: "dracula",
        lineNumbers: true,
        viewportMargin: Infinity, 
        extraKeys: {
            "Ctrl-Enter": executeCode,
            "Shift-Enter": () => console.clear(),
            "Alt-Enter": resetCode,
        }
    });

    codeEditor.setSize(null, textArea.dataset.size); 
    const runButton = document.getElementById(`runButton-${id}`);
    const resetButton = document.getElementById(`resetButton-${id}`);
    const output = document.getElementById(`output-${id}`);
    const initialCode = textArea.value;

    function executeCode() {
        output.innerHTML = "";
        try {
            const code = codeEditor.getValue();
            eval(code);
        } catch (error) {
            console.error(error);
        }
    }

    function resetCode() {
        codeEditor.setValue(initialCode);
        output.innerHTML = "";
    }

    runButton.addEventListener("click", executeCode);
    resetButton.addEventListener("click", resetCode);
}

function createZones() {
    let cont = 1;
    while (document.getElementById(`codeEditor-${cont}`) !== null) {
        createCodeZone(cont);
        cont++;
    }
}

function createSection(section){
    const div = document.createElement('div');
    div.innerHTML = section
    document.getElementById('sections').appendChild(div);
}
Object.values(sections).forEach(createSection)
document.addEventListener("DOMContentLoaded", createZones);