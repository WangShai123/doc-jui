import { createTooltip, q } from 'vanilla-jui';
import { jsx, insert } from 'vanilla-signal';
import { t } from 'vanilla-signal-i18n';

const locales = {
    en: {
        defaultBtn: 'Tooltip',
        defaultMessage: 'Changes are synced after saving',
        themedBtn: 'Themed tooltip',
        themedMessage: 'This cannot be restored after deletion',
    },
    zh: {
        defaultBtn: '提示',
        defaultMessage: '保存成功后会自动同步',
        themedBtn: '带主题的提示',
        themedMessage: '删除后不可恢复',
    },
};
const translate = (k) => t(k, locales);

insert(q('.demo'), jsx('div', {
    style:{
        display:'flex',
        flexWrap:'wrap',
        gap:'8px',
    },
    children:[
        jsx('button', {
            className: 'tooltip-demo j-button is-default',
            children: translate('defaultBtn'),
        }),
        jsx('button', {
            className: 'tooltip-theme-demo j-button is-error',
            children: translate('themedBtn'),
        }),
    ]
}));
createTooltip(q('.tooltip-demo'), {
    message: translate('defaultMessage'),
    position: 'top-center'
});
createTooltip(q('.tooltip-theme-demo'), {
    message: translate('themedMessage'),
    theme: 'error',
    position: 'top-center'
});
