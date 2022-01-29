module.exports = (mongoose) => {
  const muskModel = mongoose.model(
    "MuskAdmin",
    mongoose.Schema({
      _id: String,
      username: {
        type: String,
        required: true,
      },
      admin: {
        type: Boolean,
      },
    })
  );
  return muskModel;
};
