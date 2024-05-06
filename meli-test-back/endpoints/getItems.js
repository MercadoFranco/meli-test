import fetch from "node-fetch";

export default async (req, res) => {
  const { q } = req.query;

  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${q}&limit=${4}`
    );
    const data = await response.json();

    const categoryItem = data.filters?.find(
      (filter) => filter.id === "category"
    )?.values?.[0];

    const formattedCategories =
      categoryItem?.path_from_root?.map((val) => val.name) ?? [];

    const formattedItems = data.results.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: Math.floor(item.price),
          decimals: item.price - Math.floor(item.price),
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
      };
    });

    res.json({
      author: {
        name: "String",
        lastname: "String",
      },
      items: formattedItems,
      categories: formattedCategories,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred while fetching data.",
      error: error.message,
    });
  }
};
