const Page = () => {
  return (
    <div className="bg-bgPeach flex min-h-screen flex-col justify-center">
      <div className="mx-auto flex flex-col justify-center rounded-xl p-8 text-lg lg:w-1/3">
        <p className="text-dau-primary-cool-500 mb-8 text-4xl font-medium">
          Website Design and Engineering
        </p>
        <p>
          Designed and protoyped on{" "}
          <span className="text-dau-primary-cool-100 font-medium">Figma</span>.
          All designs are made by our team. Built with{" "}
          <span className="font-medium">Next.js</span> and{" "}
          <span className="text-dau-secondary-200 font-medium">
            Tailwind CSS
          </span>
          . Deployed on{" "}
          <span className="text-dau-primary-cool-400 font-medium">Vercel</span>.
        </p>
      </div>
    </div>
  );
};

export default Page;
