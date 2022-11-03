import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { searchDevices } from '../features/deviceSlice'


function SearchBar() {

    const dispatch = useDispatch()

    const [Search, setSearch] = useState("")

    useEffect(() => {
        dispatch(searchDevices(Search))
      }, [Search, dispatch])

    const changeSearch = (e) => {
        setSearch(e.target.value)
    };

    const { t } = useTranslation()

    return (
        <div className='flex justify-center'>
            <input className='
            my-4 mx-4 w-16 h-16 p-2 px-2 text-[31px]
            border border-gray/40 shadow-xl rounded-full outline-none
            transition duration-50'
            id='input' 
            type='text' 
            placeholder={t('search.2', { postProcess: 'emoji' }) + t('search.1')}
            onChange={changeSearch}
            required/>
        </div>
    )
}

export default SearchBar