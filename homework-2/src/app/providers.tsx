// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SWRConfig } from 'swr'
import Home from './page'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig>
      <ChakraProvider>
        {children}
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </SWRConfig>
  )
}