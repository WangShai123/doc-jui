import { createOffcanvas, q } from 'vanilla-jui';
import { jsx, insert, createSignal } from 'vanilla-signal';
import { t } from 'vanilla-signal-i18n';

const locales = {
  en: {
    asyncBtn: 'Async Content Offcanvas',
    cacheExpired: 'Cache expired',
    cacheInfo: 'This offcanvas has caching enabled. The cache time is 10 seconds.',
    cacheReuse: 'Within 10 seconds, repeatedly opening the offcanvas will show the cached content.',
    cacheExpire: 'After 10 seconds, the content expires and will be requested and rendered again.',
    close: 'Close',
    countdown: 'Countdown',
    countUnit: 'seconds',
    defaultBtn: 'Default',
    directionBtn: 'Change Direction and Remove Blur Filter',
    request: 'Async API request #',
    requestSuffix: '',
    stack1: 'Stack 1',
    stack2: 'Stack 2',
  },
  zh: {
    asyncBtn: '异步内容侧滑面板',
    cacheExpired: '缓存已过期',
    cacheInfo: '当前侧滑面板已经开启缓存功能，缓存时间为 10 秒。',
    cacheReuse: '10 秒内，反复打开侧滑面板，将显示缓存内容。',
    cacheExpire: '10 秒后，内容过期，将重新请求并渲染。',
    close: '关闭',
    countdown: '倒计时',
    countUnit: '秒',
    defaultBtn: '默认',
    directionBtn: '换个方向且移除模糊滤镜',
    request: '异步接口请求 第',
    requestSuffix: '次',
    stack1: '堆叠 1',
    stack2: '堆叠 2',
  },
};
const translate = (k) => t(k, locales);

const demo1 = jsx('div', {
  style: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  children: [
    jsx('button', {
      className: 'j-button is-default',
      children: translate('defaultBtn'),
      onClick: () => {
        createOffcanvas({
          onHidden: (i) => {
            i.destroy();
          },
        })
          .build()
          .show();
      },
    }),
    jsx('button', {
      className: 'j-button is-default',
      children: translate('directionBtn'),
      onClick: () => {
        createOffcanvas({
          direction: 'right',
          filter: false,
          onHidden: (i) => {
            i.destroy();
          },
        })
          .build()
          .show();
      },
    }),
    jsx('button', {
      className: 'j-button is-default',
      children: translate('stack1'),
      onClick: () => {
        createOffcanvas({
          direction: 'top',
          overlay: false,
          onHidden: (i) => {
            i.destroy();
          },
          content: jsx('div', {
            style: 'display:flex;justify-content:center;align-items:center;height:100%;background:var(--ui-fg-muted)',
            children: jsx('button', {
              className: 'j-button is-default',
              'data-action': 'close',
              children: translate('close'),
            })
          })
        })
          .build()
          .show();
      },
    }),
    jsx('button', {
      className: 'j-button is-default',
      children: translate('stack2'),
      onClick: () => {
        createOffcanvas({
          direction: 'bottom',
          overlay: false,
          filter: false,
          onHidden: (i) => {
            i.destroy();
          },
          content: jsx('div', {
            style: 'display:flex;justify-content:center;align-items:center;height:100%;background:var(--tone-solid)',
            children: jsx('button', {
              className: 'j-button is-default',
              'data-action': 'close',
              children: translate('close'),
            })
          })
        })
          .build()
          .show();
      },
    }),
  ],
});

const [offcanvasCount, setOffcanvasCount] = createSignal(10);
let asyncOffcanvasRequestCount = 0;
let offcanvasCountdownTimer = null;
let offcanvasCountdownStopTimer = null;
const startOffcanvasCountdown = () => {
  if (offcanvasCountdownTimer) clearInterval(offcanvasCountdownTimer);
  if (offcanvasCountdownStopTimer) clearTimeout(offcanvasCountdownStopTimer);

  setOffcanvasCount(10);
  offcanvasCountdownTimer = setInterval(() => {
    setOffcanvasCount((value) => {
      const next = value - 1;
      return next > 0 ? next : 0;
    });
  }, 1000);
  offcanvasCountdownStopTimer = setTimeout(() => {
    clearInterval(offcanvasCountdownTimer);
    offcanvasCountdownTimer = null;
    offcanvasCountdownStopTimer = null;
    setOffcanvasCount(0);
  }, 10000);
};
const loadAsyncOffcanvasContent = () =>
  new Promise((resolve) => {
    const requestIndex = asyncOffcanvasRequestCount + 1;
    setTimeout(() => {
      asyncOffcanvasRequestCount = requestIndex;
      startOffcanvasCountdown();
      resolve(
        jsx('div', {
          style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            padding: '24px',
          },
          children: [
            jsx('p', {
              children: `${translate('request')} ${requestIndex} ${translate('requestSuffix')}`.trim(),
            }),
            jsx('p', {
              style: {marginBlock: '4px'},
              children: translate('cacheInfo'),
            }),
            jsx('p', {
              style: {marginBlock: '4px'},
              children: translate('cacheReuse'),
            }),
            jsx('p', {
              style: {marginBlock: '4px'},
              children: translate('cacheExpire'),
            }),
            jsx('p', {
              style: {
                marginTop: '24px',
                display: 'flex',
                gap: '8px',
              },
              children: [
                jsx('button', {
                  className: 'j-button is-secondary',
                  type: 'button',
                  children: () =>
                    offcanvasCount() > 0
                      ? `${translate('countdown')} ${offcanvasCount()} ${translate('countUnit')}`
                      : translate('cacheExpired'),
                }),
                jsx('button', {
                  className: 'j-button is-primary',
                  type: 'button',
                  'data-action': 'close',
                  children: translate('close'),
                }),
              ],
            }),
          ],
        })
      );
    }, 1000);
  });
const asyncOffcanvas = createOffcanvas({
    direction: 'right',
    content: () => loadAsyncOffcanvasContent(),
    cache: true,
    ttl: 10000,
});
asyncOffcanvas.build();
const demo2 = jsx('div', {
    style: {
        marginBlock: '16px',
    },
    children: jsx('button', {
        className: 'j-button is-outline',
        children: translate('asyncBtn'),
        onClick: () => {
            asyncOffcanvas.show();
        },
    }),
});
insert(q('.demo'), [demo1, demo2]);
