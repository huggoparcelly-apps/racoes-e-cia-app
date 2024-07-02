import Image from "next/image";

import golden from "/public/racao-golden.webp";
import premier from "/public/racao-premier.webp";
import goldeGato from "/public/golden-gatos.webp";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              <li className="flex py-6">
                <div className="ml-4 flex flex-1 justify-between">
                  <div>
                    <div className="flex flex-col text-base font-medium text-gray-900 ">
                      <h3>
                        <p className="w-44">
                          Golden Cachorro Filhote 2,5Kg
                        </p>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">Frango</p>
                      <p>R$ 90,00</p>
                    </div>
                  </div>

                  <div
                    className="flex items-end relative h-32 w-20 
                                  overflow-hidden rounded-md "
                  >
                    <Image
                      src={golden}
                      alt="Ração"
                      className="h-full w-full object-cover object-center"
                    />
                    <span
                      className="bg-teal-600 text-sm font-bold rounded-full 
                      h-6 w-6 flex items-center justify-center absolute left-14 text-slate-200"
                    >
                      +
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex py-6">
                <div className="ml-4 flex flex-1 justify-between">
                  <div>
                    <div className="flex flex-col text-base font-medium text-gray-900 ">
                      <h3>
                        <p className="w-44">
                          Premier Raças Espec Filhote 2,5Kg
                        </p>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 w-44 truncate">Ração premier raças específicas</p>
                      <p>R$ 90,00</p>
                    </div>
                  </div>

                  <div
                    className="flex items-end relative h-32 w-20 
                                  overflow-hidden rounded-md "
                  >
                    <Image
                      src={premier}
                      alt="Ração"
                      className="h-full w-full object-cover object-center"
                    />
                    <span
                      className="bg-teal-600 text-sm font-bold rounded-full 
                      h-6 w-6 flex items-center justify-center absolute left-14 text-slate-200"
                    >
                      +
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex py-6">
                <div className="ml-4 flex flex-1 justify-between">
                  <div>
                    <div className="flex flex-col text-base font-medium text-gray-900 ">
                      <h3>
                        <p className="w-44">
                          Golden Cachorro Filhote 2,5Kg
                        </p>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">Frango</p>
                      <p>R$ 90,00</p>
                    </div>
                  </div>

                  <div
                    className="flex items-end relative h-32 w-20 
                                  overflow-hidden rounded-md "
                  >
                    <Image
                      src={goldeGato}
                      alt="Ração"
                      className="h-full w-full object-cover object-center"
                    />
                    <span
                      className="bg-teal-600 text-sm font-bold rounded-full 
                      h-6 w-6 flex items-center justify-center absolute left-14 text-slate-200"
                    >
                      +
                    </span>
                  </div>
                </div>
              </li>
              {/* <!-- More products... --> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
