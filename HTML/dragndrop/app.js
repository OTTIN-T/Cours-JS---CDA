function dragstart_handler(event) {
  event.dataTransfer.setData("text/plain", event.target.innerHTML);
  event.dataTransfer.setData("text/html", event.target.outerHTML);
  event.dataTransfer.setData(
    "text/uri-list",
    event.target.ownerDocument.location.href
  );
  event.dataTransfer.setData("id", event.target.id);
  event.dataTransfer.dropEffect = "copy";
  //   const img = new Image();
  //   img.src = "example.gif";
  //   ev.dataTransfer.setDragImage(img, 10, 10);
}

function dragover_handler(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
}

function drop_handler(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("id");
  event.target.appendChild(document.getElementById(data));
}
