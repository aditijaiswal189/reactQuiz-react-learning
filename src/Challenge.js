import { useReducer } from "react"

const initialState = {
  balance: 0, loan: 0
  , isActive: false
};
function reducer(state, action) {
  if (!state.isActive && action.type !== 'openAccount') return state;
  console.log(state, action);
  switch (action.type) {
    case 'openAccount':
      return { ...state, balance: 500, isActive: true };
    case 'deposit':
      return { ...state, balance: state.balance + action.payload };
    case 'withdraw': return { ...state, balance: state.balance - action.payload };
    case 'requestLoan': return '';
    case 'payLoan': return '';
    case 'closeAccount': return '';
    default:
      throw new Error('Unknown error')
  }
}

function Challenge() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="app">
      <h1>useReducer Bank Acount</h1>
      <h2>Balance : {balance}</h2>
      <h2>Loan : {loan}</h2>
      <p><button onClick={() => dispatch({ type: 'openAccount' })} disabled={isActive}>Open Account</button></p>
      <p><button onClick={() => dispatch({ type: 'deposit', payload: 150 })} disabled={!isActive}>Deposit : 150</button></p>
      <p><button onClick={() => dispatch({ type: ' withdraw', payload: 50 })} disabled={!isActive}>Withdraw : 50</button></p>
      <p><button onClick={() => { }} disabled={!isActive}>Request a Loan of 5000</button></p>
      <p><button onClick={() => { }} disabled={!isActive}>Pay Loan</button></p>
      <p><button onClick={() => { }} disabled={!isActive}>Close Account</button></p>

    </div>
  )
}

export default Challenge
