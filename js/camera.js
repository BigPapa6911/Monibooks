const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const tirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
const enviarFoto = document.querySelector("[data-enviar]");

let imagemURl = "";

botaoIniciarCamera.addEventListener("click", async function(){
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video:true, audio:false});

    botaoIniciarCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo;
})

tirarFoto.addEventListener("click", ()=>{

    canvas.getContext("2d").drawImage(video,0,0,canvas.width,canvas.height);

    imagemURl = canvas.toDataURL("image/jpeg");

    campoCamera.style.display="none";
    mensagem.style.display="block";

})

enviarFoto.addEventListener("click", ()=>{

    const recebeDados = localStorage.getItem("cadastro");
    const converteDados = JSON.parse(recebeDados);

    converteDados.imagem = imagemURl;

    localStorage.setItem("cadastro", JSON.stringify(converteDados));

    window.location.href = "./abrir-conta-form-3.html";

})