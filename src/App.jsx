import { useState } from  'react'
import { ChartBarDecreasing } from 'lucide-react';
import { X } from 'lucide-react';
export default function App() {
  const [show, setshow] = useState(false)
  return (
    <div>

      <nav className='flex justify-between text-center bg-green-600 py-3'>

        <h1>Welcome to Lakshya Sharma</h1>

        <ul className=' hidden md:flex gap-4 '>
          <li>redtape</li>
          <li>redtape</li>
          <li>redtape</li>
          <li>redtape</li>
          <li>redtape</li>
          <li>redtape</li>
        </ul>

        <div className='hidden md:flex gap-4'>
          <button>sing up</button>
          <button>sing in</button>
        </div>

        <div onClick={()=> setshow(!show)} className='md:hidden flex'>
          {show ? <X /> : <ChartBarDecreasing />}
        </div>
      </nav>
    </div>
  )
}
