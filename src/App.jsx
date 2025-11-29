import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./components/header"
import Footer from "./components/footer"
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import ControlPanel from "./components/controlpanel"
import PreviewArea from "./components/preview"
import Help from"./components/help"
import './App.css'
import Feature from './components/feature'
import Templates from './components/templates'
import Pricing from './components/pricing'
export const userContext = createContext();
function App() {
  
  const [color, setColor] = useState(false);
   const [fileimg,setFileImg]=useState(null);
   const [previewUrl, setPreviewUrl] = useState(null);
const [device, setDevice] = useState("");
const [canvard,setCanvaRd]=useState(0);
   const [twok,setTwok]=useState(false);
   const [fourk,setFourk]=useState(false);
   const [scale,setScale]=useState(1);
   const [size,setImgsize]=useState(1);
    const [tilt, setTilt] = useState(0);
    const [brightness,setBrightness]=useState(100);
        const [canvabrightness,setCanvaBrightness]=useState(100);
    const [phoneborder,setPhoneBorder]=useState(false);
    const [radius,setRadius]=useState(10);
      const [sepia,setSepia]=useState(0);
     const [canvasepia,setCanvaSepia]=useState(0);
     const [newdev,setNewDev]=useState("");
    const [frame,setFrame]=useState({
      name: 'Default',style:'border:none', preview: '⬜'
    });

const [padding,setPadding]=useState(0);
const [contrast,setContrast]=useState(100);
const [canvacontrast,setCanvaContrast]=useState(100);
const [framebordervalue,setFrameBorderValue]=useState(false);
const [layoutborder,setLayoutBorder]=useState("");
const [picopacity,setPicOpacity]=useState(100);
const [canvaopacity,setCanvaOpacity]=useState(100);
const [overlayopacity,setOverlayOpacity]=useState(30);
const [overlay,setOverlay]=useState('');
  const [shadowColor, setShadowColor] = useState('#000000');
    const [picbackground,setPicBackground]=useState("");
      const [rotateY,setRotateY]=useState("");
         const [rotateX,setRotateX]=useState("");
         const [ perspective,setPresPective]=useState("");
         const [ translateZ,setTranslateZ]=useState("");
              const [rotateZ,setRotateZ]=useState("");
               const [shadowspread,setShadowSpread]=useState(0);


               const [grayscale,setGrayScale]=useState(0);
               const [bggrayscale,setBgGrayScale]=useState(0);  //0 to 100

               const [huerotate,setHuerotate]=useState(0);  //0 to 360
                 const [bghuerotate,setBgHuerotate]=useState(0);

                     const [saturate,setSaturate]=useState(100);  //0 to 200
                 const [bgsaturate,setbgSaturate]=useState(100);

                  const [invert,setInvert]=useState(0);  //0 to 200
                 const [bginvert,setBgInvert]=useState(0);

               const [ exportbg,setExportBg]=useState("");
                const [noisecontroller,setNoiseController]=useState(0);
   const [canvablur,setCanvaBlur]=useState(0);
  const [blur,setBlur]=useState(0);
  return (

  <>
  <Router>
    <userContext.Provider 
      value={{
        grayscale,setGrayScale,
        bggrayscale,setBgGrayScale,
        huerotate,setHuerotate,
        bghuerotate,setBgHuerotate,
        saturate,setSaturate,
        bgsaturate,setbgSaturate,
        invert,setInvert,
        bginvert,setBgInvert,
        overlay,setOverlay,
        newdev,setNewDev,
        color, setColor, 
        framebordervalue, setFrameBorderValue,
        phoneborder, setPhoneBorder,
        radius, setRadius,
        picbackground, setPicBackground,
        rotateX, setRotateX,
        rotateY, setRotateY,
        rotateZ,setRotateZ,
        perspective,setPresPective,
        padding, setPadding,
        shadowColor, setShadowColor,
        fileimg, setFileImg,
        previewUrl, setPreviewUrl,
        device, setDevice,
         translateZ,setTranslateZ,
         noisecontroller,setNoiseController,
        canvablur,setCanvaBlur,
        twok, setTwok,
        fourk, setFourk,
        scale, setScale,
        size, setImgsize,
        tilt, setTilt,
        layoutborder,setLayoutBorder,
        frame, setFrame,
      canvaopacity,setCanvaOpacity,
        picopacity, setPicOpacity,
        overlayopacity,setOverlayOpacity,
        brightness, setBrightness,
        canvabrightness,setCanvaBrightness,
        canvard,setCanvaRd,
        blur,setBlur,
        canvacontrast,setCanvaContrast,
        contrast,setContrast,
        sepia,setSepia,
       canvasepia,setCanvaSepia,
       shadowspread,setShadowSpread,
       exportbg,setExportBg,
      }}
    >
      <div className={`min-h-screen ${color ? "bg-[#1a1a1a]" : "bg-[#f5f5f5]"} transition-colors duration-200`}>
        <Header/>
        <main className="flex flex-col  sm:flex-col    md:flex-col  lg:flex-row  mt-0 sm:mt-5 h-[calc(100vh-100px)]">
          <Routes>
          
            <Route path="/" element={
              <><PreviewArea />
                <ControlPanel/>
                
              </>
            } />
            {/* Help route */}
            <Route path="/help" element={<Help/>} />
              <Route path="/feature" element={<Feature/>} />
                <Route path="/template" element={<Templates/>} />
                  <Route path="/pricing" element={<Pricing/>} />
          </Routes>
        </main>
        {/* <Footer/> */}
      </div>
    </userContext.Provider>
  </Router>
</>
  )
}

export default App
