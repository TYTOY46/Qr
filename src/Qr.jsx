import { useState, version } from "react";
import {QRCodeSVG} from "qrcode.react";
import "./Qr.css";
import { GENERATE_DATA } from './constant';   
const QrCG = () => {
  const [value, setvalue]= useState("hello world");
  const [isShow, setisShow]= useState("");
  
  

  const onClickHandler = (event) => { 
    setisShow(value);
    setvalue(""); 

    const predData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
    localStorage.setItem(GENERATE_DATA,
      JSON.stringify([...predData ,value])
    );

    console.log(predData);
    
  };

  const onChangeHandler = (event) => {
    setvalue(event.target.value);
    setisShow("");

  };
  console.log(isShow);

  return (
    <div className="Qr" >
      {isShow !=="" && (
        <QRCodeSVG value={isShow} />
      )}
      <div >
        <input type="text" value={value} onChange={onChangeHandler}/>
        <button type="button" onClick={onClickHandler} >Сгенирировать QR  </button>
      </div>
    </div>
  );
};

export { QrCG };

