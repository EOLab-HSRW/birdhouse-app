import React from 'react'
import { useTranslation } from 'react-i18next';
import { TbDrone } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { imagePreview } from '../ImageAPI';

function Device({device}) {

    const { t } = useTranslation()

    return (

        <div className='h-80 border border-gray/40 shadow-xl rounded-md m-3 flex flex-col justify-between hover:scale-105 transition duration-250 ease-in-out'>
            <div className='flex flex-row justify-right  items-center py-6'>
                <div>
                    <TbDrone className='mx-2 ml-6' size={22}/>
                </div>
                <div className='flex flex-col px-4'>
                    <div className='font-bold text-neutral-800 text-sm'>
                        {device.deviceName}
                    </div>
                    <div className='text-tiny text-gray'>
                        {device.deviceSchool}
                    </div>
                </div>
            </div>
            { device.fileName !== "" ? 
                <img
                    className='flex-grow mx-auto w-full fill-gray h-24 bg-gray brightness-[.75] blur-[2px]'
                    src={imagePreview(device.fileName)} 
                    alt="Not found"
                />
                : <div className='flex-grow px-0 h-24 bg-gray brightness-[.75] blur-[2px]'></div>
            }
            <div className='px-6 py-3'>
                <Link id='view' to={`/${device._id}/gallery`}>{t('device.1')}</Link>
            </div>
        </div>
    )
}

export default Device