import { GENERATE_DATA} from "./constant";
import { QrCG } from "./Qr";
import {QRCodeSVG} from "qrcode.react";

const Genera = () => {
    const predData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
    console.log(predData);
    return (
        <div>
            <h1>Scan</h1>
            <div>
                {predData.map((text) => (
                    <div key={text}>
                        <p>
                            {text}
                            <QRCodeSVG value={text} />

                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export {Genera};
