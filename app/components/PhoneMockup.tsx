"use client";

import { useState, useEffect } from "react";

const ACCENT = "#0071E3";
const ACCENT_LIGHT = "#0077ED";
const BG = "#F5F5F7";
const CHASSIS = "#E8E8ED";
const SHADOW_LIGHT = "#ffffff";
const SHADOW_DARK = "#c8ccd4";
const BTN_COLOR = "#D2D2D7";
const TEXT_PRIMARY = "#1D1D1F";
const TEXT_MUTED = "#6E6E73";

const DAY_LABELS = ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"];

type WeekDay = { label: string; date: number; isToday: boolean };

function getWeekDays(): WeekDay[] {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const monday = new Date(today);
  monday.setDate(today.getDate() - ((dayOfWeek + 6) % 7));

  return Array.from({ length: 5 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return {
      label: DAY_LABELS[d.getDay()],
      date: d.getDate(),
      isToday:
        d.getDate() === today.getDate() &&
        d.getMonth() === today.getMonth() &&
        d.getFullYear() === today.getFullYear(),
    };
  });
}

/* ── Inline SVG Icons ── */

function HamburgerIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 5h12M3 9h12M3 13h12" stroke="#6E6E73" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function GraduationCapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" fill="#6b7280" />
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" fill="#9ca3af" />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.79 5.79 0 0012 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.97 5.97 0 006 7h12c0-2.02-1-3.8-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"
        fill="#3ddc84"
      />
    </svg>
  );
}

function JSIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="3" fill="#f7df1e" />
      <text x="6" y="18" fontFamily="monospace" fontWeight="bold" fontSize="12" fill="#323330">JS</text>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
        fill="#6E6E73"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11 4v14M4 11h14" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/* ── Card Data ── */

const cards = [
  {
    icon: <GraduationCapIcon />,
    title: "Ingénieur",
    subtitle: "EFREI Paris",
    checked: true,
  },
  {
    icon: <AndroidIcon />,
    title: "Développeur Mobile",
    subtitle: "Android · Jetpack Compose",
    checked: true,
  },
  {
    icon: <JSIcon />,
    title: "Développeur Full Stack",
    subtitle: "React · Node.js",
    checked: true,
  },
  {
    icon: <GitHubIcon />,
    title: "Open Source",
    subtitle: "Contribuer ce soir",
    checked: false,
  },
];

/* ── Main Component ── */

