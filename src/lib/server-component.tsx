import { getVariableValue } from "@/app/devcycle";
import React from "react";

async function ServerComponent() {
  const featureAFlag = await getVariableValue("feature-a", false);

  return (
    <>
      <div>ServerComponent</div>
      <div>Feature A: {featureAFlag.toString()}</div>
    </>
  );
}

export default ServerComponent;
