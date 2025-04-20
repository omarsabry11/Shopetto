import DotLoader from "@/app/_core/components/DotLoader/DotLoader";
import React from "react";

export default function loading() {
  return (
    <section className="min-h-lvh flex items-center justify-center">
      <div className="mb-20">
        <DotLoader bgColor="black"></DotLoader>
      </div>
    </section>
  );
}
