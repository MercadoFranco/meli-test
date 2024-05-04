import fetch from "node-fetch";
import { countDecimals } from "../utils.js";

export default async (req, res) => {
  const { q, page } = req.query;

  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${q}&offset=${
        (page ?? 0) * 50
      }`
    );
    const data = await response.json();

    const formattedCategories =
      data.available_filters
        ?.find((filter) => filter.id === "category")
        ?.values?.map((val) => val.name) ?? [];

    const formattedItems = data.results.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: countDecimals(item.price),
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
      pagination: {
        totalPages: Math.ceil(data.paging.total / 50),
        page: data.paging.offset / 50,
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
