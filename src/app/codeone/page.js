import React from 'react'
import CameraModule from '@/components/CameraModule'

function pages() {
  return (
    <div className='h-[100vh] bg-slate-100'>
      <CameraModule className="absolute" />
    </div>
  )
}

export default pages
