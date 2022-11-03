import React, { useState } from 'react'
import { DE, GB, NL } from 'country-flag-icons/react/3x2'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Header() {

  const [lang, setLang] = useState('en')

  const currentLang = 'border-2 border-purple-600 p-0.5 bg-lime bg-clip-padding'

  const { i18n } = useTranslation()

  const handleClick = (lang) => {
    i18n.changeLanguage(lang)
    setLang(lang)
  }

  return (
    <div className='bg-lime h-20 w-full subpixel-antialiased flex items-center justify-center relative p-6 pb-8'>
      <div className='text-gray text-center text-xl'>
        <Link to="/">Some fancy Cam Viewer Name</Link>
      </div>
      <div className='absolute left-[90%]'>
        <div className='flex flex-row gap-1.5'>
          <NL onClick={() => handleClick('nl')} className={`h-6 rounded ${lang === 'nl' ? currentLang : ''}`}/>
          <GB onClick={() => handleClick('en')} className={`h-6 rounded ${lang === 'en' ? currentLang : ''}`}/>
          <DE onClick={() => handleClick('de')} className={`h-6 rounded ${lang === 'de' ? currentLang : ''}`}/>
        </div>
      </div>
    </div>
  )
}

export default Header