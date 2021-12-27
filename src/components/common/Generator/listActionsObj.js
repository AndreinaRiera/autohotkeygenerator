export const listActionsObj =  {
        defaultValues: {
            type: "text",
            defaultValue: false,
            optgroup: 0,
            readOnly: false,
            required: true
        },
        list: [
            {
                selectValue: "change",
                defaultValue: true,
                optgroup: 1,
                key: "SendRaw",
                url: '/commands/Send.htm',
                result: ({ action }, defaultVale) => {
                    return "SendRaw" + includeActionText(action ? action.text : defaultVale, false);
                }
            }, {
                selectValue: "write",
                optgroup: 1,
                key: "SendRaw",
                result: ({ action }, defaultVale) => {
                    return "SendRaw" + includeActionText(action ? action.text : defaultVale, false);
                }
            }, {
                selectValue: "MsgBox",
                optgroup: 1,
                key: "MsgBox",
                url: "commands/MsgBox.htm",
                result: ({ action }, defaultVale) => {
                    return "MsgBox" + includeActionText(action ? action.text : defaultVale);
                }
            }, {
                type: "url",
                placeholder: "https://www.autohotkey.com",
                description: <>La URL que escribas se abrira en tu navegador predeterminado en una nueva pestaña</>,
                selectValue: "webpage",
                optgroup: 2,
                key: "Run",
                url: "commands/Run.htm",
                result: ({ action }, defaultVale) => {
                    return "Run" + includeActionText(action ? action.text : defaultVale, false, true);
                }
            }, {
                placeholder: "\"D:\\Sublime Text 3\\sublime_text.exe\"",
                selectValue: "program",
                optgroup: 2,
                key: "Run",
                result: ({ action }, defaultVale) => {
                    return "Run" + includeActionText(action ? action.text : defaultVale, false, true);
                }
            }, {
                description: <> Se efectuare un click en la posicion en la que este el cursor en ese momento </>,
                selectValue: "click",
                optgroup: 3,
                key: "Click",
                required: false,
                hideInput: true,
                url: "commands/Click.htm",
                result: () => {
                    return "Click";
                }
            }, {
                selectValue: "click_double",
                optgroup: 3,
                key: "Click",
                required: false,
                hideInput: true,
                result: () => {
                    return "Click, 2";
                }
            },
            { ...createCursorObj("cursor_0", "0") },
            { ...createCursorObj("cursor") },
            { ...createCursorObj("cursor_right", "Right") },
            { ...createCursorObj("cursor_double", 2) },

        ],
        optgroups: ["-", "text", "run", "cursor"]
    };



    function includeActionText(actionText, changeStrValues = true, changeStrQuotes = false) {
        // caracteres literales (para que no se confundan con teclas)
        if (changeStrValues) {
            ["#", "^", "!", "+", "<^>!", "Delete", "{", "}"].forEach(key => {
                actionText = actionText.replaceAll(key, `{${key}}`);
            });
        }
        // saltos de linea
        actionText = actionText.replace(/(?:\r\n|\r|\n)/g, ' `n ');
        // tab
        actionText = actionText.replace(/\t/g, ' `t ');
    
        if (changeStrQuotes) {
            actionText = actionText.replaceAll("\"", "")
        }
    
        return `, ${actionText}`;
    }
    
    function createCursorObj(selectValue, includeResult = "") {
        return {
            placeholder: "x 100 y 100",
            selectValue: selectValue,
            optgroup: 3,
            readOnly: true,
            buttonClick: true,
            key: "Click",
            result: (obj) => {
                return "Click," + obj["cursor"] + includeResult;
            }
        };
    };

