import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FaqSection() {
  const faq = [
    {
      id: 1,
      question: "What is Afforai?",
      answer:
        "Yes, Afforai is free for all new users. Upon signing up, users are given 50 permanent credits",
    },
    {
      id: 2,
      question: "What are subscription credits versus permanent credits?",
      answer:
        "Subscription credits come from monthly payments, while permanent credits come from top ups. Subscription credits will be used before permanent credits, and subscription credits expire every month while permanent credits stay.",
    },
    {
      id: 3,
      question:
        "Does Afforai support documents storing on the cloud like Google Drive, One Drive, or Drop Box?",
      answer:
        "Currently Afforai only support uploading local documents and websites, in the near future we will integrate these cloud solutions. Sign up with us to get updated.",
    },
    {
      id: 4,
      question: "Does Afforai support uploading images and video?",
      answer:
        "Currently Afforai supports OCR for scanned PDF, but not via image file directly. Afforai currently working on working with video and audio transcript.",
    },
    {
      id: 5,
      question: "Does Afforai support collaboration between accounts?",
      answer:
        "Currently Afforai is working on a solution to allow users to share chatbots and files. Sign up with us to get updated when this feature roll out.",
    },
    {
      id: 6,
      question: "Is my data secured?",
      answer:
        "Yes your data is secured with Afforai. We don't store your conversation with the AI, and the files you uploaded on the system is stored on the cloud using Microsoft Azure and MongoDB with their standard security. LLM calls are made using OpenAI Azure with their security measures.",
    },
  ];
  return (
    <div className="w-full flex justify-center px-3 py-20 mds:pt-5 mds:pb-10">
      <div className=" w-full max-w-[1160px] flex justify-start flex-col">
        {faq.map((faq) => (
          <Accordion className="my-3 " key={faq.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="text-start font-normal text-base text-[#525252] p-2">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-start font-normal text-base text-[#525252]">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
