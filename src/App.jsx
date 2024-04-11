import { Fragment } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { RxMixerVertical } from "react-icons/rx";
import { GoHome } from "react-icons/go";
import { GiDiscussion } from "react-icons/gi";
import { IoBagAddOutline } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
function App() {
  return (
    <Fragment>
      <nav className="flex justify-between p-3 items-center">
        <h1 className=" font-bold">
          Now<span className=" text-[#c863b9]">Ur</span>Turn
        </h1>
        <IoChatbubbleEllipsesOutline
          className=" text-[#a6a7a8] font-bold"
          size={25}
        />
      </nav>
      <div className="bg-gradient-to-r from-[#4c44ba] to-[#192d8b]">
        <div className="p-3">
          <h1 className=" text-white font-bold">Hey Natasha!!</h1>
          <h2 className=" text-white font-bold">
            Your Next Career Opportunity Awaits!
          </h2>
        </div>
        <div className="flex justify-between items-center p-3 gap-3 rounded-t-2xl mt-2 bg-white">
          <div className="flex border-2 border-[#6C86FF] rounded-lg px-1 justify-between items-center w-full">
            <input
              type="text"
              placeholder="Search"
              className="appearance-none focus:outline-none flex items-center py-2"
            />
            <IoSearch className=" text-[#6e88ff]" size={25} />
          </div>
          <RxMixerVertical
            className=" bg-[#5271ff] text-white p-0.5 border rounded-md"
            size={30}
          />
        </div>
      </div>
      <div className=" bg-white px-3 mt-5 overflow-x-hidden">
        <h3 className=" font-bold">Popular Jobs</h3>
        <div className="flex mt-2 gap-3 overflow-x-auto">
          <div className=" bg-gradient-to-tr from-[#3fb9ff] to-[#1a7dff] border rounded-xl p-3">
            <div className=" flex gap-2">
              <img
                src="https://siva.jsstatic.com/ph/45570/images/logo/45570_logo_0_437848.jpg"
                alt=""
                width={50}
                className="rounded-xl border"
              />
              <div>
                <h1 className=" font-bold text-white text-xl">TCS</h1>
                <p className=" font-semibold text-white">Banglore, India</p>
              </div>
            </div>
            <div className="mt-2">
              <h1 className=" text-white font-bold">
                Senior Back-end Developer
              </h1>
              <p className=" text-white text-sm">
                Minimum 5+ years of experience
              </p>
              <ul className="flex justify-between items-center mt-2 gap-2 w-[15rem]">
                <li className=" bg-gradient-to-r from-[#6cbfff] to-[#65b5ff] text-white font-normal rounded-lg px-2">
                  11-20 lakh
                </li>
                <li className=" bg-gradient-to-r from-[#6cbfff] to-[#65b5ff] text-white font-normal  rounded-lg px-1">
                  {" "}
                  Full Time
                </li>
                <li className=" bg-gradient-to-r from-[#6cbfff] to-[#65b5ff] text-white font-normal  rounded-lg px-1">
                  On-site
                </li>
              </ul>
            </div>
          </div>
          <div className=" bg-gradient-to-tr from-[#3fb9ff] to-[#1a7dff] border rounded-xl p-2">
            <div className=" flex gap-2">
              <img
                src="https://siva.jsstatic.com/ph/45570/images/logo/45570_logo_0_437848.jpg"
                alt=""
                width={50}
                className="rounded-xl border"
              />
              <div>
                <h1 className=" font-bold text-white text-xl">TCS</h1>
                <p className=" font-semibold text-white">Banglore, India</p>
              </div>
            </div>
            <div className="mt-2">
              <h1 className=" text-white font-bold">
                Senior Back-end Developer
              </h1>
              <p className=" text-white text-sm">
                Minimum 5+ years of experience
              </p>
              <ul className="flex justify-between items-center mt-2 gap-2 w-[15rem]">
                <li className=" bg-gradient-to-r from-[#6cbfff] to-[#65b5ff] text-white font-normal rounded-lg px-2">
                  11-20 lakh
                </li>
                <li className=" bg-gradient-to-r from-[#6cbfff] to-[#65b5ff] text-white font-normal  rounded-lg px-1">
                  {" "}
                  Full Time
                </li>
                <li className=" bg-gradient-to-r from-[#6cbfff] to-[#65b5ff] text-white font-normal  rounded-lg px-1">
                  On-site
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" mt-8 h-[305px]">
          <h1 className=" font-bold text-xl">Recent Jobs</h1>
          <div className="flex bg-[#f2f7ff] justify-center items-center border rounded-xl p-3 gap-2">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.h7swg-Li8WPYAXWjQ8wbAAAAAA&pid=Api&P=0&h=220"
              alt=""
              className=" w-20 h-20"
            />
            <div>
              <h1 className="text-[#0951b0] font-bold">Google</h1>
              <p className=" text-sm font-normal">
                #Senior UI/UX Designer #Full Time #8-10 lakh/year #On-site
                #Minimum 5+ years of experience #Bangalore, India
              </p>
            </div>
          </div>
          <div className="flex bg-[#f2f7ff] justify-center items-center border rounded-xl p-3 gap-2 mt-5">
            <img
              src="https://partners.sigfox.com/assets/logo-for/5c8f90a8c245010f739d0427"
              alt=""
              className=" w-20 h-20"
            />
            <div>
              <h1 className="text-[#0951b0] font-bold">Capgemini</h1>
              <p className=" text-sm font-normal">
                #Senior UI/UX Designer #Full Time #8-10 lakh/year #On-site
                #Minimum 5+ years of experience #Bangalore, India
              </p>
            </div>
          </div>
          <div className="flex bg-[#f2f7ff] justify-center items-center border rounded-xl p-3 gap-2 mt-5">
            <img
              src="https://logos-world.net/wp-content/uploads/2020/09/Oracle-Symbol-700x394.png"
              alt=""
              className=" w-20 h-20"
            />
            <div>
              <h1 className="text-[#0951b0] font-bold">Oracle</h1>
              <p className=" text-sm font-normal">
                #Senior UI/UX Designer #Full Time #8-10 lakh/year #On-site
                #Minimum 5+ years of experience #Bangalore, India
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-red">
          <div className=" bg-white">
          <ul className="flex justify-between p-3">
            <li>
              <div>
                <GoHome size={40} color="#b5d4ff"/>
                <p className=" text-[#b5d4ff]">Home</p>
              </div>
            </li>
            <li>
              <div>
                <GiDiscussion size={40} color="#b5d4ff"/>
                <p className=" text-[#b5d4ff]">Discuss</p>
              </div>
            </li>
            <li>
              <div>
              <IoBagAddOutline size={40} color="#006dff" />
                <p className=" text-[#006dff]">Jobs</p>
              </div>
            </li>
            <li>
              <div>
              <IoMdCart size={40} color="#b5d4ff"/>
                <p className=" text-[#b5d4ff]">my cart</p>
              </div>
            </li>
            <li>
              <div>
              <CgProfile size={40} color="#b5d4ff"/>
                <p className=" text-[#b5d4ff]">Profile</p>
              </div>
            </li>
          </ul>
          </div>
        </footer>
    </Fragment>
  );
}

export default App;
