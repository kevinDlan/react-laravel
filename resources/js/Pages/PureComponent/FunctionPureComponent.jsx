import React from "react";


const FuncPurComp = ({name})=>
{
    console.log("%c Function Pure Component render", "color:purple");
    return (
            <div>
                <p style={{ color: "purple" }}>Pure Component Render :</p>
                {name}
            </div>
    );
}

export default React.memo(FuncPurComp)