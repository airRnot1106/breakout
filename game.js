// game.js

/**
 * STAGEの管理用のクラス
 * STAGE10以降はランダムに生成されます。
 *
 * @class Level
 */
class Level {
    constructor(mapNum) {
        this.levelData = [
                        //STAGE0(デバック)
                           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                            0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        //STAGE1
                           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                            0, 1, 0, 1, 0, 1, 0, 1, 0, 0,
                            0, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                            0, 1, 0, 1, 0, 1, 0, 1, 0, 0,
                            0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
                        //STAGE2
                           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                            0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
                            0, 0, 1, 1, 1, 1, 1, 1, 0, 0,
                            0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
                            1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                            1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        //STAGE3
                           [1, 1, 0, 0, 0, 0, 0, 0, 1, 1,
                            0, 1, 1, 0, 0, 0, 0, 1, 1, 0,
                            0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
                            0, 0, 0, 1, 1, 1, 1, 0, 0, 0,
                            0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
                            0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
                        //STAGE4
                           [2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                            2, 0, 0, 0, 0, 0, 0, 0, 0, 2,
                            2, 0, 0, 0, 1, 1, 0, 0, 0, 2,
                            2, 0, 0, 0, 1, 1, 0, 0, 0, 2,
                            2, 0, 0, 0, 0, 0, 0, 0, 0, 2,
                            2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        //STAGE5
                           [1, 0, 0, 0, 1, 1, 0, 0, 0, 1,
                            0, 0, 0, 2, 1, 1, 2, 0, 0, 0,
                            1, 1, 1, 1, 2, 2, 1, 1, 1, 1,
                            1, 1, 1, 1, 2, 2, 1, 1, 1, 1,
                            0, 0, 0, 2, 1, 1, 2, 0, 0, 0,
                            1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
                        //STAGE6
                           [1, 1, 1, 1, 0, 0, 1, 1, 1, 1,
                            0, 0, 0, 1, 1, 1, 1, 0, 0, 0,
                            0, 0, 0, 2, 3, 3, 2, 0, 0, 0,
                            0, 0, 0, 1, 2, 2, 1, 0, 0, 0,
                            1, 1, 1, 1, 0, 0, 1, 1, 1, 1,
                            0, 0, 0, 1, 2, 2, 1, 0, 0, 0],
                        //STAGE7
                           [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                            1, 1, 1, 1, 2, 2, 1, 1, 1, 1,
                            1, 1, 1, 2, 3, 3, 2, 1, 1, 1,
                            1, 1, 1, 2, 3, 3, 2, 1, 1, 1,
                            1, 1, 1, 1, 2, 2, 1, 1, 1, 1,
                            1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        //STAGE8
                           [3, 1, 0, 0, 0, 0, 0, 0, 2, 2,
                            1, 1, 0, 0, 0, 2, 2, 2, 2, 2,
                            0, 0, 0, 2, 2, 2, 2, 2, 0, 0,
                            0, 0, 2, 2, 2, 2, 2, 0, 0, 0,
                            2, 2, 2, 2, 2, 0, 0, 0, 1, 1,
                            2, 2, 0, 0, 0, 0, 0, 0, 1, 3],
                        //STAGE9
                           [3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
                            1, 0, 0, 0, 3, 3, 0, 0, 0, 1,
                            1, 0, 2, 0, 3, 3, 0, 2, 0, 1,
                            1, 0, 0, 0, 3, 3, 0, 0, 0, 1,
                            3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
                            3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
                        ]
        this.bonusTimeLimit = [[0, 0], [50, 120], [60, 130], [50, 120], [70, 140], [70, 110], [70, 140], [110, 180], [70, 140], [160, 230], [1, 1]];
        this.nowLevel = mapNum;
        if(mapNum < 10) {
            //STAGE9までの処理
            this.map = this.levelData[mapNum];
        } else {
            //STAGE10以降の処理
            //Continueコマンドの表示
            document.getElementById('continue').style.display = 'inline';
            //mapをランダムに生成
            this.map = (() => {
                let randomLevel = new Array(60);
                for(let i = 0; i < randomLevel.length; i++) {
                    randomLevel[i] = Math.floor(Math.random() * 4);
                }
                return randomLevel;
            })();
            //生成されたmapに基づきbonusTimeLimit設定
            this.bonusTimeLimit[10][0] = (() => {
                let sum = 0;
                for(let i = 0; i < this.map.length; i++) {
                    sum += Math.ceil(this.map[i] * 1.8);
                }
                return sum;
            })();
            this.bonusTimeLimit[10][1] = this.bonusTimeLimit[10][0] + 70;
        }
        console.info(`START STAGE${this.nowLevel}`);
    }
}

/**
 * ベクトル管理用クラス
 *
 * @class Vec2
 */
class Vec2 {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
    // このベクトルと、引数のベクトルbの和を計算する
    add(b) {
        let a = this;
        return new Vec2(a.x + b.x, a.y + b.y);
    }
    // このベクトルを実数s倍したベクトルを計算する
    mul(s) {
        let a = this;
        return new Vec2(s * a.x, s * a.y);
    }
    // このベクトルの大きさを求める
    mag() {
        let a = this;
        return Math.sqrt(a.x ** 2 + a.y ** 2);
    }
    // このベクトルと引数のベクトルbの差を求める
    sub(b) {
        let a = this;
        return new Vec2(a.x - b.x, a.y - b.y);
    }
    // このベクトルを正規化したベクトルを求める
    norm() {
        let a = this;
        return a.mul(1 / a.mag());
    }
    // このベクトルと引数のベクトルbの、ドット積（内積）を求める
    dot(b) {
        let a = this;
        return a.x * b.x + a.y * b.y;
    }
    // このベクトルの反射ベクトルを求める。
    // wは、法線ベクトルとする（大きさは問わない）
    reflect(w) {
        let v = this;
        let cosTheta = v.mul(-1).dot(w) / (v.mul(-1).mag() * w.mag());
        let n = w.norm().mul(v.mag() * cosTheta);
        let r = v.add(n.mul(2));
        return r;
    }
}

/**
 * キー入力管理用クラス
 *
 * @class Key
 */
class Key {
    constructor() {
        this.history = [];
    }
    /**
     * 最後に入力したキー入力を取得するメソッド
     *
     * @return {Array}
     * @memberof Key
     */
    getLastHistory() {
        return this.history[this.history.length - 1];
    }
    /**
     * キー入力を受け取り、historyに追加するメソッド
     *
     * @param {String} key - キー入力
     * @memberof Key
     */
    setHistory(key) {
        this.history.push(key);
        console.log(this.history);
    }
    /**
     * リリースされたキー入力を受け取り、historyから削除するメソッド
     *
     * @param {String} key - キー入力
     * @memberof Key
     */
    scanHistory(key) {
        const index = this.history.lastIndexOf(key);
        this.history.splice(index , 1);
        console.log(this.history);
    }
    /**
     * historyをリセットするメソッド
     *
     * @memberof Key
     */
    resetHistory() {
        this.history = [];
    }
}

/**
 * スコアの管理用のクラス
 *
 * @class Score
 */
class Score {
    constructor() {
        this.score = 0;
    }
    /**
     * スコアを増やすメソッド
     * ボールの速度によって加点される倍率が変化します。
     *
     * @param {Class} velo - 速度ベクトル
     * @memberof Score
     */
    addScore(velo) {
        let mag = (8 / Math.PI) * (Math.atan(Math.sqrt(velo ** 11) / 53582)) + 1;
        mag -= mag % 0.1;
        this.score += 100 * mag;
        this.setScore();
        document.getElementById('mag').innerHTML = `x${mag.toFixed(1)}`;
    }
    /**
     * スコアを減らすメソッド
     *
     * @memberof Score
     */
    subScore() {
        if(this.score > 300) {
            this.score -= 300;
        } else {
            this.score = 0;
        }
        this.setScore();
        document.getElementById('mag').innerHTML = 'x1.0';
    }
    /**
     * タイムボーナスを決定するメソッド
     *
     * @param {Object} level - Levelクラス変数
     * @param {Number} time - 経過時間
     * @return {Number} タイムボーナス
     * @memberof Score
     */
    addTimeBonus(level, time) {
        const maxTimeBonus = 3000;
        let timeStartingDown = level.bonusTimeLimit[10][0];
        let timeCompleteDown = level.bonusTimeLimit[10][1];
        //STAGE1~9の場合の分岐
        if(level.nowLevel < 10) {
            timeStartingDown = level.bonusTimeLimit[level.nowLevel][0];
            timeCompleteDown = level.bonusTimeLimit[level.nowLevel][1];
        }
        const halfDuration = (timeCompleteDown - timeStartingDown) / 2;
        let bonusMag = 0;
        if(time < timeStartingDown) {
            bonusMag = 1;
        } else if(time < timeCompleteDown) {
            bonusMag = ((-2 / Math.PI) * Math.atan((time - (timeStartingDown + halfDuration)) / halfDuration)) + 0.5;
        }
        let bonus = maxTimeBonus * bonusMag;
        bonus = bonus.toFixed();
        this.score += Number(bonus);
        this.setScore();
        return bonus;
    }
    /**
     * スコアをセットするメソッド
     *
     * @memberof Score
     */
    setScore() {
        this.score -= this.score % 1;
        document.getElementById('score-num').innerHTML = this.score;
    }
}

/**
 * 経過時間の管理用のクラス
 *
 * @class Timer
 */
class Timer {
    constructor() {
        this.startTime = new Date();
        this.stopTime = null;
        this.elapsedTime = null;
        this.lastTime = '';
    }
    /**
     * 経過時間を取得するメソッド
     *
     * @return {Number} 経過時間
     * @memberof Timer
     */
    getElapsedTime() {
        this.stopTime = new Date();
        this.elapsedTime = this.stopTime.getTime() - this.startTime.getTime();
        this.elapsedTime /= 1000;
        this.elapsedTime -= this.elapsedTime % 0.01;
        const time = this.elapsedTime;
        this.setTime();
        return time;
    }
    /**
     * 経過時間を時間表記にしてセットするメソッド
     *
     * @memberof Timer
     */
    setTime() {
        let minutes = this.elapsedTime / 60;
        minutes -= minutes % 1;
        this.elapsedTime %= 60;
        let seconds = this.elapsedTime / 1;
        seconds -= seconds % 1;
        this.elapsedTime %= 1;
        let milliseconds = this.elapsedTime * 100;
        milliseconds -= milliseconds % 1;
        minutes = this.#padZero(minutes, 2);
        seconds = this.#padZero(seconds, 2);
        milliseconds = this.#padZero(milliseconds, 2);
        //console.log(`m: ${minutes} s: ${seconds} ms ${milliseconds}`);
        this.lastTime = `${minutes}:${seconds}:${milliseconds}`;
        document.getElementById('timer').innerHTML = this.lastTime;
    }
    /**
     * ゼロパディングするメソッド
     *
     * @param {Number} num - ゼロパディングする数値
     * @param {Number} numLength - フォーマット後の桁数
     * @return {String} ゼロパディングされた文字列の数値
     * @memberof Timer
     */
    #padZero(num, numLength) {
        return ('000000000000' + num).slice(-numLength);
    }
}

/**
 * すべてのキャラクターが持つ要素の管理用クラス
 *
 * @class Character
 */
class Character {
    constructor(vec, color) {
        this.vec = vec;
        this.color = color;
    }
}

/**
 * ブロック管理用クラス
 *
 * @class Block
 * @extends {Character}
 */
class Block extends Character {
    constructor(vec, color, w, h) {
        super(vec, color);
        this.width = w;
        this.height = h;
        this.cornerVec = new Array(4);
        this.setCornerVec();
    }
    /**
     * Blockを描画するメソッド
     *
     * @memberof Block
     */
    draw(p) {
        p.rectMode(p.RADIUS);
        p.fill(this.color);
        p.rect(this.vec.x, this.vec.y, this.width, this.height);
    }
    /**
     * Blockの4隅のベクトルをセットするメソッド
     * このメソッドはコンストラクタ、moveR、moveLによって呼び出されます。
     *
     * @memberof Block
     */
    setCornerVec() {
        this.cornerVec[0] = new Vec2(this.vec.x - this.width, this.vec.y - this.height);
        this.cornerVec[1] = this.cornerVec[0].add(new Vec2(this.width * 2, 0));
        this.cornerVec[2] = this.cornerVec[0].add(new Vec2(0, this.height * 2));
        this.cornerVec[3] = this.cornerVec[2].add(new Vec2(this.width * 2, 0));
    }
    /**
     * 上下方向の反射判定をするメソッド
     *
     * @param {Class} ballData - Ballクラス
     * @return {Boolean} 反射するか
     * @memberof Block
     */
    isReflectTopBottom(ballData) {
        for(let i = 0; i < 3; i += 2){
            let lineA = this.cornerVec[i + 1].y - this.cornerVec[i].y;
            let lineB = -(this.cornerVec[i + 1].x - this.cornerVec[i].x);
            let intercept = -((lineA / -(lineB)) * -(this.cornerVec[i].x) + this.cornerVec[i].y) * lineB;
            let ballX = ballData.vec.x;
            let ballY = ballData.vec.y;
            let d = Math.abs((lineA * ballX) + (lineB * ballY) + intercept) / Math.sqrt(lineA ** 2 + lineB ** 2);
            if(d <= ballData.rd / 2 && ballData.vec.x >= this.cornerVec[i].x && ballData.vec.x <= this.cornerVec[i + 1].x) {
                return true;
            }
        }
        return false;
    }
    /**
     * 左右方向の反射判定をするメソッド
     *
     * @param {Class} ballData - Ballクラス
     * @return {Boolean} 反射するか
     * @memberof Block
     */
    isReflectLeftRight(ballData) {
        for(let i = 0; i < 2; i += 1){
            let lineA = this.cornerVec[i + 2].y - this.cornerVec[i].y;
            let lineB = -(this.cornerVec[i + 2].x - this.cornerVec[i].x);
            let intercept = -((lineB / -(lineA)) * -(this.cornerVec[i].y) + this.cornerVec[i].x) * lineA;
            let ballX = ballData.vec.x;
            let ballY = ballData.vec.y;
            let d = Math.abs((lineA * ballX) + (lineB * ballY) + intercept) / Math.sqrt(lineA ** 2 + lineB ** 2);
            if(d <= ballData.rd / 2 && ballData.vec.y >= this.cornerVec[i].y && ballData.vec.y <= this.cornerVec[i + 2].y) {
                return true;
            }
        }
        return false;
    }
}

/**
 * パドル管理用クラス
 *
 * @class Paddle
 * @extends {Block}
 */
class Paddle extends Block {
    constructor(vec, w, h, color) {
        super(vec, color, w, h);
        this.vel = 0;
        this.t = 0;
        this.moveFlg = '';
    }
    /**
     * 右方向に移動するメソッド
     * 対応するキー: d
     * キーが入力されている間は加速します。
     *
     * @memberof Paddle
     */
    moveR() {
        this.vel = new Vec2(0.1 * this.t + (1 / 2) * 1 * this.t, 0);
        this.vec = this.vec.add(this.vel);
        this.t++;
        super.setCornerVec();
        this.moveFlg = 'r';
    }
    /**
     * 左方向に移動するメソッド
     * 対応するキー: a
     * キーが入力されている間は加速します。
     *
     * @memberof Paddle
     */
    moveL() {
        this.vel = new Vec2(0.1 * this.t + (1 / 2) * 1 * this.t, 0);
        this.vec = this.vec.sub(this.vel);
        this.t++;
        super.setCornerVec();
        this.moveFlg = 'l';
    }
    /**
     * 上下方向の反射角度を返すメソッド
     * パドルが加速しているほど角度が垂直に近づきます
     *
     * @param {Class} ballData - Ballクラス
     * @return {Class} 反射後のベクトル
     * @memberof Paddle
     */
    getReflectAngleTopBottom (ballData) {
        const cosTheta = (this.cornerVec[1].sub(this.cornerVec[0])).dot(ballData.moveVec) / ((this.cornerVec[1].sub(this.cornerVec[0])).mag() * ballData.moveVec.mag());
        const theta = Math.acos(cosTheta);
        let addAngle = 90 * (Math.PI / 180) - theta;
        addAngle *= (2 / Math.PI) * Math.atan(this.t ** 3/ 2000);
        if(this.moveFlg === 'r') {
            addAngle -= (10 * (Math.PI / 180)) * (2 / Math.PI) * Math.atan(this.t / 10);
        } else if(this.moveFlg === 'l') {
            addAngle += (10 * (Math.PI / 180)) * (2 / Math.PI) * Math.atan(this.t / 10);
        }
        let reflectVec = new Vec2(Math.cos(theta + addAngle), -Math.sin(theta + addAngle));
        if(ballData.vec.y > this.vec.y) {
            reflectVec = new Vec2(Math.cos(theta + addAngle), Math.sin(theta + addAngle));
        }
        return reflectVec.mul(ballData.moveVec.mag());
    }
    /**
     * 左右方向の反射角度を返すメソッド
     * パドルが加速しているほど角度が垂直に近づきます
     *
     * @param {Class} ballData - Ballクラス
     * @return {Class} 反射後のベクトル
     * @memberof Paddle
     */
    getReflectAngleLeftRight (ballData) {
        const cosTheta = (this.cornerVec[2].sub(this.cornerVec[0])).dot(ballData.moveVec) / ((this.cornerVec[2].sub(this.cornerVec[0])).mag() * ballData.moveVec.mag());
        const theta = Math.acos(cosTheta);
        let addAngle = 80 * (Math.PI / 180) - theta;
        addAngle *= (2 / Math.PI) * Math.atan(this.t ** 3 / 2000);
        let reflectVec = new Vec2(Math.cos(theta + addAngle), -Math.sin(theta + addAngle));
        if(ballData.vec.x > this.vec.x) {
            reflectVec = new Vec2(Math.cos(theta + addAngle), Math.sin(theta + addAngle));
        }
        return reflectVec.mul(ballData.moveVec.mag());
    }
    /**
     * 加速をリセットするメソッド
     * 別のキー入力があった際やキーがリリースされた際に呼び出されます。
     *
     * @memberof Paddle
     */
    resetTime() {
        this.vel = 0;
        this.t = 0;
        this.moveFlg = '';
    }
}

/**
 * 壊すブロック管理用のクラス
 *
 * @class BreakBlocks
 * @extends {Block}
 */
class BreakBlocks extends Block {
    constructor(vec, w, h, status) {
        super(vec, getColor(status), w, h);
        this.status = status;
    }
}

/**
 * ボール管理用クラス
 *
 * @class Ball
 * @extends {Character}
 */
class Ball extends Character {
    constructor(vec, moveVec, rd, color) {
        super(vec, color);
        this.moveVec = moveVec;
        this.rd = rd;
        this.maxSpeed = 8.5;
    }
    /**
     * ボールを描画するメソッド
     *
     * @memberof Ball
     */
    draw(p) {
        p.fill(this.color);
        p.circle(this.vec.x, this.vec.y, this.rd);
    }
    /**
     * ボールをmoveVecにしたがって動かすメソッド
     *
     * @memberof Ball
     */
    move() {
        this.vec = this.vec.add(this.moveVec);
    }
    /**
     * moveVecをセットするメソッド
     *
     * @param {Class} vec - 新しいベクトル
     * @memberof Ball
     */
    setMoveVec(vec) {
        this.moveVec = vec;
    }
}
//BGM用の変数の宣言
let bgm;
//クリアSE用の変数の宣言
let clearSE;
//BGMが流れているかのフラグ変数の宣言
let playFlg = false;
//タイマー用の変数の宣言
let timer;

/**
 * 準備画面のキャンバス
 *
 * @param {Object} p - p5.js
 */
const canvas00 = function(p) {
    /**
     * 起動時に1度実行されるsetuo関数
     * 主に初期設定を行います。
     */
    p.setup = function() {
        p.createCanvas(480, 480);
        p.background(0);
        let paddle = new Paddle(new Vec2(p.width / 2, 400), 30, 5, '#FFFFFF');
        paddle.draw(p);
    };
    /**
     * 毎秒60回実行される関数draw
     * キーが押されたらゲーム開始のための処理をします。
     *
     */
    p.draw = function() {
        if(p.keyIsPressed) {
            document.getElementById('game').style.display = 'inline';
            document.getElementById('timer').style.display = 'inline';
            document.getElementById('ready').style.display = 'none';
            document.getElementById('text-ready').style.display = 'none';
            timer = new Timer();
            p.noLoop();
        }
    }
}

/**
 * ゲーム画面のキャンバス
 *
 * @param {Object} p - p5.js
 */
const canvas01 = function(p) {
    let paddle;
    let block = [];
    let ball;
    let level;
    let score;
    let keyClass;
    let pressedKey;
    /**
     * 起動時に1度実行されるsetuo関数
     * 主に初期設定を行います。
     */
    p.setup = function() {
        p.createCanvas(480, 480);
        p.background(0);
        resetCharas();
        level = new Level(1);
        score = new Score();
        keyClass = new Key();
    };
    /**
     * 毎秒60回実行される関数draw
     * メインの処理はここに記述されます。
     *
     */
    p.draw = function() {
        //初期化
        p.background(0);
        //更新系
        update();
        //描画系
        paddle.draw(p);
        for(let i = 0; i < block.length; i++) {
            block[i].draw(p);
        }
        for(let i = 0; i < ball.length; i++) {
            ball[i].draw(p);
        }
        setBreakBlocks(level);
        //クリア判定
        if(isClear(level)) {
            clearLevel(level);
            setTimeout(goToNext, 5000, level);
        }
    };
    /**
     * 位置ベクトルや速度ベクトル、タイマーの更新をする関数update
     *
     */
    update = function() {
        //パドルの操作処理
        if(p.keyIsPressed && pressedKey === 'd' && paddle.vec.x <= p.width) {
            paddle.moveR();
        } else if(p.keyIsPressed && pressedKey === 'a' && paddle.vec.x >= 0) {
            paddle.moveL();
        }
        //ボール関連の処理
        for(let i = 0; i < ball.length; i++) {
            const displayFlg = (() => {
                const container = document.querySelector('div#game');
                const displayStatus = ((element, property) => {
                    if (!element || !property) {
                        return null;
                    }
                    var style = window.getComputedStyle(element);
                    var value = style.getPropertyValue(property);
                    return value;
                })(container, 'display');
                if(displayStatus !== 'none') {
                    return true;
                } else {
                    return false;
                }
            })();
            //gameキャンバスが表示しているときのみボールを移動させる
            if(displayFlg) {
                ball[i].move();
            }
            //左右の壁の反射判定
            if(ball[i].vec.x - (ball[i].rd / 2) <= 0 || ball[i].vec.x + (ball[i].rd / 2) >= p.width) {
                ball[i].setMoveVec(ball[i].moveVec.reflect(new Vec2(1, 0)));
                //めり込み防止用の処理
                while(ball[i].vec.x + (ball[i].rd / 2) <= 0) {
                    ball[i].vec = new Vec2(ball[i].vec.x + 0.5, ball[i].vec.y);
                }
                while(ball[i].vec.x + (ball[i].rd / 2) >= p.width) {
                    ball[i].vec = new Vec2(ball[i].vec.x - 0.5, ball[i].vec.y);
                }
            }
            //上の壁の反射判定
            if(ball[i].vec.y - (ball[i].rd / 2) <= 0) {
                ball[i].setMoveVec(ball[i].moveVec.reflect(new Vec2(0, 1)));
                //めり込み防止用の処理
                while(ball[i].vec.y + (ball[i].rd / 2) <= 0) {
                    ball[i].vec = new Vec2(ball[i].vec.x, ball[i].vec.y + 0.5);
                }
            }
            //下の壁の反射判定
            if(ball[i].vec.y + (ball[i].rd / 2) >= p.height) {
                ball[i].setMoveVec(ball[i].moveVec.reflect(new Vec2(0, 1)));
                //速度の初期化
                ball[i].setMoveVec(ball[i].moveVec.norm().mul(3));
                //めり込み防止用の処理
                while(ball[i].vec.y + (ball[i].rd / 2) >= p.height) {
                    ball[i].vec = new Vec2(ball[i].vec.x, ball[i].vec.y - 0.5);
                }
                console.log(ball[i].vec);
                //スコアの減点処理
                score.subScore();
                //スコアの減点演出
                const scoreHtml = document.getElementById('score-num');
                scoreHtml.classList.add('mistake');
                setTimeout(() => {
                    scoreHtml.classList.remove('mistake');
                }, 300);
            }
            //ボールがパドルの左右に接触しているかの判定
            if(paddle.isReflectLeftRight(ball[i])) {
                ball[i].setMoveVec(ball[i].moveVec.reflect(new Vec2(1, 0)));
                ball[i].setMoveVec(paddle.getReflectAngleLeftRight(ball[i]));
            }
            //ボールがパドルの上下に接触しているかの判定
            if(paddle.isReflectTopBottom(ball[i])) {
                ball[i].setMoveVec(ball[i].moveVec.reflect(new Vec2(0, 1)));
                ball[i].setMoveVec(paddle.getReflectAngleTopBottom(ball[i]));
            }
            //ボールとブロックの接触時の処理
            for(let j = 0; j < block.length; j++) {
                //加速率
                const accelerationRate = 1.1;
                if(block[j].isReflectLeftRight(ball[i])) {
                    score.addScore(ball[i].moveVec.mag());
                    ball[i].setMoveVec(ball[i].moveVec.reflect(new Vec2(1, 0)));
                    if(ball[i].moveVec.mag() < ball[i].maxSpeed) {
                        ball[i].setMoveVec(ball[i].moveVec.mul(accelerationRate));
                    }
                    level.map[j] -= 1;
                }
                if(block[j].isReflectTopBottom(ball[i])) {
                    score.addScore(ball[i].moveVec.mag());
                    ball[i].setMoveVec(ball[i].moveVec.reflect(new Vec2(0, 1)));
                    if(ball[i].moveVec.mag() < ball[i].maxSpeed) {
                        ball[i].setMoveVec(ball[i].moveVec.mul(accelerationRate));
                    }
                    level.map[j] -= 1;
                }
            }
        }
        //タイマーの更新
        timer.getElapsedTime();
    }
    /**
     * キーがリリースされた際に実行される関数keyReleased
     * 加速の管理を行います。
     *
     */
    p.keyReleased = function() {
        console.info(`${p.key}がリリースされました`);
        const lastPressedKey = keyClass.getLastHistory();
        keyClass.scanHistory(p.key);
        pressedKey = keyClass.history[keyClass.history.length - 1];
        if(pressedKey !== lastPressedKey) {
            //リリースされたキーが直前に押されたものと一致したら
            paddle.resetTime();
        }
        if(!p.keyIsPressed) {
            //キーが何も押されていないなら
            keyClass.resetHistory();
        }
    };
    /**
     * キーが入力された際に実行される関数keyPressed
     * 加速の管理を行います。
     * また、Hidden commandsの処理も行います。
     *
     */
    p.keyPressed = function() {
        paddle.resetTime();
        keyClass.setHistory(p.key);
        pressedKey = keyClass.history[keyClass.history.length - 1];
        //Hidden command P: Reset the paddle
        if(pressedKey === 'P') {
            paddle = new Paddle(new Vec2(p.width / 2, 400), 30, 5, '#FFFFFF');
            console.info('paddleをリセットします');
        }
        //Hidden command B: Get more bolls
        if(pressedKey === 'B') {
            ball.push(new Ball(ball[0].vec, getRandomVec().mul(5), 10, '#FF00FF'));
            ball.push(new Ball(ball[0].vec, getRandomVec().mul(5), 10, '#FF00FF'));
        }
        //Hidden command Control + L + Number: Continue
        if(!(level.levelData[pressedKey] === void 0) && keyClass.history[keyClass.history.length - 3] === 'Control' && keyClass.history[keyClass.history.length - 2] === 'l') {
            level = new Level(Number(pressedKey));
            resetCharas();
        }
    };
    /**
     * ランダムな方向のベクトルを返す関数getRandomVec
     * ベクトルは正規化されています。
     *
     * @return {Class} 正規化されたランダムな方向のベクトル
     */
    getRandomVec = function() {
        const x = Math.random() * 21 - 10;
        const y = Math.random() * 21 - 10;
        //console.log(`(${x}, ${y})`);
        return new Vec2(x, y).norm();
    };
    /**
     * ブロックの色を取得する関数getColor
     * 主にBlockクラスで使用されます。
     *
     * @param {Number} status - LevelDataの数値
     * @return {String} カラーコード
     */
    getColor = function(status) {
        let c = '';
        if(status === 1) {
            c = '#FFFF00';
        } else if(status == 2) {
            c = '#00FFFF';
        } else if(status == 3) {
            c = '#FF00FF';
        }
        return c;
    };
    /**
     * ブロックを配置する関数setBreakBlocks
     * Levelのmapの値によって処理をします
     *
     * @param {Object} level - Levelクラス
     */
    setBreakBlocks = function(level) {
        let i = 0;
        let j = 0;
        let c = 0;
        block = [];
        for(let a = 0; a < level.map.length; a++) {
            const setVec = new Vec2(40 * i + 60, 20 * j + 100);
            if(level.map[a] > 0) {
                block.push(new BreakBlocks(setVec, 20, 10, level.map[a]));
            } else {
                block.push(new BreakBlocks(0, 0));
            }
            c++;
            i++;
            if(c >= 10) {
                j++;
                i = 0;
                c = 0;
            }
        }
    };
    /**
     * クリアしているか判定する関数isClear
     *
     * @param {Object} level - Levelクラス
     * @return {Boolean} クリアしているか
     */
    isClear = function(level) {
        for(let i = 0; i < level.map.length; i++) {
            if(level.map[i] > 0) {
                //0以上のStatusのブロックが1つでも存在する場合
                return false;
            }
        }
        //すべてのブロックのStatusが0以下の場合
        return true;
    };
    /**
     * クリア時の処理をする関数clearLevel
     *
     * @param {Object} level - Levelクラス
     */
    clearLevel = function(level) {
        p.background(0);
        p.noLoop();
        //表示の関連の処理
        document.getElementById('clear-time').innerHTML = timer.lastTime;
        document.getElementById('stage').innerHTML = `STAGE${level.nowLevel}`;
        document.getElementById('clear-score').innerHTML = `Score: ${score.score}`;
        //タイムボーナスの処理
        document.getElementById('time-bonus').innerHTML = `Time Bonus: ${score.addTimeBonus(level, timer.getElapsedTime())}`;
        document.getElementById('timer').style.display = 'none';
        document.getElementById('clear-time').style.display = 'inline';
        document.getElementById('stage').style.display = 'inline';
        document.getElementById('text-clear').style.display = 'inline';
        document.getElementById('clear-score').style.display = 'inline';
        document.getElementById('time-bonus').style.display = 'inline';
        if(playFlg) {
            bgm.muted = true;
            clearSE.play();
        }
    };
    /**
     * 次のSTAGEへ行く処理を行う関数goToNext
     *
     */
    goToNext = function() {
        p.background(0);
        //表示の関連の処理
        document.getElementById('clear-time').style.display = 'none';
        document.getElementById('stage').style.display = 'none';
        document.getElementById('text-clear').style.display = 'none';
        document.getElementById('clear-score').style.display = 'none';
        document.getElementById('time-bonus').style.display = 'none';
        document.getElementById('timer').style.display = 'inline';
        if(playFlg) {
            bgm.muted = false;
            bgm.currentTime = 0;
            bgm.play();
        }
        resetCharas();
        level = new Level(level.nowLevel + 1);
        //STAGE20以降はボールが追加されていく
        for(let i = 0; i < Math.floor(level.nowLevel / 10 - 1); i++) {
            ball.push(new Ball(ball[0].vec, getRandomVec().mul(3), 10, '#FF3B00'));
        }
        p.loop();
    };
    /**
     * キャラクターの初期化を行う関数resetCharas
     * パドル、ボール、タイマーの初期化を行います。
     *
     */
    resetCharas = function() {
        paddle = new Paddle(new Vec2(p.width / 2, 400), 30, 5, '#FFFFFF');
        ball = [];
        ball = [new Ball(new Vec2(p.width / 2, 300), getRandomVec().mul(3), 10, '#FFFFFF')];
        timer = new Timer();
    }
};

/**
 * スコア画面のキャンバス
 *
 * @param {Object} p - p5.js
 */
const canvas02 = function(p) {
    p.setup = function() {
        p.createCanvas(120, 480);
        p.background(0);
    };
}

//音声ファイルの読み込みとBGMの管理
window.addEventListener('DOMContentLoaded', () => {
    bgm = new Audio('assets/MollDoll.mp3');
    clearSE = new Audio('assets/coingame.mp3');
    bgm.loop = true;
    document.getElementById('text-bgm').onclick = () => {
        if(!playFlg) {
            bgm.muted = false;
            bgm.currentTime = 0;
            bgm.play();
            playFlg = true;
            document.getElementById('text-bgm').innerHTML = 'BGM:ON';
        } else {
            bgm.muted = true;
            playFlg = false;
            document.getElementById('text-bgm').innerHTML = 'BGM:OFF';
        }
    };
});

//キャンバスの宣言
const ready = new p5(canvas00, 'ready');
const game = new p5(canvas01, 'game');
const score = new p5(canvas02, 'score');