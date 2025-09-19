"use client";

import React, { useState } from "react";

export default function DenSaulykMarafony() {
  const [lang, setLang] = useState("ru");
  const [form, setForm] = useState({ name: "", email: "", phone: "", lang: "ru", note: "" });
  const [status, setStatus] = useState(null);

  function t(obj) {
    return obj[lang] || obj.ru;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", lang: form.lang, note: "" });
      } else {
        const body = await res.text();
        setStatus(`error: ${body || res.status}`);
      }
    } catch (err) {
      setStatus(`error: ${err.message}`);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/images/page1_X2.png" alt="logo" className="h-12 w-12 rounded-full object-cover" />
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">
              {t({ ru: "Тегін Денсаулық Марафоны", kz: "Тегін Денсаулық Марафоны" })}
            </h1>
            <p className="text-sm text-gray-600">
              {t({ ru: "3 дня — онлайн: 22, 23, 24 сентября", kz: "3 күн — онлайн: 22, 23, 24 қыркүйек" })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "ru" ? "kz" : "ru")}
            className="px-4 py-2 rounded-lg border"
          >
            {lang === "ru" ? "Қазақша" : "Русский"}
          </button>
          <a href="#register" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            {t({ ru: "Тіркелу", kz: "Тіркелу" })}
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <section className="md:col-span-2 bg-white p-6 rounded-2xl shadow">
          <img src="/images/page1_X10.png" alt="Hero" className="rounded-xl w-full mb-4 object-cover" />
          <h2 className="text-3xl font-bold mb-3">
            {t({ ru: "Возвращаем энергию организма", kz: "Денсаулыққа энергияны қайтару" })}
          </h2>
          <p className="text-gray-700 mb-4">
            {t({
              ru: "3 дня: слушаем тело, учимся восстанавливать силы и становиться легче.",
              kz: "3 күн: өз ағзаңызды тыңдап, қалпына келтіру жолын үйрену.",
            })}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="p-4 border rounded-lg">
              <img src="/images/page1_X1.png" alt="Day1" className="rounded-md mb-2 object-cover" />
              <h3 className="font-semibold">{t({ ru: "1-й день", kz: "1-күн" })}</h3>
              <p className="text-sm text-gray-600">
                {t({
                  ru: "Почему уходит энергия и как её вернуть",
                  kz: "Ағза энергиясын неге жоғалтады және оны қалай қайтаруға болады",
                })}
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <img src="/images/page1_X1.png" alt="Day2" className="rounded-md mb-2 object-cover" />
              <h3 className="font-semibold">{t({ ru: "2-й день", kz: "2-күн" })}</h3>
              <p className="text-sm text-gray-600">
                {t({
                  ru: "Правила тарелки: питание для лёгкости",
                  kz: "Тәрелке ережелері: энергия мен жеңілдік үшін тамақтану",
                })}
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <img src="/images/page1_X1.png" alt="Day3" className="rounded-md mb-2 object-cover" />
              <h3 className="font-semibold">{t({ ru: "3-й день", kz: "3-күн" })}</h3>
              <p className="text-sm text-gray-600">
                {t({
                  ru: "Формула быстрого восстановления",
                  kz: "Жедел қалпына келтіру формуласы",
                })}
              </p>
            </div>
          </div>

          <div className="mt-6 border-t pt-4 text-sm text-gray-600">
            <p>
              {t({
                ru: "Прямые эфиры: 19:00 (рус.), 20:00 (қаз.)",
                kz: "Тікелей эфир уақыты: 19:00 орыс тілінде, 20:00 қазақ тілінде",
              })}
            </p>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">{t({ ru: "Сарапшылар", kz: "Мамандар" })}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <img src="/images/page1_X2.png" alt="Эксперт1" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-medium">{t({ ru: "Молдахметова Райгүл", kz: "Молдахметова Райгүл" })}</div>
                  <div className="text-sm text-gray-500">
                    {t({ ru: "Дәрігер-нутрициолог, шығыс медицинасы", kz: "Дәрігер-нутрициолог, шығыс медицинасы" })}
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <img src="/images/page1_X10.png" alt="Эксперт2" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-medium">{t({ ru: "Жүсіпбаева Динара", kz: "Жүсіпбаева Динара" })}</div>
                  <div className="text-sm text-gray-500">
                    {t({
                      ru: "Иммунитетті қалпына келтіру және алдын алу",
                      kz: "Иммунитетті қалпына келтіру және аурулардың алдын алу",
                    })}
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-4">
              <a
                href="#register"
                className="block w-full text-center bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                {t({ ru: "Тіркелу", kz: "Тіркелу" })}
              </a>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h4 className="font-semibold mb-2">{t({ ru: "Подарок", kz: "Сыйлық" })}</h4>
            <img src="/images/page1_X1.png" alt="Gift" className="rounded-md mb-2 object-cover" />
            <p className="text-sm text-gray-600">
              {t({
                ru: "Каждому зарегистрировавшемуся — гайд 'Как читать сигналы тела'",
                kz: "Тіркелгеннен кейін 'Ағзаның сигналдарын қалай білу керек' гайды беріледі",
              })}
            </p>
          </div>
        </aside>

        <section id="register" className="md:col-span-3 bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-bold mb-3">{t({ ru: "Тіркелу формасы", kz: "Тіркелу формасы" })}</h3>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium">{t({ ru: "Аты-жөні", kz: "Аты-жөні" })}</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="mt-1 block w-full rounded-md border p-2"
                placeholder={t({ ru: "Иван Иванов", kz: "Әлия Ахмет" })}
              />

              <label className="block mt-3 text-sm font-medium">{t({ ru: "Телефон", kz: "Телефон" })}</label>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-1 block w-full rounded-md border p-2"
                placeholder="+7 777 123 45 67"
              />

              <label className="block mt-3 text-sm font-medium">{t({ ru: "Тіл", kz: "Тіл" })}</label>
              <select
                value={form.lang}
                onChange={(e) => {
                  setForm({ ...form, lang: e.target.value });
                  setLang(e.target.value);
                }}
                className="mt-1 block w-full rounded-md border p-2"
              >
                <option value="ru">Русский</option>
                <option value="kz">Қазақша</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium">{t({ ru: "Email", kz: "Электрондық пошта" })}</label>
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                type="email"
                className="mt-1 block w-full rounded-md border p-2"
                placeholder="name@example.com"
              />

              <label className="block mt-3 text-sm font-medium">
                {t({ ru: "Ескерту (мүмкіндігіңіз болса)", kz: "Ескерту (бар болса)" })}
              </label>
              <textarea
                value={form.note}
                onChange={(e) => setForm({ ...form, note: e.target.value })}
                className="mt-1 block w-full rounded-md border p-2 h-24"
                placeholder={t({
                  ru: "Аллергии, пожелания, удобное время для эфира",
                  kz: "Аллергия, тілектер, эфирге ыңғайлы уақыт",
                })}
              />

              <div className="mt-4 flex items-center gap-3">
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                  {status === "loading"
                    ? t({ ru: "Отправка...", kz: "Жіберілуде..." })
                    : t({ ru: "Тіркелу", kz: "Тіркелу" })}
                </button>
                <div className="text-sm text-gray-600">
                  {status === "success" &&
                    t({ ru: "Сіз сәтті тіркелдіңіз!", kz: "Сіз сәтті тіркелдіңіз!" })}
                  {status &&
                    status !== "loading" &&
                    status !== "success" &&
                    status !== null &&
                    status.toString().startsWith("error") && (
                      <span className="text-red-600">
                        {t({ ru: "Қате: өтініш жіберілмеді", kz: "Қате: өтініш жіберілмеді" })}
                      </span>
                    )}
                </div>
              </div>
            </div>
          </form>

          <p className="text-xs text-gray-500 mt-3">
            {t({
              ru: "Сіз тіркелу арқылы хабарламаларды алуға келісесіз.",
              kz: "Сіз тіркелу арқылы хабарламаларды алуға келісесіз.",
            })}
          </p>
        </section>

        <footer className="md:col-span-3 text-center text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} {t({ ru: "Денсаулық марафоны", kz: "Денсаулық марафоны" })}
        </footer>
      </main>
    </div>
  );
}
