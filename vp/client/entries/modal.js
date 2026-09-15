import { q, createModal, createForm, Toast, icon } from 'vanilla-jui';
import { insert, jsx, createSignal } from 'vanilla-signal';
import { t } from 'vanilla-signal-i18n';
const locales = {
  zh: {
    asyncBtn: '异步内容模态框',
    asyncCache: '当前模态框已经开启缓存功能，缓存时间为 10 秒。',
    asyncExpire: '10 秒后，内容过期，将重新请求并渲染。',
    asyncModal: '异步内容模态框',
    asyncPrefix: '异步接口请求 第',
    asyncSuffix: '次',
    asyncReuse: '10 秒内，反复打开模态框，将显示缓存内容。',
    backdropClose: '点击背景关闭',
    backdropContent: '这是一个支持点击背景关闭的模态框',
    cacheExpired: '缓存已过期',
    cancel: '取消',
    confirm: '确认',
    confirmed: '已确认',
    countdown: '倒计时',
    countUnit: ' 秒',
    customContent: '确认执行这项危险操作？',
    customUi: '自定义 UI',
    defaultContent: '这是一个默认模态框',
    defaultModal: '默认模态框',
    dynamicBtn: '组合 Form 组件，实现动态表单模态框',
    dynamicModal: '动态表单模态框',
    dynamicSuccess: '动态表单提交成功，请在控制台查看提交数据',
    escClose: 'esc 关闭',
    escContent: '这是一个支持 esc 关闭的模态框',
    fieldType: '消息类型',
    fullscreenContent: '这是一个全屏模态框',
    fullscreenModal: '全屏模态框',
    gotIt: '我知道了',
    input: 'Input',
    inputPlaceholder: '当前选择了 input 类型',
    messageMin: '消息长度不能小于 5 个字符',
    messageRequired: '请输入消息',
    publishConfirm: '确认发布',
    publishHelp: '提交数据前，必需勾选确认发布。',
    publishRequired: '请先确认发布',
    textarea: 'Textarea',
    textareaPlaceholder: '当前选择了 textarea 类型',
    positionContent: '为模态框换个位置',
    positionContentAgain: '为模态框再换个位置',
    positionOnce: '换个位置',
    positionTwice: '再换个位置',
  },
  en: {
    asyncBtn: 'Async content modal',
    asyncCache:
      'This modal has content caching enabled. The cache lasts 10 seconds.',
    asyncExpire:
      'After 10 seconds, the content expires and will be requested and rendered again.',
    asyncModal: 'Async content modal',
    asyncPrefix: 'Async request #',
    asyncSuffix: '',
    asyncReuse:
      'Within 10 seconds, reopening the modal shows the cached content.',
    backdropClose: 'Backdrop close',
    backdropContent: 'This modal can be closed by clicking the backdrop',
    cacheExpired: 'Cache expired',
    cancel: 'Cancel',
    confirm: 'Confirm',
    confirmed: 'Confirmed',
    countdown: 'Countdown',
    countUnit: 's',
    customContent: 'Confirm this dangerous operation?',
    customUi: 'Custom UI',
    defaultContent: 'This is a default modal',
    defaultModal: 'Default modal',
    dynamicBtn: 'Combine Form to build a dynamic form modal',
    dynamicModal: 'Dynamic form modal',
    dynamicSuccess:
      'Dynamic form submitted. See the submitted data in the console.',
    escClose: 'Esc close',
    escContent: 'This modal can be closed with Esc',
    fieldType: 'Message type',
    fullscreenContent: 'This is a fullscreen modal',
    fullscreenModal: 'Fullscreen modal',
    gotIt: 'Got it',
    input: 'Input',
    inputPlaceholder: 'The input type is currently selected',
    messageMin: 'The message must be at least 5 characters',
    messageRequired: 'Please enter a message',
    publishConfirm: 'Confirm publish',
    publishHelp: 'You must confirm publishing before submitting data.',
    publishRequired: 'Please confirm publishing first',
    textarea: 'Textarea',
    textareaPlaceholder: 'The textarea type is currently selected',
    positionContent: 'Change the modal position',
    positionContentAgain: 'Change the modal position again',
    positionOnce: 'Change position',
    positionTwice: 'Another position',
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
      children: translate('defaultModal'),
      onClick: () => {
        createModal({
          text: { title: translate('defaultModal') },
          content: translate('defaultContent'),
          onConfirm: (e) => {
            e.hide();
            Toast.info(translate('confirmed'));
          },
          onHidden: (e) => e.destroy(),
        })
          .build()
          .show();
      },
    }),
    jsx('button', {
      className: 'j-button is-default',
      children: translate('fullscreenModal'),
      onClick: () => {
        createModal({
          text: { title: translate('fullscreenModal') },
          content: translate('fullscreenContent'),
          fullscreen: true,
          onConfirm: (e) => {
            e.hide();
            Toast.info(translate('confirmed'));
          },
          onHidden: (e) => e.destroy(),
        })
          .build()
          .show();
      },
    }),
    jsx('button', {
      className: 'j-button is-default',
      children: translate('escClose'),
      onClick: () => {
        createModal({
          text: { title: translate('escClose') },
          content: translate('escContent'),
          escClose: true,
          onConfirm: (e) => {
            e.hide();
            Toast.info(translate('confirmed'));
          },
          onHidden: (e) => e.destroy(),
        })
          .build()
          .show();
      },
    }),
    jsx('button', {
      className: 'j-button is-default',
      children: translate('backdropClose'),
      onClick: () => {
        createModal({
          text: { title: translate('backdropClose') },
          content: translate('backdropContent'),
          bgClose: true,
          onConfirm: (e) => {
            e.hide();
            Toast.info(translate('confirmed'));
          },
          onHidden: (e) => e.destroy(),
        })
          .build()
          .show();
      },
    }),
  ],
});
const demo2 = jsx('div', {
  style: {
    display: 'flex',
    gap: '8px',
    marginTop: '16px',
  },
  children: [
    jsx('button', {
      className: 'j-button is-default',
      children: translate('positionOnce'),
      onClick: () => {
        createModal({
          text: { title: translate('positionOnce') },
          content: translate('positionContent'),
          position: 'top',
          onConfirm: (e) => {
            e.hide();
            Toast.info(translate('confirmed'));
          },
          onHidden: (e) => e.destroy(),
        })
          .build()
          .show();
      },
    }),
    jsx('button', {
      className: 'j-button is-default',
      children: translate('positionTwice'),
      onClick: () => {
        createModal({
          text: { title: translate('positionTwice') },
          content: translate('positionContentAgain'),
          position: 'bottom-right',
          onConfirm: (e) => {
            e.hide();
            Toast.info(translate('confirmed'));
          },
          onHidden: (e) => e.destroy(),
        })
          .build()
          .show();
      },
    }),
    jsx('button', {
      className: 'j-button is-outline',
      children: translate('customUi'),
      onClick: () => {
        createModal({
          text: { title: translate('customUi') },
          header: false,
          footer: false,
          onHidden: (e) => e.destroy(),
          content: jsx`<div style="width:276px;display:flex;flex-direction:column;align-items:center;gap:calc(var(--space)*4);">
              <div style="width:24px;fill:currentColor">${icon('warning')}</div>
              <div style="margin-bottom:12px">${translate('customContent')}</div>
              <div style="display:flex;gap:calc(var(--space)*4);">
                <button class="j-button is-ghost is-sm" data-action="close">${translate('cancel')}</button>
                <button class="j-button is-danger is-sm" data-action="confirm">${translate('confirm')}</button>
              </div>
            </div>`,
          onConfirm: (e) => {
            e.hide();
            Toast.lite(translate('confirmed'));
          },
        })
          .build()
          .show();
      },
    }),
  ],
});
const [count, setCount] = createSignal(10);
let asyncContentRequestCount = 0;
let countdownTimer = null;
let countdownStopTimer = null;
const startCacheCountdown = () => {
  if (countdownTimer) clearInterval(countdownTimer);
  if (countdownStopTimer) clearTimeout(countdownStopTimer);

  setCount(10);
  countdownTimer = setInterval(() => {
    setCount((value) => {
      const next = value - 1;
      return next > 0 ? next : 0;
    });
  }, 1000);
  countdownStopTimer = setTimeout(() => {
    clearInterval(countdownTimer);
    countdownTimer = null;
    countdownStopTimer = null;
    setCount(0);
  }, 10000);
};
const loadAsyncModalContent = () =>
  new Promise((resolve) => {
    const requestIndex = asyncContentRequestCount + 1;
    setTimeout(() => {
      asyncContentRequestCount = requestIndex;
      startCacheCountdown();
      resolve(
        jsx('div', {
          children: [
            jsx('p', {
              children: `${translate('asyncPrefix')} ${requestIndex} ${translate('asyncSuffix')}`.trim(),
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
              style: {
                marginTop: '24px',
                display: 'flex',
                justifyContent: 'center',
                gap: '8px',
              },
              children: [
                jsx('button', {
                  className: 'j-button is-secondary',
                  'data-action': 'cancel',
                  children: () =>
                    `${count() > 0 ? `${translate('countdown')} ${count()}${translate('countUnit')}` : translate('cacheExpired')}`,
                }),
                jsx('button', {
                  className: 'j-button is-primary',
                  'data-action': 'confirm',
                  children: translate('gotIt'),
                }),
              ],
            }),
          ],
        })
      );
    }, 1000);
  });
