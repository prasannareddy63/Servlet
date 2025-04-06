import { Truck, Leaf, Clock, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Scheduled Pickups",
    description: "Book convenient waste collection times that fit your schedule"
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "Eco-Friendly",
    description: "Supporting sustainable waste management practices"
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Real-time Tracking",
    description: "Track your collection request status in real-time"
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Instant Feedback",
    description: "Share your experience and help us improve our services"
  }
];

export default function Features() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide efficient and environmentally conscious waste collection services
            to keep our communities clean and sustainable.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-green-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}