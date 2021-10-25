import React from "react";
//toto je dulezity koncept Reactu - vedle STATE a PROPS jeste CHILDREN
const Scroll = (props) => {
    return (
        <div style={{ overflow: 'scroll', border: '2px solid black', height: '800px' }}>
            {props.children}
        </div>
    );
}
export default Scroll;