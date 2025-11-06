"use client";

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Initialize state from localStorage (only runs once on mount)
  const [hasRecordedEmail, setHasRecordedEmail] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("vanta_email_recorded") === "true";
    }
    return false;
  });

  // Record email via API and update localStorage
  const recordEmail = async (email) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/api/investors`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to record email");
      }

      const data = await response.json();

      // Only store boolean flag, not the email
      localStorage.setItem("vanta_email_recorded", "true");
      setHasRecordedEmail(true);

      return { success: true, data };
    } catch (error) {
      console.error("Error recording email:", error);
      return { success: false, error: error.message };
    }
  };

  // Clear recorded email status
  const clearEmailRecord = () => {
    localStorage.removeItem("vanta_email_recorded");
    setHasRecordedEmail(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        hasRecordedEmail,
        recordEmail,
        clearEmailRecord,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
