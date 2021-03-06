export const store = {
    _fieldSize: 30,
    _columnSize: 13,
    _snakeSegments: [
        {x: 0, y: 6},
        {x: 1, y: 6},
        {x: 2, y: 6},
    ],
    _snakeHead: {x: 3, y: 6},
    _orientation: 'ArrowRight',
    _mouse__1: {x: 9, y: 6},
    _mouse__2: {x: 20, y: 10},
    _time:'0:00:00',
    _model: '8',
    _speed: 100,
    _score: 0,
    _blood: {x: -1, y: -1},
    _steps: 0,
    pause: false,

    get fieldSize() {
        return this._fieldSize
    },
    get columnSize() {
        return this._columnSize
    },
    get snakeSegments() {
        return this._snakeSegments
    },
    get snakeHead() {
        return this._snakeHead
    },
    get mouse__1() {
        return this._mouse__1
    },
    get mouse__2() {
        return this._mouse__2
    },
    get time() {
        return this._time
    },
    get orientation(){
        return this._orientation
    },
    get model() {
        return this._model
    },
    get speed() {
        return this._speed
    },
    get score() {
        return this._score
    },
    get blood() {
        return this._blood
    },

    set recordTime(value) {
        this._time = value;
    },
    set locationSnake(value) {
        this._snakeSegments = value[0];
        this._snakeHead = value[1];
    },
    set recordOrientation(props) {
        this._orientation = props
    },
    set chooseModel(value) {
        this._model = value;
    },
    set recordSpeed(value) {
        this._speed = value < 4 ? 350 :
            value < 6 ? 250 :
                value < 8 ? 200 :
                    value < 11 ? 100 :
                        value < 12 ? 75 : 45

    },
    set recordScore(value) {
        this._score += value;
    },
};
