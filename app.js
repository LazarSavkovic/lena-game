const tiles = [[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15, -1, -1, -1, 15, -1, -1, -1, 12, 13, 13, 13, 13, 13, 13, 14, -1, -1, -1, -1, 15, -1, -1, -1, -1, 15, -1, -1, -1, -1, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15, -1, -1, -1, -1, 15, -1, -1, -1, -1, 15, -1, -1, -1, -1, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, -1, -1, -1, -1, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 1, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15, -1, -1, -1, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 1, 2, -1, -1, 4, 5, 5, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, -1, -1, -1, 3, -1, -1, -1, -1, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 5, 5, 6, -1, -1, 4, 5, 5, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 12, 13, 13, 13, 14, -1, -1, -1, -1, 12, 13, 13, 13, 14, -1, -1, -1, -1, 0, 2, -1, -1, -1, -1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, -1, -1, -1, -1, 7, -1, -1, -1, 7, -1, -1, -1, -1, 7, -1, -1, -1, -1, 0, 1, 1, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 1, 1, 1, 1, 1, 1],
[-1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, -1, -1, 4, 5, 5, 6, -1, -1, 4, 5, 5, 6, -1, -1, -1, -1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 6, -1, -1, -1, -1, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, -1, -1, -1, -1, 7, -1, -1, -1, 7, -1, -1, -1, -1, 7, -1, -1, -1, -1, 4, 5, 5, 6, -1, -1, -1, -1, 0, 1, 1, 2, -1, -1, -1, -1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 5, 5, 5, 5, 5, 5, 5],
[-1, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, -1, -1, 4, 5, 5, 6, -1, -1, 4, 5, 5, 6, -1, -1, -1, -1, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 6, -1, -1, -1, -1, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, -1, -1, -1, -1, 7, -1, -1, -1, 7, -1, -1, -1, -1, 7, -1, -1, -1, -1, 4, 5, 5, 6, -1, -1, -1, -1, 4, 5, 5, 6, -1, -1, -1, -1, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 5, 5, 5, 5, 5, 5, 5]]




function createTiles() {

    const otherPlatforms = [];
    for (let row = 0; row < tiles.length; row++) {
        for (let cell = 0; cell < tiles[row].length; cell++) {

            if (tiles[row][cell] !== -1) {
                if (((tiles[row][cell] - 1) && ((tiles[row][cell] - 1) === -1)) || (tiles[row][cell] - 1)) {

                    otherPlatforms.push({
                        x: cell,
                        y: row,
                        width: 1,
                    })
                } else {

                    otherPlatforms[otherPlatforms.length - 1].width += 1;
                }

            }

        }
    }
    for (let platform of otherPlatforms) {
        platform.x = platform.x * 64;
        platform.y = platform.y * 64;
        platform.width = platform.width * 64;
        platform.height = 64;
    }

    return otherPlatforms;
}
const otherPlatforms = createTiles()

const playerSpritesheet = new Image();
playerSpritesheet.src = './graphics/spritesheet.png'
const playerSpritesheetFlipped = new Image();
playerSpritesheetFlipped.src = './graphics/spritesheetLeft.png'

let currentFrame = 0;
const numFrames = 8;

const spriteWidth = 64;
const spriteHeight = 64;

const cloudImg = new Image();
cloudImg.src = './graphics/clouds/1.png'
const cloudImg2 = new Image();
cloudImg2.src = './graphics/clouds/2.png'
const cloudImg3 = new Image();
cloudImg3.src = './graphics/clouds/3.png'


const cloudImgs = [cloudImg, cloudImg2, cloudImg3]


const canvas = document.getElementById('canvas')
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


const c = canvas.getContext('2d')


const JUMP_SPEED = 22;
const MOVE_SPEED = 5;
const GRAVITY = 1;
let scroll = 0;
const playerStartingX = 100;


const animationFrameLimit = 1;
let animationFrameCurrent = 0;

const player = {
    x: playerStartingX,
    y: 300,
    height: 128,
    width: 128,
    vy: 0,
    isJumping: false,
    lookingRight: true
}


const clouds = [
    {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight / 2
    },
    {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight / 2
    },
    {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight / 2
    }
]

let cloudDrift = 0;


function drawBackground() {

    c.fillStyle = '#67bae0';
    c.fillRect(0, 0, window.innerWidth, window.innerHeight)
    c.fillStyle = ' #064273';
    c.fillRect(0, window.innerHeight * 2/3 , window.innerWidth, window.innerHeight / 3)


}

