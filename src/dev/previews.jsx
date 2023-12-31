import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import MyHeader from "../components/MyHeader";
import App from "../App";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/MyHeader">
                <MyHeader/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;