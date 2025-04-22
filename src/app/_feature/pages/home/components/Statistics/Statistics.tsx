import React from "react";

export default function Statistics() {
  const statisticsData = [
    {
      id: 1,
      title: "10.5k",
      subtitle: "Sallers active our site",
      icon: "fa-shop",
      // color:"secondary"
    },
    {
      id: 2,
      title: "33k",
      subtitle: "Mopnthly Produduct Sale",
      icon: "fa-dollar-sign",
      // color:"main"
    },
    {
      id: 3,
      title: "45.5k",
      subtitle: "Customer active in our site",
      icon: "fa-suitcase",
      // color:"secondary"
    },
    {
      id: 4,
      title: "25k",
      subtitle: "Anual gross sale in our site",
      icon: "fa-sack-dollar",
      // color:"secondary"
    },
  ];
  return (
    <section className="mb-20">
      {/* <header>
        <h2 className="mb-8 text-4xl font-[500]">Statistics</h2>
      </header> */}
      <h2></h2>
      <main
        className={`statistics text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9`}
      >
        {statisticsData.map((item) => (
          <div
            key={item.id}
            className={`group box  border-gray-300 duration-500 hover:bg-main rounded-md p-7`}
          >
            <div className="w-20 h-20 mx-auto flex justify-center items-center rounded-full bg-gray-300 duration-500">
              <div className="w-14 h-14 flex justify-center items-center rounded-full bg-secondary group-hover:bg-main duration-300">
                <i className={`fa-solid ${item.icon} fa-xl text-white`}></i>
              </div>
            </div>
            <h2
              className={`font-semibold text-[2rem] mt-3 duration-500 text-secondary`}
            >
              {item.title}{" "}
            </h2>
            <p className="duration-300">{item.subtitle}</p>
          </div>
        ))}
      </main>
    </section>
  );
}
