import { useTranslation } from 'react-i18next';
import { getCurrentLocale, autohotkey } from "../../i18n/list";

import Table from 'react-bootstrap/Table'

import { openURL, isValidURL } from '../../utils/utils'


export default function ListItemsGenerator({ activators, actions }) {
    const { t, i18n } = useTranslation();
    const currentLocale = getCurrentLocale(i18n.language);

    const documentationURL = autohotkey['documentation']['locales'].hasOwnProperty(currentLocale)
        ? autohotkey['documentation']['locales'][currentLocale]
        : autohotkey['documentation']['url'];

    const RenderTableItems = ({ list, title }) => {
        var listItems = [];

        if (list.hasOwnProperty('list')) {
            list['list'].forEach(item => {
                var item_url = item.url ? (isValidURL(item.url) ? item.url : (documentationURL + item.url)) : "";

                if (item.hasOwnProperty('key')) {
                    var listItemIndex = listItems.findIndex(e => e.key === item['key']);
                    if (listItemIndex >= 0) {
                        listItems[listItemIndex]['optionDescription'] += " - " + item.optionDescription;

                        if (item_url) {
                            listItems[listItemIndex]['url'] = item_url;
                        }
                    } else {
                        listItems.push({
                            key: item['key'],
                            optionDescription: item.optionDescription,
                            url: item_url
                        });
                    }
                } else {
                    listItems.push({
                        key: item.result({}),
                        optionDescription: item.optionDescription,
                        url: item_url
                    });
                }
            });
        }

        return <Table striped bordered hover size="sm" className='my-5'>
            <thead>
                <tr className="table-secondary">
                    <th style={{ width: "70px" }}> {listItems.length} </th>
                    <th style={{ width: "20%" }}>{title}</th>
                    <th>Usos</th>
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
            <RenderTableItems list={activators} title="Activadores" />

            <RenderTableItems list={actions} title="Acciones" />
        </>
    )
}
