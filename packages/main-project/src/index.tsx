// @ts-ignore
import React from "react";
import { createRoot } from 'react-dom/client';
import RootComponent from "./components/RootComponent";
import './index.css';

// @ts-ignore
const container: HTMLDivElement = document.getElementById('root');
const root = createRoot(container);
root.render(<RootComponent />);
