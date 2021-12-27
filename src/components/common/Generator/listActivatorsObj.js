export const listActivatorsObj = {
	defaultValues: {
		placeholder : "esto",
		type        : "text",
		defaultValue: false,
		optgroup    : 0,
		readOnly    : false,
		selectValue: "text"
	},
	list: [
		{
			placeholder: "",
			description: <>El evento se activara cuando escribas la palabra o frase y luego un caracter final, como punto o coma</>,
			selectValue: "text",
			optionDescription: "",
			defaultValue: true,
			url: '/Hotstrings.htm',
			result: ({ activator }, defaultValue = "") => {
				var activatorText = activator ? activator.text : defaultValue;
				return `::${activatorText}::`;
			}
		}, {
			placeholder: "Ctrl + d",
			description: <>Haz click en el area para escribir y presiona simultaneamente las teclas que quieres utilizar como hotkey</>,
			selectValue: "press",
			optionDescription: "",
			url: '/Hotkeys.htm',
			result: ({ activator }) => {
				var activatorKeys = activator ? activator.keys.value : ['Ctrl', 'd'];

				if (activatorKeys.length) {
					var specialKeys = {
						Win: "#",
						Ctrl: "^",
						Alt: "!",
						Shift: "+"
					};

					var remplaceKeys = {
						AltGr: "<^>!",
						Escape: "Esc",
						"!": "{!}",
						"#": "{#}",
						"^": "{^}",
						"+": "{+}"
					};

					var activatorKeys_new = [];
					var hasSpecialKeys = false;

					activatorKeys.forEach(element => {
						var keyPush;

						if (Object.prototype.hasOwnProperty.call(specialKeys, element)) {
							keyPush = specialKeys[element];
							hasSpecialKeys = true;
						} else if (Object.prototype.hasOwnProperty.call(remplaceKeys, element)) {
							keyPush = remplaceKeys[element];
						} else {
							keyPush = element;
						}

						activatorKeys_new.push(keyPush);
					});

					var activatorKeys_text = hasSpecialKeys ? activatorKeys_new.join("") : activatorKeys_new.join(" & ");

					return `${activatorKeys_text}::`;
				} else {
					// Alert for invalid
					return false;
				}
			}
		}
	]
};
