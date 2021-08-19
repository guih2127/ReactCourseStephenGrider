console.clear();

// PESSOAS ABRINDO O FORMULÁRIO => ACTION CREATOR
// 3 ACTION CREATORS, no nosso caso.

const createPolicy = (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  }
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  }
};

const createClaim = (name, amount) => {
    return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amount: amount
    }
  }
};

const claimsHistory = (oldListOfClaims = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
        return [...oldListOfClaims, action.payload]; 
        // pega uma array e adiciona para uma NOVA array (...)
        // após isso, adicionamos o novo payload.
        // evitamos ao máximo modificar uma array existente em um reducer!
    };

    return oldListOfClaims;
};

const accounting = (bagOfMoney = 1000, action) => {
    if (action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.payload.amount;
    } else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount
    };

    return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload];
    } else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(name => {
            name !== action.payload.name;
        });
    };

    return listOfPolicies;
};

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);

const action = createPolicy('Alex', 20);
store.dispatch(action);
console.log(store.getState());