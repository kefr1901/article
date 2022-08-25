import express from "express";
import mongoose from "mongoose";
const router = express.Router();
import articleModel from "../models/articleModel.js";

//// GET articles /////
router.get("/", async (req, res) => {
  try {
    const articles = await articleModel.find();
    console.log(articles);
    res.status(200).json(articles);
  } catch (error) {
    res.status(404);
  }
});


//// CREATE articles /////
router.post("/", (req, res) => {
  const postArticle = new articleModel({
    title: req.body.title,
    description: req.body.description,
    body: req.body.body,
    author: req.body.author,
  });
  postArticle.save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});


//// UPDATE articles /////
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const post = {
    title: req.body.title,
    description: req.body.description,
    body: req.body.body,
    author: req.body.author,
  }
  const updatedArticle = await articleModel.findByIdAndUpdate(id, post, {
    new: true,
  });
  res.json(updatedArticle);
});


//// DELETE articles /////
router.delete("/:id", (req, res) => {
  const _id = req.params.id;
  console.log(mongoose.Types.ObjectId.isValid(_id));

  articleModel.findByIdAndDelete(_id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;
