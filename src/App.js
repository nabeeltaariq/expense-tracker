import './App.css'
import Child from './Child'
import { TransactionProvider } from './transactionContext'

function App() {
  return (
    <TransactionProvider>
      <Child />
    </TransactionProvider>
  )
}

export default App
