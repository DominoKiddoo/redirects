var links = document.getElementById("index");

fetch('./links.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    loadList(data);
  });

function loadList(data) {
    const parsedData = data
    parsedData.forEach((item) => {
        console.log(item.text);
        var element = document.createElement('a');
        element.href = item.link;
        element.text = item.text;
        links.appendChild(element);
        links.appendChild(document.createElement('br'));
    });


}

