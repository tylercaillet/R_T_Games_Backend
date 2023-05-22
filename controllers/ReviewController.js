const { Review } = require('../models')
const { User } = require('../models')
const { Listing } = require('../models')

const GetAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      attributes: ['id', 'userId', 'listingId', 'review', 'createdAt']
    })
    res.send(reviews)
  } catch (error) {
    throw error
  }
}

const GetReviewById = async (req, res) => {
  const reviewId = req.params.id
  try {
    const review = await Review.findByPk(reviewId, {
      attributes: ['id', 'userId', 'listingId', 'review', 'createdAt']
    })
    res.send(review)
  } catch (error) {
    throw error
  }
}

// const CreateReview = async (req, res) => {
//   const { userId, listingId, review:reviewText } = req.body
//   try {
//     const newReview = await Review.create({
//       userId: userId,
//       listingId: listingId,
//       review: reviewText
//     })
//     // Include associations in the response
//     const response = await Review.findByPk(newReview.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['id', 'username', 'password']
//         },
//         {
//           model: Listing,
//           attributes: ['id', 'title', 'rating', 'image', 'description', 'year']
//         }
//       ],
//       attributes: ['id', 'userId', 'listingId', 'review', 'createdAt']
//     })
//     res.send(response)
//   } catch (error) {
//     throw error
//   }
// }

const CreateReview = async (req, res) => {
  const { userId, listingId, review } = req.body;
  try {
    const createdReview = await Review.create({
      userId: userId,
      listingId: listingId,
      review: review,
    }, {
      fields: ['userId', 'listingId', 'review']
    });
    res.json(createdReview);
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ error: 'An error occurred while creating the review.' });
  }
};

const UpdateReview = async (req, res) => {
  const { id, userId, listingId, review } = req.body;
  try {
    const updatedReview = await Review.update(
      { userId, listingId, review, updatedAt: new Date() },
      { where: { id } }
    );
    res.json(updatedReview);
  } catch (error) {
    console.error('Error updating review:', error);
    res.status(500).json({ error: 'An error occurred while updating the review.' });
  }
};

const DeleteReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.review_id)
    await Review.destroy({ where: { id: reviewId } })
    res.send({ message: `Deleted review with an id of ${reviewId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllReviews,
  GetReviewById,
  CreateReview,
  UpdateReview,
  DeleteReview
}