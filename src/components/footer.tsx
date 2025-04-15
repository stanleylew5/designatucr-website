import Image from "next/image";
import Link from "next/link";
import links from "@/data/links";
import DAU from "@/public/icons/dau_circle.svg";
// VP of SWE 2025-2026 -- Why is this stupid comment here below. perhaps it'll be useful one day
/*
 * WARNING: Slack link is set to NEVER expire
 * Update in the future to limit to 30 days before expire, rotating monthly
 * Help Desk and Design Pack are still missing information, set to slack for now
 * Gcal: https://calendar.google.com/calendar/u/0?cid=ZGVzaWduYXR1Y3JAZ21haWwuY29t
 */

const Footer = () => {
  const sections = [
    {
      title: "About",
      items: [
        { name: "Meet the Board", href: "/about", target: "_self" },
        { name: "Leadership", href: "/leadership", target: "_self" },
        {
          name: "Join Us",
          href: "https://forms.gle/6TNxvdXqkmjKKHsu9",
          target: "_blank",
        },
        { name: "Site Design", href: "/engineering", target: "_self" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Resources", href: "/resources", target: "_self" },
        {
          name: "Help Desk",
          href: "https://join.slack.com/t/designucr/shared_invite/zt-2xj8kwmno-70AftfRezUjjPjSNGcgI1Q",
          target: "_blank",
        },
        {
          name: "Design Pack",
          href: "https://join.slack.com/t/designucr/shared_invite/zt-2xj8kwmno-70AftfRezUjjPjSNGcgI1Q",
          target: "_blank",
        },
        { name: "Site Map", href: "/sitemap", target: "_self" },
      ],
    },
    {
      title: "Events",
      items: [
        {
          name: "General Meetings",
          href: "/events",
          target: "_self",
        },
        { name: "DesignVerse", href: "/designverse", target: "_self" },
        { name: "DesignCo", href: "/designco", target: "_self" },
      ],
    },
    {
      title: "Get Involved",
      items: [
        {
          name: "Apply",
          href: "https://forms.gle/6TNxvdXqkmjKKHsu9",
          target: "_blank",
        },
        { name: "Contact", href: "/contact", target: "_self" },
      ],
    },
  ];

  return (
    <div className="bg-dau-primary-cool-400 flex flex-col px-[10%] text-white">
      <div className="flex items-center py-4 text-center md:py-8">
        <Image src={DAU} alt="dau_icon" className="w-1/4 md:w-auto" />
        <p className="text-bold pl-8 text-xl md:text-7xl">Design At UCR</p>
      </div>

      <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 md:grid-cols-4">
        {sections.map((section, index) => (
          <div key={index}>
            <p className="mb-4 text-lg font-semibold">{section.title}</p>
            <div className="flex flex-col space-y-2">
              {section.items.map((item, idx) => (
                <Link
                  href={item.href}
                  className="hover:underline"
                  key={idx}
                  target={item.target}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-between border-t border-white py-8 md:flex-row">
        <div className="text-center text-sm sm:text-left">
          © 2025 Design At UCR
        </div>

        <div className="mt-4 flex items-center justify-center space-x-4 sm:mt-0 sm:justify-end">
          {links.map(({ href, alt, src }, index) => (
            <Link key={index} href={href} target="_blank">
              <Image src={src} alt={alt} width={32} height={32} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
