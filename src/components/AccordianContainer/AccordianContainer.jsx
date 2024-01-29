

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import './accordian-container.css'

import expandIcon from '../../assets/expand-icon.png'
import crossIcon from '../../assets/cross-icon.png'

const AccordianContainer = (props)=>{
    console.log(props)

    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
      setExpanded((prevExpanded) => !prevExpanded);
    };

    const style = {
        backgroundColor:"#414141",
        color:"white",
    }

    return(
    <div className='accordian'>
        <Accordion
                style={style}
                expanded={expanded}
                onChange={handleExpansion}
                slots={{ transition: Fade }}
                slotProps={{ transition: { timeout: 400 } }}
                sx={{
                    '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
                    '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
                }}
            >
            <AccordionSummary
                expandIcon={<img src={expanded ===true ? crossIcon: expandIcon} className='expand-icon'/>}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography>{props.data.heading}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {props.data.para}
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
    )
}



export default AccordianContainer