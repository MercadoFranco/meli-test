import currencySymbols from "src/utils/worldCurrencySymbols.json";
import freeShippingIcon from "src/assets/ic_shipping.png";
import { Link } from "react-router-dom";
import locations from "src/utils/locations.json";
import "./styles.sass";
import formatPrice from "src/utils/formatPrice";

const ProductItem = ({ item }) => {
  const { id, picture, title, free_shipping, price } = item;

  const formattedPrice = formatPrice(price?.amount);
  const location = locations[Math.floor(Math.random() * 3)];
  return (
    <Link to={`/items/${id}`} className="item">
      <img src={picture} alt={title} className="product-picture" />
      <div className="main-text-container">
        <div>
          <h3>
            {currencySymbols[price?.currency ?? "USD"]} {formattedPrice}
          </h3>
          {free_shipping ? (
            <img
              src={freeShippingIcon}
              alt="Free shipping"
              className="shipping-icon"
            />
          ) : null}
        </div>
        <h4>{title}</h4>
      </div>

      <h6 className="location">{location}</h6>
      {/* NOTA: No encontré este dato en el response del endpoint de items */}
      {/* Así que agarré valores que encontré en los filtros por ubicación y los muestro randomizados */}
    </Link>
  );
};

export default ProductItem;
