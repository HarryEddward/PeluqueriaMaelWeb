'use client'

import dynamic from 'next/dynamic'

const HairDryer = dynamic(() => import('@/components/Scenes/Model/HairDryer').then(mod => mod.ModelHairDryer), { ssr: false })

export default function SceneHairDryer() {
    return (
        <div className='hidden md:block bg-white rounded-[4rem]'>
            <HairDryer />
        </div>
        
    )
}