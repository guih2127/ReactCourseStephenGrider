import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 6:00 PM" text="Nice post!" image={faker.image.avatar()} />
      <CommentDetail author="Sam" timeAgo="Today at 6:00 PM" text="Nice post!" image={faker.image.avatar()}/>
      <CommentDetail author="Sam" timeAgo="Today at 6:00 PM" text="Nice post!" image={faker.image.avatar()}/>
      <CommentDetail author="Sam" timeAgo="Today at 6:00 PM" text="Nice post!" image={faker.image.avatar()}/>
      <CommentDetail author="Sam" timeAgo="Today at 6:00 PM" text="Nice post!" image={faker.image.avatar()}/>
    </div>
  );
};

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.querySelector('#root'));

// semantic ui cdn