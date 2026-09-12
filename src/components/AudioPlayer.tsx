import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Volume2, VolumeX, Music, Disc, ListMusic, Check } from 'lucide-react';

interface AudioPlayerProps {
  autoPlayTrigger?: boolean;
  initialTrack?: 'oud' | 'piano' | 'violin' | 'zaffah';
  onTrackChange?: (track: 'oud' | 'piano' | 'violin' | 'zaffah') => void;
}

const trackList = [
  { id: 'oud', name: 'العود الملكي الأصيل', character: 'warm-oud', speed: 950 },
  { id: 'piano', name: 'البيانو الرومانسي', character: 'soft-piano', speed: 800 },
  { id: 'violin', name: 'أوتار الكمان المخملية', character: 'strings', speed: 1100 },
  { id: 'zaffah', name: 'زفة الأفراح الشرقية', character: 'zaffah', speed: 750 },
] as const;

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ 
  autoPlayTrigger,
  initialTrack = 'oud',
  onTrackChange
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.35);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState<'oud' | 'piano' | 'violin' | 'zaffah'>(initialTrack);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<number | null>(null);
  const isPlayingRef = useRef<boolean>(false);

  // Initialize Web Audio synthesizer
  const initAudio = useCallback(() => {
    if (audioCtxRef.current) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const masterGain = ctx.createGain();
      masterGain.gain.value = volume;
      masterGain.connect(ctx.destination);

      audioCtxRef.current = ctx;
      gainNodeRef.current = masterGain;
    } catch {
      console.warn('Web Audio API not supported in this browser.');
    }
  }, [volume]);

  // Harmonic note generator tailored by track
  const playHarmonicNote = (freq: number, trackType: 'oud' | 'piano' | 'violin' | 'zaffah') => {
    if (!audioCtxRef.current || !gainNodeRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const noteGain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    const now = ctx.currentTime;

    if (trackType === 'piano') {
      osc.type = 'triangle';
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1600, now);
      filter.frequency.exponentialRampToValueAtTime(400, now + 1.8);
      noteGain.gain.setValueAtTime(0.0001, now);
      noteGain.gain.linearRampToValueAtTime(0.09, now + 0.02);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);
      osc.start(now);
      osc.stop(now + 2.0);
    } else if (trackType === 'violin') {
      osc.type = 'sawtooth';
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(800, now);
      filter.Q.setValueAtTime(2.5, now);
      noteGain.gain.setValueAtTime(0.0001, now);
      noteGain.gain.linearRampToValueAtTime(0.05, now + 0.4);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);
      osc.start(now);
      osc.stop(now + 2.8);
    } else if (trackType === 'zaffah') {
      osc.type = 'sine';
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2200, now);
      noteGain.gain.setValueAtTime(0.0001, now);
      noteGain.gain.linearRampToValueAtTime(0.12, now + 0.03);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
      osc.start(now);
      osc.stop(now + 1.4);
    } else {
      // Default: Royal Warm Oud
      osc.type = 'sine';
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1100, now);
      filter.frequency.exponentialRampToValueAtTime(320, now + 2.2);
      noteGain.gain.setValueAtTime(0.0001, now);
      noteGain.gain.linearRampToValueAtTime(0.08, now + 0.06);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.0);
      osc.start(now);
      osc.stop(now + 2.4);
    }

    osc.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(gainNodeRef.current);
  };

  // Melodic progressions
  const chordsMap = {
    oud: [
      [293.66, 369.99, 440.0, 554.37, 659.25], // D Hijaz/Bayati royal
      [246.94, 293.66, 369.99, 440.0, 587.33],
      [196.00, 246.94, 293.66, 369.99, 440.0],
      [220.00, 277.18, 329.63, 440.0, 554.37],
    ],
    piano: [
      [261.63, 329.63, 392.00, 523.25], // C major
      [220.00, 261.63, 329.63, 440.00], // A minor
      [174.61, 220.00, 261.63, 349.23], // F major
      [196.00, 246.94, 293.66, 392.00], // G major
    ],
    violin: [
      [293.66, 440.00, 587.33],
      [329.63, 493.88, 659.25],
      [261.63, 392.00, 523.25],
      [220.00, 329.63, 440.00],
    ],
    zaffah: [
      [293.66, 349.23, 440.00, 587.33],
      [261.63, 329.63, 392.00, 523.25],
      [246.94, 293.66, 369.99, 493.88],
      [293.66, 369.99, 440.00, 587.33],
    ]
  };

  const startMelodyLoop = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    initAudio();

    const trackObj = trackList.find((t) => t.id === currentTrack) || trackList[0];
    const chords = chordsMap[currentTrack] || chordsMap.oud;

    let chordIdx = 0;
    let noteStep = 0;

    const tick = () => {
      if (!isPlayingRef.current) return;
      const currentChord = chords[chordIdx % chords.length];
      const freq = currentChord[noteStep % currentChord.length];
      
      const octaveShift = noteStep % 3 === 0 ? 1 : 0;
      playHarmonicNote(freq * (octaveShift ? 2 : 1), currentTrack);

      noteStep++;
      if (noteStep >= currentChord.length) {
        noteStep = 0;
        chordIdx++;
      }
    };

    tick();
    intervalRef.current = window.setInterval(tick, trackObj.speed);
  }, [initAudio, currentTrack]);

  const stopMelodyLoop = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const togglePlay = () => {
    initAudio();
    if (audioCtxRef.current?.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    if (isPlaying) {
      isPlayingRef.current = false;
      setIsPlaying(false);
      stopMelodyLoop();
    } else {
      isPlayingRef.current = true;
      setIsPlaying(true);
      startMelodyLoop();
    }
  };

  const handleSelectTrack = (trackId: 'oud' | 'piano' | 'violin' | 'zaffah') => {
    setCurrentTrack(trackId);
    if (onTrackChange) onTrackChange(trackId);
    if (isPlayingRef.current) {
      stopMelodyLoop();
      setTimeout(() => {
        startMelodyLoop();
      }, 50);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!gainNodeRef.current) return;
    if (isMuted) {
      gainNodeRef.current.gain.value = volume;
      setIsMuted(false);
    } else {
      gainNodeRef.current.gain.value = 0;
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (gainNodeRef.current && !isMuted) {
      gainNodeRef.current.gain.value = val;
    }
  };

  useEffect(() => {
    if (autoPlayTrigger && !isPlaying) {
      isPlayingRef.current = true;
      setIsPlaying(true);
      startMelodyLoop();
    }
  }, [autoPlayTrigger, isPlaying, startMelodyLoop]);

  useEffect(() => {
    return () => {
      stopMelodyLoop();
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, [stopMelodyLoop]);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2">
      
      {/* Expanded Track Menu */}
      {showMenu && (
        <div className="bg-[#0b0e14]/95 backdrop-blur-xl border border-[#d4af37]/40 rounded-2xl p-3 shadow-2xl space-y-2 min-w-[220px] text-right mb-1">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-xs font-bold text-[#f5e7a9] font-tajawal flex items-center gap-1.5">
              <ListMusic size={13} className="text-[#d4af37]" />
              <span>المقطوعة الملكية</span>
            </span>
            <span className="text-[10px] text-gray-400">اختر اللحن</span>
          </div>

          <div className="space-y-1">
            {trackList.map((track) => (
              <button
                key={track.id}
                type="button"
                onClick={() => handleSelectTrack(track.id as 'oud' | 'piano' | 'violin' | 'zaffah')}
                className={`w-full text-right px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between transition-all cursor-pointer ${
                  currentTrack === track.id
                    ? 'bg-[#d4af37]/20 text-[#f5e7a9] font-bold border border-[#d4af37]/40'
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                <span>{track.name}</span>
                {currentTrack === track.id && <Check size={13} className="text-[#d4af37]" />}
              </button>
            ))}
          </div>

          {/* Volume Slider inside menu */}
          <div className="pt-2 border-t border-white/10 flex items-center gap-2">
            <button
              type="button"
              onClick={toggleMute}
              className="text-[#d4af37] hover:text-[#f3e5ab] transition-colors"
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>
            <input
              type="range"
              min="0"
              max="0.8"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-full accent-[#d4af37] cursor-pointer h-1.5 bg-[#1f293d] rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Main Bar */}
      <div className="flex items-center gap-2">
        <button
          id="bg-music-toggle-btn"
          type="button"
          onClick={togglePlay}
          className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full backdrop-blur-md transition-all duration-500 shadow-luxury border cursor-pointer select-none ${
            isPlaying
              ? 'bg-gradient-to-r from-[#181c26]/90 to-[#0e121a]/95 border-[#d4af37] text-[#f4e6b0] shadow-[0_0_20px_rgba(212,175,55,0.3)]'
              : 'bg-[#0f121a]/80 border-[#d4af37]/30 text-[#a0a5b5] hover:border-[#d4af37]/60 hover:text-[#f4e6b0]'
          }`}
          title={isPlaying ? 'إيقاف الموسيقى' : 'تشغيل الموسيقى'}
        >
          <div className="relative flex items-center justify-center">
            <Disc
              size={18}
              className={`text-[#d4af37] transition-transform duration-1000 ${
                isPlaying ? 'animate-spin' : ''
              }`}
            />
            {isPlaying && (
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f4e6b0]"></span>
              </span>
            )}
          </div>

          <span className="text-xs font-tajawal font-medium hidden sm:inline tracking-wide">
            {isPlaying ? (trackList.find(t => t.id === currentTrack)?.name || 'الموسيقى') : 'تشغيل الموسيقى'}
          </span>

          {isPlaying && (
            <div className="flex items-end gap-[2px] h-3 px-0.5">
              <span className="w-[2px] bg-[#d4af37] rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-2"></span>
              <span className="w-[2px] bg-[#f5e7a9] rounded-full animate-[pulse_1.2s_ease-in-out_infinite_0.2s] h-3"></span>
              <span className="w-[2px] bg-[#d4af37] rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.4s] h-1.5"></span>
            </div>
          )}
        </button>

        {/* Tracks / Volume Menu Trigger Button */}
        <button
          type="button"
          onClick={() => setShowMenu(!showMenu)}
          className={`p-2.5 rounded-full backdrop-blur-md border transition-all cursor-pointer shadow-md ${
            showMenu
              ? 'bg-[#d4af37] text-black border-[#d4af37]'
              : 'bg-[#0f121a]/80 border-[#d4af37]/30 text-gray-300 hover:text-white hover:border-[#d4af37]/60'
          }`}
          title="قائمة الألحان ومستوى الصوت"
        >
          <ListMusic size={16} />
        </button>
      </div>

    </div>
  );
};
