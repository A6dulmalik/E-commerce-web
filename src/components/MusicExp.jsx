import speaker from "../assets/speakerFrame.jpg";

function MusicExp() {
  return (
    <>
      {/* MUSIC SPEAKER SECTION */}
      <div className="flex flex-wrap justify-between w-[1170px] h-[460px] my-16">
        <img src={speaker} className="h-full w-full" />
        {/* <div className="w-1/2">
          <p className="text-[#47B486] text-xl ">Categories</p>
          <span className=" text-white text-6xl">
            Enhance Your Music <br />
            Experience
          </span>
        </div>
        <div className="w-[520px] h-80">
          <img src={speaker} className="drop  w-full h-full" />
        </div> */}
      </div>
    </>
  );
}

export default MusicExp;
