import React, { useContext } from 'react';
import { Layers, Share as Shadow, Maximize, Grid } from 'lucide-react';
import { userContext } from '../../App';
 
const LayoutTab = () => {
  const { color, setColor,radius,phoneborder,layoutborder,setLayoutBorder,exportbg,setExportBg,rotateX,setRotateX,rotateY,setRotateY,rotateZ,setRotateZ,translateZ,setTranslateZ,setPhoneBorder,setRadius,padding,setPadding,picbackground,tilt, setTilt,setPicBackground,scale,setScale,size,setImgsize,shadowColor,previewUrl,setPreviewUrl, perspective,setPresPective, setShadowColor } = useContext(userContext);
  const layoutPresets = [
   
     {
      id: '1',
      name: 'layout1',
      src: previewUrl ? previewUrl : 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg',
      bg:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      settings: {
        rotateX:"rotateX(14deg)",
        rotateY:"rotateY(0deg)",
        rotateZ:"rotateZ(0deg)",
      },
      
    },
    {
      id: '2',
      name: 'layout2',
      src: previewUrl ? previewUrl : 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg',
      bg: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(22, 22, 26, 1), rgba(18, 19, 18, 0.77))',
      settings: {
       rotateX:"rotateX(45deg)",
        rotateY:"rotateY(0deg)",
        rotateZ:"rotateZ(-45deg)",
       perspective: "perspective(1200px)",
        translateZ: "translateZ(40px)"
      },






      
    },
     {
      id: '3',
      name: 'layout2',
      src: previewUrl ? previewUrl : 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg',
      bg:"radial-gradient(at 27% 37%, hsla(215,98%,61%,1) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(125,98%,72%,1) 0px, transparent 50%)",
      settings: {
        rotateX:"rotateX(0deg)",
        rotateY:"rotateY(40deg)",
        rotateZ:"rotateZ(18deg)",
      },
      
    },
     {
      id: '4',
      name: 'layout2',
      src: previewUrl ? previewUrl : 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg',
      bg:"https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg",
      settings: {
         rotateX:"rotateX(0deg)",
        rotateY:"rotateY(0deg)",
        rotateZ:"rotateZ(0deg)",
      },
        border: "2px solid #3498db",
      
    },
     {
      id: '5',
      name: 'layout2',
      src: previewUrl ? previewUrl : 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg',
      bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      settings: {
        rotateX:"rotateX(0deg)",
        rotateY:"rotateY(0deg)",
        rotateZ:"rotateZ(0deg)",
      },
      border:"6px solid black"
    },
   
    
    // Add other presets here if needed
  ];

const onchangeradius=(value)=>{
setRadius(value);
}
console.log("export bg ",exportbg)
  return (
    <div className="space-y-6">
      {/* Layout Presets */}
      <div className="space-y-8 mt-10">
          
        <div className="flex flex-col gap-9 max-h-100" >
          {layoutPresets.map((preset) => (
            <button
              key={preset.id}
              
             style={{  backgroundImage: preset.bg.startsWith('url') || 
                preset.bg.startsWith('linear-gradient') || 
                preset.bg.startsWith('radial-gradient') || 
                preset.bg.startsWith('conic-gradient') ? 
                preset.bg : 
                `url('${preset.bg}')`, backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',}} className=" p-12 border border-gray-200 dark:border-gray-600 rounded-lg text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105 group"
    >   
      <div className="flex items-center"  onClick={() =>{setPreviewUrl(preset.src),setPicBackground(preset.bg),setRotateX(preset.settings.rotateX),setRotateY(preset.settings.rotateZ),(preset.settings.translateZ),setLayoutBorder(preset.border),setPresPective(preset.settings.perspective)}}>
 
             <img src={`${preset.src}`} alt="" className='w-50 h-50' style={{
                ...(preset.border && { border: preset.border.border || preset.border }),
              
  transform: [
   preset.settings.rotateX,
     preset.settings.rotateY,
      preset.settings.rotateZ,
      preset.settings.perspective,
      preset.settings.translateZ,
      preset.settings.perspective,
  ].filter(Boolean).join(" ")
}}
 />
              
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Manual Controls
      <div className="space-y-8 mt-22">
        <h3   className={`text-[11px] sm:text-md font-bold ${color ? "text-white" : "text-gray-900"}`}>Manual Adjustments</h3>
        
     
{
  previewUrl? <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Maximize className={`w-3 sm:w-4 h-3 sm:h-4  ${color ? "text-gray-500" : "text-gray-600" }`} />
              <label   className={`text-[9px] sm:text-xs font-medium ${color ? "text-gray-500" : "text-gray-700" }`}>Padding</label>
            </div>
            <span className="text-[9px] sm:text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              {padding}px
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={padding}
            onChange={(e) => setPadding(Number(e.target.value))}
            className="w-full h-1 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>  :""
}
       
        

       
        {
          phoneborder? "" :    <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Grid className={`"w-4 h-4  text-gray-500`} />
              <label   className={`text-xs font-medium text-gray-500`}>Border Radius</label>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              {radius}px
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="50"
            value={radius}
            onChange={(e) => onchangeradius(Number(e.target.value))}
            className="w-full h-1 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
          />
        </div> 
        }
      
        
       
      </div> */}
    </div>
  );
};
  export default LayoutTab;