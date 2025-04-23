import React from "react";
import DotLoader from "../DotLoader/DotLoader";

export default function LoadingPage() {
  return (
    <section className="min-h-[calc(100vh-10rem)] flex justify-center items-center">
      <div>
        <DotLoader bgColor="black"></DotLoader>
      </div>
    </section>
  );
}
