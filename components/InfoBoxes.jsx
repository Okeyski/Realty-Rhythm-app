import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div class="container-xl lg:container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Renters"
            backgroundColor="bg-gray-100"
            buttonInfo={{
              text: "Browse Properties",
              link: "/properties",
              backgroundColor: "bg-black",
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo odio
            facere harum laudantium reprehenderit corrupti iste repudiandae,
            consectetur corporis recusandae! Aspernatur tempora illum officia
          </InfoBox>
          <InfoBox
            heading="For Property Owners"
            backgroundColor="bg-blue-100"
            buttonInfo={{
              text: "Add Property",
              link: "/properties/add",
              backgroundColor: "bg-blue-500",
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo odio
            facere harum laudantium reprehenderit corrupti iste repudiandae,
            consectetur corporis recusandae! Aspernatur tempora illum officia
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
