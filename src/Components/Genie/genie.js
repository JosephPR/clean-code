import React from 'react';
import { Button, Grid, Image } from 'semantic-ui-react';

import './genie.css'

export default function Genie() {
  return (
    <>
      <div className="genie-container">
        <div className="wish">
          <h1>Genie page</h1>
          <section className="genie-info">
          Genie a spirit of Arabian folklore, as traditionally depicted <br />
          imprisoned within a bottle or oil lamp, and capable of granting<br />
           wishes when summoned; figuratively, an agent of power or change<br />
            which is or may be released from containment.<br />
            Recorded from the mid 17th century (denoting a guardian or<br />
              protective spirit),
            the word comes via French from Latin base of genius. Génie was adopted<br />
            in the current sense by the 18th-century French translators of The Arabian Nights' Entertainments,<br />
            because of its resemblance in form and sense to Arabic jinnī jinn.<br />
            let the genie out of the bottle let loose or lose control of an<br />
             unpredictable force, start an uncontrollable chain of events. Sometimes
             in the form,<br /> you can't put the genie back in the bottle.
          </section>
          <Button onClick={() => {alert("Wishes to be granted")}} inverted color='olive'>
       Wishes
     </Button>
        </div>
      </div>
      <br />
      <Grid  columns='three' divided>
   <Grid.Row className='genie-pics'>
     <Grid.Column >
       <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIW0Jh03yqz8xJyMbvRQipcUs4eqqQPv5XWkMtoEvUnF3v138bjA' />
     </Grid.Column>
     <Grid.Column>
       <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-CviD-SZZzHEfGCcAoFxDRPIr7-wU0Lj_wIZYcFgT1NHXwYKUMg' />
     </Grid.Column>
     <Grid.Column>
       <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72FSCPOQcM8DzYogP4UNE0yBC46xy-0RmI30J0SHJP1be8kim' />
     </Grid.Column>
   </Grid.Row>

 </Grid>
    </>
  )
}
