import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="mx-auto pt-20">
      <div className="text-center flex gap-4 justify-center">
        <p className="px-4 py-2 text-lg cursor-pointer font-semibold bg-yellow-400 rounded-lg">
          All
        </p>
        <p className="px-4 py-2 text-lg cursor-pointer font-semibold">
          Manpower Supply
        </p>
        <p className="px-4 py-2 text-lg cursor-pointer font-semibold">
          Mobile App / Websites
        </p>
        <p className="px-4 py-2 text-lg cursor-pointer font-semibold">
          UI/UX Design
        </p>
      </div>
      <div className="pt-10 grid grid-cols-12 gap-5 px-10">
        <div className=" relative w-[25rem] h-[25rem] col-span-4 shadow-lg rounded-lg cursor-pointer">
          <img
            src="https://tekup.vn/wp-content/uploads/2022/09/image-1.png"
            alt=""
          />
          <div className="absolute flex justify-between items-center p-4 shadow-lg w-[85%] h-10 left-[calc((100%-85%)/2)] bottom-4 bg-white rounded-lg">
            <p className="font-medium">TOI 3D Customize E-commerce</p>
            <FontAwesomeIcon icon={faChevronRight} className="w-2" />
          </div>
        </div>
        <div className=" relative w-[25rem] h-[25rem] col-span-4 shadow-lg rounded-lg cursor-pointer">
          <img
            src="https://tekup.vn/wp-content/uploads/2022/09/image-1.png"
            alt=""
          />
          <div className="absolute flex justify-between items-center p-4 shadow-lg w-[85%] h-10 left-[calc((100%-85%)/2)] bottom-4 bg-white rounded-lg">
            <p className="font-medium">TOI 3D Customize E-commerce</p>
            <FontAwesomeIcon icon={faChevronRight} className="w-2" />
          </div>
        </div>
        <div className=" relative w-[25rem] h-[25rem] col-span-4 shadow-lg rounded-lg cursor-pointer">
          <img
            src="https://tekup.vn/wp-content/uploads/2022/09/image-1.png"
            alt=""
          />
          <div className="absolute flex justify-between items-center p-4 shadow-lg w-[85%] h-10 left-[calc((100%-85%)/2)] bottom-4 bg-white rounded-lg">
            <p className="font-medium">TOI 3D Customize E-commerce</p>
            <FontAwesomeIcon icon={faChevronRight} className="w-2" />
          </div>
        </div>
        <div className=" relative w-[25rem] h-[25rem] col-span-4 shadow-lg rounded-lg cursor-pointer">
          <img
            src="https://tekup.vn/wp-content/uploads/2022/09/image-1.png"
            alt=""
          />
          <div className="absolute flex justify-between items-center p-4 shadow-lg w-[85%] h-10 left-[calc((100%-85%)/2)] bottom-4 bg-white rounded-lg">
            <p className="font-medium">TOI 3D Customize E-commerce</p>
            <FontAwesomeIcon icon={faChevronRight} className="w-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
