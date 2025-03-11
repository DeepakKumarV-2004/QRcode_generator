document.getElementById("Button").addEventListener("click",function(){
    let url = document.getElementById("url").value;
    if(!url){
        alert("please enter a valid url");
        return;
    }
    document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"),{
        text:url,
        width:256,
        height:256
    });

    setTimeout(()=>{
        let qrCanvas = document.querySelector("#qrcode canvas");
        if(!qrCanvas){
            alert("qr code generation failed. Please try again");
            return;
        }
        let link = document.createElement("a");
        link.href = qrCanvas.toDataURL("image/png");
        link.download = "QrImage.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },1000);
});