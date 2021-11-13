function hello_world() {
    console.log("Hello World!");
}

function double_click(message){
    e.remove();
}

function remove_cards(e) {
    //e.remove();
    var new_p_tag = document.createElement('p');
    new_p_tag.innerText = "I am a new P tag";
    e.appendChild(new_p_tag);
}

Cookies.remove('username');

function add_cards(){
    var cards = [
        {
            img_src: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80",
            title: "Fun card",
        
        },
        {
            img_src: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80",
            title: "Margarita Pizza",
        },
        {
            img_src: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80",
            title: "Margarita Pizza",
        },
        {
            img_src: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80",
            title: "Margarita Pizza",
        }
        ]
        var i = 0;
        while(i < cards.length) {
        var parent_container = document.getElementById("card_section");
        
        var new_card = document.createElement("article");
        new_card.classList.add("card_container");
        new_card.setAttribute('onclick',"remove_cards(this)");
        
        var new_image = document.createElement("img");
        new_image.src = cards[i].img_src;
        new_card.appendChild(new_image);
        
        var new_title = document.createElement("h1");
        new_title.innerText = cards[i].title;
        new_card.appendChild(new_title);
        parent_container.appendChild(new_card);
            i++;
        
        }

}


hello_world();

var h2 = document.getElementById("h2_title");
h2.style.textAlign = "center";

var h3 = document.getElementById("h3_title");
h3.style.color = "red";

var desc = document.getElementById("description");
desc.style.background = "pink";

var titles = document.getElementsByClassName("title");
for(var i=0; i < titles.length; i++) {
titles[i].style.fontFamily = "sans-serif";
}



//var parent_container = document.getElementById("card_section");

//var new_card = document.createElement("article");
//new_card.classList.add("card_container");

//var new_image = document.createElement("img");
//new_image.src = card.img_src;
//new_card.appendChild(new_image);

//var new_title = document.createElement("h1");
//new_title.innerText = card.title;
//new_card.appendChild(new_title);
//parent_container.appendChild(new_card);

