import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./components/header"
import Footer from "./components/footer"

import ControlPanel from "./components/controlpanel"
import PreviewArea from "./components/preview"
import './App.css'
export const userContext = createContext();
function App() {
  
  const [color, setColor] = useState(false);
   const [fileimg,setFileImg]=useState(null);
   const [previewUrl, setPreviewUrl] = useState(null);
const [device, setDevice] = useState({
  name: 'iPhone 16 Pro', width: 200, height: 450, icon: '📱'
});

   const [twok,setTwok]=useState(false);
   const [fourk,setFourk]=useState(false);
   const [scale,setScale]=useState(1);
   const [size,setImgsize]=useState(1);
    const [tilt, setTilt] = useState(0);
    const [brightness,setBrightness]=useState(100);
    const [phoneborder,setPhoneBorder]=useState(false);
    const [radius,setRadius]=useState(10);
    const [frame,setFrame]=useState({
      name: 'Default',style:'border:none', preview: '⬜'
    });
const [picopacity,setPicOpacity]=useState(1);
const [padding,setPadding]=useState(20);
const [framebordervalue,setFrameBorderValue]=useState(false);

  const [shadowColor, setShadowColor] = useState('#000000');
    const [picbackground,setPicBackground]=useState("");
      const [rotateY,setRotateY]=useState(0);
         const [rotateX,setRotateX]=useState(0);
  
  return (

    <>
<userContext.Provider value={{color,setColor,framebordervalue,setFrameBorderValue,phoneborder,setPhoneBorder,radius,setRadius,picbackground,rotateX,setRotateX,rotateY,setRotateY,setPicBackground,padding,shadowColor, setShadowColor,setPadding,fileimg,setFileImg,previewUrl, setPreviewUrl,device,setDevice,twok,setTwok,fourk,setFourk,scale,setScale,size,setImgsize,tilt,setTilt,frame,setFrame,picopacity,setPicOpacity,brightness,setBrightness}}>
      <div className={`min-h-screen  ${color ? "bg-gray-500" : "bg-gray-200"}  transition-colors duration-200`}>
    <Header/>
    <main className="flex mt-5 h-[calc(100vh-100px)]">
        <ControlPanel/>
        <PreviewArea/>
      
      </main>
      {/* <Footer/> */}
      </div>
    
</userContext.Provider>
    </>
  )
}

export default App
