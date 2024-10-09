// import { useEffect, useState } from "react";
// import { FaRegEye, FaRegHeart, FaStar } from "react-icons/fa";
// import { Navigate, useParams } from "react-router-dom";

// // import { useState } from "react";
// import { StarIcon } from "@heroicons/react/20/solid";
// import { Radio, RadioGroup } from "@headlessui/react";

// const products = {
//   name: "Basic Tee 6-Pack",
//   price: "$192",
//   href: "#",
//   breadcrumbs: [
//     { id: 1, name: "Men", href: "#" },
//     { id: 2, name: "Clothing", href: "#" },
//   ],
//   images: [
//     {
//       src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
//       alt: "Two each of gray, white, and black shirts laying flat.",
//     },
//     {
//       src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
//       alt: "Model wearing plain black basic tee.",
//     },
//     {
//       src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
//       alt: "Model wearing plain gray basic tee.",
//     },
//     {
//       src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
//       alt: "Model wearing plain white basic tee.",
//     },
//   ],
//   colors: [
//     { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
//     { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
//     { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
//   ],
//   sizes: [
//     { name: "XXS", inStock: false },
//     { name: "XS", inStock: true },
//     { name: "S", inStock: true },
//     { name: "M", inStock: true },
//     { name: "L", inStock: true },
//     { name: "XL", inStock: true },
//     { name: "2XL", inStock: true },
//     { name: "3XL", inStock: true },
//   ],
//   description:
//     'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//   highlights: [
//     "Hand cut and sewn locally",
//     "Dyed with our proprietary colors",
//     "Pre-washed & pre-shrunk",
//     "Ultra-soft 100% cotton",
//   ],
//   details:
//     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// };
// const reviews = { href: "#", average: 4, totalCount: 117 };

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }
// function product() {
//   const [products, setProducts] = useState([]);
//   //   const [filter, setFilter] = useState(products);
//   const [loading, setLoading] = useState(false);
//   // const { id } = useParams();

//   const getProducts = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();

//       console.log(data.title); // Accessing the title of each object
//       setProducts(data);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Use useEffect to fetch the data when the component mounts
//   useEffect(() => {
//     getProducts();
//   }, []); // Empty dependency array ensures it runs once on mount

//   //   const filterProduct(e) => {
//   //     const categoryList = data.filter((cat)=> cat.category === e);
//   //     setFilter(categoryList);
//   //   }
//   const [selectedColor, setSelectedColor] = useState(product.colors[0]);
//   const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

//   return (
//     <div className="bg-white w-full">
//       <div className="mt-5 grid grid-cols-4 gap-4 max-w-full">
//         {loading ? (
//           <p>LOADING...</p>
//         ) : (
//           products.map((product) => (
//             <div className="bg-white">
//               <div className="pt-6">
//                 <nav aria-label="Breadcrumb">
//                   <ol
//                     role="list"
//                     className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
//                   >
//                     {product.breadcrumbs.map((breadcrumb) => (
//                       <li key={breadcrumb.id}>
//                         <div className="flex items-center">
//                           <a
//                             href={breadcrumb.href}
//                             className="mr-2 text-sm font-medium text-gray-900"
//                           >
//                             {breadcrumb.name}
//                           </a>
//                           <svg
//                             fill="currentColor"
//                             width={16}
//                             height={20}
//                             viewBox="0 0 16 20"
//                             aria-hidden="true"
//                             className="h-5 w-4 text-gray-300"
//                           >
//                             <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
//                           </svg>
//                         </div>
//                       </li>
//                     ))}
//                     <li className="text-sm">
//                       <a
//                         href={product.href}
//                         aria-current="page"
//                         className="font-medium text-gray-500 hover:text-gray-600"
//                       >
//                         {product.name}
//                       </a>
//                     </li>
//                   </ol>
//                 </nav>

