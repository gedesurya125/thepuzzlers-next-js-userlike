import { createMessenger } from '@userlike/messenger';

export async function createUserLikeMessengerApi() {
  const widgetKey = process.env.NEXT_PUBLIC_USERLIKE_WIDGET_KEY;
  console.log('this is the widget key', widgetKey);

  const result = await createMessenger({
    version: 1,
    widgetKey: widgetKey
  });
  const { api } = result.value;
  return api;
}
