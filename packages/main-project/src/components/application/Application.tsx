import React, { FC } from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../main/Main";

const Application: FC = () => {
    return (
        <>
            <div>fdfdfdfds</div>
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </>
    );
};

export default Application;
