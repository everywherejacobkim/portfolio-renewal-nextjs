import React, { useRef } from 'react';
import Image from "next/image";
import emailjs from 'emailjs-com';
import { TextField, Button, styled, Avatar, Badge } from '@mui/material';
import { RiSendPlaneFill } from 'react-icons/ri';
import contactMe from '../../../../public/assets/images/profile.png';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    width: '5%',
    height: '7%',
    borderRadius: '50%',
    '&::after': {
      position: 'absolute',
      top: -1,
      left: -1,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAIL_SERVICE_ID!,
      process.env.REACT_APP_EMAIL_TEMPLATE_ID!,
      form.current!,
      process.env.REACT_APP_EMAIL_PUBLIC_KEY!
    ).then((result: { text: any; }) => {
      console.log(result.text);
    }, (error: { text: any; }) => {
      console.log(error.text);
    });
  };

  return (
    <section id="contact" className="relative bg-gray-100 w-full pb-8 mt-[12%]">
      <div className='speech-bubble'>
        <p className='bubble-text'>Drop Me A Line !</p>
      </div>
      <div className='form-wrapper'>
        <div className='contact-img'>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Image
              src={contactMe}
              alt="me"
              width={450}
              height={450}
              className=""
              style={{ borderRadius: "50%" }}
            />
          </StyledBadge>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <TextField name="user_name" id="outlined-basic" className='text text-1' label="Name" variant="outlined" />
          <TextField name="user_email" id="outlined-basic" className='text text-2' label="Email" variant="outlined" />
          <TextField name="message" id="outlined-multiline-static" className='text text-3' label="Message" variant="outlined" multiline rows={4}/>
          <Button className='contact-btn bg-primary-300 hover:bg-[#2196f3]' type="submit" value="Send" variant="contained" endIcon={<RiSendPlaneFill />}>
            Send
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
