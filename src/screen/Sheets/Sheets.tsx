import React, { useRef } from "react";
import Header from "../../components/Header";
import PricingTab from "../../components/PricingTab";
import { personalTrainer } from "../../data/personal_trainer";
import { Screen, useAppStore } from "../../zustand/AppStore";
import ActionSheet from "actionsheet-react";
import { sheets } from "../../data/sheets";

export default function Sheets() {
  const [selectedService, setSelectedService] = React.useState("");
  const [message, setMessage] = React.useState("");

  const ref = useRef();

  const handleOpen = (service: string) => {
    setSelectedService(service);
    //create string with service to send to whatsapp
    const message = `Ciao Martina! Ti scrivo dal tuo portale web. Vorrei sapere di più sul servizio di *${service}*!`;
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
            <a href={`https://wa.me/+393755174423?text=${message}`}>
              Contatta via Whatsapp!
            </a>
          </div>
          <div>
            {" "}
            <a
              href={`mailto:mlippi.95@gmail.com?subject=Contatto da sito coaching online&body=${message}`}
            >
              Contatta via Email!
            </a>
          </div>
          <div>
            {" "}
            <a href="tel:+393755174423">Contatta via telefono!</a>
          </div>
        </div>
      </ActionSheet>
      <Header
        title="Schede di allenamento"
        fromScreen={Screen.personalTrainer}
      />
      <div className="post">
        <h2>IN COSA CONSISTONO?</h2>
        <p>
          Sono 4 tipologie di schede pre-impostate per approcciare per la prima
          volta alla palestra e al mio modo di lavorare!
          <br />
          <br /> Troverai all’interno degli allenamenti full body per quanto
          riguarda DONNA BASE/AVANZATA e UOMO BASE/AVANZATO.
          <br /> <br /> In più ci sarà una SCHEDA SPECIFICA GLUTEI che devi
          assolutamente provareee! 💪🏼 Cliccando su scopri di più verrai
          contattato perché interessato all’acquisto della scheda ☺️
        </p>
      </div>
      <div className="pricing">
        <h2 style={{ textAlign: "center" }}>Schede di allenamento</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PricingTab
            rowed
            title={sheets[0].title}
            description={sheets[0].description}
            price={sheets[0].price}
            voices={sheets[0].voices}
            nolimit
            hideMonthly
            onClick={() => {
              handleOpen("Scheda di Allenamento - " + sheets[0].title);
            }}
          />
          <PricingTab
            rowed
            title={sheets[1].title}
            description={sheets[1].description}
            price={sheets[1].price}
            voices={sheets[1].voices}
            nolimit
            hideMonthly
            onClick={() => {
              handleOpen("Scheda di Allenamento - " + sheets[1].title);
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PricingTab
          rowed
          title={sheets[2].title}
          description={sheets[2].description}
          price={sheets[2].price}
          voices={sheets[2].voices}
          nolimit
          hideMonthly
          onClick={() => {
            handleOpen("Scheda di Allenamento - " + sheets[2].title);
          }}
        />
        <PricingTab
          rowed
          title={sheets[3].title}
          description={sheets[3].description}
          price={sheets[3].price}
          voices={sheets[3].voices}
          nolimit
          hideMonthly
          onClick={() => {
            handleOpen("Scheda di Allenamento - " + sheets[3].title);
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PricingTab
          rowed
          title={sheets[4].title}
          description={sheets[4].description}
          price={sheets[4].price}
          voices={sheets[4].voices}
          nolimit
          hideMonthly
          fullWidth
          onClick={() => {
            handleOpen("Scheda di Allenamento - " + sheets[4].title);
          }}
        />
      </div>
    </div>
  );
}
