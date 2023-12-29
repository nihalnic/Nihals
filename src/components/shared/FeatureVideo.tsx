import { featureVideo } from "@/constants";
import React from "react";

const FeatureVideo: React.FC = () => {
  const { image, alt } = featureVideo[0];

  return (
    <div className="flex justify-between">
      <div className="bg-zinc-600 p-2 rounded-lg mt-12">
        <img
          src={image}
          alt={alt}
          className="rounded-md w-full h-full"
        />
      </div>
      <div className="flex-1 w-full">
        <h1>Hello form the there side.</h1>
        </div>
    </div>
  );
};

export default FeatureVideo;
