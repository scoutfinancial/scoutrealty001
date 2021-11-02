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
    "&:hover": {
      background: "rgba(120, 207, 253, 0.45)",
    },
  },
}))

function FaqAccordion() {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div>
      <div className="my-3 mx-4 accordion-div">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#78cffd" }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <LightSpeed left>
              <Typography className={classes.heading}>
                <i>Lorem ipsum dolor sit amet?</i>
              </Typography>
            </LightSpeed>
          </AccordionSummary>
          <AccordionDetails>
            <Flip bottom>
              <Typography className={classes.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus in dapibus nisi, non ultrices felis. Duis eros odio,
                porta in fringilla id, iaculis vitae orci. Sed quis sapien sed
                libero eleifend bibendum ac non quam.
              </Typography>
            </Flip>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#78cffd" }} />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <LightSpeed left>
              <Typography className={classes.heading}>
                <i>Lorem ipsum dolor sit amet?</i>
              </Typography>
            </LightSpeed>
          </AccordionSummary>
          <AccordionDetails>
            <Flip bottom>
              <Typography className={classes.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus in dapibus nisi, non ultrices felis. Duis eros odio,
                porta in fringilla id, iaculis vitae orci. Sed quis sapien sed
                libero eleifend bibendum ac non quam.
              </Typography>
            </Flip>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#78cffd" }} />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <LightSpeed left>
              <Typography className={classes.heading}>
                <i>Lorem ipsum dolor sit amet?</i>
              </Typography>
            </LightSpeed>
          </AccordionSummary>
          <AccordionDetails>
            <Flip bottom>
              <Typography className={classes.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus in dapibus nisi, non ultrices felis. Duis eros odio,
                porta in fringilla id, iaculis vitae orci. Sed quis sapien sed
                libero eleifend bibendum ac non quam.
              </Typography>
            </Flip>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#78cffd" }} />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <LightSpeed left>
              <Typography className={classes.heading}>
                <i>Lorem ipsum dolor sit amet?</i>
              </Typography>
            </LightSpeed>
          </AccordionSummary>
          <AccordionDetails>
            <Flip bottom>
              <Typography className={classes.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus in dapibus nisi, non ultrices felis. Duis eros odio,
                porta in fringilla id, iaculis vitae orci. Sed quis sapien sed
                libero eleifend bibendum ac non quam.
              </Typography>
            </Flip>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#78cffd" }} />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <LightSpeed left>
              <Typography className={classes.heading}>
                <i>Lorem ipsum dolor sit amet?</i>
              </Typography>
            </LightSpeed>
          </AccordionSummary>
          <AccordionDetails>
            <Flip bottom>
              <Typography className={classes.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus in dapibus nisi, non ultrices felis. Duis eros odio,
                porta in fringilla id, iaculis vitae orci. Sed quis sapien sed
                libero eleifend bibendum ac non quam.
              </Typography>
            </Flip>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#78cffd" }} />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <LightSpeed left>
              <Typography className={classes.heading}>
                <i>Lorem ipsum dolor sit amet?</i>
              </Typography>
            </LightSpeed>
          </AccordionSummary>
          <AccordionDetails>
            <Flip bottom>
              <Typography className={classes.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus in dapibus nisi, non ultrices felis. Duis eros odio,
                porta in fringilla id, iaculis vitae orci. Sed quis sapien sed
                libero eleifend bibendum ac non quam.
              </Typography>
            </Flip>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default FaqAccordion
