import { createFlow, q, createLoading, Toast } from 'vanilla-jui';
import { jsx, insert } from 'vanilla-signal';
import { t } from 'vanilla-signal-i18n';

const locales = {
  en: {
    accountContentEnd: '.',
    accountContentStart:
      'Fill in the basic account information. The current step content is only rendered in ',
    accountTitle: 'Account Info',
    addressContent: 'This is the current initial step.',
    addressTitle: 'Address',
    back: 'Back',
    cartContent: 'You can click any step directly.',
    cartTitle: 'Cart',
    cachedEmail: 'Global cached email: ',
    codePlaceholder: 'Enter verification code',
    codeSent: 'Verification code sent',
    codeTitle: 'Enter Verification Code',
    codeWrong: 'Verification code is incorrect. Please try again',
    confirmContent: 'The last step shows the Next button as Finish.',
    confirmTitle: 'Confirm Submit',
    continue: 'Continue',
    current: 'Current:',
    defaultName: 'John Doe',
    emailLabel: 'Email',
    emailPlaceholder: 'Enter email',
    emailTitle: 'Enter Email',
    finish: 'Finish',
    initialTitle: 'Initial Data',
    nameLabel: 'Name',
    namePlaceholder: 'Enter name',
    nameTitle: 'Enter Name',
    next: 'Next',
    notFilled: 'Not filled',
    paymentContent: 'This simulates a nonlinear flow.',
    paymentTitle: 'Payment',
    previous: 'Previous',
    profileSubmitted: "'s profile has been submitted successfully.",
    profileTitle: 'Complete Profile',
    registrationDone: ' has completed registration verification.',
    reset: 'Reset',
    resetDemo: 'Reset Current Demo',
    sendCode: 'Send Verification Code',
    step: 'Step',
    stepSuffix: '',
    submit: 'Submit',
    submittedTitle: 'Submitted',
    testCode: 'Test verification code:',
    usernamePlaceholder: 'Enter username',
    usernameTitle: 'Enter Username',
    welcome: 'Welcome',
    welcomeBang: '!',
    welcomeEdit: 'Click next to edit the profile.',
    welcomeSep: ', ',
  },
  zh: {
    accountContentEnd: '。',
    accountContentStart: '填写账号基础信息。当前步骤内容只渲染在 ',
    accountTitle: '账号信息',
    addressContent: '当前初始步骤。',
    addressTitle: '地址',
    back: '返回',
    cartContent: '可直接点击任意步骤。',
    cartTitle: '购物车',
    cachedEmail: '全局缓存 email：',
    codePlaceholder: '输入验证码',
    codeSent: '验证码发送成功',
    codeTitle: '填写验证码',
    codeWrong: '验证码不正确，请重新输入',
    confirmContent: '最后一步会把 Next 按钮显示为 Finish。',
    confirmTitle: '确认提交',
    continue: '继续',
    current: '当前：',
    defaultName: '王小明',
    emailLabel: 'Email',
    emailPlaceholder: '请输入邮箱',
    emailTitle: '填写邮箱',
    finish: '完成',
    initialTitle: '初始数据',
    nameLabel: 'Name',
    namePlaceholder: '请输入姓名',
    nameTitle: '填写姓名',
    next: '下一步',
    notFilled: '未填写',
    paymentContent: '这里模拟非线性流程。',
    paymentTitle: '支付',
    previous: '上一步',
    profileSubmitted: '的资料已提交成功。',
    profileTitle: '资料完善',
    registrationDone: ' 已完成注册验证。',
    reset: '重置',
    resetDemo: '重置当前演示',
    sendCode: '发送验证码',
    step: '第',
    stepSuffix: ' 步',
    submit: '提交',
    submittedTitle: '提交成功',
    testCode: '测试验证码：',
    usernamePlaceholder: '输入用户名',
    usernameTitle: '填写用户名',
    welcome: '欢迎',
    welcomeBang: '！',
    welcomeEdit: '点击下一步可以修改个人资料。',
    welcomeSep: '，',
  },
};
const translate = (k) => t(k, locales);

const baseSteps = () => [
  {
    id: 'account',
    title: translate('accountTitle'),
    content: () =>
      jsx('div', {
        children: [
          translate('accountContentStart'),
          jsx('code', { children: 'flow-body' }),
          translate('accountContentEnd'),
        ],
      }),
    data: { email: 'demo@example.com' },
  },
  {
    id: 'profile',
    title: translate('profileTitle'),
    content: ({ data }) => {
      const email = typeof data.email === 'string' ? data.email : translate('notFilled');
      return jsx('div', {
        children: [translate('cachedEmail'), jsx('strong', { children: email })],
      });
    },
  },
  {
    id: 'confirm',
    title: translate('confirmTitle'),
    content: () =>
      jsx('div', { children: translate('confirmContent') }),
  },
];
const a = createFlow({
  id: 'flow-default-demo',
  steps: baseSteps(),
  showReset: true,
}).mount(q('.demo'));
console.log(a.snapshot());

