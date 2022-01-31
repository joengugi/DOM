 let tags = document.querySelectorAll('#primary a');
 for (let x = 0; x < tags.length; x++) {
     if (x % 2 !== 0) {
         tags[x].style.color = "blue"
         tags[x].style.backgroundColor = "green"

         console.log(x);

     }



 }