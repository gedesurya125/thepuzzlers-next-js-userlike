'use client';
import React from 'react';
import { Paragraph } from 'theme-ui';
import { Box, Button, Heading } from 'theme/components';
import { createUserLikeMessengerApi } from 'utils/createUserLikeMessengerApi';

const getCookie = (key) => {
  const cookies = document.cookie.split('; ');

  console.log('this is the cookie', cookies);
  const cookieValue = cookies
    .find((row) => row.startsWith(`${key}=`))
    ?.split('=')[1];
  return cookieValue;
};

export const UserLikeWidget = () => {
  const [showConsent, setShowConsent] = React.useState(false);

  const handleCreateUserMessenger = () => {
    createUserLikeMessengerApi()
      .then((messenger) => {
        messenger.mount();
        return messenger;
      })
      .catch((error) => {
        console.log('error when getting the messenger api', error);
      });
  };

  React.useEffect(() => {
    const userLikeCookieKey = 'uslk_umm_141762_s';
    const isContainUserLikeCookie = getCookie(userLikeCookieKey);

    console.log('this is the value', isContainUserLikeCookie);

    if (isContainUserLikeCookie) {
      handleCreateUserMessenger();
      setShowConsent(false);
    } else {
      setShowConsent(true);
    }
  }, []);

  if (!showConsent) return null;
  return (
    <Box
      sx={{
        position: 'fixed',
        width: '100%',
        minHeight: '30rem',
        py: '2rem',
        left: 0,
        bottom: 0,
        bg: 'neutral.darkTealDarker',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Box
        sx={{
          maxWidth: '80%',
          px: '5rem'
        }}>
        <Heading
          sx={{
            variant: 'text.primary-135-normal',
            fontSize: '3rem',
            textAlign: 'center'
          }}>
          Privacy notice
        </Heading>
        <Paragraph
          sx={{
            variant: 'text.primary-135-normal',
            fontSize: '2rem',
            textAlign: 'center',
            mt: '0.8rem'
          }}>
          Please accept to start your conversation.
        </Paragraph>
        <Paragraph
          sx={{
            variant: 'text.primary-135-normal',
            fontSize: '1.6rem',
            textAlign: 'center',
            mt: '1.8rem'
          }}>
          This website uses the messaging software Userlike, it enables you to
          have conversations with us. Userlike needs to save some cookies on
          your device. Your data is safe though and it will not be used to
          identify you personally. To learn more, please visit our Privacy
          Policy.
        </Paragraph>
      </Box>
      <ButtonGroups
        setShowConsent={setShowConsent}
        handleCreateUserMessenger={handleCreateUserMessenger}
      />
    </Box>
  );
};

const ButtonGroups = ({ setShowConsent, handleCreateUserMessenger }) => {
  const handleAccept = () => {
    handleCreateUserMessenger();
    setShowConsent(false);
  };

  const handleDecline = () => {
    setShowConsent(false);
  };
  return (
    <Box
      className="__button-groups"
      sx={{
        display: 'flex',
        gap: '5rem',
        mt: '5rem'
      }}>
      <Button
        onClick={handleAccept}
        sx={{
          variant: 'buttons.primary.normal'
        }}>
        Accept
      </Button>
      <Button
        onClick={handleDecline}
        sx={{
          variant: 'buttons.primary.normal'
        }}>
        Decline
      </Button>
    </Box>
  );
};
