import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Music, Volume2, Clock } from 'lucide-react';
import type { MusicPreferences } from '../types';

const MUSIC_STYLES = [
  'Pop', 'Rock', 'Classical', 'Jazz', 'Electronic', 'Hip Hop',
  'Ambient', 'Folk', 'Blues', 'Country'
];

const INSTRUMENTS = [
  'Piano', 'Guitar', 'Drums', 'Bass', 'Strings', 'Synthesizer',
  'Saxophone', 'Trumpet', 'Violin', 'Voice'
];

const MOODS = [
  'Happy', 'Energetic', 'Calm', 'Melancholic', 'Romantic',
  'Epic', 'Mysterious', 'Peaceful', 'Dark', 'Uplifting'
];

const CreateMusic = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState<MusicPreferences>({
    style: '',
    instruments: [],
    mood: '',
    tempo: 'medium',
    additionalNotes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would handle the payment and API submission
    navigate('/dashboard');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-center">Create Your Music</h1>
      
      {/* Progress Steps */}
      <div className="flex justify-between items-center">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`flex items-center ${s < step ? 'text-indigo-600' : 'text-gray-400'}`}
          >
            <div className={`w-8 h-8 rounded-full ${s <= step ? 'bg-indigo-600' : 'bg-gray-200'} flex items-center justify-center text-white`}>
              {s}
            </div>
            {s < 3 && <div className={`w-full h-1 ${s < step ? 'bg-indigo-600' : 'bg-gray-200'}`} />}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-medium mb-2">Select Music Style</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {MUSIC_STYLES.map((style) => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => setPreferences({ ...preferences, style })}
                    className={`p-4 rounded-lg border ${
                      preferences.style === style
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-600'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-medium mb-2">Choose Instruments</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {INSTRUMENTS.map((instrument) => (
                  <button
                    key={instrument}
                    type="button"
                    onClick={() => {
                      const instruments = preferences.instruments.includes(instrument)
                        ? preferences.instruments.filter(i => i !== instrument)
                        : [...preferences.instruments, instrument];
                      setPreferences({ ...preferences, instruments });
                    }}
                    className={`p-4 rounded-lg border ${
                      preferences.instruments.includes(instrument)
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-600'
                    }`}
                  >
                    {instrument}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-6 py-2 text-indigo-600 hover:text-indigo-700"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-medium mb-2">Select Mood</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {MOODS.map((mood) => (
                  <button
                    key={mood}
                    type="button"
                    onClick={() => setPreferences({ ...preferences, mood })}
                    className={`p-4 rounded-lg border ${
                      preferences.mood === mood
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-600'
                    }`}
                  >
                    {mood}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-lg font-medium mb-2">Tempo</label>
              <input
                type="range"
                min="0"
                max="100"
                value={preferences.tempo === 'slow' ? 25 : preferences.tempo === 'medium' ? 50 : 75}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  const tempo = value < 33 ? 'slow' : value < 66 ? 'medium' : 'fast';
                  setPreferences({ ...preferences, tempo });
                }}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>Slow</span>
                <span>Medium</span>
                <span>Fast</span>
              </div>
            </div>

            <div>
              <label className="block text-lg font-medium mb-2">Additional Notes</label>
              <textarea
                value={preferences.additionalNotes}
                onChange={(e) => setPreferences({ ...preferences, additionalNotes: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows={4}
                placeholder="Any specific requirements or details you'd like to add..."
              />
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-2 text-indigo-600 hover:text-indigo-700"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default CreateMusic;