const vscode = require('vscode');
const path = require('path');

function activate(context) {
  const cmd = vscode.commands.registerCommand('copy-file-ref.sendToTerminal', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const selection = editor.selection;
    const filePath = editor.document.uri.fsPath;
    const workspaceFolder = vscode.workspace.getWorkspaceFolder(editor.document.uri);
    const relativePath = workspaceFolder
      ? path.relative(workspaceFolder.uri.fsPath, filePath)
      : filePath;

    const startLine = selection.start.line + 1;
    const endLine = selection.end.line + 1;
    const ref = startLine === endLine
      ? `@${relativePath}#${startLine}`
      : `@${relativePath}#${startLine}-${endLine}`;

    let terminal = vscode.window.activeTerminal;
    if (!terminal) {
      terminal = vscode.window.createTerminal();
    }
    terminal.show(true);
    terminal.sendText(ref, false); // false = no auto-execute
  });

  context.subscriptions.push(cmd);
}

function deactivate() {}

module.exports = { activate, deactivate };
