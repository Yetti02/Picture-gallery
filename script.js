const change = document.querySelectorAll(".imagename"); 


change.forEach((item) => {  
item.addEventListener('dblclick', (event) => {  
     event.target.style.background = "palevioletred";  
       event.target.style.color = "white";  
    });  
});
