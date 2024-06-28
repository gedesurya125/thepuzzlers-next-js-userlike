import { createMessenger } from '@userlike/messenger';

export async function createUserLikeMessengerApi() {
  const widgetKey = process.env.NEXT_PUBLIC_USERLIKE_WIDGET_KEY;

  const result = await createMessenger({
    version: 1,
    widgetKey: widgetKey
  });
  const { api } = result.value;
  return api;
}

// ? getting the current state of the user like bubble chat https://docs.userlike.com/developers/api/website-messenger-api#d2cb9cbe3321426f910d58cb93f54d1c
