import { insert, jsx } from 'vanilla-signal';
import { icon, addIcons, q } from 'vanilla-jui';

addIcons({
  hexagon:
    '<path d="M17.5 2.5L23 12L17.5 21.5H6.5L1 12L6.5 2.5H17.5ZM16.3469 4.5H7.65311L3.311 12L7.65311 19.5H16.3469L20.689 12L16.3469 4.5Z"></path>',
});
insert(
  q('.spin'),
  jsx('icon', {
    children: icon('hexagon', { width: 20, class: 'animate-spin' }),
  })
);
insert(
  q('.ping'),
  jsx('icon', {
    children: icon('hexagon', { width: 20, class: 'animate-ping' }),
  })
);
insert(
  q('.pulse'),
  jsx('icon', {
    children: icon('hexagon', { width: 20, class: 'animate-pulse' }),
  })
);
insert(
  q('.bounce'),
  jsx('icon', {
    children: icon('hexagon', { width: 20, class: 'animate-bounce' }),
  })
);
insert(
  q('.fade-in'),
  jsx('icon', {
    children: icon('hexagon', {
      width: 20,
      class: 'animate-fade-in',
      style: 'animation-iteration-count: infinite;animation-duration: 1s;',
    }),
  })
);
insert(
  q('.fade-out'),
  jsx('icon', {
    children: icon('hexagon', {
      width: 20,
      class: 'animate-fade-out',
      style: 'animation-iteration-count: infinite;animation-duration: 1s;',
    }),
  })
);
insert(
  q('.shake'),
  jsx('icon', {
    children: icon('hexagon', {
      width: 20,
      class: 'animate-shake',
      style: 'animation-iteration-count: infinite;animation-duration: 1s;',
    }),
  })
);
insert(
  q('.slide-to-top'),
  jsx('icon', {
    children: icon('hexagon', {
      width: 20,
      class: 'animate-slide-to-top',
      style: 'animation-iteration-count: infinite;animation-duration: 1s;',
    }),
  })
);
insert(
  q('.slide-to-bottom'),
  jsx('icon', {
    children: icon('hexagon', {
      width: 20,
      class: 'animate-slide-to-bottom',
      style: 'animation-iteration-count: infinite;animation-duration: 1s;',
    }),
  })
);
insert(
  q('.slide-to-left'),
  jsx('icon', {
    children: icon('hexagon', {
      width: 20,
      class: 'animate-slide-to-left',
      style: 'animation-iteration-count: infinite;animation-duration: 1s;',
    }),
  })
);
insert(
  q('.slide-to-right'),
  jsx('icon', {
    children: icon('hexagon', {
      width: 20,
      class: 'animate-slide-to-right',
      style: 'animation-iteration-count: infinite;animation-duration: 1s;',
    }),
  })
);
