import { createAccordion, q, Toast } from 'vanilla-jui';
import { createSignal, jsx } from 'vanilla-signal';
import { t } from 'vanilla-signal-i18n';

const locales = {
    en: {
        asyncPanel: 'Async Panel',
        cacheExpired: 'Cache expired',
        cacheInfo: 'This accordion data item has caching enabled. The cache time is 10 seconds.',
        cacheReuse: 'Within 10 seconds, repeatedly opening this data item will show the cached content.',
        cacheExpire: 'After 10 seconds, the content expires and will be requested and rendered again.',
        countdown: 'Countdown',
        countUnit: 'seconds',
        request: 'Async API request #',
        requestSuffix: '',
        syncPanel: 'Sync Panel',
        syncPanelName: 'Sync panel name:',
        panelOpened: 'panel opened',
    },
    zh: {
        asyncPanel: '异步面板',
        cacheExpired: '缓存已过期',
        cacheInfo: '当前折叠面板数据项已经开启缓存功能，缓存时间为 10 秒。',
        cacheReuse: '10 秒内，反复打开该数据项，将显示缓存内容。',
        cacheExpire: '10 秒后，内容过期，将重新请求并渲染。',
        countdown: '倒计时',
        countUnit: '秒',
        request: '异步接口请求 第',
        requestSuffix: '次',
        syncPanel: '同步面板',
        syncPanelName: '同步面板 name:',
        panelOpened: '面板已打开',
    },
};
const translate = (k) => t(k, locales);

const [asyncCount, setAsyncCount] = createSignal(10);
let asyncAccordionRequestCount = 0;
let asyncAccordionCountdownTimer = null;
let asyncAccordionCountdownStopTimer = null;
const startAsyncAccordionCountdown = () => {
    if (asyncAccordionCountdownTimer) clearInterval(asyncAccordionCountdownTimer);
    if (asyncAccordionCountdownStopTimer) clearTimeout(asyncAccordionCountdownStopTimer);

    setAsyncCount(10);
    asyncAccordionCountdownTimer = setInterval(() => {
        setAsyncCount((value) => {
            const next = value - 1;
            return next > 0 ? next : 0;
        });
    }, 1000);
    asyncAccordionCountdownStopTimer = setTimeout(() => {
        clearInterval(asyncAccordionCountdownTimer);
        asyncAccordionCountdownTimer = null;
        asyncAccordionCountdownStopTimer = null;
        setAsyncCount(0);
    }, 10_000);
};

const loadAsyncAccordionContent = () =>
    new Promise((resolve) => {
        const requestIndex = asyncAccordionRequestCount + 1;
        setTimeout(() => {
            asyncAccordionRequestCount = requestIndex;
            startAsyncAccordionCountdown();
            resolve(
                jsx('div', {
                    children: [
                        jsx('p', {
                            children: `${translate('request')} ${requestIndex} ${translate('requestSuffix')}`.trim(),
                        }),
                        jsx('p', {
                            style: { marginBlock: '4px' },
                            children: translate('cacheInfo'),
                        }),
                        jsx('p', {
                            style: { marginBlock: '4px' },
                            children: translate('cacheReuse'),
                        }),
                        jsx('p', {
                            style: { marginBlock: '4px' },
                            children: translate('cacheExpire'),
                        }),
                        jsx('p', {
                            style: { marginBlock: '4px' },
                            children: () =>
                                asyncCount() > 0
                                    ? `${translate('countdown')} ${asyncCount()} ${translate('countUnit')}`
                                    : translate('cacheExpired'),
                        }),
                    ],
                })
            );
        }, 1000);
    });

createAccordion({
    data: [
        {
            name: 'profile',
            title: ({ index }) => `${translate('syncPanel')} ${index + 1}`,
            content: ({ item }) => `${translate('syncPanelName')} ${item.name}`,
        },
        {
            name: 'settings',
            title: ({ index }) => `${translate('syncPanel')} ${index + 1}`,
            content: ({ item }) => `${translate('syncPanelName')} ${item.name}`,
        },
        {
            name: 'async',
            title: translate('asyncPanel'),
            content: () => loadAsyncAccordionContent(),
            cache: true,
            ttl: 10_000,
        },
    ],
    onChange: (index, name, header, panel, accordion) => {
        Toast.lite(`${name} ${translate('panelOpened')}`);
        console.log(header)
        console.log(panel)
    },
}).mount(q('.demo'));
