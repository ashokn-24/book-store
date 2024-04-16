import mongoose from "mongoose";

const bookschema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model("Book", bookschema);

// app.put("/books/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Check if all required fields are present in the request body
//     if (!req.body.title || !req.body.author || !req.body.publishYear) {
//       return res
//         .status(400)
//         .send({ message: "Please provide all required fields" });
//     }

//     // Find the book by id and update it with the data from the request body
//     const result = await Book.findByIdAndUpdate(id, req.body, { new: true });

//     // If no book found with the given id, return an appropriate response
//     if (!result) {
//       return res.status(404).send("Book not found");
//     }

//     // Send a success response if the book is updated successfully
//     return res.status(200).send("Book updated successfully");
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send(err.message);
//   }
// });
