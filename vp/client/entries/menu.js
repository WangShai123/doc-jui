import { createMenu, q, createOffcanvas } from 'vanilla-jui';
import { jsx, insert, Show, createSignal, createEffect } from 'vanilla-signal';
import { t } from 'vanilla-signal-i18n';

const locales = {
    en: {
        destroyBottom: 'Destroy Bottom Menu',
        destroyDesktop: 'Destroy Desktop Menu',
        enableBottom: 'Enable Bottom Menu',
        enableDesktop: 'Enable Desktop Menu',
        sidebar: 'Sidebar Menu',
    },
    zh: {
        destroyBottom: '销毁底部菜单',
        destroyDesktop: '销毁桌面菜单',
        enableBottom: '启用底部菜单',
        enableDesktop: '启用桌面菜单',
        sidebar: '侧边栏菜单',
    },
};
const translate = (k) => t(k, locales);

const data = [
    { id: 'home', title: 'Home', url: '#home' },
    { id: 'category', title: 'Category', type: 1, url: '#category' },
    {
      id: 'docs',
      title: 'Docs',
      children: [
        { id: 'api', title: 'API', url: '#api' },
        { id: 'guide', title: 'Guide', url: '#guide' },
      ],
    },
    { id: 'user', title: 'User', type: 2, url: '#user' },
]
const oc = createOffcanvas({
    direction: 'left',
    content: createMenu({
        type: 'mobile',
        data
    }).build().element,
}).build();
const bm = createMenu({
    type: 'bottom',
    data
});
const dm = createMenu({
    data
});
const [b,setB] = createSignal(false);
const [d,setD] = createSignal(false);
insert(q('.demo'), ()=>jsx('div', {
    style: {
        display:'flex',
        flexWrap:'wrap',
        gap:'8px'
    },
    children:[
        Show({
            when: () => d(),
            children: ()=>jsx('button',{
                className: 'j-button is-error',
                children: translate('destroyDesktop'),
                onClick:()=> {
                    dm.unmount();
                    setD(false);
                }
            }),
            fallback: ()=>jsx('button',{
                className: 'j-button is-outline',
                children: translate('enableDesktop'),
                onClick:()=> {
                    dm.mount(q('header'))
                    setD(true);
                }
            }),
        }),
        jsx('button',{
            className: 'j-button is-default',
            children: translate('sidebar'),
            onClick:()=>oc.show()
        }),
        Show({
            when: () => b(),
            children: ()=>jsx('button',{
                className: 'j-button is-error',
                children: translate('destroyBottom'),
                onClick:()=> {
                    bm.unmount();
                    setB(false);
                }
            }),
            fallback: ()=>jsx('button',{
                className: 'j-button is-outline',
                children: translate('enableBottom'),
                onClick:()=> {
                    bm.mount(q('body'))
                    setB(true);
                }
            }),
        }),
    ]
}))
