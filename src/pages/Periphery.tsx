import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Periphery() {
  const { t } = useTranslation()
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{t('tabs.periphery')}</h2>
      <div>{/* Periphery UI … */}</div>
    </div>
  )
}
