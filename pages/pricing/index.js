import PricingCard from "../../components/PricingCard";

const pricingPlans = [
  {
    title: "Basic Plan",
    price: "$19/month",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    color: "#f4f4ff",
    onSelect: () => alert("Basic Plan selected!"),
  },
  {
    title: "Pro Plan",
    price: "$49/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    color: "#e5d4ff",
    onSelect: () => alert("Pro Plan selected!"),
  },
  {
    title: "Premium Plan",
    price: "$99/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
    color: "#d4f6ff",
    onSelect: () => alert("Premium Plan selected!"),
  },
];

const PricingSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              onSelect={plan.onSelect}
              color={plan.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
