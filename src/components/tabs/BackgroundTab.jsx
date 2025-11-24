import React, { useContext, useState } from 'react';
import { Upload, Image as ImageIcon, Palette, Layers, Sparkles, Grid, Mountain, FileImage, Droplets, Eye, Camera, Diamond, GlassWater, Glasses, Diameter, FormInput } from 'lucide-react';
import { userContext } from '../../App';


 const Background = () => {
  const [activeCategory, setActiveCategory] = useState('magic-gradient');

 const {  grayscale,setGrayScale,
        bggrayscale,setBgGrayScale,
        huerotate,setHuerotate,
        bghuerotate,setBgHuerotate,
        saturate,setSaturate,
        bgsaturate,setbgSaturate,
        invert,setInvert,
        bginvert,setBgInvert, color,overlay,setOverlay, setColor,padding,exportbg,setExportBg,layoutborder,overlayopacity,setOverlayOpacity,setLayoutBorder,noisecontroller,setNoiseController,picbackground,canvard,shadowspread,setShadowSpread,canvasepia,perspective,setPresPective, translateZ,setTranslateZ,  rotateZ,setRotateZ,setCanvaSepia,canvabrightness,setCanvaBrightness,canvacontrast,setCanvaContrast, canvablur,setCanvaBlur, canvaopacity,setCanvaOpacity, sepia,setSepia,  contrast,setContrast, blur,setBlur,setCanvaRd,framebordervalue,setFrameBorderValue,rotateX,phoneborder,setPhoneBorder,setRotateX,rotateY,setRotateY,setPicBackground,radius,setRadius,setPadding,fileimg,shadowColor, setShadowColor,setFileImg,brightness,setBrightness,previewUrl,picopacity,setPicOpacity, setPreviewUrl,device,setDevice,size,setImgsize,scale,setScale,tilt,setTilt,frame,setFrame } = useContext(userContext);

  const categories = [
    { id: 'magic-gradient', name: 'Magic Gradient', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'overlay', name: 'Overlay', icon: <Layers className="w-4 h-4" /> },
    { id: 'mesh-gradient', name: 'Mesh Gradients', icon: <Grid className="w-4 h-4" /> },
    { id: 'gradient', name: 'Gradient', icon: <Palette className="w-4 h-4" /> },
    { id: 'solid', name: 'Solid Colors', icon: <Droplets className="w-4 h-4" /> },
    { id: 'marble', name: 'Marble Textures', icon: <Mountain className="w-4 h-4" /> },
    { id: 'paper', name: 'Paper Textures', icon: <FileImage className="w-4 h-4" /> },
    { id: 'images', name: 'Background Images', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'custom', name: 'Custom Background', icon: <Upload className="w-4 h-4" /> },
  ];

  // Background options
  const magicGradients = [
    'radial-gradient(circle at 70% 30%, rgb(110, 13, 208) 0%, black 75%)',
'radial-gradient(circle at 20% 80%, rgb(200, 0, 60) 0%, rgb(20, 0, 10) 75%)',
'radial-gradient(circle at 40% 60%, rgb(0, 150, 200) 0%, rgb(0, 10, 30) 80%)',
'radial-gradient(circle at 25% 75%, rgb(255, 170, 0) 0%, rgb(30, 15, 0) 75%)',
'radial-gradient(circle at 35% 65%, rgb(0, 200, 255) 0%, rgb(0, 5, 15) 85%)',

'radial-gradient(circle at 10% 10%, rgb(189, 126, 154) 0%, transparent 15%), radial-gradient(circle at 30% 20%, rgb(189, 126, 154) 0%, transparent 10%), radial-gradient(circle, rgb(189, 126, 154) 0%, transparent 25%), radial-gradient(circle at 70% 30%, rgb(189, 126, 154) 0%, transparent 15%), radial-gradient(circle at 90% 60%, rgb(189, 126, 154) 0%, transparent 20%), radial-gradient(circle at 20% 80%, rgb(189, 126, 154) 0%, transparent 15%), radial-gradient(circle at 40% 70%, rgb(189, 126, 154) 0%, transparent 10%), radial-gradient(circle at 60% 90%, rgb(189, 126, 154) 0%, transparent 15%), linear-gradient(135deg, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 100%)',
'radial-gradient(circle at 30% 70%, rgba(170, 80, 220, 0.8) 0%, transparent 50%),radial-gradient(circle at 80% 20%, rgba(220, 100, 255, 0.7) 0%, transparent 60%),radial-gradient(circle at 45% 45%, rgba(130, 60, 200, 0.6) 0%, transparent 55%),linear-gradient(45deg, rgb(15, 5, 20) 0%, rgb(20, 8, 25) 100%)',
    'linear-gradient(45deg, #434343, #000000)',
  'radial-gradient(circle at 20% 30%, rgba(255, 120, 80, 0.9) 0%, transparent 50%),radial-gradient(circle at 70% 70%, rgba(255, 80, 150, 0.7) 0%, transparent 55%),radial-gradient(circle at 40% 60%, rgba(255, 180, 60, 0.8) 0%, transparent 45%),linear-gradient(135deg, rgb(20, 5, 10) 0%, rgb(25, 8, 12) 100%)',
  'radial-gradient(circle at 10% 60%, rgba(80, 180, 255, 0.8) 0%, transparent 50%),radial-gradient(circle at 90% 40%, rgba(120, 220, 255, 0.7) 0%, transparent 60%),radial-gradient(circle at 50% 80%, rgba(180, 230, 255, 0.6) 0%, transparent 45%),linear-gradient(45deg, rgb(5, 10, 15) 0%, rgb(8, 15, 20) 100%)',
  'repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(0, 113, 218, 0.3) 20px, rgba(0, 113, 218, 0.3) 21px),repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(0, 113, 218, 0.3) 20px, rgba(0, 113, 218, 0.3) 21px),linear-gradient(135deg, rgb(8, 8, 15) 0%, rgb(5, 5, 12) 100%)',
'repeating-linear-gradient(0deg, transparent, transparent 5px, rgb(0, 200, 255) 5px, rgb(0, 200, 255) 6px),repeating-linear-gradient(90deg, transparent, transparent 5px, rgb(0, 200, 255) 5px, rgb(0, 200, 255) 6px),linear-gradient(45deg, rgb(5, 10, 20) 0%, rgb(10, 5, 25) 100%)',
'repeating-linear-gradient(0deg, transparent, transparent 15px, rgb(0, 255, 150) 15px, rgb(0, 255, 150) 16px),repeating-linear-gradient(90deg, transparent, transparent 15px, rgb(0, 255, 150) 15px, rgb(0, 255, 150) 16px),linear-gradient(135deg, rgb(5, 15, 10) 0%, rgb(10, 20, 15) 100%)',
'repeating-linear-gradient(0deg, transparent, transparent 12px, rgb(180, 0, 255) 12px, rgb(180, 0, 255) 13px),repeating-linear-gradient(90deg, transparent, transparent 12px, rgb(180, 0, 255) 12px, rgb(180, 0, 255) 13px),linear-gradient(135deg, rgb(15, 5, 20) 0%, rgb(20, 8, 25) 100%)',
'repeating-linear-gradient(30deg, transparent, transparent 15px, rgba(255, 0, 150, 0.6) 15px, rgba(255, 0, 150, 0.6) 16px),repeating-linear-gradient(-60deg, transparent, transparent 15px, rgba(255, 0, 150, 0.6) 15px, rgba(255, 0, 150, 0.6) 16px),linear-gradient(45deg, rgb(20, 5, 15) 0%, rgb(25, 8, 18) 100%)',  
];

  const overlayGradients = [
  'https://www.picbolt.co/api/proxy/asset?path=overlay-shadows%2F099.webp',
  'https://www.picbolt.co/api/proxy/asset?path=overlay-shadows%2F097.webp',
  'https://www.picbolt.co/api/proxy/asset?path=overlay-shadows%2F088.webp',
  'https://www.picbolt.co/api/proxy/asset?path=overlay-shadows%2F083.webp',
  'https://www.picbolt.co/api/proxy/asset?path=overlay-shadows%2F082.webp',
  'https://www.picbolt.co/api/proxy/asset?path=overlay-shadows%2F064.webp',
  'https://www.picbolt.co/api/proxy/asset?path=overlay-shadows%2F064.webp',
  'https://www.picbolt.co/api/proxy/asset?path=overlay-shadows%2F063.webp',
  'https://www.picbolt.co/api/proxy/asset?path=overlay-shadows%2F057.webp',
  'https://www.picbolt.co/api/proxy/asset?path=overlay-shadows%2F053.webp',
  'https://www.picbolt.co/api/proxy/asset?path=overlay-shadows%2F050.webp',
  'https://www.picbolt.co/api/proxy/asset?path=overlay-shadows%2F041.webp',
  'https://www.picbolt.co/api/proxy/asset?path=overlay-shadows%2F037.webp',
  'https://www.picbolt.co/api/proxy/asset?path=overlay-shadows%2F031.webp',
  'https://www.picbolt.co/api/proxy/asset?path=overlay-shadows%2F019.webp',
  'https://www.picbolt.co/api/proxy/asset?path=overlay-shadows%2F017.webp',
  'https://www.picbolt.co/api/proxy/asset?path=overlay-shadows%2F007.webp',
  'https://www.picbolt.co/api/proxy/asset?path=overlay-shadows%2F002.webp',
  'https://www.picbolt.co/api/proxy/asset?path=overlay-shadows%2F001.webp',
  'https://www.picbolt.co/api/proxy/asset?path=overlay-shadows%2F023.webp',
  'https://www.picbolt.co/api/proxy/asset?path=overlay-shadows%2F097.webp',
  'https://www.picbolt.co/api/proxy/asset?path=overlay-shadows%2F023.webp',
'https://www.picbolt.co/api/proxy/asset?path=overlay-shadows%2F019.webp',
'https://www.picbolt.co/api/proxy/asset?path=overlay-shadows%2F001.webp',

'https://www.picbolt.co/api/proxy/asset?path=overlay-shadows%2F037.webp',
  ];

  const meshGradients = [

' linear-gradient(135deg, #000B28 20%, #312F90 55%, #FF52C1 90%)',
'linear-gradient(135deg, #001205 25%, #1C7A3A 60%, #E9FF6B 100%)',
' linear-gradient(135deg, #180900 20%, #FF6F1F 55%, #FFE770 100%)',
'linear-gradient(135deg, #001028 25%, #006F7B 60%, #6BFFF7 100%)',
'linear-gradient(135deg, #020011 25%, #C3102E 60%, #FF8A30 100%)',

    'radial-gradient(at 27% 37%, hsla(215,98%,61%,1) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(125,98%,72%,1) 0px, transparent 50%)',
    'radial-gradient(at 20% 30%, rgb(255, 105, 180) 0px, transparent 50%), radial-gradient(at 80% 20%, rgb(255, 215, 0) 0px, transparent 50%), radial-gradient(at 50% 80%, rgb(138, 43, 226) 0px, transparent 50%)',

'radial-gradient(at 27% 37%, rgb(255, 69, 0) 0px, transparent 50%), radial-gradient(at 97% 21%, rgb(0, 191, 255) 0px, transparent 50%), radial-gradient(at 52% 99%, rgb(50, 205, 50) 0px, transparent 50%)',

'radial-gradient(at 27% 37%, rgb(152, 251, 152) 0px, transparent 50%), radial-gradient(at 97% 21%, rgb(255, 218, 185) 0px, transparent 50%), radial-gradient(at 52% 99%, rgb(176, 224, 230) 0px, transparent 50%)',

' radial-gradient(circle at 75% 50%,  #ff0ef0,  #7b1fa2 40%,  #14001f 80%)',
 'radial-gradient(  circle at 70% 50%,  #adff2f, #2b7a4b 40%, #001a0f 80%)',
 'radial-gradient(  circle at 65% 50%,  #ffd700,  #b8860b 40%,  #000000 80%)',

  ];

  const regularGradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
  'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)',
  'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
  'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
  'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
  'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
  'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
  'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
  'linear-gradient(135deg, #cd9cf2 0%, #f6f3ff 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
  'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
  'linear-gradient(135deg, #ebc0fd 0%, #d9ded8 100%)'
  ];

  const solidColors = [
    '#ffffff', '#f8fafc', '#f1f5f9', '#e2e8f0',
    '#1e293b', '#0f172a', '#020617', '#64748b',
    '#ef4444', '#f97316', '#eab308', '#22c55e',
    '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899',
  ];

  const marbleTextures = [
    'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg',
    'https://naldzgraphics.net/wp-content/uploads/2014/09/1-seamless-blue-marble-texture.jpg',
    'https://naldzgraphics.net/wp-content/uploads/2014/09/2-white-marble-texture.jpg',
    'https://naldzgraphics.net/wp-content/uploads/2014/09/3-seamless-tile-marble-texture.jpg',
    'https://naldzgraphics.net/wp-content/uploads/2014/09/8-cream-marble-texture.jpg',
    'https://naldzgraphics.net/wp-content/uploads/2014/09/9-free-seamless-marble.jpg',
     'https://images.freecreatives.com/wp-content/uploads/2016/12/Brown-Marble-Texture-Background.jpg',
     'https://images.freecreatives.com/wp-content/uploads/2016/12/Marble-Texture-For-Free.jpg',
     'https://images.freecreatives.com/wp-content/uploads/2016/12/Marbled-Paper-Texture.jpg',

  ];

  const paperTextures = [
    'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg',
    'https://naldzgraphics.net/wp-content/uploads/2014/07/12-white-paper-texture.jpg',
    'https://naldzgraphics.net/wp-content/uploads/2014/07/11-brown-paper-texture.jpg',
    'https://naldzgraphics.net/wp-content/uploads/2014/07/14-brown-crumpled-seamless-texture.jpg',
    'https://naldzgraphics.net/wp-content/uploads/2014/07/5-crinkled-paper-texture.jpg',
    'https://naldzgraphics.net/wp-content/uploads/2014/07/4-stripes-seamless-paper.jpg',
    'http://naldzgraphics.net/wp-content/uploads/2014/07/free-seamless-paper-textures.jpg',
   'https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?_gl=1*88ryiv*_ga*MTQxNTM5Nzk1MS4xNzYyMTg3MDgz*_ga_8JE65Q40S6*czE3NjM5ODA4NDQkbzUkZzEkdDE3NjM5ODUzMTkkajIzJGwwJGgw',
    
  ];



  const patterns = [
   'https://images.pexels.com/photos/9974280/pexels-photo-9974280.jpeg?_gl=1*14jv6rh*_ga*MTQxNTM5Nzk1MS4xNzYyMTg3MDgz*_ga_8JE65Q40S6*czE3NjM5ODA4NDQkbzUkZzEkdDE3NjM5ODQxNzgkajUyJGwwJGgw',
   'https://images.pexels.com/photos/15314660/pexels-photo-15314660.jpeg?_gl=1*1g8vvno*_ga*MTQxNTM5Nzk1MS4xNzYyMTg3MDgz*_ga_8JE65Q40S6*czE3NjM5ODA4NDQkbzUkZzEkdDE3NjM5ODQxMjgkajQkbDAkaDA.',
   'https://images.pexels.com/photos/5514708/pexels-photo-5514708.jpeg?_gl=1*ezlbqv*_ga*MTQxNTM5Nzk1MS4xNzYyMTg3MDgz*_ga_8JE65Q40S6*czE3NjM5ODA4NDQkbzUkZzEkdDE3NjM5ODQwNzIkajYwJGwwJGgw',
   'https://images.pexels.com/photos/2983296/pexels-photo-2983296.jpeg?_gl=1*mvz2aw*_ga*MTQxNTM5Nzk1MS4xNzYyMTg3MDgz*_ga_8JE65Q40S6*czE3NjM5ODA4NDQkbzUkZzEkdDE3NjM5ODQwMTMkajQ2JGwwJGgw',
   'https://images.pexels.com/photos/11325888/pexels-photo-11325888.jpeg?_gl=1*v73ivw*_ga*MTQxNTM5Nzk1MS4xNzYyMTg3MDgz*_ga_8JE65Q40S6*czE3NjM5ODA4NDQkbzUkZzEkdDE3NjM5ODM5NjYkajMzJGwwJGgw',
   'https://images.pexels.com/photos/15275237/pexels-photo-15275237.jpeg?_gl=1*uqgomk*_ga*MTQxNTM5Nzk1MS4xNzYyMTg3MDgz*_ga_8JE65Q40S6*czE3NjM5ODA4NDQkbzUkZzEkdDE3NjM5ODQyNzMkajYwJGwwJGgw',
   'https://images.pexels.com/photos/1741198/pexels-photo-1741198.jpeg?_gl=1*uixe5p*_ga*MTQxNTM5Nzk1MS4xNzYyMTg3MDgz*_ga_8JE65Q40S6*czE3NjM5ODA4NDQkbzUkZzEkdDE3NjM5ODUyMjMkajExJGwwJGgw',
   'https://images.pexels.com/photos/7233189/pexels-photo-7233189.jpeg?_gl=1*k1t20n*_ga*MTQxNTM5Nzk1MS4xNzYyMTg3MDgz*_ga_8JE65Q40S6*czE3NjM5ODA4NDQkbzUkZzEkdDE3NjM5ODUyMTEkajIzJGwwJGgw',
   
    
  ];


  const patterns2 = [
   'https://images.freecreatives.com/wp-content/uploads/2016/12/Colorful-Geometric-Paisley-Pattern.jpg',
   'https://images.freecreatives.com/wp-content/uploads/2016/12/Vector-Seamless-Paisley-Pattern.jpg',
   'https://images.freecreatives.com/wp-content/uploads/2016/12/Colorful-Abstract-Paisley-Pattern.jpg',
   'https://images.freecreatives.com/wp-content/uploads/2016/12/Free-Paisley-Pattern-Design.jpg',
   'https://images.freecreatives.com/wp-content/uploads/2016/12/Vector-Paisley-Pattern-Designs.jpg',
   'https://images.freecreatives.com/wp-content/uploads/2016/12/Vector-Indian-Paisley-Pattern.jpg',
   'https://images.freecreatives.com/wp-content/uploads/2016/12/Free-Vector-Paisley-Pattern.jpg',
   'https://images.freecreatives.com/wp-content/uploads/2016/12/Vector-Bandana-Paisley-Pattern.jpg',
    
  ];


  const backgroundImages = [
    'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg',
    'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?_gl=1*29gv6f*_ga*MTQxNTM5Nzk1MS4xNzYyMTg3MDgz*_ga_8JE65Q40S6*czE3NjM5ODA4NDQkbzUkZzEkdDE3NjM5ODA5MzEkajM4JGwwJGgw',

    'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?_gl=1*o9oq26*_ga*MTQxNTM5Nzk1MS4xNzYyMTg3MDgz*_ga_8JE65Q40S6*czE3NjM5ODA4NDQkbzUkZzEkdDE3NjM5ODA5MTAkajU5JGwwJGgw',
    'https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?_gl=1*sya60b*_ga*MTQxNTM5Nzk1MS4xNzYyMTg3MDgz*_ga_8JE65Q40S6*czE3NjM5ODA4NDQkbzUkZzEkdDE3NjM5ODA4OTEkajEzJGwwJGgw',
    'https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?_gl=1*aeih1e*_ga*MTQxNTM5Nzk1MS4xNzYyMTg3MDgz*_ga_8JE65Q40S6*czE3NjM5ODA4NDQkbzUkZzEkdDE3NjM5ODA4ODIkajIyJGwwJGgw',
    'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?_gl=1*1dh0nze*_ga*MTQxNTM5Nzk1MS4xNzYyMTg3MDgz*_ga_8JE65Q40S6*czE3NjM5ODA4NDQkbzUkZzEkdDE3NjM5ODA4NTkkajQ1JGwwJGgw',
    'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?_gl=1*x0gh7i*_ga*MTQxNTM5Nzk1MS4xNzYyMTg3MDgz*_ga_8JE65Q40S6*czE3NjM5ODA4NDQkbzUkZzAkdDE3NjM5ODA4NDQkajYwJGwwJGgw',
    'https://images.pexels.com/photos/139975/pexels-photo-139975.jpeg?_gl=1*btlgw6*_ga*MTQxNTM5Nzk1MS4xNzYyMTg3MDgz*_ga_8JE65Q40S6*czE3NjM5ODA4NDQkbzUkZzEkdDE3NjM5ODEwMjgkajU1JGwwJGgw',
  ];

  // Handle custom image upload
  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
           const url = URL.createObjectURL(file);
        // const imageUrl = e.target?.result;
        setPicBackground(url);
      
    
      };
      reader.readAsDataURL(file);
    }
  };


