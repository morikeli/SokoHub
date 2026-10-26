import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeSelectedProduct, selectedProduct } from "../redux/actions/productActions";
import { useEffect } from "react";

function ProductDetail() {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("Error: ", err));
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {dispatch(removeSelectedProduct())}
  }, [productId]);

  // Loading state while product data is fetched
  if (!product || Object.keys(product).length === 0) {
    return (
      <div className="container mx-auto p-6 flex justify-center items-center min-h-[60vh]">
        <div className="animate-pulse flex flex-col md:flex-row w-full max-w-4xl gap-8">
          <div className="w-full md:w-1/2 h-80 bg-gray-200 rounded-lg"></div>
          <div className="w-full md:w-1/2 space-y-4 py-4">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/3"></div>
            <div className="h-24 bg-gray-200 rounded w-full"></div>
            <div className="h-10 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  const { image, title, price, category, description, rating } = product;

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-5xl">
      {/* Main Product Card */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center p-6 md:p-10 gap-8 md:gap-12">
          
          {/* Left: Product Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center h-80 md:h-96 bg-white p-4">
            <img
              src={image}
              alt={title}
              className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right: Product Details */}
          <div className="w-full md:w-1/2 flex flex-col justify-between space-y-4">
            <div>
              {/* Category */}
              <span className="text-xs font-semibold uppercase tracking-wider text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                {category}
              </span>

              {/* Title */}
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-3 leading-tight">
                {title}
              </h1>

              {/* Rating Badge (if available from FakeStore API) */}
              {rating && (
                <div className="flex items-center space-x-2 mt-2">
                  <div className="flex items-center text-amber-500 text-sm">
                    ★ <span className="ml-1 font-semibold text-gray-700">{rating.rate}</span>
                  </div>
                  <span className="text-xs text-gray-400">({rating.count} reviews)</span>
                </div>
              )}

              {/* Price */}
              <div className="text-3xl font-extrabold text-gray-900 mt-4">
                ${price?.toFixed(2)}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-4">
                {description}
              </p>
            </div>

            {/* Actions / CTA */}
            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
              <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg active:scale-95">
                Add to Cart
              </button>
              <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-colors active:scale-95">
                Buy Now
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetail;