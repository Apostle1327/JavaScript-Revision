let libertyWalk = {
  customKits: [
    {
      brand: "NISSAN",
      models: [
        {
          modelName: "GTR",
          typeOfKits: [
            {
              kitType: "Complete Body Kit",
              availableKits: [
                {
                  kitId: "KIT001",
                  name: "SilhouetteWorksGTRR",
                  priceRange: {
                    min: 33480,
                    max: 54540,
                    currency: "USD",
                    priceHistory: [
                      { date: "2024-01-01", price: 34000 },
                      { date: "2024-05-01", price: 35000 },
                      { date: "2024-07-01", price: 33000 },
                    ],
                  },
                  features: [
                    "Carbon Fiber",
                    "Aerodynamic Design",
                    {
                      featureType: "Color",
                      options: ["Black", "White", "Red"],
                    },
                  ],
                  variants: [
                    {
                      variantName: "Standard",
                      additionalCost: 0,
                      description:
                        "Basic package with standard kit modifications.",
                    },
                    {
                      variantName: "Premium",
                      additionalCost: 5000,
                      description:
                        "Includes premium materials and additional structural modifications.",
                    },
                  ],
                  availability: {
                    stockStatus: "Pre-Order",
                    estimatedDelivery: {
                      standard: "6-8 weeks",
                      express: "2-4 weeks",
                      description:
                        "Pre-order status with varying delivery times.",
                    },
                  },
                  reviews: [
                    {
                      reviewer: "John Doe",
                      rating: 5,
                      comment: "Excellent quality and fit. Worth every penny.",
                      reviewDate: "2024-06-15",
                    },
                    {
                      reviewer: "Jane Smith",
                      rating: 4,
                      comment: "Good kit but installation was tricky.",
                      reviewDate: "2024-07-01",
                    },
                  ],
                  installationOptions: {
                    standard: {
                      cost: 500,
                      duration: "2 hours",
                      description: "Basic installation without modifications.",
                    },
                    custom: {
                      cost: 1200,
                      duration: "4 hours",
                      description: "Custom modifications and fitting.",
                    },
                  },
                  installationGuides: [
                    {
                      guideName: "Basic Installation",
                      guideUrl: "http://example.com/basic-installation",
                      guideFormat: "PDF",
                      languages: ["English", "Spanish"],
                    },
                    {
                      guideName: "Advanced Installation",
                      guideUrl: "http://example.com/advanced-installation",
                      guideFormat: "Video",
                      languages: ["English"],
                    },
                  ],
                  warranty: {
                    duration: "2 years",
                    coverage: "Manufacturing defects",
                    termsUrl: "http://example.com/warranty-terms",
                  },
                  associatedProducts: [
                    {
                      productId: "ACC001",
                      name: "GTR Carbon Fiber Spoiler",
                      price: 1500,
                      category: "Accessories",
                      compatibility: "GTR 2019-2024",
                    },
                    {
                      productId: "ACC002",
                      name: "GTR Custom Floor Mats",
                      price: 300,
                      category: "Accessories",
                      compatibility: "GTR 2019-2024",
                    },
                  ],
                },
              ],
            },
            {
              kitType: "Body Kit Works",
              availableKits: [
                {
                  kitId: "KIT002",
                  name: "SilhouetteWorksGTRRWing",
                  priceRange: {
                    min: 6480,
                    max: 15250,
                    currency: "USD",
                  },
                  features: ["Aero Wing", "Adjustable"],
                  variants: [
                    {
                      variantName: "Basic",
                      additionalCost: 0,
                    },
                    {
                      variantName: "Adjustable",
                      additionalCost: 1000,
                    },
                  ],
                  availability: {
                    stockStatus: "In Stock",
                    estimatedDelivery: "2-3 weeks",
                  },
                },
              ],
            },
          ],
          compatibility: {
            yearRange: "2019-2024",
            requiredModifications: ["No major modifications required"],
          },
        },
      ],
    },
    {
      brand: "PORSCHE",
      models: [
        {
          modelName: "GTR",
          typeOfKits: [
            {
              kitType: "Complete Body Kit",
              availableKits: [
                {
                  kitId: "KIT001",
                  name: "SilhouetteWorksGTRR",
                  priceRange: {
                    min: 33480,
                    max: 54540,
                    currency: "USD",
                    priceHistory: [
                      { date: "2024-01-01", price: 34000 },
                      { date: "2024-05-01", price: 35000 },
                      { date: "2024-07-01", price: 33000 },
                    ],
                  },
                  features: [
                    "Carbon Fiber",
                    "Aerodynamic Design",
                    {
                      featureType: "Color",
                      options: ["Black", "White", "Red"],
                    },
                  ],
                  variants: [
                    {
                      variantName: "Standard",
                      additionalCost: 0,
                      description:
                        "Basic package with standard kit modifications.",
                    },
                    {
                      variantName: "Premium",
                      additionalCost: 5000,
                      description:
                        "Includes premium materials and additional structural modifications.",
                    },
                  ],
                  availability: {
                    stockStatus: "Pre-Order",
                    estimatedDelivery: {
                      standard: "6-8 weeks",
                      express: "2-4 weeks",
                      description:
                        "Pre-order status with varying delivery times.",
                    },
                  },
                  reviews: [
                    {
                      reviewer: "John Doe",
                      rating: 5,
                      comment: "Excellent quality and fit. Worth every penny.",
                      reviewDate: "2024-06-15",
                    },
                    {
                      reviewer: "Jane Smith",
                      rating: 4,
                      comment: "Good kit but installation was tricky.",
                      reviewDate: "2024-07-01",
                    },
                  ],
                  installationOptions: {
                    standard: {
                      cost: 500,
                      duration: "2 hours",
                      description: "Basic installation without modifications.",
                    },
                    custom: {
                      cost: 1200,
                      duration: "4 hours",
                      description: "Custom modifications and fitting.",
                    },
                  },
                  installationGuides: [
                    {
                      guideName: "Basic Installation",
                      guideUrl: "http://example.com/basic-installation",
                      guideFormat: "PDF",
                      languages: ["English", "Spanish"],
                    },
                    {
                      guideName: "Advanced Installation",
                      guideUrl: "http://example.com/advanced-installation",
                      guideFormat: "Video",
                      languages: ["English"],
                    },
                  ],
                  warranty: {
                    duration: "2 years",
                    coverage: "Manufacturing defects",
                    termsUrl: "http://example.com/warranty-terms",
                  },
                  associatedProducts: [
                    {
                      productId: "ACC001",
                      name: "GTR Carbon Fiber Spoiler",
                      price: 1500,
                      category: "Accessories",
                      compatibility: "GTR 2019-2024",
                    },
                    {
                      productId: "ACC002",
                      name: "GTR Custom Floor Mats",
                      price: 300,
                      category: "Accessories",
                      compatibility: "GTR 2019-2024",
                    },
                  ],
                },
              ],
            },
            {
              kitType: "Body Kit Works",
              availableKits: [
                {
                  kitId: "KIT002",
                  name: "SilhouetteWorksGTRRWing",
                  priceRange: {
                    min: 6480,
                    max: 15250,
                    currency: "USD",
                  },
                  features: ["Aero Wing", "Adjustable"],
                  variants: [
                    {
                      variantName: "Basic",
                      additionalCost: 0,
                    },
                    {
                      variantName: "Adjustable",
                      additionalCost: 1000,
                    },
                  ],
                  availability: {
                    stockStatus: "In Stock",
                    estimatedDelivery: "2-3 weeks",
                  },
                },
              ],
            },
          ],
          compatibility: {
            yearRange: "2019-2024",
            requiredModifications: ["No major modifications required"],
          },
        },
      ],
    },
    {
      brand: "TOYOTA",
      models: [
        {
          modelName: "GTR",
          typeOfKits: [
            {
              kitType: "Complete Body Kit",
              availableKits: [
                {
                  kitId: "KIT001",
                  name: "SilhouetteWorksGTRR",
                  priceRange: {
                    min: 33480,
                    max: 54540,
                    currency: "USD",
                    priceHistory: [
                      { date: "2024-01-01", price: 34000 },
                      { date: "2024-05-01", price: 35000 },
                      { date: "2024-07-01", price: 33000 },
                    ],
                  },
                  features: [
                    "Carbon Fiber",
                    "Aerodynamic Design",
                    {
                      featureType: "Color",
                      options: ["Black", "White", "Red"],
                    },
                  ],
                  variants: [
                    {
                      variantName: "Standard",
                      additionalCost: 0,
                      description:
                        "Basic package with standard kit modifications.",
                    },
                    {
                      variantName: "Premium",
                      additionalCost: 5000,
                      description:
                        "Includes premium materials and additional structural modifications.",
                    },
                  ],
                  availability: {
                    stockStatus: "Pre-Order",
                    estimatedDelivery: {
                      standard: "6-8 weeks",
                      express: "2-4 weeks",
                      description:
                        "Pre-order status with varying delivery times.",
                    },
                  },
                  reviews: [
                    {
                      reviewer: "John Doe",
                      rating: 5,
                      comment: "Excellent quality and fit. Worth every penny.",
                      reviewDate: "2024-06-15",
                    },
                    {
                      reviewer: "Jane Smith",
                      rating: 4,
                      comment: "Good kit but installation was tricky.",
                      reviewDate: "2024-07-01",
                    },
                  ],
                  installationOptions: {
                    standard: {
                      cost: 500,
                      duration: "2 hours",
                      description: "Basic installation without modifications.",
                    },
                    custom: {
                      cost: 1200,
                      duration: "4 hours",
                      description: "Custom modifications and fitting.",
                    },
                  },
                  installationGuides: [
                    {
                      guideName: "Basic Installation",
                      guideUrl: "http://example.com/basic-installation",
                      guideFormat: "PDF",
                      languages: ["English", "Spanish"],
                    },
                    {
                      guideName: "Advanced Installation",
                      guideUrl: "http://example.com/advanced-installation",
                      guideFormat: "Video",
                      languages: ["English"],
                    },
                  ],
                  warranty: {
                    duration: "2 years",
                    coverage: "Manufacturing defects",
                    termsUrl: "http://example.com/warranty-terms",
                  },
                  associatedProducts: [
                    {
                      productId: "ACC001",
                      name: "GTR Carbon Fiber Spoiler",
                      price: 1500,
                      category: "Accessories",
                      compatibility: "GTR 2019-2024",
                    },
                    {
                      productId: "ACC002",
                      name: "GTR Custom Floor Mats",
                      price: 300,
                      category: "Accessories",
                      compatibility: "GTR 2019-2024",
                    },
                  ],
                },
              ],
            },
            {
              kitType: "Body Kit Works",
              availableKits: [
                {
                  kitId: "KIT002",
                  name: "SilhouetteWorksGTRRWing",
                  priceRange: {
                    min: 6480,
                    max: 15250,
                    currency: "USD",
                  },
                  features: ["Aero Wing", "Adjustable"],
                  variants: [
                    {
                      variantName: "Basic",
                      additionalCost: 0,
                    },
                    {
                      variantName: "Adjustable",
                      additionalCost: 1000,
                    },
                  ],
                  availability: {
                    stockStatus: "In Stock",
                    estimatedDelivery: "2-3 weeks",
                  },
                },
              ],
            },
          ],
          compatibility: {
            yearRange: "2019-2024",
            requiredModifications: ["No major modifications required"],
          },
        },
      ],
    },
  ],
};
