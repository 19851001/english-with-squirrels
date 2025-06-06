import { useState } from "react";

export default function Home() {
  const [showTranslation, setShowTranslation] = useState(false);
  const [answer, setAnswer] = useState(null);

  const correctAnswer = "My name is Lily.";

  return (
    <div style={{ fontFamily: "Arial", padding: "20px", background: "#f0fdf4", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#15803d" }}>English with Squirrels!</h1>

      <div style={{ maxWidth: "600px", margin: "20px auto", background: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
        <h2>Watch the Video</h2>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, marginBottom: "20px" }}>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Squirrel Story"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            allowFullScreen
          ></iframe>
        </div>
        <p>Lily: Hello! What’s your name?</p>
        <p>Ruby: My name is Ruby. What’s your name?</p>
        <p>Lily: My name is Lily. How old are you?</p>
        <p>Ruby: I’m six. How old are you?</p>
        <p>Lily: I’m five. Goodbye!</p>
        <p>Ruby: Bye!</p>

        <button onClick={() => setShowTranslation(!showTranslation)} style={{ marginTop: "10px" }}>
          {showTranslation ? "Hide Translation" : "Show Translation"}
        </button>

        {showTranslation && (
          <div style={{ marginTop: "10px", textAlign: "left" }}>
            <p>Lily: Привет! Как тебя зовут?</p>
            <p>Ruby: Меня зовут Руби. А тебя?</p>
            <p>Lily: Меня зовут Лили. Сколько тебе лет?</p>
            <p>Ruby: Мне шесть. А тебе?</p>
            <p>Lily: Мне пять. Пока!</p>
            <p>Ruby: Пока!</p>
          </div>
        )}
      </div>

      <div style={{ maxWidth: "600px", margin: "20px auto", background: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
        <h2>Exercise: Choose the Correct Answer</h2>
        <p>What did Lily say?</p>
        {["My name is Lily.", "I am Ruby.", "How old are you?"].map((option, index) => (
          <button
            key={index}
            onClick={() => setAnswer(option)}
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              margin: "5px 0",
              background: answer === option ? "#bbf7d0" : "#e0f2fe",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            {option}
          </button>
        ))}
        {answer && (
          <p style={{ marginTop: "10px" }}>
            {answer === correctAnswer ? "✅ Correct!" : "❌ Try again."}
          </p>
        )}
      </div>
    </div>
  );
}
