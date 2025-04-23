import Properties from "@/components/Properties";
import { fetchProperties } from "@/utils/request";
import PropertySearchForm from "@/components/PropertySearchForm";

const PropertiesPage = async () => {
  
  return (
    <>
      <section className="bg-[#243a6c] py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>
      <Properties />
    </>
  );
};

export default PropertiesPage;
