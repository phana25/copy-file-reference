# Copy File Reference

A VS Code extension that sends selected code as a `@file#line-line` reference to the terminal — compatible with [Claude Code](https://claude.ai/code) syntax.

## How It Works

When you select code in the editor and press `cmd+k`, the extension pastes a file reference into the active terminal in this format:

```
@relative/path/to/file.rb#startLine-endLine
```

You can then paste this reference directly into Claude Code chat to share the selected code as context.

## Example

1. Open a file, e.g. `app/models/user.rb`
2. Select lines 10–25
3. Press `cmd+k`
4. Your terminal gets: `@app/models/user.rb#10-25`
5. Copy and paste it into Claude Code chat

Claude Code will include those exact lines as context in the conversation.

## Installation

**1. Clone the repository**

```bash
git clone git@github.com:phana25/copy-file-reference.git
cd copy-file-reference
```

**2. Install the extension**

```bash
# For VS Code
code --install-extension copy-file-reference-0.0.1.vsix

# For Cursor
cursor --install-extension copy-file-reference-0.0.1.vsix
```

> **VS Code note:** If `code` is not in your PATH, run `Cmd+Shift+P` → **Shell Command: Install 'code' command in PATH** first.

**3. Restart your editor**

## Keybinding

| Key | Action |
|-----|--------|
| `cmd+k` | Send selected lines as `@file#start-end` to terminal |

Only triggers when text is selected in the editor (`editorTextFocus && editorHasSelection`).
