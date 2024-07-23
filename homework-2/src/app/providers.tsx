// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SWRConfig } from 'swr'
import AllShows from './(shows)/all-shows/page'
import AllShowsDetails from './(shows)/all-shows/[id]/page'
import Login from './login/page'
import Register from './register/page'
import TopRated from './(shows)/top-rated/page'
import Home from './page'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig>
      <ChakraProvider>
        {children}
        <BrowserRouter>
          <Routes>
            <Route path="/all-shows" element={<AllShows />} />
            <Route path="/all-shows/:id" element={<AllShowsDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/top-rated" element={<TopRated />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </SWRConfig>
  )
}