function drawTiles() {
    for (let tile of otherPlatforms) {
        c.fillStyle = 'green';
        c.fillRect(tile.x - scroll, tile.y, tile.width, 64)
    }
}


function drawClouds() {

    cloudDrift += 0.3;

    for (let i = 0; i < clouds.length; i++) {
        c.drawImage(cloudImgs[i], clouds[i].x + cloudDrift, clouds[i].y, cloudImgs[i].width * 2, cloudImgs[i].height * 2)
    }




}

function drawPlayer() {
    if (player.lookingRight) {
        c.drawImage(
            playerSpritesheet,
            currentFrame * spriteWidth,
            0,
            spriteWidth,
            spriteHeight,
            player.x - scroll,
            player.y,
            player.width,
            player.height

        )
    } else {
        c.drawImage(
            playerSpritesheetFlipped,
            currentFrame * spriteWidth,
            0,
            spriteWidth,
            spriteHeight,
            player.x - scroll,
            player.y,
            player.width,
            player.height

        )
    }
}


const keyState = {

}


window.addEventListener('keydown', (e) => {

    e.preventDefault()

    keyState[e.key] = true;


    if (e.key === 'ArrowRight') {
        player.x += MOVE_SPEED
        player.lookingRight = true;
    }
    if (e.key === 'ArrowLeft') {
        player.x -= MOVE_SPEED
        player.lookingRight = false;
    }
    if (e.key === ' ' && !player.isJumping) {
        player.vy -= JUMP_SPEED;
        console.log(player.vy)
        player.isJumping = true

    }
})


window.addEventListener('keyup', (e) => {
    keyState[e.key] = false
})


function continuousMovement() {
    if (keyState['ArrowRight']) {
        player.x += MOVE_SPEED
        detectHorizontalCollision()
        animate()
    }
    if (keyState['ArrowLeft']) {
        player.x -= MOVE_SPEED
        detectHorizontalCollision()
        animate()
    }
    if (!keyState['ArrowRight'] && !keyState['ArrowLeft']) {
        currentFrame = 0;
    }
    requestAnimationFrame(continuousMovement)
}
continuousMovement()

function animate() {


    animationFrameCurrent += 1;


    if (animationFrameCurrent == animationFrameLimit) {
        currentFrame = (currentFrame + 1) % numFrames;
        animationFrameCurrent = 0;
    }

}


function gameLoop() {

    scroll = player.x - playerStartingX * 3;

    if (checkYDeath()) {
        console.log('game over')
        showGameOver();
        return;
    };

    c.clearRect(0, 0, window.innerWidth, window.innerHeight)


    player.y += player.vy;
    player.vy += GRAVITY;


    detectVerticalCollision()




    drawBackground()
    drawClouds()
    drawPlayer()
    drawTiles()


    requestAnimationFrame(gameLoop)
}

function checkYDeath() {
    if (player.y > 3000) {
        return true
    }
}

function showGameOver() {
    const gameOverDiv = document.createElement('div');
    gameOverDiv.className = 'gameOverDiv'
    gameOverDiv.innerHTML = `<h2 class='gameOverHeading'>GAME OVER</h2><button id='restartBtn'>restart</button>`
    const restartBtn = gameOverDiv.querySelector('#restartBtn')
    restartBtn.onclick = () => {
        location.reload()
    }


    document.body.append(gameOverDiv)
}


function detectHorizontalCollision() {


    for (let rect of otherPlatforms) {

        if (
            player.x + 30 < rect.x + rect.width &&
            player.x + player.width - 30 > rect.x &&
            player.y + player.height > rect.y &&
            player.y + 35 < rect.y + rect.height
        ) {

            // check for left collision
            if (player.lookingRight) {
                console.log(' right side')
                player.x = rect.x - (player.width - 30);

            } else {
                console.log(' left side')
                player.x = rect.x + rect.width - 30;
            }
        }
    }
}
function detectVerticalCollision() {


    for (let rect of otherPlatforms) {

        if (
            player.x + 30 < rect.x + rect.width &&
            player.x + player.width - 30 > rect.x &&
            player.y + player.height > rect.y &&
            player.y + 35 < rect.y + rect.height
        ) {

            if (player.vy > 0) {
                player.y = rect.y - player.height;
                player.vy = 0;
                player.isJumping = false;
            }
            else if (player.vy < 0) {
                player.y = rect.y + rect.height;
                player.vy = 0;

            }

        }
    }
}



gameLoop()
