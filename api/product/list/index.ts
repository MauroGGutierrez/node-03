import { Request, Response } from "express";

const products = async (req: Request, res: Response) => {
  const { page, limit } = req.query;
  res.json({ message: "Product api has working", data: [page, limit] });
};

export default products;