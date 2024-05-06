import { useSearchParams } from "react-router-dom";
import ProductItem from "src/components/ProductItem";
import { useGetProductsBySearchQuery } from "src/store/services/productApi";
import Breadcrumb from "src/components/Breadcrumb";
import { Helmet } from "react-helmet-async";
import SkeletonResult from "src/components/SkeletonResult";

const Result = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  const { data, error, isLoading, isFetching } = useGetProductsBySearchQuery(q);

  if (isLoading || isFetching) return <SkeletonResult />;

  if ((!data && !isLoading && !isFetching) || error)
    return (
      <div className="white-panel">
        <h2>Ocurrió un error al realizar la búsqueda</h2>
        <p>Por favor intentá de nuevo más tarde.</p>
      </div>
    );

  if (data?.items?.length === 0)
    return (
      <div className="white-panel">
        <h2>No hay publicaciones que coincidan con tu búsqueda</h2>
        <ul>
          <li>Revisá la ortografía de la palabra.</li>
          <li>Utilizá palabras más genéricas o menos palabras.</li>
          <li>Navegá por las categorías para encontrar un producto similar</li>
        </ul>
      </div>
    );

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content={`Búsqueda de "${q}" ${data.items.length ?? 0} resultados`}
        />
      </Helmet>
      <Breadcrumb data={data.categories?.slice(0, 5) ?? []} />
      <div className="white-panel">
        <ol>
          {data?.items?.map((item, index) => (
            <li key={item.id}>
              <ProductItem item={item} />
              {index !== data.items.length - 1 && <span className="divider" />}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Result;
