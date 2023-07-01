import React from "react";
import Title from "./Title/Title";
import Image from "./Image/Image";
import { motion } from "framer-motion";

const Content = ({ locate }) => {
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 10, type: "spring", stiffness: 85 }}
        className="p-4 sm:px-[25%]"
      >
        <Title title={locate[0][Object.keys(locate[0])]} />
        <div className="grid grid-cols gap-5 indent-5 lg:text-lg">
          {locate[1].map((par, i) => {
            if (Object.keys(par).includes("pic")) {
              const imgName = par.alt;
              return (
                <div
                  key={i}
                  className="my-5 text-center  sm:max-h-[28rem] flex flex-col items-center justify-center"
                >
                  <Image imgName={imgName} source={par.pic} />
                  <p className="text-sm text-gray-500 text-center capitalize -ml-2">
                    {imgName}
                  </p>
                </div>
              );
            } else {
              return (
                <p
                  key={i}
                  className={
                    Object.keys(par).includes("paragraphOne") ? "indent-0 " : ""
                  }
                >
                  {par[Object.keys(par)]}
                </p>
              );
            }
          })}
        </div>
        {locate[2] ? (
          <div className="mt-8">
            <h2 className="font-bold mb-1 text-lg lg:text-2xl">Interpretasi</h2>
            <div className="grid grid-cols gap-3 indent-5 lg:text-lg">
              {locate[2].map((par, i) => {
                return (
                  <p
                    key={i}
                    className={
                      Object.keys(par).includes("paragraphOne")
                        ? "indent-0"
                        : ""
                    }
                  >
                    {par[Object.keys(par)]}
                  </p>
                );
              })}
              {locate[3] ? (
                <div className="text-center italic">
                  {locate[3].map((part, i) => {
                    const paragraph =
                      Object.keys(part)[0].includes("paragraph");
                    if (paragraph)
                      return (
                        <p className key={i}>
                          {part[Object.keys(part)]}
                        </p>
                      );
                    return (
                      <div key={i} className="flex justify-center items-center">
                        <p className="">{part[Object.keys(part)][0]}</p>
                        <p className="ml-[-15px]">
                          {part[Object.keys(part)][1]}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </motion.div>
    </>
  );
};

export default Content;
