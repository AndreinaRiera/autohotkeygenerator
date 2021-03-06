import { useTranslation } from 'react-i18next';
import { getCurrentLocale, autohotkey } from "../../i18n/list";

import Table from 'react-bootstrap/Table'

import { openURL, isValidURL } from '@functions/utils'


export default function ListItemsGenerator({ activators, actions }) {
    const { t, i18n } = useTranslation();
    const currentLocale = getCurrentLocale(i18n.language);

    const documentationURL = autohotkey['documentation']['locales'].hasOwnProperty(currentLocale)
        ? autohotkey['documentation']['locales'][currentLocale]
        : autohotkey['documentation']['url'];

    const RenderTableItems = ({ list, title, nameList }) => {
        var listItems = [];

        if (list.hasOwnProperty('list')) {
            list['list'].forEach(item => {
                var key = false;
                var optionDescription = t(nameList+"."+item['selectValue']+".optionDescription");
                var item_url = item.url ? (isValidURL(item.url) ? item.url : (documentationURL + item.url)) : "";

                if (item.hasOwnProperty('key')) {
                    var listItemIndex = listItems.findIndex(e => e.key === item['key']);
                    if (listItemIndex >= 0) {
                        listItems[listItemIndex]['optionDescription'] += " - " + optionDescription;

                        if (item_url) {
                            listItems[listItemIndex]['url'] = item_url;
                        }
                    } else {
                        key = item['key'];
                    }
                } else { 
                    var defaultValue = nameList+"."+item['selectValue']+".defaultValueResult";
                    key = item.result({}, i18n.exists(defaultValue) ? t(defaultValue) : null);
                }

                if (key) {
                    listItems.push({
                        key,
                        optionDescription: optionDescription,
                        url: item_url
                    });
                }
            });
        }

        return <Table  bordered hover size="sm" className='my-5'>
            <thead>
                <tr className="table-secondary">
                    <th style={{ width: "70px" }}> {listItems.length} </th>
                    <th style={{ width: "20%" }}>{title}</th>
                    <th> {t("listItems.uses")} </th>
                </tr>
            </thead>
            <tbody>
                {listItems.map((item, index) => (
                    <tr key={index} className={` ${item.url ? 'help' : ''} `} onClick={() => { openURL(item.url) }}>
                        <td>{index + 1}</td>
                        <td>{item['key']}</td>
                        <td>{item.optionDescription}</td>
                    </tr>
                ))}

            </tbody>
        </Table>
    };

    return (
        <>
            <RenderTableItems list={activators} nameList="listActivators" title={t("activators")} />
            <RenderTableItems list={actions} nameList="listActions" title={t("actions")} />
        </>
    )
}
