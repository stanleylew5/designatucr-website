import StepCard from "@/components/home/stepcard";
import steps from "@/data/steps";

const GetInvolved = () => {
  return (
    <div className="bg-sand flex min-h-screen flex-col items-center justify-center gap-8 py-24 text-lg font-medium text-black">
      <div className="mx-[5%] text-center text-4xl font-bold">
        How do I get involved?
      </div>
      <div className="mx-auto w-11/12 text-center md:w-2/3 md:text-left lg:max-w-4xl">
        <span className="bg-gradient-to-r from-green-400 to-teal-300 bg-clip-text text-transparent">
          All majors can apply
        </span>{" "}
        to be a general member by filling out our application form. Once you
        apply, don’t forget to join our slack channel. All{" "}
        <span className="to-dau-secondary-warm-200 bg-gradient-to-r from-rose-400 bg-clip-text text-transparent">
          events and updates
        </span>{" "}
        will be posted here. Subscribe to our{" "}
        <span className="from-dau-primary-cool-300 to-dau-secondary-200 bg-gradient-to-r bg-clip-text text-transparent">
          Substack
        </span>{" "}
        to learn more about design and events we host throughout the quarter.
        Most importantly, attend events! Check{" "}
        <span className="from-dau-primary-warm-300 to-dau-primary-warm-200 bg-gradient-to-r bg-clip-text text-transparent">
          Events{" "}
        </span>{" "}
        for new events coming up.
      </div>
      <div className="from-dau-primary-cool-300 to-dau-primary-cool-200 mx-auto grid grid-cols-1 gap-8 bg-gradient-to-tr p-8 md:w-10/12 md:rounded-2xl lg:grid-cols-4">
        {steps.map(({ title, src }, index) => (
          <StepCard key={index} title={title} src={src} />
        ))}
      </div>
    </div>
  );
};

export default GetInvolved;
