import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]); // This line is new!

  function transition(newMode, result = false) {

    if (!result) {
      setHistory(prev => [...prev, newMode]);
    }

    setHistory(prev => [...prev.slice(0, -1), newMode]);
  }

  function back() {
    if (history.length > 1) {
      setHistory(prev => [...prev.slice(0, prev.length - 1)]);
    }
  }

  return { mode: history[history.length - 1], transition, back };
}

