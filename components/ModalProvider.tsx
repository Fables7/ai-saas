"use client";
import React, { useEffect } from "react";
import ProModal from "./ProModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <ProModal />
    </>
  );
};

export default ModalProvider;
