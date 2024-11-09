export default function Header() {
    return (
        <header className="bg-white shadow-md py-4 ">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-xl font-bold text-gray-800">slidebean</div>
          <nav className="space-x-6 text-gray-700">
            <a href="#" className="hover:text-blue-500">Pitch Deck</a>
            <a href="#" className="hover:text-blue-500">Services</a>
            <a href="#" className="hover:text-blue-500">Financial Modeling</a>
            <a href="#" className="hover:text-blue-500">Templates</a>
          </nav>
          <div className="space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-600">Login</a>
            <a href="#" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Sign up</a>
          </div>
        </div>
      </header>
    );
  }
  