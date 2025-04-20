import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function notfound() {
  return (
    <section className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center gap-y-4 py-5">
      <Image
        src={"/images/notFound/notFound.jpg"}
        width={400}
        height={400}
        alt="404 not found"
      ></Image>
      <h2 className="text-4xl font-bold text-center">That Page Cant Be Found</h2>
      <p className="text-[#6B7280] xl:w-1/3 mx-auto text-center">
        It looks like nothing was found at this location. Maybe try to search
        for what you are looking for?
      </p>
      <Link
        href={"/"}
        className="bg-[#1B1A41] text-white px-8 py-3 rounded-md font-[500]"
      >
        Go To Home
      </Link>
    </section>
  );
}
