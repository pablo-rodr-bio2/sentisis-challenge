import { UnitStoreProvider } from '@/context/UnitStoreContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import MainTableContainer from './components/MainTableContainer/MainTableContainer'

const queryClient = new QueryClient()

function App() {
  return (
    <UnitStoreProvider>
      <QueryClientProvider client={queryClient}>      
          <MainTableContainer />        
      </QueryClientProvider>
    </UnitStoreProvider>
  )
}

export default App
