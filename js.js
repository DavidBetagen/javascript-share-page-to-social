const btnFacebook = document.querySelector('.btn-facebook');
const btnLine = document.querySelector('.btn-line');
const btnTwitter = document.querySelector('.btn-twitter');

btnFacebook.addEventListener('click', function() {
    socialDialog(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, 'Share on Facebook');
});

btnLine.addEventListener('click', function() {
    socialDialog(`https://social-plugins.line.me/lineit/share?url=${window.location.href}`, 'Share on Line');
});

btnTwitter.addEventListener('click', function() {
    socialDialog(`https://twitter.com/intent/tweet?url=${window.location.href}`, 'Share on Twitter');
});

const socialDialog = (url, title) => {
    const dialogWidth = 800;
    const dialogHeight = 600;
    const dialogTop = ( screen.height - dialogHeight ) / 2;
    const dialogLeft = ( screen.width - dialogWidth ) / 2;
    window.open(url, title, `width=${dialogWidth},height=${dialogHeight},top=${dialogTop},left=${dialogLeft}`);
    return false;
}