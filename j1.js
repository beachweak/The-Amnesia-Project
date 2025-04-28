document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.querySelector('#user-box .profile-img-frame img');
    if (profileImage) {
        profileImage.src = 'https://i.imgur.com/AK0xPrX.png';
    }

    document.querySelectorAll('img[src="ImageHandler.ashx?schoolid=4410063"]').forEach(img => {
        img.src = 'https://i.imgur.com/AK0xPrX.png';
        img.style.height = '75px';
    });

    document.body.innerHTML = document.body.innerHTML.replace(/Regent House/g, '...this site is owned by dogthrift');

    document.body.innerHTML = document.body.innerHTML.replace(/Student/g, 'Operator');

    const columns = ['column1', 'column2', 'column3'];
    columns.forEach(columnId => {
        const column = document.getElementById(columnId);
        if (column) {
            column.style.opacity = '1';
        }
    });
});
