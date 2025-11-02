import { useState } from "react"
import { IMAGES, type ImageKey } from "../../../../Constants/images"
import "./FeatureComponent.scss"

type Feature = {
    id: number;
    imgConstaint: ImageKey; 
    constaintAlt: string;
    title: string;
    txt: string;
}
export default function InfoExplanComponent() {
    const defautInfo: Feature[] = [
        {
            "id": 1, 
            "imgConstaint": "FeatureImg01",
            "constaintAlt": "feature in phone",
            "title": "Réservation rapide",
            "txt": "Réservez votre trajet en quelques clics grâce à une interface intuitive et épurée. Sélectionnez votre aéroport de départ, votre destination, et le type de véhicule souhaité."
        },
         {
            "id": 2, 
            "imgConstaint": "FeatureImg02",
            "constaintAlt": "feature in phone",
            "title": "Suivi en temps réel",
            "txt": "Suivez l'arrivée de votre chauffeur en temps réel grâce à la carte interactive. Vous saurez exactement quand et où votre véhicule vous attend, réduisant ainsi le stress lié à l'attente."
        },
        {
            "id": 3, 
            "imgConstaint": "FeatureImg03",
            "constaintAlt": "feature in phone",
            "title": "Assistant Client Intégrée",
            "txt": "En cas de besoin, accédez à notre service d'assistance directement depuis l'application. Notre équipe est là pour vous aider 24/7."
        }
    ]

    const [fearues] = useState<Feature[]>(defautInfo);
    return (
        <>
            {fearues.map((feature) => (
                <div key={feature.id} className="feature pad-x-100 pad-y-86 radius-25">
                    <div className="feature__item max-w500">
                        <div className="feature-info">
                            <h4 className="font-32 lh-32 font-w600 mg-b-25">{feature.title}</h4>
                            <p className="font-18 lh-24">{feature.txt}</p>
                        </div>
                    </div>
                    <div className="feature__item feature-img">
                        <picture>
                            <img src={IMAGES[feature.imgConstaint]} alt={feature.constaintAlt} />
                        </picture>
                        <picture>
                            <img src={IMAGES.DLetterImg} alt="D" />
                        </picture>
                    </div>
                </div>
            ))}
            
        </>
    )
}