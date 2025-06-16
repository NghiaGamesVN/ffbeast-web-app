import React from 'react'
import { useTranslation } from 'react-i18next'

export default function License() {
  const { t } = useTranslation()
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{t('tabs.license')}</h2>
      <div>{/* License UI … */}</div>
    </div>
  )
}
