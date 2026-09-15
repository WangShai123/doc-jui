import { createSwiper, q } from 'vanilla-jui';
import { jsx, insert } from 'vanilla-signal';
import { t } from 'vanilla-signal-i18n';

const locales = {
  en: {
    addData: 'Add data',
    deleteCurrent: 'Delete current item',
  },
  zh: {
    addData: '添加数据',
    deleteCurrent: '删除当前项',
  },
};
const translate = (k) => t(k, locales);

insert(q('.demo'), jsx('div', { className: 'swiper-demo' }));

let swiperItemSerial = 3;
const createDemoSwiperItem = (serial) => ({
  title: String(serial),
  image: `https://picsum.photos/300/200/?random=${serial}`,
  blank: false,
});
const requestSwiperItems = async () =>
  new Promise((resolve) =>
    setTimeout(() => resolve([1, 2, 3].map(createDemoSwiperItem)), 1000)
  );
const demoSwiper = createSwiper({
  autoplay: false,
  data: requestSwiperItems,
}).mount(q('.swiper-demo'));

insert(
  q('.demo'),
  jsx('div', {
    style: {
      display: 'flex',
      gap: '8px',
      marginTop: '8px',
    },
    children: [
      jsx('button', {
        type: 'button',
        className: 'j-button is-outline',
        children: translate('addData'),
        onClick: () => {
          swiperItemSerial += 1;
          const nextIndex = demoSwiper.state.data.length;
          demoSwiper.state.data.push(createDemoSwiperItem(swiperItemSerial));
          demoSwiper.slideTo(nextIndex);
        },
      }),
      jsx('button', {
        type: 'button',
        className: 'j-button is-error',
        children: translate('deleteCurrent'),
        onClick: () => {
          if (demoSwiper.realCount === 0) return;
          demoSwiper.state.data.splice(demoSwiper.realIndex, 1);
        },
      }),
    ],
  })
);
