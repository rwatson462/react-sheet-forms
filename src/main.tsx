// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import {SheetProvider} from "@/components/sheet/SheetProvider.tsx";

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <SheetProvider>
    <App />
  </SheetProvider>
  // </StrictMode>,
)
