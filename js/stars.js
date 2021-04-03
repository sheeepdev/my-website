const starOne = document.querySelector('#stars-1');

getStars('nordtube', 'sheeepdev', starOne);

function getStars(repoName, user, projectNumber) {
    let api = `https://api.github.com/repos/sheeepdev/nordtube`;
    fetch(api)
        .then(function (response) {
            let data = response.json();
            return data;
        })
        .then(function (data) {
            stars = data.stargazers_count;
        })
        .then(function () {
            projectNumber.innerHTML = `<p class="project__stars" > <i class="project__stars-icon" data-feather="star"></i> ${stars} </p>`;
            feather.replace();
        });
}

