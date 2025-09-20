export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body);
    const { name, email, phone, lang, note } = body;

    // 🔑 Твой токен и chat_id (лучше хранить в Netlify env!)
    const TELEGRAM_BOT_TOKEN = "8479141169:AAHsK5hVF-NJs_sxYXP0ZVIx54BIXo0-kFo";
    const TELEGRAM_CHAT_ID = "-1003010497410";

    const message = `
📌 Новая регистрация на марафон
👤 Имя: ${name}
📧 Email: ${email}
📱 Телефон: ${phone}
🌐 Язык: ${lang}
📝 Комментарий: ${note || "—"}
    `;

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Telegram API error: ${response.status} ${errorText}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("❌ Ошибка Netlify Function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
