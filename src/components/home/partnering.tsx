import Link from "next/link";
const Partnering = () => {
  return (
    <div className="bg-dau-secondary-warm-100 py-12 text-center">
      <p className="mb-4 text-3xl font-semibold">
        Interested in partnering with us?
      </p>
      <span>Check out our </span>
      <Link
        href="https://drive.google.com/file/d/1S25Vl2ZpxJn5CiGWh2LHCKr76FNAp3Mb/view?usp=sharing"
        className="text-dau-primary-warm-300 cursor-pointer font-semibold hover:underline"
        target="_blank"
      >
        Sponsorship Packet
      </Link>
    </div>
  );
};

export default Partnering;
