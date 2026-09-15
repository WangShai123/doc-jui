import { q, icon } from 'vanilla-jui';
import { insert, jsx, Show } from 'vanilla-signal';
import { t } from 'vanilla-signal-i18n';
const locales = {
  zh: {
    Tip: '提示',
    tipMsg: '这是一个提示信息。',
    suc: '授权成功',
    sucMsg: '您已获得临时授权，有效期为 1 小时。',
    Warning: '警告',
    wanMsg: '临时授权即将过期，请及时刷新。',
    dangerMsg: '登录已过期，请重新登录。',
  },
  en: {
    tipMsg: 'This is a tip message.',
    suc: 'Authorization successful',
    sucMsg: 'You have been granted temporary authorization for 1 hour.',
    wanMsg: 'Temporary authorization will expire in 1 hour. Please refresh.',
    dangerMsg: 'Login has expired. Please log in again.',
  },
};
const translate = (k) => t(k, locales);

const tip = (msg, title, icon, variant = null, margin = true) =>
  jsx('div', {
    className: `j-tip${variant ? ` is-${variant}` : ''}`,
    style: {
      marginTop: margin ? '12px' : null,
    },
    children: [
      Show({
        when: icon,
        children: jsx('div', {
          className: 'tip-icon',
          children: icon,
        }),
        fallback: null,
      }),
      Show({
        when: title,
        children: jsx('div', {
          className: 'tip-title',
          children: title,
        }),
        fallback: null,
      }),
      jsx('div', {
        className: 'tip-content',
        children: msg,
      }),
    ],
  });

insert(q('.demo'), [
  tip(translate('dangerMsg'), translate('Tip'), icon('info'), null, false),
  tip(translate('tipMsg'), translate('Tip'), icon('info'), 'primary'),
  tip(translate('sucMsg'), translate('suc'), icon('success'), 'success'),
  tip(translate('wanMsg'), translate('Warning'), icon('warning'), 'warning'),
  tip(translate('dangerMsg'), null, null, 'danger'),
]);
