import Scene from "./src/tools/Scene";

async function Start() {
    console.log("START");
    const canvas = document.querySelector('canvas.webgl');
    const scene = new Scene(canvas);
}


Start().then();
