import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Connection from './pages/Connection'
import Effects from './pages/Effects'
import Periphery from './pages/Periphery'
import Controller from './pages/Controller'
import License from './pages/License'
import TabNav from './components/TabNav'

export default function App() {
  const { t } = useTranslation()
  const [connected, setConnected] = useState(false)
  const [deviceName, setDeviceName] = useState('')
  const version = '1.24.1.5'

  return (
    <BrowserRouter>
      <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">{t('title')}</h1>
          <div>
            {connected ? (
              <div className="text-green-600">
                {t('connected',{name:deviceName})}
                <div className="text-sm">{t('version',{version})}</div>
              </div>
            ) : (
              <button
                onClick={()=>window.location.assign('/')}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >{t('connect')}</button>
            )}
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Connection onConnect={(n)=>{setDeviceName(n);setConnected(true)}}/>}/>
          {connected && (
            <Route path="/app" element={
              <>
                <TabNav/>
                <Routes>
                  <Route path="effects" element={<Effects/>}/>
                  <Route path="periphery" element={<Periphery/>}/>
                  <Route path="controller" element={<Controller/>}/>
                  <Route path="license" element={<License/>}/>
                  <Route path="*" element={<Navigate to="effects" replace/>}/>
                </Routes>
              </>
            }/>
          )}
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
