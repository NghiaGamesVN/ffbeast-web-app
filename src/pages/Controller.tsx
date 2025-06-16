import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Controller() {
  const { t } = useTranslation()
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{t('tabs.controller')}</h2>
      <div>{/* Controller UI … */}</div>
    </div>
  )
}