createFlow({
  id: 'flow-free-demo',
  linear: false,
  initial: 'address',
  steps: [
    {
      id: 'cart',
      title: translate('cartTitle'),
      content: () => jsx('div', { children: translate('cartContent') }),
    },
    {
      id: 'address',
      title: translate('addressTitle'),
      content: () => jsx('div', { children: translate('addressContent') }),
    },
    {
      id: 'payment',
      title: translate('paymentTitle'),
      content: () => jsx('div', { children: translate('paymentContent') }),
    },
  ],
  showReset: true,
}).mount(q('.linear-demo'));

const createButton = (className, text, onClick, disabled = false) => {
  return jsx('button', {
    type: 'button',
    className,
    'aria-disabled': disabled ? 'true' : 'false',
    children: text,
    disabled,
    onClick,
  });
};

createFlow({
  id: 'flow-custom-demo',
  steps: baseSteps(),
  renderHeader: ({ snapshot, fallback }) => {
    const title =
      typeof snapshot.currentStep?.title === 'string'
        ? snapshot.currentStep.title
        : snapshot.currentId;

    return [
      fallback(),
      jsx('div', { className: 'flow-demo-meta', children: `${translate('current')} ${title}` }),
    ];
  },
  renderFooter: ({ snapshot, steps, back, next, reset }) => {
    const status = document.createElement('span');
    status.style.display = 'flex';
    status.style.alignItems = 'center';
    status.style.marginRight = '16px';
    status.textContent = `${translate('step')} ${snapshot.currentIndex + 1} / ${steps.length}${translate('stepSuffix')}`;

    return [
      status,
      snapshot.canBack
        ? createButton(
            'j-button is-outline',
            translate('back'),
            () => void back()
          )
        : null,
      createButton(
        'j-button is-success',
        snapshot.isLast ? translate('submit') : translate('continue'),
        () => void next()
      ),
      createButton('j-button is-text', translate('reset'), () => reset()),
    ];
  },
}).mount(q('.custom-demo'));

const textValue = (value) => {
  if (typeof value === 'string') return value;
  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }
  return '';
};
const collectCurrentForm = (flow) => {
  const form = flow.element?.querySelector('[data-flow-body] form');
  if (!(form instanceof HTMLFormElement)) return null;
  if (!form.reportValidity()) return false;
  return Object.fromEntries(new FormData(form).entries());
};
const createField = (name, label, value = '', placeholder = '') =>
  jsx('form', {
    className: 'j-form is-vertical is-item-vertical',
    style: {
      maxWidth: '280px',
    },
    children: [
      jsx('label', {
        className: 'form-field',
        children: [
          jsx('span', { className: 'field-legend', children: label }),
          jsx('input', {
            className: 'j-input',
            name,
            value,
            required: true,
            autocomplete: name === 'email' ? 'email' : 'name',
            type: name === 'email' ? 'email' : 'text',
            placeholder,
          }),
        ],
      }),
    ],
  });

createFlow({
  id: 'flow-async-demo',
  steps: [
    {
      id: 'intro',
      title: translate('initialTitle'),
      data: { name: translate('defaultName'), email: 'xiaoming@example.com' },
      content: ({ data }) =>
        jsx('div', {
          children: [
            jsx('p', {
              children: `${translate('welcome')}${translate('welcomeSep')}${textValue(data.name)}${translate('welcomeBang')} ${translate('welcomeEdit')}`,
            }),
            jsx('ul', {
              children: [
                jsx('li', { children: `name: ${textValue(data.name)}` }),
                jsx('li', { children: `email: ${textValue(data.email)}` }),
              ],
            }),
          ],
        }),
    },
    {
      id: 'name',
      title: translate('nameTitle'),
      content: ({ data }) =>
        createField('name', translate('nameLabel'), textValue(data.name), translate('namePlaceholder')),
    },
    {
      id: 'email',
      title: translate('emailTitle'),
      content: ({ data }) =>
        createField('email', translate('emailLabel'), textValue(data.email), translate('emailPlaceholder')),
      onLeave: () => new Promise((resolve) => setTimeout(resolve, 800)),
    },
    {
      id: 'success',
      title: translate('submittedTitle'),
      content: ({ data }) =>
        jsx('div', {
          children: [
            jsx('div', {
              className: 'j-tip is-success',
              children: jsx('div', {
                className: 'tip-content',
                children: `${textValue(data.name)}${translate('profileSubmitted')}`,
              }),
            }),
            jsx('ul', {
              style: { marginTop: '1rem' },
              children: [
                jsx('li', { children: `name: ${textValue(data.name)}` }),
                jsx('li', { children: `email: ${textValue(data.email)}` }),
              ],
            }),
          ],
        }),
    },
  ],
  showReset: true,
  renderFooter: ({ snapshot, flow, back, next, reset }) => {
    const loading = jsx('div', { style: {position:'relative',minWidth:'32px'} });
    if (snapshot.loading) loading.appendChild(createLoading());

    const payloadNext = () => {
      const payload = collectCurrentForm(flow);
      if (payload === false) return;
      void next(payload);
    };

    return [
        loading,
        jsx('div', {
          style: {
            display:'flex',
          },
          children: [
            createButton(
              'j-button is-text flow-reset',
              translate('reset'),
              () => reset(),
              snapshot.loading
            ),
            snapshot.canBack
              ? createButton(
                  'j-button is-ghost flow-back',
                  translate('previous'),
                  () => void back(collectCurrentForm(flow) || null),
                  snapshot.loading
                )
              : null,
            createButton(
              'j-button is-primary flow-next',
              snapshot.isLast
                ? translate('finish')
                : snapshot.currentId === 'email'
                  ? translate('submit')
                  : translate('next'),
              payloadNext,
              snapshot.loading
            ),
          ]
        })
      ]
  },
}).mount(q('.async-demo'));

