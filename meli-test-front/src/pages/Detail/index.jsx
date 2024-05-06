import { useParams } from "react-router-dom";
import Breadcrumb from "src/components/Breadcrumb";
import { useGetProductByIdQuery } from "src/store/services/productApi";
import conditionDictionary from "src/utils/conditionDictionary.json";
import currencySymbols from "src/utils/worldCurrencySymbols.json";
import formatPrice from "src/utils/formatPrice";
import "./styles.sass";
import Button from "src/components/Button";
import { Helmet } from "react-helmet-async";
import SkeletonDetail from "src/components/SkeletonDetail";

const Detail = () => {
  const { id } = useParams();

  const { data, error, isLoading, isFetching } = useGetProductByIdQuery(id);

  if (isLoading || isFetching) return <SkeletonDetail />;

  if ((!data && !isLoading && !isFetching) || error)
    return (
      <div className="white-panel">
        <h3>Ocurrió un error al realizar la búsqueda</h3>
        <p>Por favor intentá de nuevo más tarde.</p>
      </div>
    );

  const condition = conditionDictionary[data.item.condition] ?? "nuevo";
  const soldMessage = `${data.item.sold_quantity} vendido${
    data.item.sold_quantity !== 1 ? "s" : ""
  }`;
  const formattedPrice = formatPrice(data.item.price.amount);
  const decimals =
    String(data.item.price.decimals).length < 2
      ? `0${data.item.price.decimals}`
      : data.item.price.decimals.toFixed(2);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content={`Producto: ${data.item.title} Precio: ${formattedPrice}`}
        />
      </Helmet>
      <Breadcrumb
        data={[
          "Electrónica, Audio y Video",
          "iPod",
          "Reproductores",
          "iPod touch",
          "32 GB",
        ]}
      />
      {/* 
        NOTA: Envío estos datos hardcodeados porque en el diseño aparecen así, pero el endpoint de producto no devuelve 
        la categoría y su path
      */}
      <div className="white-panel">
        <div className="image-container">
          <img
            src={data.item.picture}
            className="picture"
            alt={data.item.title}
          />
          <div className="main-data">
            <p>{`${condition} - ${soldMessage}`}</p>
            <h3>{data.item.title}</h3>
            <h1>
              {currencySymbols[data.item.price?.currency ?? "USD"]}{" "}
              {formattedPrice}
              <span>{decimals}</span>
            </h1>
            <Button variant="secondary" fullWidth>
              Comprar
            </Button>
          </div>
        </div>
        <div className="description">
          <h2>Descripción del producto</h2>
          <h5>
            {data.item.description ||
              "Este producto no cuenta con descripción."}
          </h5>
        </div>
      </div>
    </>
  );
};

export default Detail;