const asyncModal = createModal({
  text: { title: translate('asyncModal') },
  content: async () => await loadAsyncModalContent(),
  style: 'min-height: 200px',
  cache: true,
  ttl: 10000,
  footer: false,
  onConfirm: (e) => {
    e.hide();
    Toast.lite(translate('gotIt'));
  },
}).build();

const modalInputItem = {
  type: 'text',
  payload: {
    name: 'message',
    label: translate('input'),
    placeholder: translate('inputPlaceholder'),
    required: true,
  },
  next: null,
};
const modalTextareaItem = {
  type: 'textarea',
  payload: {
    name: 'message',
    label: translate('textarea'),
    placeholder: translate('textareaPlaceholder'),
    required: true,
  },
  next: null,
};
const modalPublishItem = {
  type: 'switch',
  payload: {
    name: 'publish',
    label: translate('publishConfirm'),
    value: '1',
    checked: false,
    help: translate('publishHelp'),
  },
  next: null,
};
const modalFieldTypeItem = {
  type: 'radio',
  payload: {
    name: 'messageType',
    label: translate('fieldType'),
    value: 'input',
    required: true,
    options: [
      { value: 'input', text: translate('input') },
      { value: 'textarea', text: translate('textarea') },
    ],
  },
  next: null,
};
modalFieldTypeItem.next = (current) =>
  current.payload.value === 'textarea' ? modalTextareaItem : modalInputItem;
