"use client";

import { useVariableValue } from "@devcycle/nextjs-sdk";
import React from "react";

function ClientComponent() {
  const featureAFlag = useVariableValue("feature-a", false);
  return (
    <>
      <div>ClientComponent</div>
      <div>Feature A: {featureAFlag.toString()}</div>
    </>
  );
}

export default ClientComponent;
