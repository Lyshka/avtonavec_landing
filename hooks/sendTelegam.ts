import axios from "axios";

export const sendTelegram = async (message: string) => {
  try {
    const {
      data: { ok },
    } = await axios.post<{ ok: boolean }>(
      "https://api.telegram.org/bot7256139789:AAHxfm2DH1B3qXa4tAxo4UcS_A24QqVes_0/sendMessage",
      {
        chat_id: -4522901225,
        text: message,
        parse_mode: "html",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return ok;
  } catch (error) {
    console.error(error);
  }
};
