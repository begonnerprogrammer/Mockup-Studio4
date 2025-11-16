import { memo } from 'react';
import ControlPanel from './controlpanel';

const Feature = () => {
  return<>

  <div  className="flex-1 flex overflow-hidden items-center justify-center min-h-full relative overflow-hidden transition-all duration-300 ">
 <h1 className='text-2xl p-4'>Features</h1>
 </div>
    <ControlPanel/>
  </>
};

export default Feature;