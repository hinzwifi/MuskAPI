module.exports = (mongoose) => {
  const muskModel = mongoose.model(
    "Musk",
    mongoose.Schema({
      _id: String,
      quote: {
        type: String,
        required: true,
      },
      quoteMade: {
        type: String,
        required: true,
      },
      routerClients: {
        type: Array,
      },
    })
  );
  return muskModel;
};
