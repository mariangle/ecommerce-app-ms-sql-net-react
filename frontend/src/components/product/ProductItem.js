import React from 'react';
import { Link } from 'react-router-dom';
import { icons } from '../../assets/icons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useWishlist } from '../../utils/hooks/useWishlist';
import { formatPrice } from '../../utils/hooks/useUtil';

function ProductCard({product, index}) {
  const { wishlistItems, toggleWishlistItem } = useWishlist();
  const itemExists = wishlistItems.find((item) => item.productID === product.productID);

return (
  <>
  {product.inStock &&
        <div className='product-card' key={index}>   
            <FontAwesomeIcon
              icon={itemExists ? icons.heartFull : icons.heart}
              onClick={() => toggleWishlistItem(product)}
            />   
          <div className='product-img'>
              <Link to={`/${product.productID}`}><img src={product.imageURL} alt="" /></Link>
          </div>
          <div className='product-info'>
            <Link to={`/${product.productID}`}>
              <p>{product.brand}</p>
              <h3>{product.name}</h3>
              <p> {formatPrice(product.defaultPrice)}</p>
            </Link>
          </div>
      </div>
  }
  </>
);}

export default ProductCard;