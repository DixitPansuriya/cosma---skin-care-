import { RadioGroup } from '@headlessui/react';
import { useParams, useNavigate } from 'react-router-dom';
import data from './Data_5';
import { useMyCart } from '../Context/CartContex';

export default function ProductScreen() {
  const { cart, setCart } = useMyCart();
  const navigate = useNavigate();
  const { id } = useParams();

  const sortedData = [...data].sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));

  const Product_1 = sortedData.find((x) => x._id === id);

  if (!Product_1) {
    return <div>Product not found</div>;
  }

  function AddToCart(event) {
    event.preventDefault();
    setCart([...cart, Product_1]);
    navigate('/purchase');
  }

  return (
    <div className="">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={Product_1.Product_IMG[0]?.img_2}
              alt="pic"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={Product_1.Product_IMG[1]?.img_1}
                alt="pic"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={Product_1.Product_IMG[2]?.img_3}
                alt="pic"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={Product_1.img}
              alt="pic"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{Product_1.title}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight">{Product_1.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center"></div>
                <p className="sr-only">{Product_1.rating} out of 5 stars</p>
                <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {Product_1.rating} reviews
                </p>
              </div>
            </div>

            <form className="mt-10" onSubmit={AddToCart}>
              <p>Category: {Product_1.Category}</p>
              <div>
                <RadioGroup className="mt-4">
                  <h1 className="text-sm font-medium">SKU: {Product_1.SKU}</h1>
                </RadioGroup>
              </div>

              <h2 className="mt-4">Time: {Product_1.time}</h2>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to Cart
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base">{Product_1.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium">Offer</h3>
              <div className="mt-4">
                <ul className="list-disc space-y-2 pl-4 text-sm">
                  <li key="order">
                    <span>{Product_1.order}</span>
                  </li>
                  <li key="shipping">
                    <span>{Product_1.shipping}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium">Details</h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm">{Product_1.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
