import Link from "next/link";
import contacts from "@/data/contacts";
const Contacts = () => {
  return (
    <div className="bg-bgPeach flex min-h-screen flex-col justify-center p-6 md:p-24">
      <p className="mb-4 text-2xl font-semibold md:text-4xl">
        Get in touch with us:
      </p>
      <p className="mt-6 mb-10 ml-2 font-medium md:mt-10 md:ml-10 md:w-4/5 md:text-base">
        Design@UCR appreciates your time and consideration. We look forward to
        working with you. For inquiries, please email us at
        <Link
          href="mailto:designatucr@gmail.com"
          className="text-dau-primary-cool-400 font-semibold"
        >
          {" "}
          designatucr@gmail.com{" "}
        </Link>
        and be sure to check us out on social media below!
      </p>
      <div className="ml-2 grid grid-cols-2 gap-4 sm:grid-cols-2 md:ml-10 md:grid-cols-4">
        {contacts.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="font-medium"
            target="_blank"
          >
            {item.name}
            <p className="mb-5 cursor-pointer font-normal hover:underline">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
