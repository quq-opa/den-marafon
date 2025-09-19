export async function POST(req) {
  try {
    const data = await req.json();
    console.log("📥 Полученные данные:", data);

    if (!data.name || !data.email) {
      console.log("❌ Нет имени или email");
      return new Response(JSON.stringify({ error: "Имя и Email обязательны!" }), { status: 400 });
    }

    const TELEGRAM_TOKEN = "8479141169:AAHsK5hVF-NJs_sxYXP0ZVIx54BIXo0-kFo";
    const TELEGRAM_CHAT_ID = "-1003010497410";

    const message = `
📌 Новая регистрация:
👤 Имя: ${data.name}
📧 Email: ${data.email}
📱 Телефон: ${data.phone || "-"}
🌐 Язык: ${data.lang || "-"}
📝 Заметка: ${data.note || "-"}
`;

    console.log("📤 Отправляем в Telegram...");

    const tgRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
      }),
    });

    if (!tgRes.ok) {
      const errorText = await tgRes.text();
      console.error("❌ Ошибка Telegram:", errorText);
      return new Response(JSON.stringify({ error: "Ошибка Telegram", details: errorText }), { status: 500 });
    }

    console.log("✅ Успешно отправлено в Telegram");
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("❌ Ошибка сервера:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
