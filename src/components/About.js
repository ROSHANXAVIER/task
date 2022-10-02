import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';

function About() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
        variant="success"
      >
        ABOUT ME
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
          I am an aspiring MERN STACK developer , i love to design and build websites .
          I am passionate and hardworking . Th task provided to me is done in 3 hours(including hosting process). 
        </div>
      </Fade>
    </>
  );
}

export default About;