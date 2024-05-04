import fetch from "node-fetch";
import { countDecimals } from "../utils.js";

export default async (req, res) => {
  const id = req.params.id;

  try {
    const baseResponse = await fetch(
      `https://api.mercadolibre.com/items/${id}`
    );
    const baseData = await baseResponse.json();
    if (baseData.status === 404) {
      return res.json(baseData);
    }

    let formattedItem = {
      author: {
        name: "String",
        lastname: "String",
      },
      item: {
        id: baseData.id,
        title: baseData.title,
        price: {
          currency: baseData.currency_id,
          amount: baseData.price,
          decimals: countDecimals(baseData.price),
        },
        picture: baseData.thumbnail,
        condition: baseData.condition,
        free_shipping: baseData.shipping?.free_shipping ?? false,
        sold_quantity: baseData.initial_quantity,
      },
    };

    try {
      const descriptionResponse = await fetch(
        `https://api.mercadolibre.com/items/${id}/description`
      );
      const descData = await descriptionResponse.json();
      formattedItem.item.description = descData?.plain_text;
    } catch (error) {
      formattedItem.item.description = "";
    }

    res.json(formattedItem);
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred while fetching data.",
      error: error.message,
    });
  }
};
