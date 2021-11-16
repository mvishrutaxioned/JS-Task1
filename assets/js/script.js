const links = document.querySelectorAll('.tabs li a');
const contents = document.querySelectorAll('.tab-content li');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        links.forEach(link => link.classList.remove('active'));
        link.classList.add('active');

        contents.forEach(content => {
            if(link.getAttribute('href') == content.id) {
                contents.forEach(content => content.classList.remove('show'));
                content.classList.add('show')
            }
        })
    })
})