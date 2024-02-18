"use client"
import React, { useState, useCallback } from "react";
import { Canvas } from "./components/Canvas";
import { Goo } from "./components/Goo";
import { Intro } from "./components/Intro";
import { Toolbar } from "./components/Toolbar";
import { usePainter } from "./hooks/usePainter";

const Home = () => {
  const [visable ,setVisable]=useState(false)
  const [dateUrl, setDataUrl] = useState("#");
  const [{ canvas, isReady, ...state }, { init, ...api }] = usePainter();

  const handleDownload = useCallback(() => {
    if (!canvas || !canvas.current) return;

    setDataUrl(canvas.current.toDataURL("image/png"));
  }, [canvas]);
  const toolbarProps = { ...state, ...api, dateUrl, handleDownload };

  const visableToolBar=()=>{
    setVisable(!visable)
  }
  return (
    <>
    <div className="flex bg-white w-full p-2">
    <div onClick={visableToolBar} className="absolute top-3 left-4">
        <i className="fa-solid fa-list"></i>
      </div>  
      {!visable && <Toolbar {...toolbarProps}/>} 
      <Intro isReady={isReady} init={init} />
      <Canvas width={state.currentWidth} canvasRef={canvas} />
      <Goo />
   </div>
    </>
  );
};

export default Home;
