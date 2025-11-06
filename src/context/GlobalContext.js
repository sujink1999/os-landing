"use client";

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Initialize state from localStorage (only runs once on mount)
  const [userEmail, setUserEmail] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("vanta_user_email") || null;
    }
    return null;
  });

  const [hasSubmittedEmail, setHasSubmittedEmail] = useState(() => {
    if (typeof window !== "undefined") {
      return !!localStorage.getItem("vanta_user_email");
    }
    return false;
  });

  // Save email to localStorage and update state
  const saveEmail = (email) => {
    localStorage.setItem("vanta_user_email", email);
    setUserEmail(email);
    setHasSubmittedEmail(true);
  };

  // Clear email from localStorage and state
  const clearEmail = () => {
    localStorage.removeItem("vanta_user_email");
    setUserEmail(null);
    setHasSubmittedEmail(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        userEmail,
        hasSubmittedEmail,
        saveEmail,
        clearEmail,
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
