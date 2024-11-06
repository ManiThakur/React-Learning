const heading= React.createElement("h1",{},"Mani Thakur");
const paragraph=React.createElement("p",{},"I am a hardworking Web Developer");
const div=React.createElement("div",{},[heading,paragraph]);

const unique=ReactDOM.createRoot(document.getElementById("unique"));
unique.render(div);