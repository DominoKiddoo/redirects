const url = window.location.pathname.substring(1);
console.log(url);
const element = document.getElementById("redirtext");
const extraStuff = document.getElementById("extrastuff");

fetch('./links.json')
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    redir(data);
  });

function redir(data) {
    const parsedData = data;

    const item = data.find(item => item.text === url);
    if (item) {
        const target = item.link;
        console.log(target);
        window.location.replace(target);
    } else {
        console.log("oop");
        doError();
    }




    

   

}
function doError() {
    element.textContent = "this redirect does not exist lol";
    const back = document.createElement('a');
    back.text = "back to home";
    back.href = "./"
    extraStuff.appendChild(back);
}