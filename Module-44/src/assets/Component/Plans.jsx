import React from "react";
import Plan from "./plan";

const Plans = () => {
  const plans = [
    {
      plan_id: "basic_monthly",
      name: "Basic Monthly",
      price: 30.0,
      duration_days: 30,
      features: ["Access to gym equipment", "Locker room access"],
    },
    {
      plan_id: "premium_monthly",
      name: "Premium Monthly",
      price: 50.0,
      duration_days: 30,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Access to group classes",
        "1 personal training session per month",
      ],
    },
    {
      plan_id: "yearly",
      name: "Platinum Membership",
      price: 80.0,
      duration_days: 365,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited group classes",
        "5 personal training sessions per year",
        "Nutrition consultation",
      ],
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-3 gap-5">
        {plans.map((plan, index) => (
          <Plan key={index} plan={plan}></Plan>
        ))}
      </div>
    </div>
  );
};

export default Plans;
