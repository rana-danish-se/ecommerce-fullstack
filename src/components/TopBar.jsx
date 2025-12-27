"use client";
import { useState } from "react";
import {
  User,
  MessageSquare,
  Package,
  ShoppingCart,
  Search,
  Menu,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
const TopBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState({
    code: "de",
    name: "Germany",
  });

  const countries = [
    { code: "pk", name: "Pakistan" },
    { code: "de", name: "Germany" },
    { code: "us", name: "United States" },
    { code: "fr", name: "France" },
    { code: "it", name: "Italy" },
    { code: "gb", name: "United Kingdom" },
    { code: "ae", name: "United Arab Emirates" },
    { code: "cn", name: "China" },
    { code: "jp", name: "Japan" },
  ];
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching:", searchQuery, "in category:", category);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      {/* Main TopBar */}
      <div className="border-b border-gray-200 px-4 md:px-8 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 md:gap-8">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Image
              src="/assets/logo-colored.svg"
              alt="Brand Logo"
              width={150}
              height={40}
              className="h-auto w-32 md:w-[150px]"
              priority
            />
          </div>

          {/* Search Section - Desktop */}
          <div className="hidden flex-grow md:flex max-w-2xl overflow-hidden rounded-lg border-2 border-blue-600 bg-white">
            <div className="flex w-full items-center">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 w-full px-4 text-sm outline-none placeholder:text-gray-400"
              />
              <select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-10 border-l border-gray-200 bg-gray-50 px-4 text-sm font-medium text-gray-700 outline-none"
              >
                <option value="all">All Categories</option>
                <option value="automobiles">Automobiles</option>
                <option value="clothes">Clothes and Wears</option>
                <option value="home-interiors">Home Interiors</option>
                <option value="computer-tech">Computer & Tech</option>
                <option value="tools-equipments">Tools & Equipments</option>
                <option value="sports-outdoor">Sports & Outdoor</option>
                <option value="animal">Animal & Pet</option>
                <option value="machinery-tools">Machinery Tools</option>
              </select>
              <button
                onClick={handleSearch}
                className="flex h-10 cursor-pointer items-center gap-2 bg-blue-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-blue-700 active:scale-95"
              >
                <Search className="h-4 w-4" />
                <span>Search</span>
              </button>
            </div>
          </div>

          {/* Navigation / Icons Section */}
          <nav>
            <ul className="flex items-center gap-2 md:gap-6">
              <li className="hidden md:flex group cursor-pointer text-gray-500 flex-col items-center transition-colors hover:text-blue-600">
                <div className="rounded-full p-2 transition-colors group-hover:bg-blue-50">
                  <User className="h-6 w-6" />
                </div>
                <span className="text-[13px] font-medium">Profile</span>
              </li>
              <li className="hidden md:flex group cursor-pointer text-gray-500 flex-col items-center transition-colors hover:text-blue-600">
                <div className="rounded-full p-2 transition-colors group-hover:bg-blue-50">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <span className="text-[13px] font-medium">Message</span>
              </li>
              <li className="group flex cursor-pointer text-gray-500 flex-col items-center transition-colors hover:text-blue-600">
                <div className="rounded-full p-2 transition-colors group-hover:bg-blue-50">
                  <Package className="h-4 w-4 md:h-6 md:w-6" />
                </div>
                <span className="hidden text-[13px] font-medium md:block">
                  Orders
                </span>
              </li>
              <li className="group flex cursor-pointer flex-col text-gray-500 items-center gap-1 transition-colors hover:text-blue-600 relative">
                <div className="rounded-full p-2 transition-colors group-hover:bg-blue-50">
                  <ShoppingCart className="h-4 w-4 md:h-6 md:w-6" />
                </div>
                <span className="hidden text-[13px] font-medium md:block">
                  My Cart
                </span>
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                  0
                </span>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Search - visible only on small screens */}
        <div className="mt-4 md:hidden">
          <div className="flex overflow-hidden rounded-lg border border-gray-200 bg-white">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 w-full px-4 text-sm outline-none"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 px-4 text-white"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Navigation Bar */}
      <div className="bg-white px-4 md:px-8 py-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Left Navigation */}
          <nav className="flex items-center gap-2 md:gap-6">
            <button className="flex items-center gap-2 rounded-md bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
              <Menu className="h-4 w-4" />
              <span className="hidden sm:inline">All category</span>
            </button>
            <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
              <li className="cursor-pointer hover:text-blue-600 transition-colors">
                Hot offers
              </li>
              <li className="cursor-pointer hover:text-blue-600 transition-colors">
                Gift boxes
              </li>
              <li className="cursor-pointer hover:text-blue-600 transition-colors">
                Projects
              </li>
              <li className="cursor-pointer hover:text-blue-600 transition-colors">
                Menu item
              </li>
              <li className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors">
                Help
                <ChevronDown className="h-4 w-4" />
              </li>
            </ul>
          </nav>

          {/* Right Section - Language and Shipping */}
          <div className="flex items-center gap-3 md:gap-6">
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              <span>English, USD</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors group relative">
              <span className="hidden sm:inline">Ship to</span>
              <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded border border-transparent hover:border-gray-200">
                <Image
                  src={`https://flagcdn.com/${selectedCountry.code}.svg`}
                  width={20}
                  height={15}
                  alt={selectedCountry.name}
                  className="rounded-sm object-cover"
                />
                <span className="uppercase text-xs font-bold">
                  {selectedCountry.code}
                </span>
              </div>
              <ChevronDown className="h-4 w-4" />

              {/* Country Dropdown - Improved for stability */}
              <div className="absolute right-0 top-full pt-2 hidden group-hover:block z-[60]">
                {/* Transparent bridge to prevent vanishing on micro-gaps */}
                <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent"></div>

                <div className="w-24 bg-white border border-gray-200 rounded-lg shadow-xl py-2">
                  {countries.map((country) => (
                    <div
                      key={country.code}
                      onClick={() => setSelectedCountry(country)}
                      className="flex items-center justify-center gap-3 px-3 py-2 hover:bg-gray-50 cursor-pointer"
                    >
                      <Image
                        src={`https://flagcdn.com/${country.code}.svg`}
                        width={20}
                        height={15}
                        alt={country.code}
                        className="rounded-sm"
                      />
                      <span className="text-xs font-bold text-gray-700 uppercase">
                        {country.code}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
