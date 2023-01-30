// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    originCountryCode,
    originCityName,
    destinationCountryCode,
    destinationCityName,
    weight,
    length,
    width,
    height,
    isCustomsDeclarable,
    unitOfMeasurement,
    plannedShippingDate,
  } = req.body;
  switch (req.method) {
    case "POST": {
      axios.get(`${process.env.DHL_BASIC_URL}/rates`, {
        params: {
          accountNumber: `${process.env.DHL_ACCOUNTNUMBER}`,
          originCountryCode,
          originCityName,
          destinationCountryCode,
          destinationCityName,
          weight,
          length,
          width,
          height,
          isCustomsDeclarable,
          unitOfMeasurement,
          plannedShippingDate,
        },
        auth: {
          username: `${process.env.DHL_USERNAME}`,
          password: `${process.env.DHL_PASSWORD}`,
        },
      });
      res.status(200).json({ name: "John Doe" });
    }
  }
}
