import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import { useMyCart } from '../Context/CartContex'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({mode,togal}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cart } = useMyCart()

  return (
    <header className="">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="##" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <h1 className='fs-1 font-mono'>
              Cosma
            </h1>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm font-semibold leading-6">Home</Link>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6">
              <Link to="/shop">Shop</Link>
              <ChevronDownIcon className="h-5 w-5 flex-none" aria-hidden="true" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white -left-10 top-full z-10 mt-3 max-w-md overflow-hidden rounded-3xl shadow-lg">
                <div className='d-flex gap-5 p-5' style={{ width: "170%" }}>
                  <ul>
                    <li className='button-1' style={{ fontWeight: "400" }}>SERUM</li>
                    <li className='mt-2 button-1'>Hydrating serum</li>
                    <li className='mt-2 button-1'>Anti Aging Serum</li>
                    <li className='mt-2 button-1'>Antioxidant Serum</li>
                    <li className='mt-2 button-1'>Brightening Serum</li>
                  </ul>
                  <ul>
                    <li className='button-1' style={{ fontWeight: "400" }}>CREAM</li>
                    <li className='mt-2 button-1'>Daily Moisturizing Cream</li>
                    <li className='mt-2 button-1'> Light Moisturising Cream</li>
                    <li className='mt-2 button-1'>Nourishing Skin Cream</li>
                    <li className='mt-2 button-1'>Soft Moisturizing Cream</li>
                  </ul>
                  <ul>
                    <li className='button-1' style={{ fontWeight: "400" }}>LOTION</li>
                  </ul>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link to="/blog" className="text-sm font-semibold leading-6">Blog</Link>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6">
              About Us
              <ChevronDownIcon className="h-5 w-5 flex-none" aria-hidden="true" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-10 bg-white top-full z-10 mt-3 max-w-md overflow-hidden rounded-3xl shadow-lg">
                <div className='d-flex flex-col gap-5 p-5' style={{ width: "170%" }}>
                  <ul className='me-5'>
                    <li className='button-1'>Our Story</li>
                  </ul>
                  <ul>
                    <li className='button-1'>Contact</li>
                  </ul>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>


          <Link to={"/purchase"}>  cart( {cart.length})</Link>



          <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={togal} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{mode}</label>
          </div>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/login" className="text-sm font-semibold leading-6">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="##" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="https://cosma.wpengine.com/wp-content/uploads/2021/03/logo.png" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Home
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {/* Additional nested items can go here */}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link to="/shop" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Shop
                </Link>
                <Link to="/blog" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Blog
                </Link>
                <Link to="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  About Us
                </Link>
              </div>
              <div className="py-6">
                <Link to="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
