// src/views/SpeechDemoView.tsx
import { useEffect, useState } from "react";

export default function SpeechDemoView() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>("");
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);

  const synth = window.speechSynthesis;

<<<<<<< HEAD
  // Poblar voces al inicio
=======
>>>>>>> 7cccc09a9aeb243f39e689741e8c48b54818139a
  useEffect(() => {
    function populateVoices() {
      const allVoices = synth.getVoices();
      const preferred = allVoices.filter((v) =>
        /en-|English/i.test(`${v.lang} ${v.name}`)
      );
      const source = preferred.length ? preferred : allVoices;
      setVoices(source);
      if (source.length && !selectedVoice) {
        setSelectedVoice(source[0].name);
      }
    }

    populateVoices();
    synth.addEventListener("voiceschanged", populateVoices);

    return () => {
      synth.cancel();
      synth.removeEventListener("voiceschanged", populateVoices);
    };
  }, [synth, selectedVoice]);

<<<<<<< HEAD
  // Función para hablar
=======
>>>>>>> 7cccc09a9aeb243f39e689741e8c48b54818139a
  const speak = (text: string) => {
    if (!("speechSynthesis" in window)) return;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.voice = voices.find((v) => v.name === selectedVoice) ?? null;

    u.rate = rate;
    u.pitch = pitch;
    u.lang = u.voice?.lang || "en-US";
    synth.speak(u);
  };

  const examples = [
    "She has lived in London for five years.",
    "We have already finished our homework.",
    "By next year, I will have graduated from university.",
  ];

  return (
    <div className="space-y-6">
      {/* Título */}
      <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">
        Text-to-Speech (Web Speech API)
      </h1>

      {/* Aviso soporte */}
      <div className="text-sm text-slate-600 dark:text-slate-300">
        Si no escuchas audio, prueba en Chrome/Edge y habilita sonido.
      </div>

      {/* Panel de controles */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Voz */}
          <div>
<<<<<<< HEAD
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Voice
            </label>
            <select
=======
            <label
              htmlFor="voiceSelect"
              className="block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Voice
            </label>
            <select
              id="voiceSelect"
>>>>>>> 7cccc09a9aeb243f39e689741e8c48b54818139a
              className="mt-1 w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 px-3 py-2"
              value={selectedVoice}
              onChange={(e) => setSelectedVoice(e.target.value)}
            >
              {voices.map((v) => (
                <option key={v.name} value={v.name}>
                  {v.name} ({v.lang})
                </option>
              ))}
            </select>
          </div>

          {/* Rate */}
          <div>
<<<<<<< HEAD
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Rate
            </label>
            <input
=======
            <label
              htmlFor="rateControl"
              className="block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Rate
            </label>
            <input
              id="rateControl"
>>>>>>> 7cccc09a9aeb243f39e689741e8c48b54818139a
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="mt-2 w-full accent-emerald-500"
            />
          </div>

          {/* Pitch */}
          <div>
<<<<<<< HEAD
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Pitch
            </label>
            <input
=======
            <label
              htmlFor="pitchControl"
              className="block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Pitch
            </label>
            <input
              id="pitchControl"
>>>>>>> 7cccc09a9aeb243f39e689741e8c48b54818139a
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={pitch}
              onChange={(e) => setPitch(Number(e.target.value))}
              className="mt-2 w-full accent-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Lista de ejemplos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {examples.map((sentence) => (
          <div
            key={sentence}
            className="flex items-center justify-between rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2"
          >
            <span className="text-slate-700 dark:text-slate-200">
              {sentence}
            </span>
            <button
              onClick={() => speak(sentence)}
              className="px-3 py-1.5 rounded-lg bg-emerald-500 text-white hover:bg-emerald-400"
            >
              Play
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
