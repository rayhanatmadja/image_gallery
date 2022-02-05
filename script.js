const thumbnails = document.querySelectorAll('.thumbnail');
const container = document.querySelector('.container');
const imgUtama = document.querySelector('.img1');
container.addEventListener('click', function(event){

    if(event.target.className == 'thumbnail'){
        imgUtama.src = event.target.src;
        imgUtama.classList.add('fadeIn');
        setTimeout(function(){
            imgUtama.classList.remove('fadeIn')
        }, 500);
        thumbnails.forEach(function(thumb){
            if(thumb.classList.contains('active')){
                thumb.classList.remove('active');
            }
        });
        event.target.classList.add('active');
    }
})