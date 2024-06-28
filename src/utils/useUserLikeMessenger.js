'use client';
import React from 'react';
import { createUserLikeMessengerApi } from './createUserLikeMessengerApi';

export const useUserLikeMessenger = () => {
  const [messenger, setMessenger] = React.useState(null);

  React.useEffect(() => {
    createUserLikeMessengerApi()
      .then((messenger) => {
        messenger.mount();
        setMessenger(messenger);
        return messenger;
      })
      .catch((error) => {
        console.log('error when getting the messenger api', error);
      });
    return () => {
      if (messenger) {
        messenger.unMount();
      }
    };
  }, []);

  return messenger;
};
