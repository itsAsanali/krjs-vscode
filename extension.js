const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('krjs.runFile', function () {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('❌ 열린 KRJS 파일이 없습니다!');
            return;
        }

        const document = editor.document;
        document.save();

        const filePath = document.fileName;
        
        let terminal = vscode.window.activeTerminal;
        if (!terminal) {
            terminal = vscode.window.createTerminal('KRJS Runner');
        }

        terminal.show();
        terminal.sendText(`krnode "${filePath}"`);
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};