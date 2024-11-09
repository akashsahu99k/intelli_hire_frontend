export default function Hero3(){
    return (
        <>
           <div className="page3  h-[80vh] w-[100%] mt-32  ">
         
      <div className="container2 h-full w-full flex justify-center">
        <div className="left w-1/2 h-[74%]  flex justify-end items-center ">
        <div className=" text-black w-[60%] mr-14 my-36 ">
                <h2 className="text-4xl font-semibold text-gray-800 mb-4">AI Pitch Deck Software</h2>
                <p className="text-lg text-gray-600 mb-6">
                Our presentation software makes the process of building a pitch deck with AI simple and fast, with appealing results.
                </p>

                <div className="space-x-4">
           <a href="#" className="bg-red-500 text-white px-6 py-3 rounded-md text-lg hover:bg-red-600">Try Now</a>
           {/* <a href="#" className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600">Learn more</a> */}
            </div>
            </div>
        </div>

        <div className="Right h-full w-1/2">
           

            <div className="h-[70%[ w-[70%]  rounded-3xl overflow-hidden ml-8">
          <img
              src="https://imgs.search.brave.com/3N8i8Bvq786fpfwdpOED7McJVg3ENguA9CdwuZCpXTA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYW5k/b20taW1hZ2UtcGVw/ZWJpZ290ZXMudmVy/Y2VsLmFwcC9hcGkv/cmFuZG9tLWltYWdl"
              alt="Startup Pitch Deck"
              className=""
            />
          </div>
        </div>

      </div>
     

     {/* <div className="lg:w-1/2 lg:pl-12">
         <h3 className="text-3xl font-semibold text-gray-800 mb-4">AI Pitch Deck Software</h3>
         <p className="text-lg text-gray-600 mb-6">
           Our presentation software makes the process of building a pitch deck with AI simple and fast, with appealing results.
         </p>
         <div className="space-x-4">
           <a href="#" className="bg-red-500 text-white px-6 py-3 rounded-md text-lg hover:bg-red-600">Free sign up</a>
           <a href="#" className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600">Learn more</a>
         </div>
       </div> */}
         
     
         </div>  
 
        </>
    )
}