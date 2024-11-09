export default function Hero4(){
    return (
        <section className="mb-[120px] h-[120vh] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">The all-in-one pitch deck software</h2>
          <p className="mt-4 text-gray-600">
            The Slidebean platform will help you create everything you need to pitch to investors and raise funds for your startup.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg shadow-md">
              <img src="https://cdn.prod.website-files.com/6179a66d5f9cc70024c6185c/65a566b72597f34459227db5_home-app-AI-Pitch-Deck-Builder-p-500.webp" alt="AI Pitch Deck Builder" className=" w-full h-40 object-cover rounded-t-md" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">AI Pitch Deck Builder</h3>
              <p className="mt-2 text-gray-600">
                Use our pitch deck builder powered by AI to get your slides started.
              </p>
            </div>
  
            <div className="p-6 bg-yellow-50 rounded-lg shadow-md">
              <img src="https://cdn.prod.website-files.com/6179a66d5f9cc70024c6185c/65a566b827b4bca420d958f4_home-app-Online-Collaboration-p-500.webp" alt="Collaboration" className="w-full h-40 object-cover rounded-t-md" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Collaboration</h3>
              <p className="mt-2 text-gray-600">
                Invite teammates to work with you.
              </p>
            </div>
  
            <div className="p-6 bg-purple-50 rounded-lg shadow-md">
              <img src="https://cdn.prod.website-files.com/6179a66d5f9cc70024c6185c/65a566bd8b6a29758fa149f3_home-app-Automated-slide-design-p-500.webp" alt="Automated Design" className="w-full h-40 object-cover rounded-t-md" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Automated Design</h3>
              <p className="mt-2 text-gray-600">
                Add the content and let our app take care of design.
              </p>
            </div>
  
            <div className="p-6 bg-green-50 rounded-lg shadow-md">
              <img src="https://cdn.prod.website-files.com/6179a66d5f9cc70024c6185c/65a566b8cf3b0b3c0eff1183_home-app-Analytics-p-500.webp" alt="Analytics" className="w-full h-40 object-cover rounded-t-md" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Analytics</h3>
              <p className="mt-2 text-gray-600">
                To track every slide activity, from views, to time spent.
              </p>
            </div>
          </div>
  
          <div className="mt-8">
            <button className="px-8 py-3 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:bg-pink-600 transition duration-300">
              Free sign up
            </button>
          </div>
        </div>

      <div className="callTOAction mt-28  flex items-center justify-center ">
              <div className="bg-red-400 py-20 w-[80%] rounded-lg">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
              <div className="text-white mb-6 md:mb-0">
                <h2 className="text-4xl font-bold">Get Started Now</h2>
                <p className="text-lg mt-2">
                  See how no code machine learning can transform your business and change how you make decisions.
                </p>
              </div>
              <div className="space-x-4">
                <a href="#" className=" bg-white text-black-500 px-6 py-3 rounded-md shadow-md text-lg hover:bg-gray-100">Learn More</a>
                <a href="#" className="bg-red-600 text-white px-6 py-3 rounded-md shadow-md text-lg hover:bg-red-800">Get Started</a>
              </div>
            </div>
          </div>
      </div>
       
      </section>
    )
}