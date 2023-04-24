import React from "react";
import { ImWhatsapp } from "react-icons/im";

const WhatsappButton = () => {
  const phoneNumber = "33770012972"; // Remplacez ce numéro par votre numéro de téléphone
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  const handleClick = () => {
    window.open(whatsappLink, "popup", "width=600,height=600");
  };

  return (
    <a href={whatsappLink} className="whatsapp-button" onClick={handleClick}>
      <div className="whatsapp-icon">
        <ImWhatsapp />
      </div>
      <span className="whatsapp-text">Contact via WhatsApp</span>
    </a>
  );
};

export default WhatsappButton;