const Backgroundcolorchanger=(item)=>{
console.log("item is=",item);
setPicBackground(item);
}

  // Render background grid
  const renderBackgroundGrid = (items, isImage = false) => (
    <div className="grid grid-cols-4 gap-4">
      {items.map((item, index) => (
        <button
          key={index}
          className="h-9 w-16 rounded border hover:scale-105 transition-transform"
          style={{
            background: isImage ? `url(${item}) center/cover no-repeat` : item,
          }}
          // onClick={() => onBackgroundChange(item)}
          onClick={()=>Backgroundcolorchanger(item)}
        />
      ))}
    </div>




  );
 const renderOverlayGrid = (items, isImage = false) => (
     <div className="grid grid-cols-8 gap-x-9 gap-y-4">
      {items.map((item, index) => (
        <button
          key={index}
          className="h-8 w-8 rounded border hover:scale-105 transition-transform"
          style={{
            background: isImage ? `url(${item}) center/cover no-repeat` : item,
          }}
          // onClick={() => onBackgroundChange(item)}
          onClick={()=>setOverlay(item)}
        />
      ))}
    </div>




  );




const handleFileInput = (event) => {
  const file = event.target.files?.[0];
  if (file) {
    setFileImg(file);
    setPreviewUrl(URL.createObjectURL(file));
    
  }
};


 const renderGradientGrid = (items, isImage = false) => (
    <div className="grid grid-cols-8 gap-x-9 gap-y-4">
      {items.map((item, index) => (
        <button
          key={index}
          className="h-8 w-8 rounded border hover:scale-105 transition-transform"
          style={{
            background: isImage ? `url(${item}) center/cover no-repeat` : item,
          }}
          // onClick={() => onBackgroundChange(item)}
          onClick={()=>Backgroundcolorchanger(item)}
        />
      ))}
    </div>




  );

  return (
    <div className="space-y-2">
      {/* Category Tabs
      <div className="flex space-x-2 overflow-x-auto flex flex-col">
        {categories.map((cat) => (<>
          <button
            key={cat.id}
            className={`flex items-center space-x-1 px-2 py-1 rounded whitespace-nowrap ${
              activeCategory === cat.id ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.icon}
            <span className="text-sm">{cat.name}</span>
          </button>
       <div>this button data</div>
        </>
        ))}
      </div> */}
  {/* Overlay  */}
      <div>
        <div className='flex align-center justify-between gap-2 '  >
 <h2 className={`text-[11px] basis-1/2 sm:text-sm mt-1 font-bold ${color ? "text-white" : "text-gray-900"}`} >
          Overlay
        </h2>
        <div className=' mb-1 mr-4 basis-1/2  bg-gray-300 relative  rounded-[5px]' > 
            
          <div  className='bg-gray-400 text-xs  p-1 rounded-[5px] flex items-center justify-between'  style={{ width: `${overlayopacity/1}%` }}>
       <div className="p-3"></div>
 <span className='absolute left-2'>opacity</span>
                <span className='absolute right-0 p-2'>{overlayopacity}%</span>
       
 
        
              
            
          
          
          </div>
        
 <input
            type="range"
            min="0"
          
            max="100"
              
            value={overlayopacity}
            onChange={(e) => setOverlayOpacity(Number(e.target.value))}
            className="w-full opacity-1 absolute bottom-2 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        
           

           
  
          </div>
        </div>
       
       
         <div className=" flex overflow-scroll [&::-webkit-scrollbar]:h-2 w-[100] p-1
    
    [&::-webkit-scrollbar-thumb]:bg-gray-600
    [&::-webkit-scrollbar-thumb]:rounded-full ">
          {renderOverlayGrid(overlayGradients,true)}
        </div>
      </div>

   
      {/* Background Grid */}
      <div className="min-h-screen  px-1 ">
  <div className="max-w-7xl mx-auto ">
    
    {/* Section Header */}
   

    {/* Each Section */}
    <section className="space-y-4">
      


  {/* Custom Upload*/}
  
 <h2 className={`text-[11px] sm:text-sm  mb-1 font-bold ${color ? "text-white" : "text-gray-900"}`} >Custom BG</h2>
<div className='flex items-center justify-between gap-2 p-2'>
  <label className='bg-gray-200 flex items-center justify-center w-37 h-18 rounded-xl hover:bg-gray-300'>
  <div className='flex flex-col '>
    <input
      type="color"
      value={picbackground}
      onChange={(e) => setPicBackground(e.target.value)}
      className="w-6 sm:w-8 h-6 sm:h-8  border border-gray-300 cursor-pointer"
    />
    <span className='text-xs mt-1'>Color</span>
  </div>
  </label>
  <label className=' w-37 h-18 bg-gray-200 flex items-center justify-center flex-col rounded-xl hover:bg-gray-300'>
  <div className=''>
    
     <input
      type="file"
      className="hidden"
      accept="image/*"
      onChange={handleFileInput}
    />
    <Camera className={`${color ? "text-white" : "text-blue-700"} ml-1`} />
    <span className='text-xs mt-1'>Image</span>
 
    
  </div>
   </label>
  <div className='bg-gray-200 flex items-center justify-center flex-col w-37 h-18 rounded-xl hover:bg-gray-300'  onClick={()=>{setPicBackground("transparent")}}>
    <div className='bg-[repeating-conic-gradient(#bbb_0_90deg,#ddd_90deg_180deg)] w-5 h-5 rounded-xl'>
    </div>
    <span className='text-xs mt-1'>Transparent</span>
  </div>
</div>

      {/* Magic Gradients */}
      <div className='flex flex-col'>
        <h2 className={`text-[11px] sm:text-sm  mb-1 font-bold ${color ? "text-white" : "text-gray-900"}`} >
          Magic Gradients
        </h2>
        <div className=" flex overflow-scroll [&::-webkit-scrollbar]:h-2 w-[100] p-1
    
    [&::-webkit-scrollbar-thumb]:bg-gray-600
    [&::-webkit-scrollbar-thumb]:rounded-full ">
          {renderGradientGrid(magicGradients)}
        </div>
      </div>

    

      {/* Solid Colors */}
      <div className='flex flex-col'>
        <h2 className={`text-[11px] sm:text-sm  mb-1 font-bold ${color ? "text-white" : "text-gray-900"}`} >
          Solid Colors
        </h2>
        <div className=" flex overflow-scroll [&::-webkit-scrollbar]:h-2 w-[100] p-1
    
    [&::-webkit-scrollbar-thumb]:bg-gray-600
    [&::-webkit-scrollbar-thumb]:rounded-full">
          {renderGradientGrid(solidColors)}
        </div>
      </div>

      {/* Regular Gradients */}
    <div className='flex flex-col'>
        <h2 className={`text-[11px] sm:text-sm   font-bold ${color ? "text-white" : "text-gray-900"}`} >
         Regular Gradients
        </h2>
        <div className=" flex overflow-scroll [&::-webkit-scrollbar]:h-2 w-[100] p-1
    
    [&::-webkit-scrollbar-thumb]:bg-gray-600
    [&::-webkit-scrollbar-thumb]:rounded-full ">
          {renderGradientGrid(regularGradients)}
        </div>
      </div>

      {/* Mesh Gradients */}
     <div>
        <h2 className={`text-[11px] sm:text-sm  mb-1 font-bold ${color ? "text-white" : "text-gray-900"}`} >
         Mesh Gradients
        </h2>
        <div className="rounded-xl">
          {renderBackgroundGrid(meshGradients)}
        </div>
      </div>




      {/* Marble Textures */}
      {/* <div>
  <h2 className={`text-[11px] sm:text-sm  mb-1 font-bold ${color ? "text-white" : "text-gray-900"}`}>
          Marble Textures
        </h2>
        <div className="rounded-xl  dark:bg-gray-800 ">
          {renderBackgroundGrid(marbleTextures, true)}
        </div>
      </div> */}

      {/* Paper Textures */}
      {/* <div>
  <h2 className={`text-[11px] sm:text-sm  mb-1 font-bold ${color ? "text-white" : "text-gray-900"}`}>
          Paper Textures
        </h2>
        <div className="rounded-xl  dark:bg-gray-800">
          {renderBackgroundGrid(paperTextures, true)}
        </div>
      </div> */}




      {/* Patterns */}
      {/* <div>
  <h2 className={`text-[11px] sm:text-sm  mb-1 font-bold ${color ? "text-white" : "text-gray-900"}`}>
          Patterns
        </h2>
        <div className="rounded-xl  dark:bg-gray-800">
          {renderBackgroundGrid(patterns, true)}
        </div>
      </div> */}




      {/* Patterns */}
      {/* <div>
  <h2 className={`text-[11px] sm:text-sm  mb-1 font-bold ${color ? "text-white" : "text-gray-900"}`}>
          Patterns 2
        </h2>
        <div className="rounded-xl  dark:bg-gray-800">
          {renderBackgroundGrid(patterns2, true)}
        </div>
      </div> */}


      {/* Background Images */}
      {/* <div>
  <h2 className={`text-[11px] sm:text-sm  mb-1 font-bold ${color ? "text-white" : "text-gray-900"}`}>
          Background Images
        </h2>
        <div className="rounded-xl  dark:bg-gray-800">
          {renderBackgroundGrid(backgroundImages, true)}
        </div>
      </div> */}

    

    </section>
  </div>
</div>

    </div>
  );
};


export default Background;