"use client";

import { useState, useRef, useEffect } from "react";

const CONFIG = {
  centreName: "PhysioHeal Centre",
  greeting: "Hello! 👋 I'm your Physiotherapy assistant. You can ask me anything about back pain, knee injuries, exercises, or treatments!",
  accentColor: "#0d9488",
  accentLight: "#ccfbf1",
  accentDark: "#0f766e",
  quickQuestions: [
    "What exercises help with back pain?",
    "What is the treatment for knee pain?",
    "How long does a physiotherapy session last?",
    "What is the treatment for cervical spondylosis?",
    "What is frozen shoulder?",
    "How can I prevent sciatica pain?",
  ],
};

const IconChat = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const IconClose = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconSend = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const IconBot = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M12 11V5" /><circle cx="12" cy="4" r="1" />
    <line x1="8" y1="16" x2="8" y2="16" strokeWidth="3" />
    <line x1="16" y1="16" x2="16" y2="16" strokeWidth="3" />
  </svg>
);

if (typeof document !== "undefined") {
  const styleId = "physio-chat-styles";
  if (!document.getElementById(styleId)) {
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = `
      @keyframes bounce {
        0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
        40% { transform: translateY(-5px); opacity: 1; }
      }
      #physio-bubble:hover { transform: scale(1.08) !important; }
    `;
    document.head.appendChild(tag);
  }
}

function TypingDots() {
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "center", padding: "2px 0" }}>
      {[0, 1, 2].map((i) => (
        <span key={i} style={{
          width: 7, height: 7, borderRadius: "50%", background: "#94a3b8",
          display: "inline-block", animation: "bounce 0.9s infinite ease-in-out",
          animationDelay: `${i * 0.18}s`
        }} />
      ))}
    </div>
  );
}

