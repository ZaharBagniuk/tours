const Review = require('../models/reviewModel');
const factory = require('./handlerFactory');
const { createOne, getAll } = require('./handlerFactory');

exports.getAllReviews = getAll(Review);

exports.setTourAndUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) {
    req.body.tour = req.params.tourId;
  }
  if (!req.body.user) {
    req.body.user = req.user.id;
  }

  next();
};

exports.createReview = createOne(Review);
exports.deleteReview = factory.deleteOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.getReview = factory.getOne(Review);
