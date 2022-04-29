import { Tab } from "@headlessui/react";

const product = {
  name: "Zip Tote Basket",
  price: "$140",
  rating: 4,
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 2,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 3,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-03.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 4,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
  ],
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-gray-700",
      selectedColor: "ring-gray-700",
    },
    { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    {
      name: "Washed Gray",
      bgColor: "bg-gray-500",
      selectedColor: "ring-gray-500",
    },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: "Features",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    // More sections...
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TabGroup() {
  return (
    <Tab.Group as="div" className="flex container mx-auto">
      <div className="hidden w-1/6 sm:block bg-red-300">
        <Tab.List className="flex flex-col w-full">
          {/* THIS TAKES AN ID AS A SELECTION THAT WILL DETERMINE WHAT'S IN THE PANEL */}
          {product.images.map((image) => (
            <Tab
              key={image.id}
              className="bg-white rounded-md flex flex-col items-center justify-end cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
            >
              {({ selected }) => (
                <>
                  <span className="sr-only">{image.name}</span>
                  <span className="rounded-md">
                    <img
                      src={image.src}
                      alt=""
                      className="object-center object-cover"
                    />
                  </span>
                  <span
                    className={classNames(
                      selected ? "ring-yellow-500" : "ring-green-500",
                      "absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="w-5/6 bg-blue-300">
        {product.images.map((image) => (
          <Tab.Panel key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              className="object-center object-cover sm:rounded-lg"
            />
            {image.id}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}