let elem = document.querySelector('#elem');
let parent = document.querySelector('#parent');

elem.addEventListener('dragstart', function() {
    //this.style.borderColor = 'green';
    // console.log('!');
});

parent.addEventListener('dragover', function() {
    event.preventDefault();
});

parent.addEventListener('drop', function() {
    console.log('!!!');
});