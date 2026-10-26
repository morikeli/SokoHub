import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);

  // Safety check in case products haven't loaded yet
  if (!products) return null;

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <div
        key={id}
        className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer flex flex-col"
      >
        <Link to={`/product/${id}`}>
          {/* Image container with fixed height and contain fit */}
          <div className="w-full h-48 bg-white p-4 flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Content area */}
          <div className="p-4 flex flex-col grow space-y-2">
            {/* Product Category */}
            <span className="text-xs font-medium uppercase tracking-wider text-green-600">
              {category}
            </span>

            {/* Header / Title */}
            <div className="text-lg font-semibold text-gray-800 line-clamp-1">
              {title}
            </div>

            {/* Price */}
            <div className="text-xl font-bold text-gray-900 pt-1">${price}</div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
}

export default ProductComponent;
