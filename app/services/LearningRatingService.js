// @flow
export default class LearningRatingService {
    static ratingStep = 25;
    upRating(word) {
        word.rating = word.rating + 25;
    }

    downRating(word) {
        word.rating = Math.max(word.rating - 25, 0);
    }
}
export type TLearningRatingService = LearningRatingService;
