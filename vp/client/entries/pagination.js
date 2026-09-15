import { createPagination, q, createLoading } from 'vanilla-jui';
import { render, insert, jsx } from 'vanilla-signal';

insert(q('.demo'), ()=>jsx('div', {
  children:[
    jsx('div', {
      className: 'list-wrap',
    }),
     jsx('div', {
      className: 'pagination-wrapper',
    })
  ]
}));

const query = async (id=1) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
};

const renderPost = (res) => {
  const result = jsx('div',{
    className: 'post',
    children:[
      jsx('h4', {
        children: res.title,
      }),
      jsx('p', {
        style: {marginBottom: '1rem'},
        children: res.body,
      }),
    ]
  });
  render(result, q('.list-wrap'));
}

render(createLoading(), q('.list-wrap'));
void query(1).then((res)=>{
  renderPost(res);
  createPagination({
    total: 100,
    page: { size: 1, current: 1 },
    count: { sibling: 1, boundary: 1 },
    onChange: async (c)=> {
      renderPost( await query(c));
    }
  }).mount(q('.pagination-wrapper'));
})
