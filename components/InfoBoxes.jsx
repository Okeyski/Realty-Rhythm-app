import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Renters"
            backgroundColor="bg-gray-100"
            buttonInfo={{
              text: "Browse Properties",
              link: "/properties",
              backgroundColor: "bg-black",
            }}
          >
            Discover properties tailored to your lifestyle and budget. Browse,
            save favorites, and chat directly with landlords—all in one place.
          </InfoBox>
          <InfoBox
            heading="For Property Owners"
            backgroundColor="bg-blue-100"
            buttonInfo={{
              text: "Add Property",
              link: "/properties/add",
              backgroundColor: "bg-[#243a6c]",
            }}
          >
            Manage your listings with ease. Track your property performance,
            receive real-time inquiries and connect directly with verified
            renters. Your rental journey just got simpler.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
