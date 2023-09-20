import { useState } from 'react'

function LaunchMissile() {
  const [disabled, setDisabled] = useState(
    {
      onTunnel:false,
      enablePower:true,
      startCountdown:true,
      launchMissile:true,
    });
    const [Message,setMessage] =useState({
        display:'none'

    });

  const handleClickOnTunnel =(e) =>{
    
    setDisabled({...disabled , enablePower:false});
    console.log(disabled);
    if(disabled.startCountdown==false || disabled.launchMissile==false){    
        
        setDisabled({...disabled , startCountdown:true ,launchMissile:true});
        setMessage({...Message , display:'none'}) ;
        //setDisabled({...disabled , launchMissile:true});
    }
    console.log(disabled);
  }

  const handleClickEnablePower =(e) =>{
    
    setDisabled({...disabled , startCountdown:false});
    setMessage({...Message , display:'none'}) ;
    console.log(disabled);
    if(disabled.launchMissile==false){    
        
        setDisabled({...disabled , launchMissile:true});
        //setMessage({...Message , display:'none'}) ;
    }

  }
  const handleClickStartCountdown =(e) =>{
    
    setDisabled({...disabled , launchMissile:false});
    setMessage({...Message , display:'none'}) ;
    console.log(disabled);
    if(disabled.launchMissile===false){    
        
        //setDisabled({...disabled , launchMissile:true});
        
        setMessage({...Message , display:'none'}) ;
    }

  }
  const handleClickLaunchMissile =(e) =>{
    
    setDisabled(disabled.launchMissile=false);
    //Message.display="block";
    console.log(disabled);
    if(disabled.launchMissile===false){    
        setDisabled(disabled.enablePower=true);
    }
    
    setMessage({...Message , display:'block'}) ;
    

  }
  return (
    <>
    
      <div>
      <button onClick={handleClickOnTunnel} name="onTunnel" disabled={disabled.onTunnel}>On Tunnel</button>
      <button onClick={handleClickEnablePower} name="enablePower" disabled={disabled.enablePower}>Enable Power</button>
      <button onClick={handleClickStartCountdown}name="startCountdown" disabled={disabled.startCountdown}>Start Countdown</button>
      <button onClick={handleClickLaunchMissile} name="launchMissile" disabled={disabled.launchMissile}>Launch Missile</button>
      <div style={Message}>Missile has been launched successfully.</div>
      </div>
    </>
  )
}

export default LaunchMissile
