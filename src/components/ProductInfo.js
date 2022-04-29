import { useState } from "react";

import {
  Disclosure,
  RadioGroup,
} from "@headlessui/react";
import {
  HeartIcon,
  MinusSmIcon,
  PlusSmIcon,
} from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductInfo({ product }) {

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  
  return (
    <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0 bg-slate-300">
    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
      {product.name}
    </h1>

    <div className="mt-3">
      <h2 className="sr-only">Product information</h2>
      <p className="text-3xl text-gray-900">{product.price}</p>
    </div>

    {/* Reviews */}
    <div className="mt-3">
      <h3 className="sr-only">Reviews</h3>
      <div className="flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={classNames(
                product.rating > rating
                  ? "text-indigo-500"
                  : "text-gray-300",
                "h-5 w-5 flex-shrink-0"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="sr-only">{product.rating} out of 5 stars</p>
      </div>
    </div>

    <div className="mt-6">
      <h3 className="sr-only">Description</h3>

      <div
        className="text-base text-gray-700 space-y-6"
        dangerouslySetInnerHTML={{ __html: product.description }}
      />
    </div>

    <form className="mt-6">
      {/* Colors */}
      <div>
        <h3 className="text-sm text-gray-600">Color</h3>

        <RadioGroup
          value={selectedColor}
          onChange={setSelectedColor}
          className="mt-2"
        >
          <RadioGroup.Label className="sr-only">
            Choose a color
          </RadioGroup.Label>
          <div className="flex items-center space-x-3">
            {product.colors.map((color) => (
              <RadioGroup.Option
                key={color.name}
                value={color}
                className={({ active, checked }) =>
                  classNames(
                    color.selectedColor,
                    active && checked ? "ring ring-offset-1" : "",
                    !active && checked ? "ring-2" : "",
                    "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                  )
                }
              >
                <RadioGroup.Label as="p" className="sr-only">
                  {color.name}
                </RadioGroup.Label>
                <span
                  aria-hidden="true"
                  className={classNames(
                    color.bgColor,
                    "h-8 w-8 border border-black border-opacity-10 rounded-full"
                  )}
                />
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>

      <div className="mt-10 flex sm:flex-col1">
        <button
          type="submit"
          className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
        >
          Add to bag
        </button>

        <button
          type="button"
          className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
        >
          <HeartIcon
            className="h-6 w-6 flex-shrink-0"
            aria-hidden="true"
          />
          <span className="sr-only">Add to favorites</span>
        </button>
      </div>
    </form>

    <section aria-labelledby="details-heading" className="mt-12">
      <h2 id="details-heading" className="sr-only">
        Additional details
      </h2>

      <div className="border-t divide-y divide-gray-200">
        {product.details.map((detail) => (
          <Disclosure as="div" key={detail.name}>
            {({ open }) => (
              <>
                <h3>
                  <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                    <span
                      className={classNames(
                        open ? "text-indigo-600" : "text-gray-900",
                        "text-sm font-medium"
                      )}
                    >
                      {detail.name}
                    </span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusSmIcon
                          className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusSmIcon
                          className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel
                  as="div"
                  className="pb-6 prose prose-sm"
                >
                  <ul role="list">
                    {detail.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  </div>
  );
}