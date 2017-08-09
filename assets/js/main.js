var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];
for (var i = 0; i < pictures.length; i++) {
	var tag_Li = document.createElement('img');
	
	tag_Li.setAttribute('src', pictures[i]);

	picture.appendChild(tag_Li)
}