import { q, createDrop } from 'vanilla-jui';
import { jsx, insert, createSignal } from 'vanilla-signal';
import { t } from 'vanilla-signal-i18n';

const locales = {
  en: {
    asyncContent: 'Async content',
    cacheExpired: 'Cache expired',
    clickTrigger: 'Click trigger',
    countdown: 'Countdown',
    countUnit: 's',
    hoverTrigger: 'Hover trigger',
    rendered: 'Rendered successfully. Cached for 10 seconds.',
  },
  zh: {
    asyncContent: '异步内容',
    cacheExpired: '缓存过期',
    clickTrigger: '点击触发',
    countdown: '倒计时',
    countUnit: '',
    hoverTrigger: '悬停触发',
    rendered: '渲染成功，缓存10秒，',
  },
};
const translate = (k) => t(k, locales);

insert(q('.demo'), jsx('div', {
  style: {
    display:'flex',
    flexWrap:'wrap',
    gap:'8px'
  },
  children: [
    jsx('div', { className: 'j-button is-default click-demo', children: translate('clickTrigger') }),
    jsx('div', { className: 'j-button is-default hover-demo', children: translate('hoverTrigger') }),
    jsx('div', { className: 'j-button is-default async-demo', children: translate('asyncContent') }),
  ],
}));
createDrop(q('.click-demo'), {
  content: 'Drop Content',
});
createDrop(q('.hover-demo'), {
  mode: 'hover',
  hoverIntent: true,
  delay: 50,
  content: 'Drop Content',
});

const [count, setCount] = createSignal(10);
let asyncDropCountdownTimer = null;
let asyncDropCountdownStopTimer = null;
const startAsyncDropCountdown = () => {
  if (asyncDropCountdownTimer) clearInterval(asyncDropCountdownTimer);
  if (asyncDropCountdownStopTimer) clearTimeout(asyncDropCountdownStopTimer);

  setCount(10);
  asyncDropCountdownTimer = setInterval(() => {
    setCount((value) => Math.max(value - 1, 0));
  }, 1000);
  asyncDropCountdownStopTimer = setTimeout(() => {
    clearInterval(asyncDropCountdownTimer);
    asyncDropCountdownTimer = null;
    asyncDropCountdownStopTimer = null;
    setCount(0);
  }, 10000);
};
const loadAsyncDropContent = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      startAsyncDropCountdown();
      resolve(
        jsx('div', {
          style: { padding: '8px' },
          children: () =>
            `${translate('rendered')} ${count() > 0 ? `${translate('countdown')} ${count()}${translate('countUnit')}` : translate('cacheExpired')}`,
        })
      );
    }, 1000);
  });

createDrop(q('.async-demo'), {
  position: 'bottom-left',
  content: () => loadAsyncDropContent(),
  cache: true,
  ttl: 10000,
});
