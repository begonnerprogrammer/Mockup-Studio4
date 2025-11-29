import React, { useContext,useEffect,useRef, useState } from 'react';
import { Download, Settings, Edit3, Palette, Layout } from 'lucide-react';
import  TabButton  from './tabbutton';
import  SettingsTab  from './tabs/Settings';
import EditTab  from './tabs/EditTab';
import  BackgroundTab  from './tabs/BackgroundTab';
import  LayoutTab  from './tabs/LayoutTab';
import { userContext } from '../App';
import { NavLink } from 'react-router-dom';
import * as htmlToImage from "html-to-image";
const ControlPanel = () => {
  const {color,setColor,shadowColor,  canvard,setCanvaRd,framebordervalue,setFrameBorderValue,picbackground,radius,phoneborder,setPhoneBorder,scale,rotateX,setRotateX,rotateY,setRotateY,setScale,setRadius,setPicBackground, setShadowColor,twok,setTwok,padding,setPadding,fourk,setFourk,previewUrl,picopacity,brightness,setBrightness,setPicOpacity,device,setDevice,tilt,setTilt, setPreviewUrl,size,setSize,frame,setFrame}=useContext(userContext);
  const [activeTab, setActiveTab] = useState('settings');
   const mockupRef = useRef(null);
  const [image, setImage] = useState(null);

   const handle2k = () => console.log("Downloading 2K...");
  const handle4k = () => console.log("Downloading 4K...");
// Define a default device (you can pick any reasonable fallback)
// const defaultDevice = { name: 'Default', width: 302, height: 385, icon: '📱' };
// console.log("device at control page",device);
// console.log("shadow color at control page",shadowColor)
// const handleDownload = async () => {
//   const currentDevice = device || defaultDevice;

//   if (!previewUrl || !currentDevice?.width || !currentDevice?.height) {
//     alert("Missing required parameters: previewUrl or device dimensions");
//     return;
//   }

//   const bgWidth = 488;
//   const bgHeight = 560;

//   const imgWidth = currentDevice.width;
//   const imgHeight = currentDevice.height;
//   const canvaRadius = canvard; // Your background border radius variable
//   const paddingValue = padding ?? parseInt(frame?.style?.padding) ?? 0;
//   const radiusValue = radius ?? parseInt(frame?.style?.radius ?? 0);
//   const brightnessValue = brightness;
//   const phonebordervalue = phoneborder;
//   const opacityValue = picopacity;
//   const backgroundValue = picbackground || "transparent";
//   const sizeValue = size;
//   const angle = tilt;
//   const borderValue = frame?.style?.border || "0";
//   const rotateXvalue = rotateX;
//   const rotateYvalue = rotateY;
//   const shadowColorValue = shadowColor ?? frame?.style?.boxShadow ?? "transparent";

//   try {
//     const canvas = document.createElement('canvas');
//     const ctx = canvas.getContext('2d');
//     canvas.width = bgWidth;
//     canvas.height = bgHeight;

//     const img = new Image();
//     img.crossOrigin = "anonymous";

//     await new Promise((resolve, reject) => {
//       img.onload = resolve;
//       img.onerror = reject;
//       img.src = previewUrl;
//     });

//     // BACKGROUND with border radius
//     if (backgroundValue !== "transparent") {
//       const isImageUrl =
//         backgroundValue.match(/\.(jpeg|jpg|gif|png|webp|bmp|svg)$/i) ||
//         backgroundValue.startsWith("http://") ||
//         backgroundValue.startsWith("https://") ||
//         backgroundValue.startsWith("data:image/") ||
//         backgroundValue.startsWith("blob:");

//       // Apply background border radius
//       if (canvaRadius > 0) {
//         ctx.beginPath();
//         ctx.moveTo(canvaRadius, 0);
//         ctx.lineTo(bgWidth - canvaRadius, 0);
//         ctx.arcTo(bgWidth, 0, bgWidth, canvaRadius, canvaRadius);
//         ctx.lineTo(bgWidth, bgHeight - canvaRadius);
//         ctx.arcTo(bgWidth, bgHeight, bgWidth - canvaRadius, bgHeight, canvaRadius);
//         ctx.lineTo(canvaRadius, bgHeight);
//         ctx.arcTo(0, bgHeight, 0, bgHeight - canvaRadius, canvaRadius);
//         ctx.lineTo(0, canvaRadius);
//         ctx.arcTo(0, 0, canvaRadius, 0, canvaRadius);
//         ctx.closePath();
//         ctx.clip();
//       }

//       if (isImageUrl) {
//         try {
//           const bgImg = new Image();
//           bgImg.crossOrigin = "anonymous";
//           await new Promise((resolve, reject) => {
//             bgImg.onload = resolve;
//             bgImg.onerror = reject;
//             bgImg.src = backgroundValue;
//           });
//           ctx.drawImage(bgImg, 0, 0, bgWidth, bgHeight);
//         } catch {
//           ctx.fillStyle = "#cccccc";
//           ctx.fillRect(0, 0, bgWidth, bgHeight);
//         }
//       } else if (backgroundValue.includes("gradient") && backgroundValue.includes(",")) {
//         const gradients = splitMultipleGradients(backgroundValue);
//         const tempCanvas = document.createElement("canvas");
//         tempCanvas.width = bgWidth;
//         tempCanvas.height = bgHeight;
//         const tempCtx = tempCanvas.getContext("2d");

//         gradients.forEach((gradientStr) => {
//           const gradient = parseGradient(gradientStr.trim(), tempCtx, bgWidth, bgHeight);
//           if (gradient) {
//             tempCtx.fillStyle = gradient;
//             tempCtx.fillRect(0, 0, bgWidth, bgHeight);
//           }
//         });

//         ctx.drawImage(tempCanvas, 0, 0);
//       } else if (backgroundValue.includes("gradient")) {
//         const gradient = parseGradient(backgroundValue, ctx, bgWidth, bgHeight);
//         if (gradient) {
//           ctx.fillStyle = gradient;
//           ctx.fillRect(0, 0, bgWidth, bgHeight);
//         } else {
//           applyFallbackGradient(ctx, bgWidth, bgHeight);
//         }
//       } else {
//         ctx.fillStyle = backgroundValue;
//         ctx.fillRect(0, 0, bgWidth, bgHeight);
//       }

//       // Reset clip after drawing background
//       if (canvaRadius > 0) {
//         ctx.restore();
//         ctx.save(); // Save again for subsequent operations
//       }
//     } else {
//       // For transparent background, still apply the border radius if needed
//       if (canvaRadius > 0) {
//         ctx.beginPath();
//         ctx.moveTo(canvaRadius, 0);
//         ctx.lineTo(bgWidth - canvaRadius, 0);
//         ctx.arcTo(bgWidth, 0, bgWidth, canvaRadius, canvaRadius);
//         ctx.lineTo(bgWidth, bgHeight - canvaRadius);
//         ctx.arcTo(bgWidth, bgHeight, bgWidth - canvaRadius, bgHeight, canvaRadius);
//         ctx.lineTo(canvaRadius, bgHeight);
//         ctx.arcTo(0, bgHeight, 0, bgHeight - canvaRadius, canvaRadius);
//         ctx.lineTo(0, canvaRadius);
//         ctx.arcTo(0, 0, canvaRadius, 0, canvaRadius);
//         ctx.closePath();
//         ctx.clip();
//       }
//       ctx.fillStyle = "#000000ab";
//       ctx.fillRect(0, 0, bgWidth, bgHeight);
      
//       // Reset clip after drawing background
//       if (canvaRadius > 0) {
//         ctx.restore();
//         ctx.save(); // Save again for subsequent operations
//       }
//     }

//     ctx.save();

//     const centerX = bgWidth / 2;
//     const centerY = bgHeight / 2;
//     ctx.translate(centerX, centerY);

//     if (rotateXvalue || rotateYvalue || angle) {
//       const radX = (rotateXvalue * Math.PI) / 180;
//       const radY = (rotateYvalue * Math.PI) / 180;
//       const radZ = (angle * Math.PI) / 180;

//       const cosX = Math.cos(radX), sinX = Math.sin(radX);
//       const cosY = Math.cos(radY), sinY = Math.sin(radY);
//       const cosZ = Math.cos(radZ), sinZ = Math.sin(radZ);

//       const m11 = cosY * cosZ;
//       const m12 = sinX * sinY * cosZ - cosX * sinZ;
//       const m21 = cosY * sinZ;
//       const m22 = sinX * sinY * sinZ + cosX * cosZ;

//       ctx.transform(m11, m21, m12, m22, 0, 0);
//     }

//     let scaleFactor = sizeValue;
//     ctx.scale(scaleFactor, scaleFactor);

//     ctx.filter = `brightness(${brightnessValue}%)`;
//     ctx.globalAlpha = opacityValue;

//     const availableWidth = imgWidth - paddingValue * 2;
//     const availableHeight = imgHeight - paddingValue * 2;

//     const drawWidth = availableWidth;
//     const drawHeight = availableHeight;

//     const drawX = -drawWidth / 2;
//     const drawY = -drawHeight / 2;

//     const effectiveRadius = Math.min(radiusValue, Math.min(drawWidth, drawHeight) / 2);

//     // SHADOW LOGIC (unchanged)
//     const shouldApplyShadow =
//       (borderValue && borderValue !== "0" && !phonebordervalue) ||
//       (!phonebordervalue && (!borderValue || borderValue === "0"));

//     if (shouldApplyShadow) {
//       const shadowToApply = `0 10px 20px ${
//         shadowColorValue !== "transparent" ? shadowColorValue : "#000000"
//       }`;

//       const shadowParts = shadowToApply.split(" ");
//       const shadowOffsetX = parseInt(shadowParts[0]) || 0;
//       const shadowOffsetY = parseInt(shadowParts[1]) || 10;
//       const shadowBlur = parseInt(shadowParts[2]) || 20;
//       const shadowColor = shadowParts.slice(3).join(" ") || "#000000";

//       ctx.save();
//       ctx.shadowColor = shadowColor;
//       ctx.shadowBlur = shadowBlur;
//       ctx.shadowOffsetX = shadowOffsetX;
//       ctx.shadowOffsetY = shadowOffsetY;

//       if (effectiveRadius > 0) {
//         ctx.beginPath();
//         ctx.moveTo(drawX + effectiveRadius, drawY);
//         ctx.lineTo(drawX + drawWidth - effectiveRadius, drawY);
//         ctx.arcTo(drawX + drawWidth, drawY, drawX + drawWidth, drawY + effectiveRadius, effectiveRadius);
//         ctx.lineTo(drawX + drawWidth, drawY + drawHeight - effectiveRadius);
//         ctx.arcTo(drawX + drawWidth, drawY + drawHeight, drawX + drawWidth - effectiveRadius, drawY + drawHeight, effectiveRadius);
//         ctx.lineTo(drawX + effectiveRadius, drawY + drawHeight);
//         ctx.arcTo(drawX, drawY + drawHeight, drawX, drawY + drawHeight - effectiveRadius, effectiveRadius);
//         ctx.lineTo(drawX, drawY + effectiveRadius);
//         ctx.arcTo(drawX, drawY, drawX + effectiveRadius, drawY, effectiveRadius);
//         ctx.closePath();
//       } else {
//         ctx.rect(drawX, drawY, drawWidth, drawHeight);
//       }

//       ctx.fill();
//       ctx.restore();
//     }

//     // BORDER LOGIC (unchanged)
//     if (phonebordervalue && !framebordervalue) {
//       ctx.save();
//       ctx.fillStyle = "black";
//       ctx.shadowColor = "white";
//       ctx.shadowBlur = 10;
//       ctx.shadowOffsetX = 0;
//       ctx.shadowOffsetY = 0;

//       const shadowPaddingTop = 16;  // Increased top padding
//       const shadowPaddingRight = 6;
//       const shadowPaddingBottom = 10;
//       const shadowPaddingLeft = 6;

//       const shadowX = drawX - shadowPaddingLeft;
//       const shadowY = drawY - shadowPaddingTop;
//       const shadowWidth = drawWidth + shadowPaddingLeft + shadowPaddingRight;
//       const shadowHeight = drawHeight + shadowPaddingTop + shadowPaddingBottom;
//       const shadowRadius = effectiveRadius > 0 ? effectiveRadius + Math.max(shadowPaddingTop, shadowPaddingRight, shadowPaddingBottom, shadowPaddingLeft) : 0;

//       if (effectiveRadius > 0) {
//         ctx.beginPath();
//         ctx.moveTo(shadowX + shadowRadius, shadowY);
//         ctx.lineTo(shadowX + shadowWidth - shadowRadius, shadowY);
//         ctx.arcTo(shadowX + shadowWidth, shadowY, shadowX + shadowWidth, shadowY + shadowRadius, shadowRadius);
//         ctx.lineTo(shadowX + shadowWidth, shadowY + shadowHeight - shadowRadius);
//         ctx.arcTo(shadowX + shadowWidth, shadowY + shadowHeight, shadowX + shadowWidth - shadowRadius, shadowY + shadowHeight, shadowRadius);
//         ctx.lineTo(shadowX + shadowRadius, shadowY + shadowHeight);
//         ctx.arcTo(shadowX, shadowY + shadowHeight, shadowX, shadowY + shadowHeight - shadowRadius, shadowRadius);
//         ctx.lineTo(shadowX, shadowY + shadowRadius);
//         ctx.arcTo(shadowX, shadowY, shadowX + shadowRadius, shadowY, shadowRadius);
//         ctx.closePath();
//       } else {
//         ctx.rect(shadowX, shadowY, shadowWidth, shadowHeight);
//       }

//       ctx.fill();
      
//       // Draw single camera lens on top border
//       ctx.save();
//       ctx.shadowColor = "transparent";
//       ctx.shadowBlur = 0;
//       ctx.fillStyle = "#ffffff";
      
//       const lensRadius = 4;
//       const lensX = shadowX + shadowWidth / 2;
//       const lensY = shadowY + shadowPaddingTop / 2;
      
//       // Camera lens (circle)
//       ctx.beginPath();
//       ctx.arc(lensX, lensY, lensRadius, 0, Math.PI * 2);
//       ctx.fill();
      
//       ctx.restore();
//       ctx.restore();

//       ctx.shadowColor = "transparent";
//       ctx.shadowBlur = 0;
//     } else if (borderValue && borderValue !== "0" && !phonebordervalue) {
//       ctx.save();

//       const borderParts = borderValue.split(" ");
//       const borderWidth = parseInt(borderParts[0]) || 2;
//       const borderColor = borderParts[2] || "#000000";

//       ctx.strokeStyle = borderColor;
//       ctx.lineWidth = borderWidth;

//       const bx = drawX - borderWidth / 2;
//       const by = drawY - borderWidth / 2;
//       const bw = drawWidth + borderWidth;
//       const bh = drawHeight + borderWidth;
//       const br = effectiveRadius > 0 ? effectiveRadius + borderWidth / 2 : 0;

//       if (effectiveRadius > 0) {
//         ctx.beginPath();
//         ctx.moveTo(bx + br, by);
//         ctx.lineTo(bx + bw - br, by);
//         ctx.arcTo(bx + bw, by, bx + bw, by + br, br);
//         ctx.lineTo(bx + bw, by + bh - br);
//         ctx.arcTo(bx + bw, by + bh, bx + bw - br, by + bh, br);
//         ctx.lineTo(bx + br, by + bh);
//         ctx.arcTo(bx, by + bh, bx, by + bh - br, br);
//         ctx.lineTo(bx, by + br);
//         ctx.arcTo(bx, by, bx + br, by, br);
//         ctx.closePath();
//       } else {
//         ctx.rect(bx, by, bw, bh);
//       }

//       ctx.stroke();
//       ctx.restore();
//     }

//     // -------------------------------
//     // CLIP SHAPE (same as before)
//     // -------------------------------
//     ctx.beginPath();

//     if (effectiveRadius > 0) {
//       ctx.moveTo(drawX + effectiveRadius, drawY);
//       ctx.lineTo(drawX + drawWidth - effectiveRadius, drawY);
//       ctx.arcTo(drawX + drawWidth, drawY, drawX + drawWidth, drawY + effectiveRadius, effectiveRadius);
//       ctx.lineTo(drawX + drawWidth, drawY + drawHeight - effectiveRadius);
//       ctx.arcTo(drawX + drawWidth, drawY + drawHeight, drawX + drawWidth - effectiveRadius, drawY + drawHeight, effectiveRadius);
//       ctx.lineTo(drawX + effectiveRadius, drawY + drawHeight);
//       ctx.arcTo(drawX, drawY + drawHeight, drawX, drawY + drawHeight - effectiveRadius, effectiveRadius);
//       ctx.lineTo(drawX, drawY + effectiveRadius);
//       ctx.arcTo(drawX, drawY, drawX + effectiveRadius, drawY, effectiveRadius);
//     } else {
//       ctx.rect(drawX, drawY, drawWidth, drawHeight);
//     }

//     ctx.closePath();
//     ctx.clip();

//     // --------------------------
//     // DRAW IMAGE (same)
//     // --------------------------
//     ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);

//     // ======================================================
//     // ⭐⭐⭐ CAMERA MOVED HERE — FINAL TOP LAYER ⭐⭐⭐
//     // ======================================================
//     if (phonebordervalue && !framebordervalue) {
//       const cameraWidth = drawWidth * 0.12;
//       const cameraHeight = drawHeight * 0.03;

//       const cameraX = -cameraWidth / 2;
//       const cameraY = drawY - (drawHeight * 0.02) - cameraHeight;

//       ctx.fillStyle = "#080808ff";
//       ctx.strokeStyle = "#333";
//       ctx.lineWidth = 1;

//       const cameraRadius = Math.min(cameraHeight / 2, 15);

//       ctx.beginPath();
//       ctx.moveTo(cameraX + cameraRadius, cameraY);
//       ctx.lineTo(cameraX + cameraWidth - cameraRadius, cameraY);
//       ctx.arcTo(cameraX + cameraWidth, cameraY, cameraX + cameraWidth, cameraY + cameraRadius, cameraRadius);
//       ctx.lineTo(cameraX + cameraWidth, cameraY + cameraHeight - cameraRadius);
//       ctx.arcTo(cameraX + cameraWidth, cameraY + cameraHeight, cameraX + cameraWidth - cameraRadius, cameraY + cameraHeight, cameraRadius);
//       ctx.lineTo(cameraX + cameraRadius, cameraY + cameraHeight);
//       ctx.arcTo(cameraX, cameraY + cameraHeight, cameraX, cameraY + cameraHeight - cameraRadius, cameraRadius);
//       ctx.lineTo(cameraX, cameraY + cameraRadius);
//       ctx.arcTo(cameraX, cameraY, cameraX + cameraRadius, cameraY, cameraRadius);
//       ctx.closePath();
//       ctx.fill();
//       ctx.stroke();

//       // Camera Lens
//       const lensSize = Math.min(cameraWidth, cameraHeight) * 0.4;

//       ctx.fillStyle = "#1a1a1a";
//       ctx.strokeStyle = "#333";
//       ctx.lineWidth = 1;

//       ctx.beginPath();
//       ctx.arc(cameraX + cameraWidth / 2, cameraY + cameraHeight / 2, lensSize / 2, 0, Math.PI * 2);
//       ctx.fill();
//       ctx.stroke();
//     }

//     // RESTORE
//     ctx.restore();

//     canvas.toBlob((blob) => {
//       if (!blob) {
//         alert("Failed to create image");
//         return;
//       }
//       const url = URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = `styled-image-${Date.now()}.png`;
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//       URL.revokeObjectURL(url);
//     }, "image/png", 1.0);

//   } catch (error) {
//     alert("Failed to generate image download");
//   }
// };





// Helper function to split multiple gradients while preserving internal structure
// function splitMultipleGradients(gradientString) {
//   const gradients = [];
//   let currentGradient = '';
//   let parenDepth = 0;
  
//   for (let i = 0; i < gradientString.length; i++) {
//     const char = gradientString[i];
    
//     if (char === '(') {
//       parenDepth++;
//       currentGradient += char;
//     } else if (char === ')') {
//       parenDepth--;
//       currentGradient += char;
//     } else if (char === ',' && parenDepth === 0) {
//       // This comma separates gradients, not color stops within a gradient
//       if (currentGradient.trim()) {
//         gradients.push(currentGradient.trim());
//       }
//       currentGradient = '';
//     } else {
//       currentGradient += char;
//     }
//   }
  
//   // Add the last gradient
//   if (currentGradient.trim()) {
//     gradients.push(currentGradient.trim());
//   }
  
//   return gradients;
// }

// Helper function to parse individual gradient
// function parseGradient(gradientString, ctx, width, height) {
//   const gradientMatch = gradientString.match(/(linear-gradient|radial-gradient)\((.*)\)/);
  
//   if (!gradientMatch || !gradientMatch[2]) {
//     console.log("Invalid gradient format:", gradientString);
//     return null;
//   }
  
//   const gradientType = gradientMatch[1];
//   const gradientContent = gradientMatch[2];
  
//   console.log("Parsing gradient:", { gradientType, gradientContent });
  
//   let gradient;
  
//   if (gradientType === 'linear-gradient') {
//     // Parse linear gradient
//     gradient = parseLinearGradient(gradientContent, ctx, width, height);
//   } else {
//     // Parse radial gradient
//     gradient = parseRadialGradient(gradientContent, ctx, width, height);
//   }
  
//   return gradient;
// }

// Helper function to parse linear gradient
// function parseLinearGradient(content, ctx, width, height) {
//   // Extract angle if present
//   const angleMatch = content.match(/(\d+)deg/);
//   const gradientAngle = angleMatch ? parseInt(angleMatch[1]) : 0;
  
//   console.log("Linear gradient angle:", gradientAngle);
  
//   // Convert angle to coordinates
//   const rad = (gradientAngle - 90) * Math.PI / 180;
//   const x1 = width / 2 + Math.cos(rad) * (width / 2);
//   const y1 = height / 2 + Math.sin(rad) * (height / 2);
//   const x2 = width / 2 - Math.cos(rad) * (width / 2);
//   const y2 = height / 2 - Math.sin(rad) * (height / 2);
  
//   const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  
//   // Parse color stops
//   const stops = parseColorStops(content.replace(/\d+deg\s*,?\s*/, ''));
//   applyColorStops(gradient, stops);
  
//   return gradient;
// }

// Helper function to parse radial gradient
// function parseRadialGradient(content, ctx, width, height) {
//   // Parse radial gradient position and size
//   const positionMatch = content.match(/at\s+(\d+)%\s+(\d+)%/);
  
//   let centerX = width / 2;
//   let centerY = height / 2;
//   let radius = Math.max(width, height) / 2;
  
//   if (positionMatch) {
//     centerX = (parseInt(positionMatch[1]) / 100) * width;
//     centerY = (parseInt(positionMatch[2]) / 100) * height;
    
//     // Remove the position part for color stop parsing
//     content = content.replace(/at\s+\d+%\s+\d+%\s*,?\s*/, '').trim();
    
//     // If there's a leading comma after removing position, remove it
//     if (content.startsWith(',')) {
//       content = content.substring(1).trim();
//     }
//   }
  
//   console.log("Radial gradient center:", { centerX, centerY, radius });
//   console.log("Content after position removal:", content);
  
//   const gradient = ctx.createRadialGradient(
//     centerX, centerY, 0,
//     centerX, centerY, radius
//   );
  
//   // Parse color stops
//   const stops = parseColorStops(content);
//   applyColorStops(gradient, stops);
  
//   return gradient;
// }

// Helper function to parse color stops with accurate position detection
// function parseColorStops(stopsString) {
//   const stops = [];
  
//   // Split by commas but handle rgba/hsla colors with internal commas
//   const parts = [];
//   let currentPart = '';
//   let parenCount = 0;
  
//   for (let i = 0; i < stopsString.length; i++) {
//     const char = stopsString[i];
    
//     if (char === '(') {
//       parenCount++;
//       currentPart += char;
//     } else if (char === ')') {
//       parenCount--;
//       currentPart += char;
//     } else if (char === ',' && parenCount === 0) {
//       if (currentPart.trim()) {
//         parts.push(currentPart.trim());
//       }
//       currentPart = '';
//     } else {
//       currentPart += char;
//     }
//   }
  
//   if (currentPart.trim()) {
//     parts.push(currentPart.trim());
//   }
  
//   console.log("Parsed color stop parts:", parts);
  
//   // Process each part to extract color and position
//   parts.forEach(part => {
//     if (!part.trim()) return;
    
//     const stop = parseColorStop(part.trim());
//     if (stop) {
//       stops.push(stop);
//     }
//   });
  
//   console.log("Final color stops:", stops);
//   return stops;
// }

// Helper function to parse individual color stop
// function parseColorStop(part) {
//   if (!part.trim()) return null;
  
//   // Handle transparent keyword
//   if (part === 'transparent') {
//     return { color: 'transparent' };
//   }
  
//   // Match color with percentage: "rgba(255, 94, 77, 0.85) 50%" or "transparent 50%"
//   const withPercentage = part.match(/((?:rgba?|hsla?)\([^)]+\)|#[0-9a-fA-F]{3,8}|transparent|none)\s+(\d+)(%)?/i);
  
//   if (withPercentage) {
//     const color = withPercentage[1];
//     let position = parseInt(withPercentage[2]);
    
//     // Convert to decimal if percentage
//     if (withPercentage[3] === '%') {
//       position = position / 100;
//     } else if (position > 1) {
//       // Assume it's a pixel value, convert to relative position
//       position = position / 1000; // Rough approximation
//     }
    
//     return { color, position };
//   } 
//   // Match color with pixel position: "rgb(255, 0, 0) 0px" or "transparent 0px"
//   else if (part.match(/((?:rgba?|hsla?)\([^)]+\)|#[0-9a-fA-F]{3,8}|transparent|none)\s+(\d+)px/i)) {
//     const pixelMatch = part.match(/((?:rgba?|hsla?)\([^)]+\)|#[0-9a-fA-F]{3,8}|transparent|none)\s+(\d+)px/i);
//     const color = pixelMatch[1];
//     const pixels = parseInt(pixelMatch[2]);
    
//     // Convert pixels to relative position (rough approximation)
//     const position = pixels / 1000;
    
//     return { color, position };
//   }
//   // Match just color (will be distributed evenly)
//   else if (part.match(/^(?:rgba?|hsla?)\([^)]+\)|#[0-9a-fA-F]{3,8}|transparent|none$/i)) {
//     return { color: part };
//   }
  
//   console.warn("Could not parse color stop:", part);
//   return null;
// }

// Helper function to apply color stops to gradient - FIXED VERSION
// function applyColorStops(gradient, stops) {
//   if (stops.length === 0) return;
  
//   // If we have stops with explicit positions, add them in original order
//   const hasExplicitPositions = stops.some(stop => stop.position !== undefined);
  
//   if (hasExplicitPositions) {
//     // Add color stops in original order without sorting
//     stops.forEach(stop => {
//       if (stop.position !== undefined) {
//         gradient.addColorStop(stop.position, stop.color);
//       } else {
//         // For colors without explicit position, find a reasonable position
//         const index = stops.indexOf(stop);
//         const position = index / (stops.length - 1);
//         gradient.addColorStop(position, stop.color);
//       }
//     });
//   } else {
//     // Distribute colors evenly while preserving original order
//     stops.forEach((stop, index) => {
//       const position = index / (stops.length - 1);
//       gradient.addColorStop(position, stop.color);
//     });
//   }
// }

// Helper function for fallback gradient
// function applyFallbackGradient(ctx, width, height) {
//   const fallbackGradient = ctx.createLinearGradient(0, 0, width, height);
//   fallbackGradient.addColorStop(0, '#f093fb');
//   fallbackGradient.addColorStop(1, '#f5576c');
//   ctx.fillStyle = fallbackGradient;
//   ctx.fillRect(0, 0, width, height);
// }

// Helper function to map color names to hex values
// function mapColorNameToHex(colorName) {
//   const colorMap = {
//     'gray': '#808080',
//     'grey': '#808080',
//     'red': '#ff0000',
//     'blue': '#0000ff',
//     'green': '#008000',
//     'yellow': '#ffff00',
//     'orange': '#ffa500',
//     'purple': '#800080',
//     'pink': '#ffc0cb',
//     'brown': '#a52a2a',
//     'black': '#000000',
//     'white': '#ffffff',
//     'lightgray': '#d3d3d3',
//     'lightgrey': '#d3d3d3',
//     'darkgray': '#a9a9a9',
//     'darkgrey': '#a9a9a9'
//   };
  
//   const normalizedColor = colorName.toLowerCase().trim();
//   return colorMap[normalizedColor] || '#cccccc';
// }








// state


// update image when previewUrl changes
useEffect(() => {
  if (previewUrl) {
    setImage(previewUrl);
  } else {
    setImage("");
  }
  
}, [previewUrl]);

// download handler (using getElementById)
const handleDownload = async () => {

  // get the div by id
  const node = document.getElementById("photo-div");

  if (!node) {
    console.error("photo-div not found!");
    return;
  }

  htmlToImage
    .toPng(node, {
      pixelRatio: 2,
      cacheBust: true,
      backgroundColor: "transparent",
    })
    .then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "mockup.png";
      link.href = dataUrl;
      link.click();
    })
    .catch((err) => console.error("Export failed:", err));
};

























  const tabs = [
    { id: 'settings', label: 'Settings', icon: <Settings className="w-4 h-4" /> },
    { id: 'edit', label: 'Edit', icon: <Edit3 className="w-4 h-4" /> },
    { id: 'background', label: 'Background', icon: <Palette className="w-4 h-4" /> },
    { id: 'layout', label: 'Layout', icon: <Layout className="w-4 h-4" /> },
  ];