const mountHeadlessFlow = () => {
  const shell = jsx('div', {
    className: 'flow-headless-demo',
    'data-headless-flow': '',
  });
  insert(q('.headless-demo'), shell);

  const flowInstances = new Set();
  const collectForm = (root) => {
    const form = root.querySelector('form');
    if (!(form instanceof HTMLFormElement)) return null;
    if (!form.reportValidity()) return false;
    return Object.fromEntries(new FormData(form).entries());
  };
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


  const validCode = '8426';

  const flow = createFlow({
    id: 'flow-headless-demo',
    render: false,
    steps: [
      { id: 'username', title: translate('usernameTitle') },
      {
        id: 'email',
        title: translate('emailTitle'),
        onNext: async ({ targetId }) => {
          await delay(800);
          Toast.lite(translate('codeSent'), 2000);
          return targetId || 'code';
        },
      },
      {
        id: 'code',
        title: translate('codeTitle'),
        onNext: async ({ payload, targetId }) => {
          await delay(800);
          if (payload?.code !== validCode) {
            Toast.error(translate('codeWrong'), { duration: 2200 });
            return 'code';
          }
          return targetId || 'welcome';
        },
      },
      { id: 'welcome', title: translate('welcome') },
    ],
  });
  flow.build();
  flowInstances.add(flow);

  const render = (snapshot) => {
    shell.textContent = '';

    const fieldByStep = {
      username: () =>
        createField(
          'username',
          '',
          textValue(snapshot.data.username),
          translate('usernamePlaceholder')
        ),
      email: () =>
        createField('email', '', textValue(snapshot.data.email), translate('emailPlaceholder')),
      code: () =>
        jsx('div', {
          children: [
            createField('code', '', '', translate('codePlaceholder')),
            jsx('p', {
              className: 'headless-hint',
              children: `${translate('testCode')} ${validCode}`,
            }),
          ],
        }),
    };

    const content =
      snapshot.currentId === 'welcome'
        ? jsx('article', {
            className: 'headless-welcome',
            children: [
              jsx('strong', {
                children: `${translate('welcome')}${translate('welcomeSep')}${textValue(snapshot.data.username)}${translate('welcomeBang')}`,
              }),
              jsx('p', {
                children: `${textValue(snapshot.data.email)}${translate('registrationDone')}`,
              }),
              createButton('j-button is-primary', translate('resetDemo'), () =>
                flow.reset()
              ),
            ],
          })
        : jsx('article', {
            className: 'headless-card',
            children: [
              jsx('strong', {
                children: snapshot.currentStep?.title || snapshot.currentId,
              }),
              fieldByStep[snapshot.currentId]?.(),
            ],
          });

    const moveNext = async () => {
      const payload = collectForm(shell);
      if (payload === false) return;
      await flow.next(payload);
    };

    const dynamicAction = (value) =>
      snapshot.loading ? createLoading() : value;
    const dynamicAttr = (value) => (snapshot.loading ? value : '');

    const actions = jsx('div', {
      style: {
        display:'flex',
        gap: '8px',
        marginTop: '8px'
      },
      children:
        snapshot.currentId === 'welcome'
          ? []
          : [
              createButton(
                'j-button is-outline',
                translate('previous'),
                () => void flow.back(collectForm(shell) || null),
                !snapshot.canBack || snapshot.loading
              ),
              createButton(
                `j-button is-primary ${dynamicAttr('is-icon')}`,
                snapshot.currentId === 'email'
                  ? dynamicAction(translate('sendCode'))
                  : dynamicAction(translate('next')),
                () => void moveNext(),
                snapshot.loading
              ),
            ],
    });

    shell.append( content, actions);
  };

  flow.subscribe(render);
};
mountHeadlessFlow();
