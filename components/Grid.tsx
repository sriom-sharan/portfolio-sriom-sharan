import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems, skillsFrontend,skillsBackend,libraries } from "@/data";
import { Fragment } from "react";
import { FaReact } from "react-icons/fa";
const Grid = () => {
  return (
    <section id="about" className="">
        <div className="sm:mt-10 z-50 mt-6">
          <h1 className="heading">
            Technical {" "}
            <span className="text-purple">Skills </span>
          </h1>
        </div>
      <div className="flex sm:flex-row flex-col  my-4 justify-around items-center">
      <div className="flex flex-col gap-4 md:gap-6 mt-10">
        {/* <h1 className="text-2xl text-purple border-b-2 pb-2">Languages</h1> */}
        {skillsFrontend.map(({ title, img, id,  }) => (
         <Fragment key={id}>
         <div className="flex items-center md:max-w-60 max-w-full gap-2">
           {/* <{img} className="md:w-10 w-5" /> */}
           <img
             src={img}
             alt={title}
             width={id === 4 || id === 5 ? 100 : 150}
             className={`w-6 ${!title?'md:w-16':'md:w-9'}`}
           />
           <h1 className="text-lg  ">{title}</h1>
         </div>
       </Fragment>
        ))}
      </div>
      {/* Backend */}
      <div className="flex flex-col flex-wrap  gap-4 md:gap-6 max-lg: mt-10">
        {/* <h1 className="text-2xl text-purple border-b-2 pb-2">Backend</h1> */}
        {skillsBackend.map(({ title, img, id,  }) => (
          <Fragment key={id}>
            <div className="flex items-center md:max-w-60 max-w-full gap-2">
              {/* <{img} className="md:w-10 w-5" /> */}
              <img
                src={img}
                alt={title}
                width={id === 4 || id === 5 ? 100 : 150}
                className={`w-6 ${!title?'md:w-14':'md:w-9'}`}
              />
              <h1 className="text-lg ">{title}</h1>
            </div>
          </Fragment>
        ))}
      </div>  
      {/* Libraries */}
      <div className="flex flex-col flex-wrap  gap-4 md:gap-6 max-lg: mt-10">
        {/* <h1 className="text-2xl text-purple border-b-2 pb-2">Libraries</h1> */}
        {libraries.map(({ title, img, id,  }) => (
          <Fragment key={id}>
            <div className="flex items-center md:max-w-60 max-w-full  gap-2">
              {/* <{img} className="md:w-10 w-5" /> */}
              <img
                src={img}
                alt={title}
                width={id === 4 || id === 5 ? 100 : 150}
                className={`w-6 ${!title?'md:w-16':'md:w-9'}`}
              />
              <h1 className="text-lg ">{title}</h1>
            </div>
          </Fragment>
        ))}
      </div>  
      </div>
      <BentoGrid className="w-full py-20">
        {gridItems.map(
          (
            {
              id,
              title,
              description,
              className,
              img,
              spareImg,
              titleClassName,
              imgClassName,
            },
            i
          ) => (
            <BentoGridItem
              id={id}
              key={i}
              title={title}
              description={description}
              // remove icon prop
              // remove original classname condition
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