//                 {/* Image gallery */}
//                 <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
//                   <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
//                     <img
//                       alt={product.images[0].alt}
//                       src={product.images[0].src}
//                       className="h-full w-full object-cover object-center"
//                     />
//                   </div>
//                   <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
//                     <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
//                       <img
//                         alt={product.images[1].alt}
//                         src={product.images[1].src}
//                         className="h-full w-full object-cover object-center"
//                       />
//                     </div>
//                     <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
//                       <img
//                         alt={product.images[2].alt}
//                         src={product.images[2].src}
//                         className="h-full w-full object-cover object-center"
//                       />
//                     </div>
//                   </div>
//                   <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
//                     <img
//                       alt={product.images[3].alt}
//                       src={product.images[3].src}
//                       className="h-full w-full object-cover object-center"
//                     />
//                   </div>
//                 </div>

//                 {/* Product info */}
//                 <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
//                   <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
//                     <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
//                       {product.name}
//                     </h1>
//                   </div>

//                   {/* Options */}
//                   <div className="mt-4 lg:row-span-3 lg:mt-0">
//                     <h2 className="sr-only">Product information</h2>
//                     <p className="text-3xl tracking-tight text-gray-900">
//                       {product.price}
//                     </p>

//                     {/* Reviews */}
//                     <div className="mt-6">
//                       <h3 className="sr-only">Reviews</h3>
//                       <div className="flex items-center">
//                         <div className="flex items-center">
//                           {[0, 1, 2, 3, 4].map((rating) => (
//                             <StarIcon
//                               key={rating}
//                               aria-hidden="true"
//                               className={classNames(
//                                 reviews.average > rating
//                                   ? "text-gray-900"
//                                   : "text-gray-200",
//                                 "h-5 w-5 flex-shrink-0"
//                               )}
//                             />
//                           ))}
//                         </div>
//                         <p className="sr-only">
//                           {reviews.average} out of 5 stars
//                         </p>
//                         <a
//                           href={reviews.href}
//                           className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
//                         >
//                           {reviews.totalCount} reviews
//                         </a>
//                       </div>
//                     </div>

//                     <form className="mt-10">
//                       {/* Colors */}
//                       <div>
//                         <h3 className="text-sm font-medium text-gray-900">
//                           Color
//                         </h3>

//                         <fieldset aria-label="Choose a color" className="mt-4">
//                           <RadioGroup
//                             value={selectedColor}
//                             onChange={setSelectedColor}
//                             className="flex items-center space-x-3"
//                           >
//                             {product.colors.map((color) => (
//                               <Radio
//                                 key={color.name}
//                                 value={color}
//                                 aria-label={color.name}
//                                 className={classNames(
//                                   color.selectedClass,
//                                   "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1"
//                                 )}
//                               >
//                                 <span
//                                   aria-hidden="true"
//                                   className={classNames(
//                                     color.class,
//                                     "h-8 w-8 rounded-full border border-black border-opacity-10"
//                                   )}
//                                 />
//                               </Radio>
//                             ))}
//                           </RadioGroup>
//                         </fieldset>
//                       </div>

//                       {/* Sizes */}
//                       <div className="mt-10">
//                         <div className="flex items-center justify-between">
//                           <h3 className="text-sm font-medium text-gray-900">
//                             Size
//                           </h3>
//                           <a
//                             href="#"
//                             className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
//                           >
//                             Size guide
//                           </a>
//                         </div>

//                         <fieldset aria-label="Choose a size" className="mt-4">
//                           <RadioGroup
//                             value={selectedSize}
//                             onChange={setSelectedSize}
//                             className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
//                           >
//                             {product.sizes.map((size) => (
//                               <Radio
//                                 key={size.name}
//                                 value={size}
//                                 disabled={!size.inStock}
//                                 className={classNames(
//                                   size.inStock
//                                     ? "cursor-pointer bg-white text-gray-900 shadow-sm"
//                                     : "cursor-not-allowed bg-gray-50 text-gray-200",
//                                   "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6"
//                                 )}
//                               >
//                                 <span>{size.name}</span>
//                                 {size.inStock ? (
//                                   <span
//                                     aria-hidden="true"
//                                     className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
//                                   />
//                                 ) : (
//                                   <span
//                                     aria-hidden="true"
//                                     className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
//                                   >
//                                     <svg
//                                       stroke="currentColor"
//                                       viewBox="0 0 100 100"
//                                       preserveAspectRatio="none"
//                                       className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
//                                     >
//                                       <line
//                                         x1={0}
//                                         x2={100}
//                                         y1={100}
//                                         y2={0}
//                                         vectorEffect="non-scaling-stroke"
//                                       />
//                                     </svg>
//                                   </span>
//                                 )}
//                               </Radio>
//                             ))}
//                           </RadioGroup>
//                         </fieldset>
//                       </div>

