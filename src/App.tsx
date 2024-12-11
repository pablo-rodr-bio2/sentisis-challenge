import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import MainTableContainer from './components/MainTableContainer/MainTableContainer'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainTableContainer />
    </QueryClientProvider>
  )
}

export default App
