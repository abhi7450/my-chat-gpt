import React from 'react'
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen px-2 text-white'>
      <h1 className='text-5xl font-bold mb-20'>Chat GPT</h1>

      <div className='flex space-x-2 text-center'>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <SunIcon className='h-8 w-8 '/>
            <h2>Examples</h2>
          </div>
          <div>
            <p className="infoText">"Explain something to me?"</p>
            <p className="infoText">"What is the difference between dog and cat?"</p>
            <p className="infoText">"What the temperature of the sun ?"</p>
          </div>
        </div>
        

      
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <BoltIcon className='h-8 w-8 '/>
            <h2>Capabilities</h2>
          </div>
          <div>
            <p className="infoText">"Explain something to me?"</p>
            <p className="infoText">"What is the difference between dog and cat?"</p>
            <p className="infoText">"What the temperature of the sun ?"</p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            
            <ExclamationTriangleIcon className='h-8 w-8 '/>
            <h2>Limitations</h2>
          </div>
          <div>
            <p className="infoText">"Explain something to me?"</p>
            <p className="infoText">"What is the difference between dog and cat?"</p>
            <p className="infoText">"What the temperature of the sun ?"</p>
          </div>
        </div>
      </div>

      </div>
  )
}

export default HomePage