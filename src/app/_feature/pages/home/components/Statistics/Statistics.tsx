import React from "react";

export default function Statistics() {
  const statisticsData = [
    {
      id: 1,
      title: "10.5k",
      subtitle: "Sallers active our site",
      icon: "fa-shop",
    },
    {
      id: 2,
      title: "33k",
      subtitle: "Mopnthly Produduct Sale",
      icon: "fa-dollar-sign",
    },
    {
      id: 3,
      title: "45.5k",
      subtitle: "Customer active in our site",
      icon: "fa-suitcase",
    },
    {
      id: 4,
      title: "25k",
      subtitle: "Anual gross sale in our site",
      icon: "fa-sack-dollar",
    },
  ];
  return (
    <section className="mb-20">
      <main
        className={`statistics text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9`}
      >
        {statisticsData.map((item) => (
          <div
            key={item.id}
            className={`group box  border-gray-300 duration-500 hover:bg-main rounded-md p-7`}
          >
            <div className="w-16 h-16 mx-auto flex justify-center items-center rounded-full bg-gray-300 group-hover:bg-white duration-500">
              <div className="w-[80%] h-[80%] flex justify-center items-center rounded-full bg-secondary group-hover:bg-main duration-300">
                <i className={`fa-solid ${item.icon} fa-xl text-white`}></i>
              </div>
            </div>
            <h2
              className={`font-semibold text-[1.6rem] mt-3 duration-500 text-secondary`}
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
