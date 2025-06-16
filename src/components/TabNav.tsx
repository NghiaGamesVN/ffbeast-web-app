import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function TabNav() {
  const { t } = useTranslation()
  const tabs = [
    {path:'effects',label:t('tabs.effects')},
    {path:'periphery',label:t('tabs.periphery')},
    {path:'controller',label:t('tabs.controller')},
    {path:'license',label:t('tabs.license')}
  ]
  return (
    <nav className="mb-4 border-b">
      <ul className="flex space-x-4">
        {tabs.map(tab=>(
          <li key={tab.path}>
            <NavLink
              to={`/app/${tab.path}`}
              className={({isActive})=>
                `pb-2 border-b-2 ${
                  isActive ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600'
                }`
              }
            >{tab.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
