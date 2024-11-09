export default function Hero() {
    return (
      <>
        <div className="bg-gray-50 py-16 m h-[90vh] w-[100%] flex items-center justify-center px-12">
        <div className="container mb-28 mx-auto px-6 flex flex-col-reverse lg:flex-row items-center ">
          <div className="lg:w-1/2 pl-24 ">
            <h1 className="text-5xl font-bold text-gray-800 mb-4  ">Are You Interview-Ready? Find Out Now.</h1>
            <p className="text-base text-gray-600 mb-6">
            AI-powered tool delivers a detailed interview performance analysis, providing a comprehensive score and pinpointing specific areas for improvement.
            </p>
            <div className="space-x-4  flex items-center">
              <a href="#" className="bg-red-500 text-white px-6 py-3 rounded-md text-lg hover:bg-red-600">Try for Free</a>
              {/* <a href="#" className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600">Start a project</a> */}
            </div>
            {/* <div className="mt-8 text-sm space-x-8 text-gray-500">
              <a href="#" className="hover:text-gray-700">AI Pitch Deck Software</a>
              <a href="#" className="hover:text-gray-700">Pitch Deck Consultants</a>
            </div> */}
          </div>
          <div className="lg:w-1/2  lg:pl-[220px] mb-8 lg:mb-0">
            <img
              src="https://png.pngtree.com/png-vector/20240927/ourmid/pngtree-3d-cute-small-robot-on-transparent-background-png-image_13928401.png"
              alt="Startup Pitch Deck"
              className="rounded-md  w-[70%]"
            />
          </div>
        </div>


      
      </div>
        
     
      

      
      
      </>
    );
  }
  