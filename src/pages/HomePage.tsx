import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12 p-4 md:p-8 lg:p-12">
      
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-lg py-10 px-6 md:px-12 flex flex-col gap-6 text-center transform -mt-20 md:-mt-28">
        <h1 className="text-5xl font-extrabold tracking-tight text-orange-600 leading-snug">
          Tuck into a takeaway today
        </h1>
        <p className="text-xl text-gray-600 py-2">
          Your favorite food is just a click away
        </p>
      </div>

      {/* Image and App Download Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Landing Image */}
        <div className="relative w-full h-full">
          <img
            src={landingImage}
            alt="Delicious food"
            className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </div>
        
        {/* Download Section */}
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <h2 className="font-bold text-3xl md:text-4xl tracking-tighter text-gray-800">
            Order takeaway even faster
          </h2>
          <p className="text-lg text-gray-500">
            Download the App for exclusive offers and faster service.
          </p>
          <img
            src={appDownloadImage}
            alt="Download the App"
            className="w-48 h-auto mt-4 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
