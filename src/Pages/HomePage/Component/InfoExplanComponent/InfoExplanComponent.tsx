import { useState } from "react"
import { IMAGES, type ImageKey } from "../../../../Constants/images"
import "./InfoExplanComponent.scss"

type Info = {
    id: number;
    imgLeftSide: boolean;
    imgConstaint: ImageKey; 
    imgConstaintSup: ImageKey;
    constaintAlt: string;
    supConstaintAlt: string;
    icon: ImageKey;
    iconAlt: string;
    title: string;
    txt: string;
}
export default function InfoExplanComponent() {
    const defautInfo: Info[] = [
        {
            "id": 1, 
            "imgLeftSide": true, 
            "imgConstaint": "HIWImg01",
            "imgConstaintSup" : "HIWImgSup01",
            "constaintAlt": "Exclusivité aéroportuaire",
            "supConstaintAlt" : "Comment s'est passé votre trajet?",
            "icon": "FlightIcon",
            "iconAlt": "icon airplane",
            "title": "Exclusivité aéroportuaire",
            "txt": "Contrairement à d'autres services de transport, notre application est spécifiquement conçue pour les trajets partant des aéroports. Ce focus nous permet de vous offrir un service parfaitement adapté à vos besoins après un vol."
        },
         {
            "id": 2, 
            "imgLeftSide": false, 
            "imgConstaint": "HIWImg02",
            "imgConstaintSup" : "HIWImgSup02",
            "constaintAlt": "Personnalisation totale",
            "supConstaintAlt" : "Fiat · E-Ulysse",
            "icon": "CarIcon",
            "iconAlt": "icon car",
            "title": "Personnalisation totale",
            "txt": "Choisissez le type de véhicule qui correspond à vos attentes, que vous voyagiez seul ou en groupe, avec peu ou beaucoup de bagages."
        },
        {
            "id": 3, 
            "imgLeftSide": true, 
            "imgConstaint": "HIWImg03",
            "imgConstaintSup" : "HIWImgSup03",
            "constaintAlt": "Réservation à l'avance",
            "supConstaintAlt" : "14 octobre à 12h30 À payer Prise en charge 3 Boulevard des Capucines, 75002 Paris Destination 21 Rue de Rivoli, 75004 Paris",
            "icon": "CalendarRoundIcon",
            "iconAlt": "icon calendar",
            "title": "Réservation à l'avance",
            "txt": "Planifiez votre trajet avant votre arrivée. En réservant à l'avance, vous êtes assuré qu'un chauffeur sera là pour vous accueillir dès que vous atterrissez. Plus de stress, seulement du confort et de la tranquillité."
        }
    ]

    const [infos] = useState<Info[]>(defautInfo);
    return (
        <>
            {infos.map((info) => (
                <div className={`infoExplan ${info.imgLeftSide === false? "content-left":""}`} key={info.id}>
                    <div className={`infoExplan__item w-50 ${info.imgLeftSide === true ? "border-box" : "mg-l-12" }`}>
                        <picture>
                            <img src={IMAGES[info.imgConstaint]} alt={info.constaintAlt}/>
                        </picture>
                        <picture>
                            <img src={IMAGES[info.imgConstaintSup]} alt={info.supConstaintAlt}/>
                        </picture>
                    </div>
                    <div className={`infoExplan__item w-50 ${info.imgLeftSide === true ? "border-box txt-right" : "border-box txt-left " }`}>
                        <div className="item-icon mg-b-24">
                            <picture>
                                <img src={IMAGES[info.icon]} alt={info.iconAlt} />
                            </picture>
                        </div>
                        <h4 className="font-32 lh-32 font-w600 mg-b-24">{info.title}</h4>
                        <p className="font-18 lh-24">{info.txt}</p>
                    </div>
                </div>
            ))}
            
        </>
    )
}