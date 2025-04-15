const Page = () => {
  return (
    <div className="bg-bgPeach flex flex-col items-center justify-center py-16">
      <div className="mx-auto w-4/12">
        <p className="mt-5 ml-5 text-left text-6xl font-bold">Site Map</p>
        <div className="ml-10">
          <div className="mt-5 ml-5">
            <p className="text-left font-bold">Home</p>
            <ul className="mb-5 list-disc justify-start pl-5">
              <li>About</li>
              <li>Events</li>
              <li>Resources</li>
              <li>Join</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="mt-5 ml-5">
            <p className="text-left font-bold">About</p>
            <ul className="mb-5 list-disc justify-start pl-5">
              <li>Meet the Board</li>
              <li>Leadership</li>
              <li>Join Us</li>
              <li>Site Design</li>
            </ul>
          </div>

          <div className="mt-5 ml-5">
            <p className="text-left font-bold">Resources</p>
            <ul className="mb-5 list-disc justify-start pl-5">
              <li>Design Links</li>
              <li>Help Center</li>
              <li>Design Pack</li>
              <li>Site Map</li>
            </ul>
          </div>

          <div className="mt-5 ml-5">
            <p className="text-left font-bold">Events</p>
            <ul className="mb-5 list-disc justify-start pl-5">
              <li>General Meetings</li>
              <li>DesignVerse</li>
              <li>DesignCo</li>
            </ul>
          </div>

          <div className="mt-5 ml-5">
            <p className="text-left font-bold">Get Involved</p>
            <ul className="mb-5 list-disc justify-start pl-5">
              <li>Apply</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
