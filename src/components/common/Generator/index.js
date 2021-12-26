import "./style.scss";
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

import Select from "../../utils/Select";

import { Scroll } from "../../utils/Scroll";

import {createFile, downloadFile} from "../../../utils/utils";
import {swalDelete} from "../../../utils/swalFire";

//import Modal from "../../utils/Modal";
import InputKeyPress from "./InputKeyPress";

export default function Generator({ listActivators, listActions, setListActivators, setListActions }) {

	const { t } = useTranslation();

	const [stateModal, setStateModal] = useState(false);

	const [stateDetectionCursor, setstateDetectionCursor] = useState(false);
	const [stateCursorPos, setStateCursorPos]             = useState([[0, 0], [0, 0]]);
	const [stateclickFocus, setstateClickFocus]           = useState(false);

	function trackCursor() {
		setTimeout(() => {
			var trackCursor_active = true;

			window.onclick = function (event) {
				if (trackCursor_active) {
					setStateCursorPos([[event.screenX, event.screenY], [event.x, event.y]]);
					setstateDetectionCursor(false);
					setstateClickFocus(true);

					setTimeout(() => {
						setstateClickFocus(false);
					}, 1000);

					_handleChangeActionText(false, `X ${event.screenX} - Y ${event.screenY}`);
					trackCursor_active = false;
				}
			};
		}, 200);
		setstateDetectionCursor(true);
	}

	var listActivatorsObj = {
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
				placeholder: t("listActivators.text.placeholder"),
				description: <>El evento se activara cuando escribas la palabra o frase y luego un <Scroll to="#ending_characters" accordion>caracter final</Scroll>, como punto o coma</>,
				selectValue: "text",
				optionDescription: t("listActivators.text.optionDescription"),
				defaultValue: true,
				url: '/Hotstrings.htm',
				result: ({ activator }) => {
					var activatorText = activator ? activator.text : t("listActivators.text.defaultValueResult");
					return `::${activatorText}::`;
				}
			}, {
				placeholder: "Ctrl + d",
				description: <>Haz click en el area para escribir y presiona simultaneamente las teclas que quieres utilizar como hotkey</>,
				selectValue: "press",
				optionDescription: t("listActivators.press.optionDescription"),
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


	var listActionsObj = {
		defaultValues: {
			placeholder : t("listActions.defaultValues.placeholder"),
			type        : "text",
			defaultValue: false,
			optgroup    : 0,
			readOnly    : false,
			required    : true
		},
		list: [
			{
				description      : <> {t("listActions.change.description")}</>,
				selectValue      : "change",
				optionDescription: t("listActions.change.optionDescription"),
				defaultValue     : true,
				optgroup         : 1,
				key              : "SendRaw",
				url: '/commands/Send.htm',
				result: ({ action }, defaultVale) => {
					return "SendRaw" + includeActionText(action ? action.text : defaultVale, false);
				}
			}, {
				description      : <>{t("listActions.write.description")}</>,
				selectValue      : "write",
				optionDescription: t("listActions.write.optionDescription"),
				optgroup         : 1,
				key              : "SendRaw",
				result: ({ action }, defaultVale) => {
					return "SendRaw" + includeActionText(action ? action.text : defaultVale, false);
				}
			}, {
				placeholder      : t("listActions.MsgBox.placeholder"),
				description      : <>{t("listActions.MsgBox.description")}</>,
				selectValue      : "MsgBox",
				optionDescription: t("listActions.MsgBox.optionDescription"),
				optgroup         : 1,
				key              : "MsgBox",
				url: "commands/MsgBox.htm",
				result: ({ action }, defaultVale) => {
					return "MsgBox" + includeActionText(action ? action.text : defaultVale);
				}
			}, {
				type             : "url",
				placeholder      : "https://www.autohotkey.com",
				description      : <>La URL que escribas se abrira en tu navegador predeterminado en una nueva pestaña</>,
				selectValue      : "webpage",
				optionDescription: t("listActions.webpage.optionDescription"),
				optgroup         : 2,
				key              : "Run",
				url: "commands/Run.htm",
				result: ({ action }, defaultVale) => {
					return "Run" + includeActionText(action ? action.text : defaultVale, false, true);
				}
			}, {
				placeholder      : "\"D:\\Sublime Text 3\\sublime_text.exe\"",
				description      : <>{t("listActions.program.description1")} <Scroll to="#Know_which_is_the_path_and_name_of_programs" accordion>{t("listActions.program.description2")}</Scroll> </>,
				selectValue      : "program",
				optionDescription: t("listActions.program.optionDescription"),
				optgroup         : 2,
				key              : "Run",
				result: ({ action }, defaultVale) => {
					return "Run" + includeActionText(action ? action.text : defaultVale, false, true);
				}
			},{
				description      : <> Se efectuare un click en la posicion en la que este el cursor en ese momento </>,
				selectValue      : "click",
				optionDescription: t("listActions.click.optionDescription"),
				optgroup         : 3,
				key              : "Click",
				required         : false,
				hideInput        : true,
				url: "commands/Click.htm",
				result: () => {
					return "Click";
				}
			}, {
				description      : <>{t("listActions.click_double.description")}</>,
				selectValue      : "click_double",
				optionDescription: t("listActions.click_double.optionDescription"),
				optgroup         : 3,
				key              : "Click",
				required         : false,
				hideInput        : true,
				result: () => {
					return "Click, 2";
				}
			},
			{ ...createCursorObj("cursor_0", t("listActions.cursor_0"), "0") },
			{ ...createCursorObj("cursor", t("listActions.cursor")) },
			{ ...createCursorObj("cursor_right", t("listActions.cursor_right"), "Right") },
			{ ...createCursorObj("cursor_double", t("listActions.cursor_double"), 2) },

		],
		optgroups: ["-", t("listActions.optgroups.text"), t("listActions.optgroups.run"), t("listActions.optgroups.cursor")]
	};

	function includeActionText(actionText, changeStrValues = true, changeStrQuotes = false) {
		// caracteres literales (para que no se confundan con teclas)
		if(changeStrValues){
			["#", "^", "!", "+", "<^>!", "Delete", "{", "}"].forEach(key => {
				actionText = actionText.replaceAll(key, `{${key}}`);
			});
		} 
		// saltos de linea
		actionText = actionText.replace(/(?:\r\n|\r|\n)/g, ' `n ');
		// tab
		actionText = actionText.replace(/\t/g, ' `t ');

		if(changeStrQuotes){
			actionText = actionText.replaceAll("\"", "")
		}

		return `, ${actionText}`;
	}

	function createCursorObj(selectValue, optionDescription, includeResult = "") {
		return {
			placeholder      : "x 100 y 100",
			description      : t("listActions.createCursor.description"),
			selectValue      : selectValue,
			optionDescription: optionDescription,
			optgroup         : 3,
			readOnly         : true,
			buttonClick      : true,
			key              : "Click",
			result: (obj) => {
				return "Click," + obj["cursor"] + includeResult;
			}
		};
	}

	useEffect(() => {
		setListActivators(listActivatorsObj);
		setListActions(listActionsObj);
	}, []);

	function activatorBySelectValue(val) {
		return listActivators.list.find(element => element.selectValue === val)
	}

	function actionBySelectValue(val) {
		return listActions.list.find(element => element.selectValue === val)
	}



	












	const [descriptionHotKey, setDescriptionHotKey] = useState(t("descriptionHotkeyGenerator"));

	const _handleChangDescription = function (e, value = false) {
		setDescriptionHotKey(e ? e.target.value : value);
	};
























	var [stateActivatorKeysPress, setStateActivatorKeysPress] = useState("");
	var [activatorKeys, setActivatorKeys] = useState([]);


	

	const [stateActivator, setStateActivator] = useState(listActivatorsObj.list[0]);

	const _handleChangeActivatorText = function (e, value = false) {
		setStateActivator(odlStateActivator => ({ ...odlStateActivator, value: e ? e.target.value : value }));
	};

	function onchangeActivator(e) { 
		setStateActivator(activatorBySelectValue(e.value));
		setStateActivatorKeysPress(""); 
	}
















	const [stateAction, setStateAction] = useState(listActionsObj.list[0]);

	const _handleChangeActionText = function (e = false, value = "") {
		if (e && e.target.classList.contains("readonly")) {
			e.preventDefault();
			return false;
		}

		setStateAction(odlStateAction => ({ ...odlStateAction, value: e ? e.target.value : value }));
	};

	function onchangeAction(e) {
		setStateAction(actionBySelectValue(e.value));
		setStateActivatorKeysPress("");
	}



	const LINE_BREAK = "\n";

	const [listHotKeys, setListHotKeys_] = useState([]);

	const setListHotKeys = {
		add: function (addThis) {
			setListHotKeys_(odlListHotKeys => ([...odlListHotKeys, addThis]));
		},
		remove: function (id) {
			swalDelete({
				text: t("generator.swalDeleteHotkeyQuestion"),
				title: ""
			}).then(confirm => {
				if(confirm){
					setListHotKeys_(odlListHotKeys => (odlListHotKeys.filter((element, index) => { return index !== id; })));
				}
			}).catch(err => {
				console.error(err);
			});
			
		},
		generateFile: function () {
			var result = `#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
			; #Warn  ; Enable warnings to assist with detecting common errors.
			SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
			SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.`;

			result += LINE_BREAK + LINE_BREAK;

			result += listHotKeys.map(hotKey => hotKey.result).join(LINE_BREAK + LINE_BREAK);
			downloadFile(createFile(result), "myHotkeys.ahk");
			console.log(result);
		}
	};

	function createHotKey(event = false) {
		if (event) { event.preventDefault(); }

		var result = descriptionHotKey ? `; ${descriptionHotKey + LINE_BREAK + LINE_BREAK}` : "";

		const INFO = {
			name: descriptionHotKey,
			activator: {
				value: stateActivator.selectValue,
				description: stateActivator.optionDescription,
				text: stateActivator.value,
				keys: {
					value: activatorKeys,
					text: stateActivatorKeysPress
				}
			},
			action: {
				value: stateAction.selectValue,
				description: stateAction.optionDescription,
				text: stateAction.value
			},
			cursor: stateCursorPos[0].join(" ")
		};
		
		var activator = activatorBySelectValue(stateActivator.selectValue).result(INFO);
		if (!activator) { return false; }

		result += activator + LINE_BREAK;


		var action = actionBySelectValue(stateAction.selectValue).result(INFO);
		if (!action) { return false; }

		result += action + LINE_BREAK;

		result += `return`;

		INFO['result'] = result;
		setListHotKeys.add(INFO);
	}











	const listInfoToOptions = (list) => {
		var options = [];
		var list_has_options = (list.hasOwnProperty('list') && list['list'].length) ? true : false;

		if(list.hasOwnProperty('optgroups') && list['optgroups'].length){
			list['optgroups'].forEach((optgroup, indexOptgroup) => {

				var optgroup_options = [];

				if(list_has_options){
					list['list'].filter(option => (option.hasOwnProperty('optgroup') && (option['optgroup'] === indexOptgroup))).forEach(option => {
						optgroup_options.push({ 
							label: option['optionDescription'], 
							value: option['selectValue']  
						});
					});
				}

				if(optgroup_options.length){
					options.push({
						label: optgroup,
						options: optgroup_options
					});
				}
			}) 
		};

		if(list_has_options){
			var options_without_optgroup = [];

			list['list'].filter(option => !option.hasOwnProperty('optgroup')).forEach(option => {
				options_without_optgroup.push({
					label: option['optionDescription'], 
					value: option['selectValue']
				});
			})

			if(options.length){
				options.push({
					label: "-",
					options: options_without_optgroup
				});
			}else{
				options = options.concat(options_without_optgroup);
			}
		}

		return options;
	}; 

	const getDefaultValueOptionList = (list) => {
		if(list.hasOwnProperty('list') && list['list'].length){
			var defaultValue = list['list'].find(option => (option.hasOwnProperty('defaultValue') && option['defaultValue']));

			if(defaultValue){
				return {
					label: defaultValue['optionDescription'], 
					value: defaultValue['selectValue']
				}
			}

			return false;
		}
	}


	return (
		<section className="container" id="Generator">

			<div className="row flex">
				<div className="col">
					<form onSubmit={createHotKey} >
						<div className="card card-primary">
							<div className="card-header">
								<div className="row">
									<label className="col-12 col-md-3 col-xl-2 pb-3 pb-md-0">{t("generator.descriptionHotkey")}</label>
									<div className="col p-md-0">
										<input
											type="text"
											name="description"
											className="form-control"
											onChange={_handleChangDescription}
											value={descriptionHotKey || ""}
										/>
									</div>
									<div className="col-auto">
										<button type="submit" className="btn btn-secondary btn_submit">{t("generator.createHotkey")}</button>
									</div>
								</div>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item">
									<div className="row">
										<label className="col-12 col-md-3 col-xl-2 pb-3 pb-md-0">{t("activator")}</label>
										<div className="col">
											<div className="row">
												<div className="col-12 col-md-4  p-md-0">
													<Select defaultValue={getDefaultValueOptionList(listActivatorsObj)} onChange={onchangeActivator} name="activator" aria-label="Selector de activador" options={listInfoToOptions(listActivators)} />
												</div>
												<div className="col">
													{(stateActivator.selectValue === "press")
														? <InputKeyPress
															stateValue={stateActivatorKeysPress}
															setStateValue={setStateActivatorKeysPress}
															selectedKeys={activatorKeys}
															setSelectedKeys={setActivatorKeys}
														/>
														: <input
															type={stateActivator.type || listActivatorsObj.defaultValues.type}
															name="activator_text"
															value={stateActivator.value || ""}
															onChange={_handleChangeActivatorText}
															placeholder={stateActivator.placeholder || listActivatorsObj.defaultValues.placeholder}
															className="form-control"
															required="required"
														/>
													}
												</div>
											</div>

											<div className="row">
												<div className="col p-md-0">
													<p className="activator_description text-muted small mt-2" > {stateActivator.description} </p>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li className="list-group-item">
									<div className="row">
										<label className="col-12 col-md-3 col-xl-2 pb-3 pb-md-0">{t("action")}</label>
										<div className="col">
											<div className="row">
												<div className={`col-12  pl-md-0 ${stateAction.hideInput ? "col-md" : "pr-md-0 col-md-4"}`}>
													<Select defaultValue={getDefaultValueOptionList(listActionsObj)} onChange={onchangeAction} name="action" aria-label="Selector de accion" options={listInfoToOptions(listActions)} />
												</div>
												<div className={`col ${stateAction.hideInput ? "d-none" : ""}`}>
													<input
														type={listActionsObj.defaultValues.type || "text"}
														name="action_text"
														value={stateAction.value || ""}
														onChange={_handleChangeActionText}
														placeholder={stateAction.placeholder || listActionsObj.defaultValues.placeholder}
														className={`form-control ${(stateAction.readOnly || listActionsObj.defaultValues.readOnly) ? "readonly" : ""}`} 
														required={stateAction.required || listActionsObj.defaultValues.required} 
														disabled={stateAction.hideInput ? true : false}
													/>
													{/* <textarea 
														style={{height: (stateAction.heightInput || 34+"px")}} 
														name="action_text" 
														value={stateAction.value || ""}
														onChange={_handleChangeActionText}
														placeholder={stateAction.placeholder || listActionsObj.defaultValues.placeholder}
														className={`form-control ${(stateAction.readOnly || listActionsObj.defaultValues.readOnly) ? "readonly" : ""}`} 
														required={stateAction.required || listActionsObj.defaultValues.required} 
														disabled={stateAction.hideInput ? true : false}
													>{stateAction.value || ""}</textarea> */}
												</div>
												<div className={`col-auto pl-0 ${stateAction.buttonClick ? "" : "d-none"}`}>
													<button type="button" className={`btn ${stateDetectionCursor ? "btn-success detecting" : "btn-secondary"}  btn_detect`} onClick={trackCursor} >{stateDetectionCursor ? t("generator.waitingClick") : t("generator.detectClick")}</button>
													<div className={`clickFocus animated animation-fast ${stateclickFocus ? "show scale-in-center" : "hide scale-out-center"}`} style={{ top: (stateCursorPos[1][1] - 10), left: (stateCursorPos[1][0] - 10) }}></div>
												</div>
											</div>

											<div className="row">
												<div className="col p-md-0">
													<p className="action_description text-muted small mt-2" >  {stateAction.description}  </p>
												</div>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</form>
				</div>



				<div className="col-12 col-lg-4 d-flex align-items-stretch mt-5 mt-lg-0" id="listHotKeys">
					<div className="card card-primary">
						<div className="card-header">
							<div className="row">
								<label className="col text-center text-lg-left">
									{listHotKeys.length} atajos creados
								</label>
								<div className="col-12 text-center col-lg-auto">
									<button type="button" className="btn btn-secondary" onClick={setListHotKeys.generateFile}> { t("generator.generateAHK") } </button>
								</div>
							</div>
						</div>
						<ul className="list-group list-group-flush scrollbar-sm">
							{
								listHotKeys.map((hotKey, index) => (
									<li className="list-group-item" key={index}>
										<div className="row">
											<div className="col">
												{hotKey.name ? <b className="">{hotKey.name}</b> : ""}

												<p className="p-0 m-0">{hotKey.activator.description} {hotKey.activator.text ? '"'+hotKey.activator.text+'"' : ""}</p>
												<p className="p-0 m-0">{hotKey.action.description}  {hotKey.action.text ? '"'+hotKey.action.text+'"' : ""}</p>
											</div>
											<div className="col-auto">
												<div class="dropdown">
													<button class="btn btn-light dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
													<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
														<a class="dropdown-item" onClick={() => { setListHotKeys.remove(index); }} >
															<i className="fas fa-trash mr-2"></i>
															{t("generator.deleteHotkey")}
														</a>
													</div>
												</div>
											</div>
										</div>
									</li>
								))
							}

							{
								listHotKeys.length ? "" : <li className="list-group-item text-center text-muted">{t("generator.withoutHotkeys1")} <Scroll to="#ideas" className="scroll" accordion>{t("generator.withoutHotkeys2")}</Scroll></li>
							}
						</ul>
					</div>
				</div>
			</div>

			{/* <Modal state={stateModal} setState={setStateModal} title="Configura tu archivo de hotkeys" >
				<div className="row">
					<div className="col">
					</div>
					<div className="col">
							
					</div>
				</div>
			</Modal> */}
		</section>
	);
}

