import "./style.scss";
import React, { useState, useEffect } from "react";

import { Howl } from 'howler';
import confetti from 'canvas-confetti';

import { useTranslation, Trans } from 'react-i18next';
import { listActivatorsObj } from './listActivatorsObj';
import { listActionsObj } from './listActionsObj';

import Select from "@helpfulComponents/Select";

import { Scroll } from "@helpfulComponents/Scroll";

import { createFile, downloadFile } from "@functions/utils";
import { swalDelete, swalAlert } from "@functions/swalFire";

import ModalDeveloping from "../ModalDeveloping";
import ModalFirstHotkey from "./ModalFirstHotkey";

import InputKeyPress from "./InputKeyPress";

export default function Generator({ listActivators, listActions, setListActivators, setListActions }) {

	const { t, i18n } = useTranslation();

	//const [stateModalCreateAHK, setStateModalCreateAHK] = useState(false);
	const [stateModalDeveloping, setStateModalDeveloping] = useState(false);

	const [stateDetectionCursor, setstateDetectionCursor] = useState(false);
	const [stateCursorPos, setStateCursorPos] = useState([[0, 0], [0, 0]]);
	const [stateclickFocus, setstateClickFocus] = useState(false);

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
















	const [descriptionHotKey, setDescriptionHotKey] = useState("");

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
		if (stateActivator.selectValue !== e.value) {
			setStateActivator(activatorBySelectValue(e.value));
			setStateActivatorKeysPress("");
		}
	}
















	const [stateAction, setStateAction] = useState(listActionsObj.list[0]);

	const _handleChangeActionText = function (e = false, value = "") {
		if (e && e.target.classList.contains("readonly")) {
			e.preventDefault();
			return false;
		}

		setStateAction(odlStateAction => ({ ...odlStateAction, value: e ? e.target.value : value }));
		setstateTexStart(0);
	};

	function onchangeAction(e) {
		if (stateAction.selectValue !== e.value) {
			setStateAction(actionBySelectValue(e.value));
		}
	}

	const textAreaRef = React.createRef();
	const [stateTexStart, setstateTexStart] = useState(0);

	function tabPress(event) {
		if (event.keyCode === 9) {
			// Prevent the default action to not lose focus when tab
			event.preventDefault();

			// Get the cursor position
			const { selectionStart, selectionEnd } = event.target;

			setStateAction(
				odlStateAction => ({
					...odlStateAction,
					value:
						odlStateAction.value.substring(0, selectionStart) +
						"\t" + // '\t' = tab, size can be change by CSS
						odlStateAction.value.substring(selectionEnd)
				})
			);

			setstateTexStart(selectionStart + 1);
		}
	}

	useEffect(() => {
		if (stateTexStart) {
			textAreaRef.current.selectionStart = textAreaRef.current.selectionEnd = stateTexStart;
		}
	}, [stateAction])










	const [stateFirstHotkey, setstateFirstHotkey] = useState(true)
	const [stateModalFirstHotkey, setstateModalFirstHotkey] = useState(false)

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
				if (confirm) {
					setListHotKeys_(odlListHotKeys => (odlListHotKeys.filter((element, index) => { return index !== id; })));
				}
			}).catch(err => {
				console.error(err);
			});
		},
		generateFile: function () {
			if (listHotKeys.length) {
				setListHotKeys.generateFileConfirmed();
			} else {
				swalAlert({
					title: t("generator.generateFile.title"),
					html: t("generator.generateFile.html"),
					footer: t("generator.generateFile.footer"),
					linkScroll: true,
					confirmButtonText: t("generator.generateFile.confirmButtonText"),
					showCancelButton: false
				}).then(confirmed => {
					if (confirmed) {
						setListHotKeys.generateFileConfirmed();
					}
				}).catch(err => console.err(err));
			}
		},
		generateFileConfirmed: function () {
			var result = `#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
			; #Warn  ; Enable warnings to assist with detecting common errors.
			SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
			SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.`;

			result += LINE_BREAK + LINE_BREAK;

			result += `; Generated file from AutoHotkeyGenerator.com`;

			result += LINE_BREAK + LINE_BREAK;

			result += listHotKeys.map(hotKey => hotKey.result).join(LINE_BREAK + LINE_BREAK);
			downloadFile(createFile(result), "myHotkeys.ahk");

			if (stateFirstHotkey) {
				setstateModalFirstHotkey(true);
				setstateFirstHotkey(false);

				setTimeout(() => {
					new Howl({
						src: ['/sounds/tada.mp3'],
						autoplay: true,
						volume: 0.05
					});

					function displayConfetti(particleRatio, opts) {
						confetti(Object.assign({}, {
							scalar: 1.6,
							origin: { y: 0.5 },
							disableForReducedMotion: true
						}, opts, {
							particleCount: Math.floor(300 * particleRatio)
						}));
					}

					displayConfetti(0.25, {
						spread: 26,
						angle: 45,
						startVelocity: 55,
					});
					displayConfetti(0.2, {
						spread: 60,
						angle: 45,
					});
					displayConfetti(0.35, {
						spread: 100,
						decay: 0.91,
						angle: 45,
						scalar: 0.8
					});
					displayConfetti(0.1, {
						spread: 120,
						angle: 45,
						startVelocity: 25,
						decay: 0.92,
						scalar: 1.2
					});
					displayConfetti(0.1, {
						spread: 120,
						angle: 45,
						startVelocity: 45,
					});

					displayConfetti(0.25, {
						spread: 26,
						angle: 120,
						startVelocity: 55,
					});
					displayConfetti(0.2, {
						spread: 60,
						angle: 120,
					});
					displayConfetti(0.35, {
						spread: 100,
						decay: 0.91,
						angle: 120,
						scalar: 0.8
					});
					displayConfetti(0.1, {
						spread: 120,
						angle: 120,
						startVelocity: 25,
						decay: 0.92,
						scalar: 1.2
					});
					displayConfetti(0.1, {
						spread: 120,
						angle: 120,
						startVelocity: 45,
					});
				}, 200);
			}
		}
	};



	function createHotKey(event = false) {
		if (event) { event.preventDefault(); }

		var result = descriptionHotKey ? `; ${descriptionHotKey + LINE_BREAK + LINE_BREAK}` : "";

		const INFO = {
			name: descriptionHotKey,
			activator: {
				value: stateActivator.selectValue,
				text: stateActivator.value,
				keys: {
					value: activatorKeys,
					text: stateActivatorKeysPress
				}
			},
			action: {
				value: stateAction.selectValue,
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











	const listInfoToOptions = (list, typeList, defaultValue = "") => {
		var options = [];
		var list_has_options = (list.hasOwnProperty('list') && list['list'].length) ? true : false;

		const createLabel = selectValue => t(typeList + "." + selectValue + ".optionDescription");


		if (defaultValue) {
			if (list_has_options) {
				var { selectValue } = list['list'].find(option => (option.hasOwnProperty('defaultValue') && option['defaultValue']));

				if (selectValue) {
					/* return {
						label: createLabel(selectValue),
						value: selectValue
					} */

					return createLabel(selectValue);
				}
			}

			return false;
		}


		if (list.hasOwnProperty('optgroups') && list['optgroups'].length) {
			list['optgroups'].forEach((optgroup, indexOptgroup) => {

				var optgroup_options = [];

				if (list_has_options) {
					list['list'].filter(option => (option.hasOwnProperty('optgroup') && (option['optgroup'] === indexOptgroup))).forEach(option => {
						optgroup_options.push({
							label: createLabel(option['selectValue']),
							value: option['selectValue']
						});
					});
				}

				if (optgroup_options.length) {
					options.push({
						label: t(typeList + ".optgroups." + optgroup),
						options: optgroup_options
					});
				}
			})
		};

		if (list_has_options) {
			var options_without_optgroup = [];

			list['list'].filter(option => !option.hasOwnProperty('optgroup')).forEach(option => {
				options_without_optgroup.push({
					label: createLabel(option['selectValue']),
					value: option['selectValue']
				});
			})

			if (options.length) {
				options.push({
					label: "-",
					options: options_without_optgroup
				});
			} else {
				options = options.concat(options_without_optgroup);
			}
		}

		return options;
	};

	const createPlaceholderInput = (typeList, state) => {
		var placeholder_i18n = typeList + "." + state['selectValue'] + ".placeholder";

		return (state.placeholder || (i18n.exists(placeholder_i18n) ? t(placeholder_i18n) : null) || t(typeList + ".defaultValues.placeholder"));
	};

	const createDescriptionOptionSelected = (typeList, state) => {
		if (state.selectValue) {
			return <Trans
				i18nKey={`${typeList}.${state.selectValue}.description`}
				components={{
					scrollEndingCharacters: <Scroll to="#ending_characters" accordion />,
					scrollPath: <Scroll to="#Know_which_is_the_path_and_name_of_programs" accordion />
				}}
			/>;
		}

		return "";
	};


	function getAttrsElementInputs(type = "activator") {
		const isActivator = (type === "activator");

		const state = isActivator ? stateActivator : stateAction;
		const nameList = isActivator ? "listActivators" : "listActions";
		const listObj = isActivator ? listActivatorsObj : listActionsObj;
		const handleChange = isActivator ? _handleChangeActivatorText : _handleChangeActionText;

		return {
			name: "action_text",
			value: state.value || "",
			onChange: handleChange,
			placeholder: createPlaceholderInput(nameList, state),
			className: `form-control ${(state.readOnly || listObj.defaultValues.readOnly) ? "readonly" : ""}`,
			required: state.required || listObj.defaultValues.required,
			disabled: state.hideInput ? true : false,
		};
	}





	return (
		<section className="container" id="GeneratorContainer">

			<div className="row flex">
				<div className="col" id="Generator">
					<form onSubmit={createHotKey} >
						<div className="card card-primary">
							<div className="card-header">
								<div className="row">
									<label className="col-12 col-md-3 col-xl-2 pb-3 pb-md-0">{t("generator.descriptionHotkey")}</label>
									<div className="col p-md-0">
										<input
											type="text"
											name="description"
											placeholder={t("descriptionHotkeyGenerator")}
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
													<Select placeholder={listInfoToOptions(listActivators, "listActivators", "defaultValue")} onChange={onchangeActivator} name="activator" aria-label="Selector de activador" options={listInfoToOptions(listActivators, "listActivators")} />
												</div>
												<div className="col">
													{stateActivator.selectValue ? (stateActivator.selectValue === "press")
														? <InputKeyPress
															stateValue={stateActivatorKeysPress}
															setStateValue={setStateActivatorKeysPress}
															selectedKeys={activatorKeys}
															setSelectedKeys={setActivatorKeys}
														/>
														: <input
															type={stateActivator.type || listActivatorsObj.defaultValues.type}
															{...getAttrsElementInputs("activator")}
														/>
														: ""}
												</div>
											</div>

											<div className="row">
												<div className="col p-md-0">
													<p className="activator_description text-muted small mt-2" > {createDescriptionOptionSelected("listActivators", stateActivator)} </p>
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
												<div className={`col-12  pl-md-0 ${(stateAction.hideInput || stateAction.textarea) ? "col-md" : "pr-md-0 col-md-4"}`}>
													<Select placeholder={listInfoToOptions(listActions, "listActions", "defaultValue")} onChange={onchangeAction} name="action" aria-label="Selector de accion" options={listInfoToOptions(listActions, "listActions")} />
												</div>
												<div className={`col ${stateAction.textarea ? "col-12 mt-3 pl-0" : ""}  ${stateAction.hideInput ? "d-none" : ""}`}>
													{stateAction.textarea
														? <textarea
															rows={2}
															ref={textAreaRef}
															onKeyDown={tabPress}
															{...getAttrsElementInputs("action")}
														>{stateAction.value || ""}</textarea>
														: <input
															type={listActionsObj.defaultValues.type || "text"}
															{...getAttrsElementInputs("action")}
														/>}

												</div>
												<div className={`col-auto pl-0 ${stateAction.buttonClick ? "" : "d-none"}`}>
													<button type="button" className={`btn ${stateDetectionCursor ? "btn-success detecting" : "btn-secondary"}  btn_detect`} onClick={trackCursor} >{stateDetectionCursor ? t("generator.waitingClick") : t("generator.detectClick")}</button>
													<div className={`clickFocus animated animation-fast ${stateclickFocus ? "show scale-in-center" : "hide scale-out-center"}`} style={{ top: (stateCursorPos[1][1] - 10), left: (stateCursorPos[1][0] - 10) }}></div>
												</div>
											</div>

											<div className="row">
												<div className="col p-md-0">
													<p className="action_description text-muted small mt-2" > {createDescriptionOptionSelected("listActions", stateAction)} </p>
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
									<Trans
										i18nKey={(listHotKeys.length === 1) ? "generator.hotkeyCreated" : "generator.hotkeysCreated"}
										values={{ count: listHotKeys.length }}
									/>
								</label>
								<div className="col-12 text-center col-lg-auto">
									<button type="button" className="btn btn-secondary" onClick={setListHotKeys.generateFile}> {t("generator.generateAHK")} </button>
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

												<p className="p-0 m-0">{t("listActivators." + hotKey.activator.value + ".optionDescription")} {hotKey.activator.text ? '"' + hotKey.activator.text + '"' : ""}</p>
												<p className="p-0 m-0">{t("listActions." + hotKey.action.value + ".optionDescription")}  {hotKey.action.text ? '"' + hotKey.action.text + '"' : ""}</p>
											</div>
											<div className="col-auto">
												<div className="dropdown">
													<button className="btn btn-light btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
														<i class="fas fa-cog"></i>
													</button>
													<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
														<span className="dropdown-item" onClick={() => { setListHotKeys.remove(index); }} >
															<i className="fas fa-trash"></i>
															{t("generator.deleteHotkey")}
														</span>
														<span className="dropdown-item" onClick={() => { setStateModalDeveloping(true); }} >
															<i className="fas fa-edit"></i>
															{t("generator.editHotkey")}
														</span>
													</div>
												</div>
											</div>
										</div>
									</li>
								))
							}

							{
								listHotKeys.length
									? ""
									: <li className="list-group-item text-center text-muted">
										<Trans
											i18nKey={"generator.withoutHotkeys"}
											components={{ scroll: <Scroll to="#ideas" accordion /> }}
										/>
									</li>
							}
						</ul>
					</div>
				</div>
			</div>

			<ModalDeveloping show={stateModalDeveloping} setState={setStateModalDeveloping} />
			<ModalFirstHotkey show={stateModalFirstHotkey} setState={setstateModalFirstHotkey} />
		</section>
	);
}