export default function PhysioChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "bot", text: CONFIG.greeting }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showQuick, setShowQuick] = useState(true);
  const [unread, setUnread] = useState(0);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const historyRef = useRef([]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) { setUnread(0); setTimeout(() => inputRef.current?.focus(), 300); }
  }, [open]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;
    setInput("");
    setShowQuick(false);
    setLoading(true);
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    historyRef.current = [...historyRef.current, { role: "user", content: userText }];

    try {
      const res = await fetch("/api/physio-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: historyRef.current }),
      });
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();
      const reply = data.reply || "Sorry, something went wrong. Please try again.";
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
      historyRef.current = [...historyRef.current, { role: "assistant", content: reply }];
      if (!open) setUnread((n) => n + 1);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { role: "bot", text: "Something went wrong. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        id="physio-bubble"
        onClick={() => setOpen((v) => !v)}
        style={{ position:"fixed", bottom:24, left:24, width:56, height:56, borderRadius:"50%",
          border:"none", background:CONFIG.accentColor, color:"#fff", cursor:"pointer",
          display:"flex", alignItems:"center", justifyContent:"center",
          boxShadow:"0 4px 20px rgba(0,0,0,0.18)", zIndex:9999,
          transition:"transform 0.2s ease" }}
        aria-label="Open chat"
      >
        {open ? <IconClose /> : <IconChat />}
        {!open && unread > 0 && (
          <span style={{ position:"absolute", top:-3, right:-3, background:"#ef4444",
            color:"#fff", fontSize:10, fontWeight:700, width:18, height:18,
            borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center",
            border:"2px solid #fff" }}>{unread}</span>
        )}
      </button>

      <div style={{ position:"fixed", bottom:92, left:24, width:360,
        maxWidth:"calc(100vw - 32px)", height:540, maxHeight:"calc(100vh - 110px)",
        background:"#fff", borderRadius:16, boxShadow:"0 8px 40px rgba(0,0,0,0.16)",
        display:"flex", flexDirection:"column", overflow:"hidden", zIndex:9998,
        border:"0.5px solid #e2e8f0",
        opacity: open ? 1 : 0, pointerEvents: open ? "all" : "none",
        transform: open ? "scale(1) translateY(0)" : "scale(0.92) translateY(16px)",
        transition:"opacity 0.25s ease, transform 0.25s ease" }}>

        {/* Header */}
        <div style={{ padding:"14px 16px", display:"flex", alignItems:"center",
          gap:10, background:CONFIG.accentColor, color:"#fff", flexShrink:0 }}>
          <div style={{ width:36, height:36, borderRadius:"50%",
            background:"rgba(255,255,255,0.2)", display:"flex",
            alignItems:"center", justifyContent:"center", flexShrink:0 }}>
            <IconBot />
          </div>
          <div>
            <p style={{ fontSize:14, fontWeight:600, color:"#fff", margin:0 }}>{CONFIG.centreName}</p>
            <p style={{ fontSize:11, color:"rgba(255,255,255,0.85)", margin:0,
              display:"flex", alignItems:"center", gap:4 }}>
              <span style={{ width:6, height:6, borderRadius:"50%",
                background:"#86efac", display:"inline-block" }} />
              AI Assistant • Online
            </p>
          </div>
          <button onClick={() => setOpen(false)} style={{ marginLeft:"auto",
            background:"transparent", border:"none", color:"rgba(255,255,255,0.85)",
            cursor:"pointer", padding:4, borderRadius:6, display:"flex",
            alignItems:"center", justifyContent:"center" }}>
            <IconClose />
          </button>
        </div>

        {/* Messages */}
        <div style={{ flex:1, overflowY:"auto", padding:"14px 14px 6px",
          display:"flex", flexDirection:"column", gap:10 }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ display:"flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
              {msg.role === "bot" && (
                <div style={{ width:28, height:28, borderRadius:"50%",
                  background:CONFIG.accentLight, color:CONFIG.accentDark,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  flexShrink:0, alignSelf:"flex-end", marginRight:6 }}>
                  <IconBot />
                </div>
              )}
              <div style={{ maxWidth:"75%", padding:"9px 13px", fontSize:13,
                lineHeight:1.55, borderRadius:14,
                ...(msg.role === "user"
                  ? { background:CONFIG.accentColor, color:"#fff", borderRadius:"14px 4px 14px 14px" }
                  : { background:"#f1f5f9", color:"#1e293b", borderRadius:"4px 14px 14px 14px" }) }}>
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              <div style={{ width:28, height:28, borderRadius:"50%",
                background:CONFIG.accentLight, color:CONFIG.accentDark,
                display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <IconBot />
              </div>
              <div style={{ background:"#f1f5f9", padding:"9px 13px",
                borderRadius:"4px 14px 14px 14px" }}>
                <TypingDots />
              </div>
            </div>
          )}

          {showQuick && !loading && (
            <div style={{ marginTop:4 }}>
              <p style={{ fontSize:11, color:"#94a3b8", marginBottom:8 }}>Common questions 👇</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                {CONFIG.quickQuestions.map((q, i) => (
                  <button key={i} onClick={() => sendMessage(q)}
                    style={{ fontSize:11, padding:"5px 10px", border:`1px solid ${CONFIG.accentColor}`,
                      borderRadius:20, background:"transparent", color:CONFIG.accentDark,
                      cursor:"pointer", fontFamily:"inherit" }}>
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div style={{ display:"flex", gap:8, padding:"10px 12px",
          borderTop:"1px solid #f1f5f9", flexShrink:0 }}>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your question here..."
            disabled={loading}
            style={{ flex:1, fontSize:13, padding:"9px 12px",
              border:"1px solid #e2e8f0", borderRadius:10, outline:"none",
              fontFamily:"inherit", background:"#f8fafc", color:"#1e293b" }}
          />
          <button onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            style={{ width:38, height:38, borderRadius:10, border:"none",
              color:"#fff", display:"flex", alignItems:"center", justifyContent:"center",
              flexShrink:0, transition:"background 0.15s", cursor: input.trim() && !loading ? "pointer" : "not-allowed",
              background: input.trim() && !loading ? CONFIG.accentColor : "#e2e8f0" }}>
            <IconSend />
          </button>
        </div>

        <p style={{ textAlign:"center", fontSize:10, color:"#cbd5e1", padding:"4px 0 8px", flexShrink:0 }}>
          Powered by AI • Please consult a doctor for serious issues
        </p>
      </div>
    </>
  );
}