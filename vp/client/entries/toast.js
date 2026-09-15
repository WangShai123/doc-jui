import { Toast, q } from 'vanilla-jui';
import { jsx, insert, createSignal } from 'vanilla-signal';
import { t } from 'vanilla-signal-i18n';

const locales = {
    en: {
        asyncUsage: 'Async Toast Usage',
        canceled: 'Canceled',
        confirm: 'Confirmed',
        confirmToast: 'Confirm Toast',
        defaultToast: 'Default Toast',
        errorToast: 'Error Toast',
        liteToast: 'Lite Toast',
        primaryToast: 'Primary Toast',
        singletonToast: 'Singleton Toast',
        successToast: 'Success Toast',
        warningToast: 'Warning Toast',
    },
    zh: {
        asyncUsage: '异步 Toast 用法',
        canceled: '已取消',
        confirm: '已确认',
        confirmToast: '确认 Toast',
        defaultToast: '默认 Toast',
        errorToast: '错误 Toast',
        liteToast: '轻提示 Toast',
        primaryToast: '主色 Toast',
        singletonToast: '单例 Toast',
        successToast: '成功 Toast',
        warningToast: '警告 Toast',
    },
};
const translate = (k) => t(k, locales);
const demo = jsx('div', {
    style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    children: [
        jsx('div', {
            style: {
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
            },
            children: [
                jsx('button', {
                    className: 'j-button is-default',
                    children: translate('defaultToast'),
                    onClick: () => Toast.show('Hi, Toast'),
                }),
                jsx('button', {
                    className: 'j-button is-primary',
                    children: translate('primaryToast'),
                    onClick: () => Toast.primary('Hi, Primary Toast'),
                }),
                jsx('button', {
                    className: 'j-button is-success',
                    children: translate('successToast'),
                    onClick: () => Toast.success('Hi, Success Toast'),
                }),
                jsx('button', {
                    className: 'j-button is-warning',
                    children: translate('warningToast'),
                    onClick: () => Toast.warning('Hi, Warning Toast'),
                }),
                jsx('button', {
                    className: 'j-button is-error',
                    children: translate('errorToast'),
                    onClick: () => Toast.error('Hi, Error Toast'),
                }),
            ]
        }),
        jsx('div', {
            style: {
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
            },
            children: [
                jsx('button', {
                    className: 'j-button is-default',
                    children: translate('singletonToast'),
                    onClick: () => Toast.info('Hi, Singleton Toast', {once:true}),
                }),
                jsx('button', {
                    className: 'j-button is-secondary',
                    children: translate('liteToast'),
                    onClick: () => Toast.lite('Hi, Lite Toast'),
                }),
                jsx('button', {
                    className: 'j-button is-outline',
                    children: translate('confirmToast'),
                    onClick: () => Toast.confirm('Hi, Confirm Toast', {
                        onConfirm: () => Toast.lite(translate('confirm')),
                    }),
                }),
            ]
        }),
        jsx('div', {
            children: jsx('button', {
                className: 'j-button is-default',
                children: translate('asyncUsage'),
                onClick: () => {
                    const [loading, setLoading] = createSignal(true);
                    let timer = null;
                    const reset = () => {
                        if (timer) clearTimeout(timer);
                        timer = null;
                        setLoading(true);
                    };
                    Toast.show('Hi, Async Toast', {
                        duration: 3000,
                        loading,
                        onCancel: () => {
                            Toast.lite(translate('canceled'));
                            reset();
                        },
                        onClose: reset,
                        once: true
                    });
                    timer = setTimeout(() => {
                        timer = null;
                        setLoading(false);
                    }, 1000);
                },
            })
        })
    ]
})
insert(q('.demo'), demo);
