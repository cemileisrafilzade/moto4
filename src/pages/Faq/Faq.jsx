import React from "react";
import styles from "./style.module.scss";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { faqData } from "../../mockData/faq";
function Faq() {
  return (
    <div className={styles.test}>
      {faqData.map((item) => (
        <Accordion key={item.id}>
          <AccordionSummary>{item.question}</AccordionSummary>
          <AccordionDetails>{item.answer}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default Faq;
