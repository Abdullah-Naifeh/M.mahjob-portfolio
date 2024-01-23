import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main className="flex h-[91vh]">
        <div className="w-[30%] bg-slate-800">
          <img src=""></img>
        </div>
        <div className="w-[70%]">
          <div className="flex flex-col justify-around items-start p-9 m-9">
            <h5 className="text-[14px] leading-5 font-semibold md:text-[18px]  ">HELLO, THERE</h5>
            <h1>I AM MOHAMMED MAHJOUB</h1>
            <button>
              DOWNLOAD CV
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
