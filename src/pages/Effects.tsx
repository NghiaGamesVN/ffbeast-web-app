import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Effects() {
  const { t } = useTranslation()
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{t('tabs.effects')}</h2>
      <div>{/* … sliders & inputs hiển thị như bản gốc … */}</div>
    </div>
  )
}
