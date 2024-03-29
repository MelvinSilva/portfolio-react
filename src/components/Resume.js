import React from "react";
import { useTranslation } from "react-i18next";

const Resume = () => {
  const { t } = useTranslation();

  return (
    <div className="resume">
      <div className="resume-cv2">
        <a
          href="https://drive.google.com/file/d/1Ar679TjwQAVSJs7_nHEN2LHaWUE75_2F/view?usp=share_link"
          donwload
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("resume-download")}
        </a>
      </div>
    </div>
  );
};
export default Resume;
