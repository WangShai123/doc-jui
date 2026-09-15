import { createParabola, q, listen } from 'vanilla-jui';
import { insert, jsx } from 'vanilla-signal';

insert(q('.demo'), jsx('div', {
  style: {
    height: '300px',
    minWidth: '240px',
    maxWidth: '320px',
    position: 'relative'
  },
  children: [
    jsx('button', {
        style: {
            position: 'absolute',
            top: 0,
            right: 0,
        },
        className: 'demo-from j-button is-outline',
        children: 'FROM'
    }),
    jsx('button', {
        style: {
            position: 'absolute',
            bottom: 0,
            left: 0,
        },
        className: 'demo-to j-button is-outline',
        children: 'TO'
    }),
  ]
}));
const parabola = createParabola({
  from: q('.demo-from'),
  to: q('.demo-to'),
  direction: 'top-left'
});
listen(q('.demo-from'), 'click', () => {
    parabola.show()
})
