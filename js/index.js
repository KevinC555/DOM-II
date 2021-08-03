// Your code goes here

// 1.
const navLink1 = document.querySelector('.nav-link');

navLink1.onclick = function (event) {
	console.log('hello');
}

// 2.
function hKey(event) {
	if (event.key === 'h') {
		alert('Happy H Key');
	}
}
document.addEventListener('keydown', hKey);

// // 3.
// function scroll(event) {
// 	if (event.scroll = 'true') {
// 		alert('mouse wheel is moving');
// 	}
// }
// document.addEventListener('scroll', scroll);

//4. 
window.addEventListener("resize", function () { alert("window resized..") })

//5. 
document.querySelector('.intro h2').addEventListener("wheel", myFunction);

function myFunction() {
	this.style.fontSize = "50px";
}

//6. 
const busPicture = document.querySelector('.intro img');

busPicture.addEventListener('dblclick', function (event) {
	busPicture.style.border = '2px solid black';
})

//7.
const signMeUp = document.querySelector('.content-pick');

signMeUp.addEventListener('mouseover', function (event) {
	this.style.color = 'red';
})

//8. 
signMeUp.addEventListener('mouseleave', function (event) {
	this.style.color = 'black';
});

//9. 
const thingy = document.querySelector('.intro p');

thingy.addEventListener('focus', function (event) {
	console.log('helloooooooo');
})
