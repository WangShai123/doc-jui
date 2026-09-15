import { q, all, icon, getRegistedIconPath } from 'vanilla-jui';
import { render } from 'vanilla-signal';

const icons = getRegistedIconPath();
const iconsKeys = Object.keys(icons);
const body = q('table tbody');
const tds = all('tr td:nth-child(2)', body)

for (let i = 0; i < tds.length; i++) {
  tds[i].style.verticalAlign = 'middle';
  render(icon(iconsKeys[i], {width:16}), tds[i])
}