//                       <button
//                         type="submit"
//                         className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                       >
//                         Add to bag
//                       </button>
//                     </form>
//                   </div>

//                   <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
//                     {/* Description and details */}
//                     <div>
//                       <h3 className="sr-only">Description</h3>

//                       <div className="space-y-6">
//                         <p className="text-base text-gray-900">
//                           {product.description}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="mt-10">
//                       <h3 className="text-sm font-medium text-gray-900">
//                         Highlights
//                       </h3>

//                       <div className="mt-4">
//                         <ul
//                           role="list"
//                           className="list-disc space-y-2 pl-4 text-sm"
//                         >
//                           {product.highlights.map((highlight) => (
//                             <li key={highlight} className="text-gray-400">
//                               <span className="text-gray-600">{highlight}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>

//                     <div className="mt-10">
//                       <h2 className="text-sm font-medium text-gray-900">
//                         Details
//                       </h2>

//                       <div className="mt-4 space-y-6">
//                         <p className="text-sm text-gray-600">
//                           {product.details}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             // <Navigate
//             //   to="/product"
//             //   key={product.id}
//             //   className=" w-[200px] h-[300px] "
//             // >
//             //   <div className="relative group h-48 w-full border rounded-lg">
//             //     <div className="absolute right-3 top-3 bg-gray-200 rounded-xl p-1">
//             //       <FaRegHeart className=" " />
//             //     </div>
//             //     <div className="absolute right-3 top-10 bg-gray-200 rounded-xl p-1">
//             //       <FaRegEye className="  " />
//             //     </div>
//             //     <img
//             //       alt={product.title.substring(0)}
//             //       src={product.image}
//             //       className="h-36 w-full object-contain object-center mt-5"
//             //     />
//             //     <button className="absolute bottom-0 rounded-b-lg w-full bg-black  text-white text-center p-1 hidden group-hover:block">
//             //       Add To Cart
//             //     </button>
//             //   </div>
//             //   <h3 className="mt-4 text-base font-semibold text-gray-900">
//             //     <a href={product.href}>
//             //       <span className="absolute inset-0" />
//             //       {product.title.substring(0, 12)}
//             //     </a>
//             //   </h3>
//             //   <p className="mt-1 text-sm text-[#DB4444]">${product.price}</p>
//             //   <div className="flex items-center">
//             //     {[0, 1, 2, 3, 4].map((rating, index) => (
//             //       <FaStar
//             //         fill={
//             //           product.rating.rate > rating ? "#FFAD33" : "lightgray"
//             //         }
//             //         key={index}
//             //         aria-hidden="true"
//             //         className="h-4 w-4 flex-shrink-0 "
//             //       />
//             //     ))}
//             //     <p className=" ml-3">({product.rating.rate})</p>
//             //   </div>
//             // </Navigate>
//           ))
//         )}
//       </div>

//       {/* PRODUCTS */}
//       {/* <div className="mt-14">
//           <div className="sm:flex sm:items-baseline sm:justify-between">
//             <div>
//               <div className="flex items-center gap-2 mb-3">
//                 <div className="h-8 w-3 bg-[#DB4444] rounded-sm " />
//                 <p className="text-sm text-[#DB4444] font-semibold">This Month</p>
//               </div>

//               <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
//                 Best Selling Products
//               </h2>
//             </div>
//             <button
//               type="button"
//               className="rounded-sm bg-[#DB4444] hover:bg-[#da5a5a] px-10 py-2 text-sm  text-white shadow-md  hover:outline focus-visible:outline-2 focus-visible:outline-offset-2"
//             >
//               View All
//             </button>
//           </div>
//         </div> */}
//     </div>
//   );
// }

// export default product;
