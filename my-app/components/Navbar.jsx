export default function Navbar(){
    return(
        <nav className="flex justify-between bg-[#FFC815] fixed top-0 right-0 w-[300px] min-h-[60px]">
            <div className="py-1 px-4">
                <h1 className="text-white text-xl font-semibold leading-[50px]">LOGO</h1>
            </div>
            <div className="hidden">
                <ul className="flex flex-col md:flex-row">
                    <li><a href="http://">HOME</a></li>
                    <li><a href="http://">ABOUT US</a></li>
                    <li><a href="http://">RESUME</a></li>
                    <li><a href="http://">PORTFOLIO</a></li>
                    <li><a href="http://">CONTACT ME</a></li>
                </ul>
            </div>
            <div className=" flex flex-col justify-center items-center bg-black w-[60px] h-[60px] cursor-pointer">
                <span className="bg-white w-6 h-[2px]"></span>
                <span className="bg-white w-9 h-[2px] my-2"></span>
                <span className="bg-white w-6 h-[2px]"></span>
            </div>
        </nav>
    )
}