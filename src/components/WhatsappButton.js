import React from "react";
import { useSpring, animated } from "react-spring";
import { ImWhatsapp } from "react-icons/im";
import { useState, useEffect } from "react";

const WhatsappButton = () => {
  const [bounce, setBounce] = useState(false);
  const phoneNumber = "33770012972"; // Remplacez ce numéro par votre numéro de téléphone
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  const handleClick = () => {
    window.open(whatsappLink, "popup", "width=600,height=600");
  };

  const props = useSpring({
    transform: bounce ? "scale(1.2)" : "scale(1)",
    config: { mass: 5, tension: 200, friction: 4 },
  });

  useEffect(() => {
    setBounce(true);
  }, []);

  return (
    <animated.a
      href={whatsappLink}
      className="whatsapp-button"
      onClick={handleClick}
      style={props}
    >
      <div className="whatsapp-icon">
        <ImWhatsapp />
      </div>
      <span className="whatsapp-text">Contactez-moi</span>
    </animated.a>
  );
};

export default WhatsappButton;
