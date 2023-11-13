/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useContext } from "react";
import "animate.css/animate.min.css";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../contexts/ThemeContext";
import Resume from "./Resume";

const Presentation = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div>
      <div className={theme ? "presentation" : "presentation light"}>
        <p className="name">{t("presentation.title")}</p>
        <h1 class="py-2 text-[8vw] text-center sm:text-10xl leading-none select-none tracking-tightest font-extrabold">
          <span
            data-content="Melvin Silva"
            class="font_text relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-0 before:bottom-0 before:left-0 before:text-center before:text-gray-300 before:animate-gradient-background-1"
          >
            <span class="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1">
              Melvin Silva
            </span>
          </span>
          <span
            data-content={t("presentation.description")}
            class="font_text relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-0 before:bottom-0 before:left-0 before:text-center before:text-gray-300 before:animate-gradient-background-2"
          >
            <span class="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2">
              {t("presentation.description")}
            </span>
          </span>
          <span
            data-content={t("presentation.description2")}
            class="font_text relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-0 before:bottom-0 before:left-0 before:text-center before:text-gray-300 before:animate-gradient-background-3"
          >
            <span class="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3">
              {t("presentation.description2")}
            </span>
          </span>
        </h1>
        {/* <AnimationOnScroll animateIn="animate__tada">
                    <p className='title-presentation'><span>Melvin Silva</span></p>
                </AnimationOnScroll>
                <br />
                <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                    <p className='title-presentation'><span>{t('presentation.description')}</span></p>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                    <p className='title-presentation'><span>{t('presentation.description2')}</span> 🇫🇷 </p>
    </AnimationOnScroll> */}
        <p className="description">
          {t("presentation.my-description")} <br />
          {t("presentation.my-description2")}{" "}
        </p>

        <div className="footer-social-icons">
          <p className="text-follow">FOLLOW ME ON</p>
          <ul className="social-icons">
            <li>
              <a
                href="https://twitter.com/RealBDSPROD"
                className="social-icon"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MelvinSilva"
                className="social-icon"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://fr.linkedin.com/in/melvin-silva-447366192"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                {" "}
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>

        <Resume />
        <svg class="arrows">
          <path class="a1" d="M0 0 L30 32 L60 0"></path>
          <path class="a2" d="M0 20 L30 52 L60 20"></path>
          <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>
    </div>
  );
};

export default Presentation;
