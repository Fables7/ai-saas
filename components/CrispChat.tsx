"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("06ebf015-1881-4e3a-95ab-2f9a21774d82");
  }, []);

  return null;
};
