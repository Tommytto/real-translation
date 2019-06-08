export default class ExerciseTypeModel {
    id: string;
    name: string;
    constructor({id, name}) {
        this.id = id;
        this.name = name;
    }
}

type TExerciseType = ExerciseTypeModel;

export type {TExerciseType}