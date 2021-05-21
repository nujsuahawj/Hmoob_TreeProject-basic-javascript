document.getElementById('graybutton').onclick=switchgray;
document.getElementById('whitebutton').onclick=switchwhite;
document.getElementById('bluebutton').onclick=switchblue;
document.getElementById('yelowbutton').onclick=switchyellow;
function switchgray(){
    document.getElementsByTagName('body')[0].style.backgroundColor='gray';
    document.getElementsByTagName('body')[0].style.color='white';
}
function switchwhite(){
    document.getElementsByTagName('body')[0].style.backgroundColor='white';
    document.getElementsByTagName('body')[0].style.color='black';
}
function switchblue(){
    document.getElementsByTagName('body')[0].style.backgroundColor='blue';
    document.getElementsByTagName('body')[0].style.color='white';
}
function switchyellow(){
    document.getElementsByTagName('body')[0].style.backgroundColor='yellow';
    document.getElementsByTagName('body')[0].style.color='red';
}