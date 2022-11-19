'use strict'

const main = document.querySelector('main');

const h2 = document.querySelector('h2').textContent;
const src = document.querySelector('img').src;
const alt = document.querySelector('img').alt;
const figCaption = document.querySelector('figCaption').textContent;
const p = document.querySelector('p').textContent;

main.appendChild(document.createElement('article')).setAttribute('id','newArticleId');

document.getElementById('newArticleId')
.appendChild(document.createElement('header'))
.appendChild(document.createElement('h2'))
.appendChild(document.createTextNode(h2));

document.getElementById('newArticleId')
.appendChild(document.createElement('figure')).setAttribute('id', 'figure');

document.getElementById('figure')
.appendChild(document.createElement('img')).setAttribute('id', 'image');

document.getElementById('image').src = src;

document.getElementById('image').alt = alt;

document.getElementById('figure')
.appendChild(document.createElement('figCaption'))
.textContent = figCaption;

document.getElementById('newArticleId')
.appendChild(document.createElement('p')).textContent = p;