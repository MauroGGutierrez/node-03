import { Request, Response } from "express";

const salute =  async (req: Request, res: Response) => {
  res.json({ message: "Hello guys. Welcome to Vercel" });
};

export default salute;