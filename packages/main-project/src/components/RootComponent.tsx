import React from "react";
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Application from "./application/Application";

function RootComponent() {
  return (
      <>
          <RecoilRoot>
              <BrowserRouter>
                  <Application />
              </BrowserRouter>
          </RecoilRoot>
      </>
  )
}

export default RootComponent;
