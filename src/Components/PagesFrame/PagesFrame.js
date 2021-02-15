import React from "react";
import "./PagesFrame.css"

const PagesFrame=(props)=>{
    return(
                <div className="FramePages">
                    {props.title !== "" ? <p className="PagesFrameTitle">{props.title}</p> : null}
                    {props.children}
                    <p className="FnuggCopyRight">Vær- og snøinformasjon er levert i samarbeid med yr.no og Meteorologisk institutt i tillegg til anleggenes egen rapportering. All data er hentet fra Fnugg.no</p>
                </div>
);
}

export default PagesFrame;