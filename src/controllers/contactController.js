import emailjs from 'emailjs-com';
const { VITE_SERVICE_ID, VITE_RECEIVER_TEMPLATE_ID, VITE_AUTO_REPLY_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;

export const sendEmail = async (formData, onSuccess, onError) => {
  const { name, email, message } = formData;

  try {
    // 1. Send to yourself
    await emailjs.send(
      VITE_SERVICE_ID,
      VITE_RECEIVER_TEMPLATE_ID,
      { name, email, message },
      VITE_PUBLIC_KEY
    );

    // 2. Send auto-reply to user
    await emailjs.send(
      VITE_SERVICE_ID,
      VITE_AUTO_REPLY_TEMPLATE_ID,
      { name, email, message },
      VITE_PUBLIC_KEY
    );

    onSuccess();
  } catch (error) {
    onError(error);
  }
};