export default function PhoneMockup() {
  const [weekDays, setWeekDays] = useState<WeekDay[]>(() =>
    // SSR placeholder — no day highlighted
    Array.from({ length: 5 }, (_, i) => ({
      label: ["LUN", "MAR", "MER", "JEU", "VEN"][i],
      date: i + 1,
      isToday: false,
    }))
  );

  useEffect(() => {
    setWeekDays(getWeekDays());
  }, []);

  return (
    <div className="animate-fade-up flex items-center justify-center" style={{ animationDelay: "400ms" }}>
      <div className="relative">
        {/* ── Side buttons ── */}
        {/* Volume buttons — left */}
        <div
          className="absolute -left-[5px] top-[120px] w-[5px] h-[30px] rounded-l-sm"
          style={{
            background: BTN_COLOR,
            boxShadow: `-3px 2px 6px ${SHADOW_DARK}, -1px -1px 3px ${SHADOW_LIGHT}`,
          }}
        />
        <div
          className="absolute -left-[5px] top-[162px] w-[5px] h-[30px] rounded-l-sm"
          style={{
            background: BTN_COLOR,
            boxShadow: `-3px 2px 6px ${SHADOW_DARK}, -1px -1px 3px ${SHADOW_LIGHT}`,
          }}
        />
        {/* Power button — right */}
        <div
          className="absolute -right-[5px] top-[140px] w-[5px] h-[40px] rounded-r-sm"
          style={{
            background: BTN_COLOR,
            boxShadow: `3px 2px 6px ${SHADOW_DARK}, 1px -1px 3px ${SHADOW_LIGHT}`,
          }}
        />

        {/* ── Phone chassis (9:19.5 ratio) ── */}
        <div
          className="relative w-[280px] h-[590px]"
          style={{
            background: CHASSIS,
            borderRadius: "44px",
            boxShadow: `10px 10px 24px ${SHADOW_DARK}, -10px -10px 24px ${SHADOW_LIGHT}`,
            padding: "14px",
          }}
        >
          {/* ── Screen ── */}
          <div
            className="relative h-full overflow-hidden flex flex-col"
            style={{
              background: BG,
              borderRadius: "32px",
            }}
          >
            {/* ── Dynamic Island ── */}
            <div className="flex justify-center pt-3 pb-1">
              <div
                className="relative flex items-center"
                style={{
                  width: "120px",
                  height: "34px",
                  borderRadius: "20px",
                  background: "#1d1d1f",
                  boxShadow: `0 2px 8px rgba(0,0,0,0.15)`,
                }}
              >
                {/* Camera lens */}
                <div
                  className="absolute right-4 rounded-full"
                  style={{
                    width: "12px",
                    height: "12px",
                    background: "radial-gradient(circle at 40% 35%, #3a3a4a 0%, #1a1a2e 50%, #0d0d14 100%)",
                    boxShadow: "inset 0 0 2px rgba(255,255,255,0.15), 0 0 3px rgba(0,0,0,0.4)",
                    border: "1.5px solid #2a2a35",
                  }}
                >
                  {/* Lens reflection */}
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: "4px",
                      height: "4px",
                      top: "2px",
                      left: "3px",
                      background: "radial-gradient(circle, rgba(255,255,255,0.5), transparent)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* ── Screen content ── */}
            <div className="flex-1 px-4 pb-2 flex flex-col">
              {/* ── App header ── */}
              <div className="flex items-center justify-between py-3">
                <HamburgerIcon />
                <p className="text-[15px] font-semibold tracking-wide" style={{ color: TEXT_PRIMARY }}>
                  Dév<span style={{ color: ACCENT }}>eloppeur</span>
                </p>
                {/* Avatar placeholder */}
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold"
                  style={{
                    background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_LIGHT})`,
                    color: "#fff",
                  }}
                >
                  MT
                </div>
              </div>

              {/* ── Date bar ── */}
              <div className="flex gap-1.5 justify-between py-3">
                {weekDays.map((day) => (
                  <div
                    key={day.label}
                    className="flex flex-col items-center gap-1 px-2 py-1.5 rounded-xl text-center transition-all"
                    style={
                      day.isToday
                        ? {
                            background: ACCENT,
                            boxShadow: `2px 2px 6px ${SHADOW_DARK}, -1px -1px 3px rgba(0,113,227,0.3)`,
                          }
                        : {
                            background: BG,
                            boxShadow: `inset 2px 2px 4px ${SHADOW_DARK}, inset -2px -2px 4px ${SHADOW_LIGHT}`,
                          }
                    }
                  >
                    <span
                      className="text-[8px] font-semibold tracking-wider"
                      style={{ color: day.isToday ? "#fff" : TEXT_MUTED }}
                    >
                      {day.label}
                    </span>
                    <span
                      className="text-[12px] font-bold"
                      style={{ color: day.isToday ? "#fff" : TEXT_PRIMARY }}
                    >
                      {day.date}
                    </span>
                  </div>
                ))}
              </div>

              {/* ── To-do cards ── */}
              <div className="flex flex-col gap-3 pt-2">
                {cards.map((card) => (
                  <div
                    key={card.title}
                    className="flex items-center gap-3 p-3 rounded-2xl"
                    style={{
                      background: BG,
                      boxShadow: `4px 4px 10px ${SHADOW_DARK}, -4px -4px 10px ${SHADOW_LIGHT}`,
                    }}
                  >
                    {/* Icon circle */}
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: BG,
                        boxShadow: `inset 2px 2px 4px ${SHADOW_DARK}, inset -2px -2px 4px ${SHADOW_LIGHT}`,
                      }}
                    >
                      {card.icon}
                    </div>
                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] font-bold truncate" style={{ color: TEXT_PRIMARY }}>
                        {card.title}
                      </p>
                      <p className="text-[10px] truncate" style={{ color: TEXT_MUTED }}>
                        {card.subtitle}
                      </p>
                    </div>
                    {/* Check / Empty circle */}
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: BG,
                        boxShadow: `inset 2px 2px 4px ${SHADOW_DARK}, inset -2px -2px 4px ${SHADOW_LIGHT}`,
                      }}
                    >
                      {card.checked && <CheckIcon />}
                    </div>
                  </div>
                ))}
              </div>

              {/* ── FAB ── */}
              <div className="flex justify-end pt-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_LIGHT})`,
                    boxShadow: `3px 3px 8px ${SHADOW_DARK}, -2px -2px 6px rgba(0,113,227,0.2)`,
                  }}
                >
                  <PlusIcon />
                </div>
              </div>

              {/* Spacer to push home indicator down */}
              <div className="flex-1" />
            </div>

            {/* ── Home indicator ── */}
            <div className="flex justify-center pb-2 pt-1">
              <div
                style={{
                  width: "120px",
                  height: "5px",
                  borderRadius: "3px",
                  background: "#6E6E73",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
