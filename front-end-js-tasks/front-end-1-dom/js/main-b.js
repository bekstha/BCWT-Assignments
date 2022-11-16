const main = document.querySelector("main");

const article = document.createElement("article");
const header = document.createElement("header");
const h2 = document.createElement("h2");
const figure = document.createElement("figure");
const img = document.createElement("img");
const figCaption = document.createElement("figCaption");
const p = document.createElement("p");

h2.innerHTML = "Article header";
img.src = "http://placekitten.com/320/160";
img.alt = "title";
figCaption.innerHTML = "Caption";
p.innerHTML="Here is some text. Here is some text. Here is some text. Here is some text.";

main.append(article);
article.append(header);
header.append(h2);
article.append(figure);
article.append(p);
figure.append(img);
figure.append(figCaption);
