import { createTabs, q } from 'vanilla-jui';
import { createSignal, jsx, insert } from 'vanilla-signal';
import { t } from 'vanilla-signal-i18n';

const locales = {
    en: {
        add: 'Add',
        addedName: 'Added tab name:',
        asyncCache: 'This tab data item has caching enabled. The cache time is 10 seconds.',
        asyncExpire: 'After 10 seconds, the content expires and will be requested and rendered again.',
        asyncReuse: 'Within 10 seconds, repeatedly opening this data item will show the cached content.',
        cacheExpired: 'Cache expired',
        countdown: 'Countdown',
        countUnit: 'seconds',
        deleteCurrent: 'Delete Current Item',
        request: 'Async API request #',
        requestSuffix: '',
        syncTabName: 'Sync tab name:',
    },
    zh: {
        add: '新增',
        addedName: '新增标签页 name:',
        asyncCache: '当前标签页数据项已经开启缓存功能，缓存时间为 10 秒。',
        asyncExpire: '10 秒后，内容过期，将重新请求并渲染。',
        asyncReuse: '10 秒内，反复打开该数据项，将显示缓存内容。',
        cacheExpired: '缓存已过期',
        countdown: '倒计时',
        countUnit: '秒',
        deleteCurrent: '删除当前项',
        request: '异步接口请求 第',
        requestSuffix: '次',
        syncTabName: '同步标签页 name:',
    },
};
const translate = (k) => t(k, locales);

const [asyncCount, setAsyncCount] = createSignal(10);
let asyncTabsRequestCount = 0;
let asyncTabsCountdownTimer = null;
let asyncTabsCountdownStopTimer = null;
const startAsyncTabsCountdown = () => {
    if (asyncTabsCountdownTimer) clearInterval(asyncTabsCountdownTimer);
    if (asyncTabsCountdownStopTimer) clearTimeout(asyncTabsCountdownStopTimer);

    setAsyncCount(10);
    asyncTabsCountdownTimer = setInterval(() => {
        setAsyncCount((value) => {
            const next = value - 1;
            return next > 0 ? next : 0;
        });
    }, 1000);
    asyncTabsCountdownStopTimer = setTimeout(() => {
        clearInterval(asyncTabsCountdownTimer);
        asyncTabsCountdownTimer = null;
        asyncTabsCountdownStopTimer = null;
        setAsyncCount(0);
    }, 10_000);
};

const loadAsyncTabsContent = () =>
    new Promise((resolve) => {
        const requestIndex = asyncTabsRequestCount + 1;
        setTimeout(() => {
            asyncTabsRequestCount = requestIndex;
            startAsyncTabsCountdown();
            resolve(
                jsx('div', {
                    children: [
                        jsx('p', {
                            children: `${translate('request')} ${requestIndex} ${translate('requestSuffix')}`.trim(),
                        }),
                        jsx('p', {
                            style: { marginBlock: '4px' },
                            children: translate('asyncCache'),
                        }),
                        jsx('p', {
                            style: { marginBlock: '4px' },
                            children: translate('asyncReuse'),
                        }),
                        jsx('p', {
                            style: { marginBlock: '4px' },
                            children: translate('asyncExpire'),
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

const tabs = createTabs({
    data: [
        {
            name: 'profile',
            title: 'Profile',
            content: `${translate('syncTabName')} profile`,
        },
        {
            name: 'settings',
            title: 'Settings',
            content: `${translate('syncTabName')} settings`,
        },
        {
            name: 'async',
            title: 'Async',
            content: () => loadAsyncTabsContent(),
            cache: true,
            ttl: 10_000,
        },
    ],
});

const demo = jsx('div', {
    style: {
        marginBlock: '8px',
        display: 'flex',
        gap: '8px',
    },
    children: [
        jsx('button', {
            className: 'j-button is-outline',
            children: translate('add'),
            onClick: () => {
                const index = tabs.state.data.length + 1;
                const name = `${Date.now()}`;
                tabs.state.data.push({
                    name,
                    title: `tab-${index}`,
                    content: jsx('div', {
                        children: `${translate('addedName')} ${name}`,
                    }),
                });
                void tabs.activate(name);
            }
        }),
        jsx('button', {
            className: 'j-button is-error',
            disabled: () => tabs.state.data.length === 1,
            children: translate('deleteCurrent'),
            onClick: () => {
                if (tabs.state.data.length === 1) return;

                const removeIndex = Math.max(0, tabs.current.index);
                tabs.state.data.splice(removeIndex, 1);

                const nextIndex =
                    removeIndex > 0 ? removeIndex - 1 : tabs.state.data.length - 1;
                const nextItem = tabs.state.data[nextIndex];
                if (nextItem) void tabs.activate(nextItem.name);
            }
        }),
    ],
});
const tabsHost = jsx('div');
insert(q('.demo'), [demo, tabsHost]);
tabs.mount(tabsHost);
console.log(tabs)
