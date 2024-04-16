import express from "express";
import { Book } from "../models/bookmodel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(404).send({ message: "Send all required feilds" });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const book = await Book.find({});

    res.send(book);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.send(book);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    // if (!req.body.title || !req.body.author || !req.body.publishYear) {
    //   return res.status(404).send({ message: "Send all required feilds" });
    // }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body, { new: true });

    // if (!result) {
    //   res.send("Book not found");
    // }
    return res.status(200).send("Book updated Successfully");
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);

    return res.status(200).send("Book Delted Successfully");
  } catch (error) {
    console.log(err);
    res.send(err.message);
  }
});

export default router;
