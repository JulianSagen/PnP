    id1.addEventListener('click', function() {
        document.getElementById('id2').style.borderBottom = '3px solid transparent';
        document.getElementById('id3').style.borderBottom = '3px solid transparent';
        this.style.borderBottom = (this.style.borderBottom == '3px solid transparent') ? '3px solid white' : '3px solid transparent';
    });
    id2.addEventListener('click', function() {
        document.getElementById('id1').style.borderBottom = '3px solid transparent';
        document.getElementById('id3').style.borderBottom = '3px solid transparent';
        this.style.borderBottom = (this.style.borderBottom == '3px solid transparent') ? '3px solid white' : '3px solid transparent';
    });
    id3.addEventListener('click', function() {
        document.getElementById('id1').style.borderBottom = '3px solid transparent';
        document.getElementById('id2').style.borderBottom = '3px solid transparent';
        this.style.borderBottom = (this.style.borderBottom == '3px solid transparent') ? '3px solid white' : '3px solid transparent';
    });

