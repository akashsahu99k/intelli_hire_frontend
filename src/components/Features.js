export default function Features() {
    return (
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Here’s how we can help you get funding</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-4 bg-white shadow">
              <h3 className="font-bold text-xl">AI Pitch Deck Builder</h3>
              <p>Create and design your pitch decks with AI assistance.</p>
            </div>
            <div className="p-4 bg-white shadow">
              <h3 className="font-bold text-xl">Collaboration</h3>
              <p>Invite teammates to work with you on your pitch.</p>
            </div>
            <div className="p-4 bg-white shadow">
              <h3 className="font-bold text-xl">Automated Design</h3>
              <p>Add content and let our app take care of the design.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  