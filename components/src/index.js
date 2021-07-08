import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Warning!</h4>
        <div>Are you sure to do this?</div>
      </ApprovalCard>

      <ApprovalCard >
        <CommentDetail
          author="Sam" 
          timeAgo="Today at 6:00 PM" 
          text="Nice post!" 
          image={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard >
        <CommentDetail
          author="Mail" 
          timeAgo="Today at 1:00 PM" 
          text="Nice post!" 
          image={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard >
        <CommentDetail
          author="Nette" 
          timeAgo="Today at 4:00 PM" 
          text="Nice post!" 
          image={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

// Quando passamos um componente para outro, utilizando a sintaxe acima, o componente filho
// será passado para o componente pai através de props. No caso, conseguimos obter os dados de
// CommentDetail através da propriedade "children" das props de ApprovalCard.

// Não precisamos passar necessariamente um componente, mas sim qualquer JSX que quisermos,
// e ele será renderizado no componente, pois será passado como props.children da mesma forma.

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.querySelector('#root'));

// semantic ui cdn