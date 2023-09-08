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


const animationFrameLimit = 1;
let animationFrameCurrent = 0;

const player = {
    x: 100,
    y: 400,
    height: 128,
    width: 128,
    vy: 0,
    isJumping: false,
    lookingRight: true
}



const ground = {
    x: 50,
    y: 600,
    height: 256,
    width: 1500
}
const platform = {
    x: 450,
    y: 370,
    height: 64,
    width: 1000
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


}

function drawGround() {

    c.fillStyle = 'green';
    c.fillRect(ground.x, ground.y, ground.width, ground.height)

}
function drawPlatform() {

    c.fillStyle = 'green';
    c.fillRect(platform.x, platform.y, platform.width, platform.height)


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
            player.x,
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
            player.x,
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
        animate()
    }
    if (keyState['ArrowLeft']) {
        player.x -= MOVE_SPEED
        animate()
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

    c.clearRect(0, 0, window.innerWidth, window.innerHeight)


    player.y += player.vy;
    player.vy += GRAVITY;


    detectCollision()




    drawBackground()
    drawClouds()
    drawGround()
    drawPlayer()
    drawPlatform()


    requestAnimationFrame(gameLoop)
}




function detectCollision() {


    for (let rect of [ground, platform]) {

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

            // Check for side collisions
            if (
                player.y + 30 < rect.y + rect.height &&
                player.y + player.height - 30 > rect.y &&
                player.x + player.width > rect.x &&
                player.x < rect.x + rect.width
            ) {
                console.log('side')
                if (player.x < rect.x + rect.width / 2) {
                    // Player is colliding from the left side of the rectangle
                    player.x = rect.x - player.width;
                } else {
                    // Player is colliding from the right side of the rectangle
                    player.x = rect.x + rect.width;
                }
            }

        }
    }
}



gameLoop()


console.log(canvas)