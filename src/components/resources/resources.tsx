/* import ResourcesBG from "@/public/resources/resourcesbg.webp";
import Figma from "@/public/resources/figma.svg";
import Dribble from "@/public/resources/dribble.svg";
import Framer from "@/public/resources/framer.svg";
import Orange from "@/public/resources/orange.webp";
import Ellipse from "@/public/resources/ellipse.svg";
import Bear from "@/public/resources/bear.svg";
import Star from "@/public/resources/star.svg";
import Image from "next/image";
const Resources = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-bottom bg-no-repeat text-center"
      style={{ backgroundImage: `url(${ResourcesBG.src})` }}
    >
      <div className="mx-auto grid grid-cols-2 gap-8 w-11/12 md:w-3/5">
        <div className="border-resources-blue-200 bg-resources-blue-100 rounded-3xl border-4 py-8">
          <div className="ml-12 flex justify-center">
            <Image src={Framer} alt="Framer" className="" />
          </div>
          <div className="grid grid-cols-2 justify-center">
            <Image src={Figma} alt="Figma" className="ml-12 w-7/12" />
            <Image src={Dribble} alt="Dribble" className="w-7/12 py-6" />
          </div>

          <div className="flex flex-col">
            <p className="text-resources-blue-300 text-3xl font-semibold">
              Online Resources
            </p>
            <p className="pt-4 text-xl text-resources-brown-100">
              A compiled list of design tools, courses, and more!
            </p>
          </div>
        </div>
        <div className="grid-row-2 grid gap-8">
          <div className="border-resources-green-200 bg-resources-green-100 flex flex-col justify-center rounded-3xl border-4">
            <p className="text-resources-green-300 text-3xl font-semibold">
              UCR Courses
            </p>
            <p className="mx-auto w-1/2 pt-8 text-xl text-resources-brown-100">
              Courses at UCR related to design
            </p>
          </div>
          <div className="border-resources-yellow-200 bg-resources-yellow-100 relative flex flex-col justify-center rounded-3xl border-4">
            <p className="text-resources-yellow-300 text-3xl font-semibold">
              UCR Orgs
            </p>
            <p className="mx-auto w-2/3 pt-8 text-xl text-resources-brown-100">
              Organizations at UCR related to design
            </p>
            <Image
              src={Orange}
              alt="Orange"
              className="absolute -top-20 -right-12 w-5/12"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 w-11/12 md:w-3/5 py-8">
        <div className="border-y-4 border-l-4 border-resources-red-200 rounded-l-3xl bg-resources-red-100">
            <p className="text-resources-red-300 text-3xl font-semibold pt-6">Our Substack</p>
            <p className="text-resources-brown-100 text-xl w-5/6 mx-auto text-left pt-4 pb-8">Learn more about Design@UCR and our own resources!</p>
            <div className="flex justify-end">
            <Image src={Ellipse} alt="Ellipse" className="w-1/2"/>
            </div>
        </div>
        <div className="border-y-4 border-r-4 border-resources-red-200 rounded-r-3xl bg-resources-red-100">
        <Image src={Star} alt="Star" className=""/>
        <div className="relative flex items-center justify-center ">
            
            <Image src={Bear} alt="Bear" className="w-5/12"/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
 */
