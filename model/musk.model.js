module.exports = (mongoose) => {
  const muskModel = mongoose.model(
    "Musk",
    mongoose.Schema(
      {
        _id: String,
        quote: {
          type: String,
          required: true,
          unique: true,
        },
        quoteURL: {
          type: String,
          required: true,
        },
        addedBy: {
          type: String,
          required: true,
        },
      },
      { timestamps: true }
    )
  );
  return muskModel;
};
