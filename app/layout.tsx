"use client"
import React, { useCallback, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toolbar } from "./components/Toolbar";
import { usePainter } from "./hooks/usePainter";
// import TopBar from "./component/TopBar";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {

  const [dateUrl, setDataUrl] = useState("#");
  const [{ canvas, isReady, ...state }, { init, ...api }] = usePainter();
  const handleDownload = useCallback(() => {
    if (!canvas || !canvas.current) return;

    setDataUrl(canvas.current.toDataURL("image/png"));
  }, [canvas]);
  const toolbarProps = { ...state, ...api, dateUrl, handleDownload };

  return (
    <React.StrictMode>
    <html lang="en">
       <title>Brush paint</title>
    <link rel="icon" type="image/png" href="ed-dev-favicon.png" />
    <link
      rel="stylesheet" 
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
    />
      <body className={inter.className}>
        <div className="flex">

          {children}

        
        </div>
        <script src="./jscolor"></script>
       </body>
    </html>
    </React.StrictMode>
  );
}