modalInputItem.next = () => modalPublishItem;
modalTextareaItem.next = () => modalPublishItem;
let dynamicFormModal;
const dynamicModalForm = createForm({
  fields: [modalFieldTypeItem],
  buttons: 'reverse',
  buttonsPosition: 'end',
  onSubmit: async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    Toast.success(translate('dynamicSuccess'));
    console.table(data);
    dynamicModalForm.reset();
    dynamicFormModal.hide();
  },
  validator: {
    rules: {
      message: {
        required: true,
        minLength: 5,
      },
      publish: {
        checked: true,
      },
    },
    messages: {
      message: {
        required: translate('messageRequired'),
        minLength: translate('messageMin'),
      },
      publish: {
        checked: translate('publishRequired'),
      },
    },
  },
}).build();
dynamicFormModal = createModal({
  text: {
    title: translate('dynamicModal'),
  },
  content: () => dynamicModalForm.element,
  footer: false,
}).build();
const demo3 = jsx('div', {
  style: {
    marginBlock: '16px',
  },
  children: [
    jsx('button', {
      className: 'j-button is-primary',
      children: translate('asyncBtn'),
      onClick: () => {
        asyncModal.show();
      },
    }),
  ],
});
const demo4 = jsx('div', {
  style: {
    marginBlock: '16px',
  },
  children: [
    jsx('button', {
      className: 'j-button is-outline',
      children: translate('dynamicBtn'),
      onClick: () => {
        dynamicFormModal.show();
      },
    }),
  ],
});
insert(q('.demo'), [demo1, demo2, demo3, demo4]);
