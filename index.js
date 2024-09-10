function loader(){
    setTimeout(show,1000)
    function show(){
        let website = document.querySelector('#website')
        website.style.display ="block";
        let logo = document.querySelector('#imageloader')
        logo.style.display = "none";
    }


}


(function(){
    setTimeout(chalja,5000)
    function chalja(){
       //window.alert("fhr")
        let store = document.querySelector('#model')
         store.style.display = "block";
        let store1 = document.querySelector('#website')
        store1.style.display = "blur(5px)";
      

    }
})()

function hide(){
    let hide= document.querySelector('#model')
    hide.style.display = "none";
}