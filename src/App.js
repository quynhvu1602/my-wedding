import "./App.css";
import T from "./assets/Untitled-2.png";
import reception from "./assets/reception.svg";
import rings from "./assets/rings.svg";
import tpbankq from "./assets/tpbankq.png";
import { ButtonScrollTop } from "./ScrollTop.tsx";
import { useRef, useState, useEffect } from "react";
import list from "./assets/list.svg";
import close from "./assets/close.svg";

const A = [
  { name: "home", href: "#home" },
  { name: "cô dâu & chú rể", href: "#couple" },
  { name: "sự kiện", href: "#events" },
  { name: "gallery", href: "#gallery" },
  { name: "địa điểm", href: "#map" },
];
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    console.log(document.fullscreenElement?.scrollHeight);
    window.addEventListener("scroll", (e) => {
      console.log("sticky >> ref", ref)
      console.log("run thid", ref?.current?.offsetTop)
      if (!ref?.current) return;
      var sticky = ref?.current?.offsetTop;
      console.log("sticky >>", sticky)
      if (window.scrollY >= sticky) {
        ref?.current?.classList.add("sticky")
      } else {
        ref?.current?.classList.remove("sticky");
      }
    });
    return window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <div className="w-full relative">
      <section id="home" className="h-screen w-screen bg-blue-300 relative">
        <img
          src="https://picsum.photos/seed/picsum/200/300"
          alt="d"
          className="w-full h-full"
        />
        <div className="w-full h-full z-10 absolute top-0 left-0 flex flex-col items-center justify-end text-white space-y-8 p-4 pb-16 md:p-10 lg:p-20 title">
          <p className="text-[44px] md:text-[64px] text-center">
            Ngọc Quỳnh <br className="block md:hidden" />&
            <br className="block md:hidden" /> Việt Hoàn
          </p>
          <p className="text-[20px] md:text-[22px] uppercase !font-extrabold">
            Lễ Vu Quy
          </p>
          <div className=" flex flex-col items-center">
            <p className="text-[20px] md:text-[22px] uppercase">
              Chủ nhật, 22.10.2023 11:00:00
            </p>
            <p className="text-[16px]">Đông Hợp, Đông Hưng, Thái Bình</p>
          </div>
        </div>
      </section>
      <div className="w-full static">
        <div className="" ref={ref}>
          {/* nav mobile */}
          <div
            className={`block group bg-[#f8f9fa] text-black px-4 pt-3 space-y-10 md:hidden transition-[height] ease-in-out delay-150 duration-700 ${
              isOpen ? "h-[350px]" : "h-16"
            }`}
          >
            <button
              className="cursor-pointer w-14 h-10 bg-white border border-gray-300 flex justify-center items-center rounded-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img src={isOpen ? close : list} alt="" className="w-6 h-6" />
            </button>
            <div
              className={`transition-opacity duration-700 delay-150 ease-out flex flex-col justify-center items-start gap-6 w-full  ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              {A.map((i, idx) => (
                <a
                  key={idx}
                  href={i.href}
                  className="text-[rgba(0,0,0,0.5)] uppercase tracking-tighter text-[18px] !font-sans hover:opacity-80"
                  onClick={() => setIsOpen(false)}
                >
                  {i.name}
                </a>
              ))}
            </div>
          </div>

          {/* nav */}
          <div className="hidden bg-[#f8f9fa] text-black h-16 w-full md:flex items-center justify-end gap-10 px-16">
            {A.map((i, idx) => (
              <a
                key={idx}
                href={i.href}
                className="text-[rgba(0,0,0,0.5)] uppercase tracking-tighter text-[18px] !font-sans hover:opacity-80"
                onClick={() => setIsOpen(false)}
              >
                {i.name}
              </a>
            ))}
          </div>
        </div>
        {/* couple */}
        <section
          id="couple"
          className="pt-[100px] px-4 md:px-[5rem] lg:px-[11rem] title space-y-10"
        >
          <p className="capitalize text-[40px] w-full text-center">
            cô dâu & chú rể
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
            <div className="flex flex-col items-center gap-8 bg-[#f8f9fa] p-10 rounded-md">
              <div className="w-[200px] h-[200px]">
                <img
                  src="https://picsum.photos/id/237/200/300"
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </div>
              <p className="text-[28px]">Vũ Thị Ngọc Quỳnh</p>
            </div>
            <div className="flex flex-col items-center gap-8 bg-[#f8f9fa] p-10 rounded-md">
              <div className="w-[200px] h-[200px]">
                <img
                  src="https://picsum.photos/id/237/200/300"
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </div>
              <p className="text-[28px]">Trần Việt Hoàn</p>
            </div>
          </div>
        </section>

        {/* couple option 2 */}
        <section
          id="couple"
          className="pt-[100px] px-4 md:px-[5rem] lg:px-[11rem] title space-y-10"
        >
          <p className="capitalize text-[40px] w-full text-center">
            cô dâu & chú rể
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
            <div className="flex flex-col items-center gap-8 bg-[#f8f9fa] p-10 rounded-md">
              <div className="w-[300px] h-[400px]">
                <img
                  src="https://picsum.photos/id/237/200/300"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <p className="text-[28px]">Vũ Thị Ngọc Quỳnh</p>
            </div>
            <div className="flex flex-col items-center gap-8 bg-[#f8f9fa] p-10 rounded-md">
              <div className="w-[300px] h-[400px]">
                <img
                  src="https://picsum.photos/id/237/200/300"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <p className="text-[28px]">Trần Việt Hoàn</p>
            </div>
          </div>
        </section>

        {/* place & events */}
        <section
          id="events"
          className="pt-[100px] px-4 md:px-[5rem] lg:px-[11rem] space-y-10"
        >
          <p className="capitalize text-[40px] w-full text-center title">
            sự kiện
          </p>
          <div className="flex flex-col-reverse items-center md:items-start md:flex-row gap-4">
            <div className="flex-1 lg:flex-none lg:w-[43%] p-10 border border-red-300 relative">
              <div className="w-full h-full absolute border border-red-300 rotate-3 top-0 left-0" />
              <p className="text-[#f67e7d] text-[28px]">Bữa cơm thân mật</p>
              <p>
                Mipec Palace, 229 Tây Sơn, Ngã Tư Sở, Đống Đa, Hà Nội 2023. 03.
                10. FRI PM 05:30
              </p>
            </div>
            <div className="w-[120px] h-[120px] rounded-full bg-red-200 flex items-center justify-center">
              <img src={reception} alt="" className="w-16 h-16" />
            </div>
            <div className="hidden lg:block lg:flex-1" />
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="hidden lg:block lg:w-[43%]" />
            <div className="w-[120px] h-[120px] rounded-full bg-red-200 flex items-center justify-center">
              <img src={rings} alt="" className="w-16 h-16" />
            </div>
            <div className="flex-1 lg:w-[43%] p-10 border border-red-300 relative">
              <div className="w-full h-full absolute border border-red-300 rotate-3 top-0 left-0" />
              <p className=" text-[#f67e7d] text-[28px]">Lễ thành hôn</p>
              <p>
                Mipec Palace, 229 Tây Sơn, Ngã Tư Sở, Đống Đa, Hà Nội 2023. 03.
                10. FRI PM 05:30
              </p>
            </div>
          </div>
        </section>

        {/* gallery */}
        <section
          id="gallery"
          className="pt-[100px] px-4 md:px-[5rem] lg:px-[11rem] space-y-10"
        >
          <p className="capitalize text-[40px] w-full text-center title">
            Photo Gallery
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array(8)
              .fill("https://picsum.photos/seed/picsum/200/300")
              .map((i, idx) => (
                <div key={idx} className="h-[400px]">
                  <img className="w-full h-full" alt="" src={i} />
                </div>
              ))}
          </div>
        </section>

        {/* present */}
        <section id="" className="pt-[100px] px-4 md:px-[5rem] lg:px-[11rem] space-y-10">
          <p className="capitalize text-[40px] w-full text-center title">
            Hộp mừng cưới
          </p>
          {/* version 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
            <div className="flex flex-col items-center bg-[#f8f9fa] rounded-md relative space-y-6">
              <div className="w-[60px] h-[60px] -translate-y-[50%] absolute top-0">
                <img
                  src="https://picsum.photos/id/237/200/300"
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="p-4 lg:p-10 flex flex-col items-center gap-4">
                <p className="text-[20px] font-bold mt-4">Vũ Thị Ngọc Quỳnh</p>
                <img src={tpbankq} className="w-full" alt="" />
                <div className="flex flex-col items-center">
                  <div className="w-full h-[1px] " />
                  <p className="italic text-gray-500">Số tài khoản</p>
                  <p>1903 5215 3400 14</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center  bg-[#f8f9fa] rounded-md relative space-y-6">
              <div className="w-[60px] h-[60px] -translate-y-[50%] absolute top-0">
                <img
                  src="https://picsum.photos/id/237/200/300"
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="p-4 lg:p-10 flex flex-col items-center gap-4">
                <p className="text-[20px] font-bold mt-4">Vũ Thị Ngọc Quỳnh</p>
                <img src={tpbankq} className="w-full" alt="" />
                <div className="flex flex-col items-center">
                  <div className="w-full h-[1px] " />
                  <p className="italic text-gray-500">Số tài khoản</p>
                  <p>1903 5215 3400 14</p>
                </div>
              </div>
            </div>
          </div>

          {/* version2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
            <div className="flex flex-col items-center border border-red-300 relative ">
              {/* <div className="w-full h-full absolute border border-red-300 rotate-3 top-0 left-0" /> */}
              <div className="w-[60px] h-[60px] -translate-y-[50%] absolute top-0">
                <img
                  src="https://picsum.photos/id/237/200/300"
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="p-4 lg:p-10 flex flex-col items-center gap-4 mt-4">
                <img src={tpbankq} className="w-full" alt="" />
                <div className="flex flex-col items-center">
                  <div className="w-full h-[1px] " />
                  <p className="text-[20px] font-bold italic">
                    Vũ Thị Ngọc Quỳnh
                  </p>
                  <p className="italic text-gray-500">Số tài khoản</p>
                  <p>1903 5215 3400 14</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4  border border-red-300 relative">
              <div className="w-full h-full absolute border border-red-300 rotate-3 top-0 left-0" />
              <div className="w-[60px] h-[60px] -translate-y-[50%] absolute top-0">
                <img
                  src="https://picsum.photos/id/237/200/300"
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="p-4 lg:p-10 flex flex-col items-center gap-4">
                <p className="text-[20px] font-bold mt-4">Vũ Thị Ngọc Quỳnh</p>
                <img src={tpbankq} className="w-full" alt="" />
                <div className="flex flex-col items-center">
                  <div className="w-full h-[1px] " />
                  <p className="italic text-gray-500">Số tài khoản</p>
                  <p>1903 5215 3400 14</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* map */}
        <section
          id="map"
          className="pt-[100px] px-4 md:px-[5rem] lg:px-[11rem] space-y-10"
        >
          <p className="capitalize text-[40px] w-full text-center title">
            Địa điểm
          </p>
          <div>
            <iframe
              title="mapdh"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.1071023040527!2d106.35540247465954!3d20.542798304293395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135f02d583cb36f%3A0x72dba66dc029c579!2zQuG6v24geGUga2jDoWNoIMSQw7RuZyBIxrBuZw!5e0!3m2!1svi!2s!4v1695294470187!5m2!1svi!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <div className="capitalize title text-white w-full text-center p-4 lg:p-16 text-[42px] lg:text-[64px]">
          {/* thank you! */}
        </div>
      </div>
      <button onclick="topFunction()" id="myBtn" title="Go to top">
        Top
      </button>

      <div className="fixed bottom-10 z-50 right-10 w-8 h-8">
        <ButtonScrollTop />
      </div>
    </div>
  );
}

export default App;
