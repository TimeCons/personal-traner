import React, { useRef } from "react";

import Header from "../../components/Header";
import PricingTab from "../../components/PricingTab";
import { coachingOnline } from "../../data/coaching_online";
import { Screen, useAppStore } from "../../zustand/AppStore";
import ActionSheet from "actionsheet-react";
import "./CoachOnline.css";

export default function CoachOnline() {
  const { setScreen } = useAppStore();
  const [selectedService, setSelectedService] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");

  const ref = useRef();

  const handleOpen = (service: string) => {
    setSelectedService(service);
    //create string with service to send to whatsapp
    const message = `Ciao Martina! Ti scrivo dal tuo portale web. Vorrei sapere di più sul servizio di *coaching online ${service}*!`;
    setMessage(message);

    //@ts-ignore
    ref.current.open();
  };

  const handleClose = () => {
    //@ts-ignore
    ref.current.close();
  };

  return (
    <div className="single-page">
      <ActionSheet ref={ref}>
        <div className="action-sheet-container">
          <div>
            <a href={`https://wa.me/393485000000?text=${message}`}>
              Contatta via Whatsapp!
            </a>
          </div>
          <div>
            {" "}
            <a
              href={`mailto:maritna@dfdf.com?subject=Contatto da sito coaching online&body=${message}`}
            >
              Contatta via Email!
            </a>
          </div>
          <div>
            {" "}
            <a href="tel:3485000000">Contatta via telefono!</a>
          </div>
        </div>
      </ActionSheet>
      <Header title="Coach Online" fromScreen={Screen.coachingOnline} />
      <div className="post">
        <h2>CHE COS’E’?</h2>
        <p>
          Il servizio di coaching online è rivolto a qualsiasi tipologia di
          persona che voglia intraprendere un percorso di cambiamento,
          performance o salute.
        </p>
        <p>
          Prevede la possibilità di essere seguiti esclusivamente a distanza,
          oppure in maniera mista associando la parte online a sedute di
          personal training.
        </p>
        <p>
          In base agli obiettivi richiesti, alla disponibilità, al livello di
          partenza propongo 3 tipologie di coaching:
        </p>
      </div>
      <div className="pricing">
        <PricingTab
          title={coachingOnline[0].title}
          description={coachingOnline[0].description}
          price={coachingOnline[0].price}
          voices={coachingOnline[0].voices}
          onClick={() => {
            handleOpen(coachingOnline[0].title);
          }}
        />
        <PricingTab
          title={coachingOnline[1].title}
          description={coachingOnline[1].description}
          price={coachingOnline[1].price}
          voices={coachingOnline[1].voices}
          onClick={() => {
            handleOpen(coachingOnline[1].title);
          }}
        />
        <PricingTab
          title={coachingOnline[2].title}
          description={coachingOnline[2].description}
          price={coachingOnline[2].price}
          voices={coachingOnline[2].voices}
          onClick={() => {
            handleOpen(coachingOnline[2].title);
          }}
        />
      </div>
    </div>
  );
}
