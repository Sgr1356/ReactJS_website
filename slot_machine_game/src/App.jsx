import React from 'react';
import SlotM from './Slot'


const App = () => {
return(
    <>
        <h1 className="heading_styles">
         🎰 Welcome To : <span style={{fontWeight : 'bold'}}>Slot Machine Game</span> 🎰
        </h1>
        <div className="slotmachine">
            <SlotM  x='😄' y='😄' z='😄'/>
            <SlotM  x='🎅' y='🌗' z='😗'/>
            <SlotM  x='❌' y='🍇' z='🍔'/>
        </div>
        
    </>
);

};


export default App;