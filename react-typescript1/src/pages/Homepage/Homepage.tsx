import React from "react";
import pizza from '../../assets/img/pizza.png'


function Homepage(){
    return(
        <>
            <div style={{height : 'calc(100vh - 309px', padding : '4rem 4rem', overflowY : 'auto' }}>
                <div className="wrapper-card-items">
                    <div className="card-items">
                        <img src={pizza} alt="card" className="card-image-pizza"  />
                        <div style={{width : '50%', height : '100%' }}></div>
                        <div className="card-content">
                            <div>
                                <div style={{fontSize : '20px', fontWeight : '600', color : '#fff'}}>React</div>
                                <div style={{fontSize : '16px', fontWeight : '300', color : '#fff', marginTop : '0.5rem'}}>Typescript</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage;