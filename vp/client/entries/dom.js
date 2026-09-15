import { createLoading, q } from 'vanilla-jui';
import { insert, jsx } from 'vanilla-signal';

insert(
  q('.demo'),
  jsx('div', {
    style: {
      width: '24px',
      height: '24px',
      position: 'relative',
    },
    children: createLoading(),
  })
);
