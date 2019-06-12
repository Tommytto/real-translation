import TranslationExerciseRatingModel from 'models/TranslationExerciseRatingModel';
import TranslationModel from 'models/TranslationModel';
import TranslationRelationModel from 'models/TranslationRelationModel';
import { ExerciseType } from 'constants/ExerciseType';

export const models = {
    ratingModel: new TranslationExerciseRatingModel(),
    translationModel: new TranslationModel(),
    translationRelationModel: new TranslationRelationModel()
};

export type TModelName = $Keys<typeof models>;
export type TModelConfig = $ObjMap<typeof models, <V>(model: V) => V>;

const { ratingModel, translationModel, translationRelationModel } = models;

// todo remove it
const translationList = [
    {
        value: 'hello',
        lang: 'en'
    },
    {
        value: 'привет',
        lang: 'ru'
    },
    {
        value: 'world',
        lang: 'en'
    },
    {
        value: 'мир',
        lang: 'ru'
    },
    {
        value: 'good',
        lang: 'en'
    },
    {
        value: 'хорошо',
        lang: 'ru'
    },
    {
        value: 'city',
        lang: 'en'
    },
    {
        value: 'город',
        lang: 'ru'
    },
    {
        value: 'bad',
        lang: 'en'
    },
    {
        value: 'плохо',
        lang: 'ru'
    }
];

const transList = translationModel.addMany(translationList);
const transRelations = [
    {
        wordId1: transList[0].id,
        wordId2: transList[1].id
    },
    {
        wordId1: transList[2].id,
        wordId2: transList[3].id
    },
    {
        wordId1: transList[4].id,
        wordId2: transList[5].id
    },
    {
        wordId1: transList[6].id,
        wordId2: transList[7].id
    },
    {
        wordId1: transList[8].id,
        wordId2: transList[9].id
    }
];
translationRelationModel.addMany(transRelations);
transList.forEach((item) => {
    Object.values(ExerciseType).forEach((exerciseType) => {
        ratingModel.addOne({ rating: 0, exerciseType, translationId: item.id });
    });
});
