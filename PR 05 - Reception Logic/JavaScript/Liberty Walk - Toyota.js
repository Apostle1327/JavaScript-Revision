let libertyWalk = {
  customKits: [
    {
      TOYOTA: [
        {
          modelName: "Land Cruiser 300",
          typeOfKits: [
            {
              kitType: "Complete Body Kit",
              availableKits: [
                {
                  kitId: "KIT_TLC300_001",
                  name: "lbStarWorksToyotaLandCruiser300PremiumCompleteKit",
                  priceRange: {
                    min: 13090,
                    max: 34430,
                    currency: "USD",
                    priceHistory: [
                      { date: "2024-01-01", price: 13500 },
                      { date: "2024-03-01", price: 14000 },
                      { date: "2024-06-01", price: 13000 },
                    ],
                  },
                  features: [
                    "Premium Materials",
                    {
                      featureType: "Color",
                      options: ["Black", "Silver", "White"],
                    },
                  ],
                  variants: [
                    {
                      variantName: "Standard",
                      additionalCost: 0,
                      description: "Basic package with standard features.",
                    },
                    {
                      variantName: "Luxury",
                      additionalCost: 6000,
                      description:
                        "Includes additional luxury features and finishes.",
                    },
                  ],
                  availability: {
                    stockStatus: "Pre-Order",
                    estimatedDelivery: {
                      standard: "8-10 weeks",
                      express: "4-6 weeks",
                    },
                  },
                  reviews: [
                    {
                      reviewer: "Alice Johnson",
                      rating: 5,
                      comment: "Top-notch quality and fit. Highly recommend!",
                      reviewDate: "2024-07-10",
                    },
                    {
                      reviewer: "Bob Brown",
                      rating: 4,
                      comment:
                        "Great kit but delivery took longer than expected.",
                      reviewDate: "2024-08-05",
                    },
                  ],
                  installationOptions: {
                    standard: {
                      cost: 800,
                      duration: "3 hours",
                      description:
                        "Standard installation without modifications.",
                    },
                    custom: {
                      cost: 1500,
                      duration: "6 hours",
                      description: "Custom modifications and fitting.",
                    },
                  },
                  installationGuides: [
                    {
                      guideName: "Standard Installation Guide",
                      guideUrl: "http://example.com/standard-installation",
                      guideFormat: "PDF",
                      languages: ["English", "French"],
                    },
                    {
                      guideName: "Custom Installation Guide",
                      guideUrl: "http://example.com/custom-installation",
                      guideFormat: "Video",
                      languages: ["English"],
                    },
                  ],
                  warranty: {
                    duration: "3 years",
                    coverage: "Manufacturing defects and material failure",
                    termsUrl: "http://example.com/warranty-terms",
                  },
                  associatedProducts: [
                    {
                      productId: "ACC_TLC300_001",
                      name: "Toyota Land Cruiser 300 Roof Rack",
                      price: 1200,
                      category: "Accessories",
                      compatibility: "Land Cruiser 300 2022-2024",
                    },
                    {
                      productId: "ACC_TLC300_002",
                      name: "Toyota Land Cruiser 300 Floor Mats",
                      price: 350,
                      category: "Accessories",
                      compatibility: "Land Cruiser 300 2022-2024",
                    },
                  ],
                },
                // More kits...
              ],
            },
            {
              kitType: "Body Kit Works",
              availableKits: [
                {
                  kitId: "KIT_TLC300_002",
                  name: "lbStarWorksToyotaLandCruiser300FrontBumper",
                  priceRange: {
                    min: 3780,
                    max: 7020,
                    currency: "USD",
                  },
                  features: ["Durable Construction", "Enhanced Aesthetics"],
                  variants: [
                    {
                      variantName: "Basic",
                      additionalCost: 0,
                      description:
                        "Standard front bumper without additional features.",
                    },
                    {
                      variantName: "Sport",
                      additionalCost: 2000,
                      description:
                        "Includes sport package with additional enhancements.",
                    },
                  ],
                  availability: {
                    stockStatus: "In Stock",
                    estimatedDelivery: "2-3 weeks",
                  },
                },
                // More kits...
              ],
            },
            // More kit types...
          ],
          compatibility: {
            yearRange: "2022-2024",
            requiredModifications: ["No major modifications required"],
          },
        },
        {
          modelName: "Supra A90",
          typeOfKits: [
            {
              kitType: "Complete Body Kit",
              availableKits: [
                {
                  kitId: "KIT_SUPRA_A90_001",
                  name: "lbStarWorksToyotaSupraA90CompleteBodyKit",
                  priceRange: {
                    min: 14850,
                    max: 20130,
                    currency: "USD",
                    priceHistory: [
                      { date: "2024-01-01", price: 15000 },
                      { date: "2024-04-01", price: 15500 },
                      { date: "2024-07-01", price: 14800 },
                    ],
                  },
                  features: [
                    "Aerodynamic Enhancements",
                    "Sporty Design",
                    {
                      featureType: "Material",
                      options: ["Fiberglass", "Carbon Fiber"],
                    },
                  ],
                  variants: [
                    {
                      variantName: "Standard",
                      additionalCost: 0,
                      description: "Includes standard body kit features.",
                    },
                    {
                      variantName: "Racing",
                      additionalCost: 4500,
                      description: "High-performance racing package.",
                    },
                  ],
                  availability: {
                    stockStatus: "In Stock",
                    estimatedDelivery: "1-2 weeks",
                  },
                  reviews: [
                    {
                      reviewer: "Charles Lee",
                      rating: 5,
                      comment: "Fantastic kit with great fit and finish.",
                      reviewDate: "2024-06-20",
                    },
                    {
                      reviewer: "Dana White",
                      rating: 4,
                      comment:
                        "Very good, but the instructions were a bit unclear.",
                      reviewDate: "2024-07-15",
                    },
                  ],
                  installationOptions: {
                    standard: {
                      cost: 600,
                      duration: "2.5 hours",
                      description: "Standard installation for the body kit.",
                    },
                    custom: {
                      cost: 1300,
                      duration: "5 hours",
                      description:
                        "Custom installation with additional modifications.",
                    },
                  },
                  installationGuides: [
                    {
                      guideName: "Installation Guide - Standard",
                      guideUrl:
                        "http://example.com/supra-standard-installation",
                      guideFormat: "PDF",
                      languages: ["English", "German"],
                    },
                    {
                      guideName: "Installation Guide - Racing",
                      guideUrl: "http://example.com/supra-racing-installation",
                      guideFormat: "Video",
                      languages: ["English"],
                    },
                  ],
                  warranty: {
                    duration: "2 years",
                    coverage: "Defects in materials and workmanship",
                    termsUrl: "http://example.com/supra-warranty-terms",
                  },
                  associatedProducts: [
                    {
                      productId: "ACC_SUPRA_A90_001",
                      name: "Supra A90 Racing Spoiler",
                      price: 1800,
                      category: "Accessories",
                      compatibility: "Supra A90 2020-2024",
                    },
                    {
                      productId: "ACC_SUPRA_A90_002",
                      name: "Supra A90 Custom Seat Covers",
                      price: 450,
                      category: "Accessories",
                      compatibility: "Supra A90 2020-2024",
                    },
                  ],
                },
              ],
            },
            {
              kitType: "Body Kit Works",
              availableKits: [
                {
                  kitId: "KIT_SUPRA_A90_002",
                  name: "lbStarWorksToyotaSupraA90RearDiffuser",
                  priceRange: {
                    min: 3300,
                    max: 3300,
                    currency: "USD",
                  },
                  features: ["Enhanced Down Force", "Sporty Look"],
                  variants: [
                    {
                      variantName: "Basic",
                      additionalCost: 0,
                      description: "Standard rear diffuser.",
                    },
                    {
                      variantName: "Performance",
                      additionalCost: 1500,
                      description:
                        "Performance-oriented diffuser with additional features.",
                    },
                  ],
                  availability: {
                    stockStatus: "Pre-Order",
                    estimatedDelivery: "3-4 weeks",
                  },
                },
              ],
            },
          ],
          compatibility: {
            yearRange: "2020-2024",
            requiredModifications: ["Minor adjustments needed for fit"],
          },
        },
      ],
    },
  ],
};
