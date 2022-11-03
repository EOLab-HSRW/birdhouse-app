import React from 'react'
import { useTranslation } from 'react-i18next'

function Footer() {

  const { t } = useTranslation()

  return (
    <div className='w-full flex justify-center items-center bg-lime h-20 subpixel-antialiased p-6 pt-8'>
      <div className='text-gray text-center'>
        {t('footer.1')} Earth Observation Lab HSRW - <a href='https://wiki.eolab.de' target="_blank" rel="noopener noreferrer">EOLab.de</a>
      </div>
    </div>
  )
}

export default Footer