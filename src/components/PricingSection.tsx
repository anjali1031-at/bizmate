import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

interface PricingPlan {
  id: number;
  name: string;
  price: number;
  period: string;
  icon: React.ComponentType<any>;
  features: string[];
  recommended?: boolean;
  buttonText: string;
  description: string;
  color: string;
}

const PricingSection: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      id: 1,
      name: 'Basic',
      price: 0,
      period: 'month',
      icon: Star,
      description: 'Perfect for getting started with basic online presence',
      features: [
        'Basic business listing',
        'Contact information display',
        'Up to 3 business photos',
        'Customer reviews',
        'Basic analytics',
        'Mobile optimization'
      ],
      buttonText: 'Get Started Free',
      color: 'border-gray-200'
    },
    {
      id: 2,
      name: 'Professional',
      price: 29,
      period: 'month',
      icon: Zap,
      description: 'Enhanced visibility and features for growing businesses',
      features: [
        'Everything in Basic',
        'Premium placement in search',
        'Unlimited business photos',
        'Advanced analytics',
        'Social media integration',
        'Priority customer support',
        'Business hours management',
        'Special offers posting'
      ],
      recommended: true,
      buttonText: 'Start 14-Day Trial',
      color: 'border-blue-500 ring-2 ring-blue-500'
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 99,
      period: 'month',
      icon: Crown,
      description: 'Complete solution for large businesses and chains',
      features: [
        'Everything in Professional',
        'Multiple location management',
        'Advanced SEO optimization',
        'Custom branding options',
        'API access',
        'Dedicated account manager',
        'White-label solutions',
        'Advanced reporting suite',
        'Integration capabilities'
      ],
      buttonText: 'Contact Sales',
      color: 'border-purple-200'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Business Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect plan to showcase your business and reach more customers. 
            All plans include our core features with no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-3xl shadow-xl p-8 ${plan.color} ${
                  plan.recommended ? 'transform scale-105' : ''
                } hover:shadow-2xl transition-all duration-300`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                    plan.recommended 
                      ? 'bg-blue-100 text-blue-600' 
                      : plan.id === 3 
                        ? 'bg-purple-100 text-purple-600'
                        : 'bg-gray-100 text-gray-600'
                  }`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-1">/{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                  plan.recommended
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                    : plan.id === 3
                      ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}>
                  {plan.buttonText}
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need help choosing the right plan? Our team is here to assist you.
          </p>
          <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            Contact our sales team →
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mt-16 border border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              All Plans Include
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Check className="h-6 w-6" />
                </div>
                <span className="text-sm text-gray-700 font-medium">No Setup Fees</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Check className="h-6 w-6" />
                </div>
                <span className="text-sm text-gray-700 font-medium">24/7 Support</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Check className="h-6 w-6" />
                </div>
                <span className="text-sm text-gray-700 font-medium">Free Updates</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Check className="h-6 w-6" />
                </div>
                <span className="text-sm text-gray-700 font-medium">Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;