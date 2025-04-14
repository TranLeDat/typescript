import React from "react";

function Header(){
    return(
        <>
            <div className="flex-basic-between" style={{padding : '1.5rem, 4rem'}}>
                <div style={{fontSize : '40px', fontWeight : 600 }}>Pizza</div>
                <div className="btn-main">Create Pizza</div>
            </div>
        </>
    )
}

export default Header;