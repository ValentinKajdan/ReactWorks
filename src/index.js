import ReactDOM from 'react-dom';
import React    from 'react';
import Comment from './components/comment.js'

const element = (<Comment
  text={'I wrote a super comment on my blog'}
  date={new Date().toLocaleString()}
/>);
ReactDOM.render(element, document.getElementById('root'));
