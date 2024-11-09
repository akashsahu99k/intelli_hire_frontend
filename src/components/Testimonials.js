export default function Testimonials() {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">From content strategy to slide design</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 bg-white shadow">
              <p>"By working with this service, we were able to create a powerful pitch deck."</p>
              <p className="font-bold mt-4">- Joshua Aviv, CEO</p>
            </div>
            <div className="p-4 bg-white shadow">
              <p>"It was a breeze to create the perfect pitch deck with their help."</p>
              <p className="font-bold mt-4">- Jeremy Hill, Co-founder</p>
            </div>
            <div className="p-4 bg-white shadow">
              <p>"The content strategy allowed us to cover all the bases."</p>
              <p className="font-bold mt-4">- Tanika McLeod, Co-founder</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  