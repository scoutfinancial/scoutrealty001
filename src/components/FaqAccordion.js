import React from "react"
import Flip from "react-reveal/Flip"
import LightSpeed from "react-reveal/LightSpeed"
import { makeStyles } from "@material-ui/core/styles"
import Accordion from "@material-ui/core/Accordion"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"

import "./Accordion.css"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexShrink: 0,
    color: "black",
    padding: "0.5em",
  },
  text: {
    color: "black",
  },
  accordion: {
    border: "3px solid #78cffd",
    marginBottom: "1rem",
    "&:hover": {
      background: "rgba(120, 207, 253, 0.45)",
    },
  },
}))

function FaqAccordion() {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(true)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const faqContent = [
    {
      id: 1,
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in dapibus nisi, non ultrices felis. Duis eros odio, porta in fringilla id, iaculis vitae orci. Sed quis sapien sed libero eleifend bibendum ac non quam.",
    },
    {
      id: 2,
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in dapibus nisi, non ultrices felis. Duis eros odio, porta in fringilla id, iaculis vitae orci. Sed quis sapien sed libero eleifend bibendum ac non quam.",
    },
    {
      id: 3,
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in dapibus nisi, non ultrices felis. Duis eros odio, porta in fringilla id, iaculis vitae orci. Sed quis sapien sed libero eleifend bibendum ac non quam.",
    },
    {
      id: 4,
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in dapibus nisi, non ultrices felis. Duis eros odio, porta in fringilla id, iaculis vitae orci. Sed quis sapien sed libero eleifend bibendum ac non quam.",
    },
    {
      id: 5,
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in dapibus nisi, non ultrices felis. Duis eros odio, porta in fringilla id, iaculis vitae orci. Sed quis sapien sed libero eleifend bibendum ac non quam.",
    },
  ]

  return (
    <div>
      <div className="my-3 mx-4 accordion-div">
        {faqContent.map(faq => (
          <Accordion
            expanded={expanded === "panel"}
            onChange={handleChange("panel")}
            className={classes.accordion}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#78cffd" }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <LightSpeed left>
                <Typography className={classes.heading}>
                  <i>{faq.question}</i>
                </Typography>
              </LightSpeed>
            </AccordionSummary>
            <AccordionDetails>
              <Flip bottom>
                <Typography className={classes.text}>{faq.answer}</Typography>
              </Flip>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  )
}

export default FaqAccordion
