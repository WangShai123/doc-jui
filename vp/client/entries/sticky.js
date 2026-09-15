import { createSticky, q } from 'vanilla-jui';
import { insert, jsx } from 'vanilla-signal';
import { t } from 'vanilla-signal-i18n';

const locales = {
  en: {
    addItem: 'Add item',
    deleteItem: 'Delete item',
    widget: 'Widget',
  },
  zh: {
    addItem: '新增项目',
    deleteItem: '删除项目',
    widget: '挂件',
  },
};
const translate = (k) => t(k, locales);

let stickySerial = 3;
const stickyList = jsx('aside', {
  style: {
    width: '260px',
    minHeight: '220px',
    padding: '12px',
    border: '1px solid var(--ui-border)',
  },
});
const createStickyWidget = (index) =>
  jsx('section', {
    id: `sticky-demo-widget-${index}`,
    className: 'sticky-demo-widget',
    style: {
      marginBottom: '8px',
      padding: '10px',
      background: 'var(--ui-bg)',
      border: '1px solid var(--ui-border)',
    },
    children: `${translate('widget')} ${index}`,
  });
for (let index = 1; index <= stickySerial; index += 1) {
  insert(stickyList, createStickyWidget(index));
}
insert(
  q('.demo'),
  jsx('div', {
    style: { marginTop: '1rem' },
    children: stickyList,
  })
);
const demoSticky = createSticky({
  parent: stickyList,
  target: '.sticky-demo-widget',
  top: 100,
  gap: 8,
}).build();
const tocStickyControls = jsx('div', {
  style: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    marginTop: '1rem',
  },
  children: [
    jsx('div', {
      style: { display: 'flex', gap: '.5rem' },
      children: [
        jsx('button', {
          type: 'button',
          className: 'j-button is-outline',
          children: translate('addItem'),
          onClick: () => {
            stickySerial += 1;
            insert(stickyList, createStickyWidget(stickySerial));
            demoSticky.reBuild();
          },
        }),
        jsx('button', {
          type: 'button',
          className: 'j-button is-error',
          children: translate('deleteItem'),
          onClick: () => {
            if (stickyList.children.length <= 1) return;
            const last = stickyList.lastElementChild;
            if (!(last instanceof HTMLElement)) return;
            last.remove();
            demoSticky.reBuild();
          },
        }),
      ],
    }),
  ],
});
insert(q('.demo'), tocStickyControls);
