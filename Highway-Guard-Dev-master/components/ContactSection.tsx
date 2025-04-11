import { montserrat } from "@/lib/fonts";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact">
      <div className={`container mx-auto ${montserrat.className} py-16`}>
        <div className="w-5/6 grid grid-cols-1 lg:grid-cols-2  gap-12 mx-auto items-center">
          <div className="py-[30px]">
            <div className="bg-[#011C2B]  max-width-full mx-auto text-white rounded-[10px] pb-12 overflow-hidden relative">
              <div className="p-[30px]">
                <h2 className="font-medium text-[28px]">Contact Information</h2>
                <p className="pt-3 text-[18px] text-[#C9C9C9]">
                  Say something to start a live chat!
                </p>
              </div>
              <div>
                <div className="flex items-center py-5 px-8">
                  <Image
                    src="/images/email.png"
                    alt="Phone Logo"
                    className="mr-2"
                    width={15}
                    height={15}
                  />
                  <a
                    className="text-white-400 "
                    href="mailto:greenfuture@alaskas.tech"
                  >
                    greenfuture@alaskas.tech
                  </a>
                </div>

                <div className="text-white text-[16px] py-7 px-7 flex ">
                  <Image
                    src="/images/location.png"
                    alt="Phone Logo"
                    className="mr-2 h-5 w-5"
                    width={10}
                    height={10}
                  />
                  <p>Pune, India</p>
                </div>
                <div className="bg-white w-[300px] h-[300px] rounded-[50%] absolute bottom-[-45%] right-[-10%] opacity-30"></div>
                <div className="bg-white w-[160px] h-[160px] rounded-[50%] absolute bottom-[-24%] right-[25%] opacity-30"></div>
              </div>
            </div>
          </div>

          {/*contact form*/}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
