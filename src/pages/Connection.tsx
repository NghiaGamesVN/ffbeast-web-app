import React from 'react'
import { useNavigate } from 'react-router-dom'
import DeviceScanner from '../components/DeviceScanner'

interface Props { onConnect: (name: string) => void }

export default function Connection({ onConnect }: Props) {
  const nav = useNavigate()
  const select = async (dev: USBDevice) => {
    await dev.open()
    if (!dev.configuration) await dev.selectConfiguration(1)
    await dev.claimInterface(0)
    onConnect(dev.productName||'FFBeast')
    nav('/app/effects')
  }
  return <DeviceScanner onSelect={select}/>
}
