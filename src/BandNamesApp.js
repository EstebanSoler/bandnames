import React from 'react'
import { SocketProvider } from './context/SocketContext'
import HomePage from './pages/HomePage'

export default function BandNamesApp() {
  return (
    <SocketProvider>
      <HomePage/>
    </SocketProvider>
  )
}