console.log("color on control panel",color)
  const renderTabContent = () => {
    switch (activeTab) {
      case 'settings':
        return (
          <SettingsTab/>
        );
      case 'edit':
        return (
          <EditTab/>
        );
      case 'background':
        return (
          <BackgroundTab/>
        );
      case 'layout':
        return (
          <LayoutTab/>
        );
      default:
        return null;
    }
  };
console.log("preview url at control page",previewUrl)
  return (
    <div className={`lg:w-80 md:w-full sm:w-full h-[100vh]   sm:h-[85vh]    ${color ? "bg-[rgba(0, 0, 0, 1)]" : "bg-white"} border-r border-gray-200 dark:border-gray-700 flex flex-col transition-colors duration-200`}
>
      {/* Header */}
     
    
      
  <div className={` hidden sm:flex sm:text-xs md:text-sm lg:text-base  transition-all duration-300 ease-in-out  ${color ? "bg-[#1a1a1a]" : "bg-white"} items-center space-x-2 p-6 pb-4 border-b border-gray-100 dark:border-gray-700`}>
     <NavLink to={'/'}>
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">M</span>
        </div>
         </NavLink>
         <NavLink to={'/'}>
        <h1 className={`text-sm  transition-all duration-300 ease-in-out  font-bold ${color ? "text-white" : "text-gray-900"} ">Mockup Studio</h1`}>Mockup Studio</h1>
        </NavLink>
      </div>
    
   

      {/* Tab Navigation */}
      <div className={`px-4 py-3 ${color ? "bg-[#1a1a1a]" : "bg-white"} border-b border-gray-200 text-[9px] sm:text-md transition-all duration-300 ease-in-out  ${color ? "bg-[#1a1a1a]" : "bg-white"}  `}>
        <div className={`flex ${color ? "bg-[#141414]" : "bg-[#]"}   text-[9px] sm:text-md  space-x-1  p-1 rounded-lg`}>
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              id={tab.id}
              label={tab.label}
              icon={tab.icon}
              isActive={activeTab === tab.id}
              onClick={(id) => setActiveTab(id)}
            />
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className={`flex-1  transition-all duration-300 ease-in-out ${color ? "bg-[#1a1a1a]" : "bg-white"} overflow-y-auto p-6`}>
        {renderTabContent()}
      </div>

      {/* Export Button */}
      <div className={`p-6 pt-4 border-t  border-gray-300   transition-all duration-300 ease-in-out  ${color ? "bg-[#1a1a1a]" : "bg-white"}   `}>
      
                
   <button
          onClick={handleDownload}
          className="w-full text-xs bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
        >
  
          <Download className="w-4 h-4"  />
          <span className='font-xs'>Export Mockup</span>
        </button>

      </div>
    </div>
  );
};
 

export default ControlPanel;