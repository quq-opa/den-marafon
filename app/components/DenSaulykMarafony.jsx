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
      const res = await fetch("/.netlify/functions/register", {
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

      <main className="max-w-5xl mx-auto p-6">
        <section id="register" className="bg-white p-6 rounded-2xl shadow">
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
                    status.toString().startsWith("error") && (
                      <span className="text-red-600">
                        {t({ ru: "Қате: өтініш жіберілмеді", kz: "Қате: өтініш жіберілмеді" })}
                      </span>
                    )}
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
