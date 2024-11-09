export default function Footer() {
    return (
      <div className="bg-gray-300 py-14 ">
    <div className="container mx-auto px-6 md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
        <div className="text-xl font-bold text-gray-800">obviously.ai</div>
        <p className="text-gray-600 mt-2">
          The fastest, most precise No-Code AI tool in the world.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          ©2024 Obviously AI, Inc.
        </p>
        <div className="text-gray-500 text-sm mt-2">
          <a href="#" className="hover:text-gray-700">Terms & Privacy</a>
          <br />
          <a href="#" className="text-red-500 hover:underline">🚀 We're hiring! See open roles.</a>
        </div>
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <i className="fab fa-twitter"></i> {/* Replace with your Twitter SVG or icon */}
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <i className="fab fa-linkedin"></i> {/* Replace with your LinkedIn SVG or icon */}
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <i className="fab fa-medium"></i> {/* Replace with your Medium SVG or icon */}
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
        <div>
          <h4 className="font-semibold text-gray-700">Product</h4>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-gray-800">Data Requisites</a></li>
            <li><a href="#" className="hover:text-gray-800">Algorithms</a></li>
            <li><a href="#" className="hover:text-gray-800">Security</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-700">Resources</h4>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-gray-800">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-800">API Docs</a></li>
            <li><a href="#" className="hover:text-gray-800">Status Page</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-700">Company</h4>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-gray-800">About</a></li>
            <li><a href="#" className="hover:text-gray-800">Careers</a></li>
            <li><a href="#" className="hover:text-gray-800">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    );
  }
  