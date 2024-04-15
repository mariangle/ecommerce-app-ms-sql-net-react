import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { useCurrency } from "@/hooks/useCurrency";
import { getProductUrl, getProductPrice } from "@/utils/product";

import { PlusIcon, MinusIcon, Trash2Icon as TrashIcon } from "lucide-react";
import products from "@/constants/Products.json";

export default function CartItem({ item }) {
  const { removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const { formatPrice } = useCurrency();

  const product = products?.find((product) => product.id === item.productId);

  return (
    <div className="flex w-full justify-start gap-4 md:max-w-lg">
      <Link to={getProductUrl(product)}>
        <div className="size-24">
          <img
            src={product?.image}
            alt={product?.name}
            className="aspect-square h-full w-full object-cover "
          />
        </div>
      </Link>
      <div className="flex w-full items-start justify-between">
        <div>
          <div>
            <Link to={getProductUrl(product)} className="font-semibold">
              {product?.name}
            </Link>
            <p>Brand: {product?.brand}</p>
            <p>Size: {item.size}</p>
          </div>
          {product?.price.discount ? (
            <div>
              <p className="line-through">
                {formatPrice(product.price.default)}
              </p>
              <p className="text-red-700">
                {formatPrice(getProductPrice(product))}
              </p>
            </div>
          ) : (
            <p>{formatPrice(product.price.default)}</p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center border">
            <button onClick={() => decrementQuantity(item.id)} className="p-2">
              <MinusIcon className="size-3" />
            </button>
            <div className="text-sm">{item.quantity}</div>
            <button onClick={() => incrementQuantity(item.id)} className="p-2">
              <PlusIcon className="size-3" />
            </button>
          </div>
          <button onClick={() => removeFromCart(item.id)}>
            <TrashIcon className="size-4 text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
