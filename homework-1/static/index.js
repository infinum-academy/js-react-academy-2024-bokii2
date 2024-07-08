let reviewsList = [];
let selectedStars = 0;

function saveToLocalStorage(reviewList) {
    if(reviewList.length > 0) {
        const reviewListString = JSON.stringify(reviewList);
        localStorage.setItem('review-list', reviewListString);
    } else {
        localStorage.removeItem('review-list');
    }
    
}

function loadFromLocalStorage() {
    const reviewListString = localStorage.getItem('review-list');
    const reviewList = JSON.parse(reviewListString);
    return reviewList ?? [];
}

function renderReviewList() {
    const reviewListElement = document.getElementById('reviewList');
    
    reviewsList.forEach((review) => {
        reviewListElement.appendChild(createReviewItem(review));
    });

    saveToLocalStorage(reviewsList);
    calculateRating();
}

function createReviewItem(review) {
    const reviewItemElement = document.createElement('div');
    reviewItemElement.classList = ['review']

    const reviewItemDescElement = document.createElement('span');
    reviewItemDescElement.textContent = review.description;
    reviewItemElement.appendChild(reviewItemDescElement);

    const reviewItemRatingElement = document.createElement('span');
    reviewItemRatingElement.textContent = review.rating + "/5";
    reviewItemElement.appendChild(reviewItemRatingElement);

    // Stars in the review
    const reviewStarsElement  = document.createElement('div');
    reviewStarsElement.classList = ['stars']
    reviewStarsElement.innerHTML = showStars(review.rating);
    reviewItemElement.appendChild(reviewStarsElement);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove';
    deleteButton.onclick = () => {
        removeReview(review, reviewItemElement);
    };
    reviewItemElement.appendChild(deleteButton);

    return reviewItemElement;
}

const removeReview = (review, reviewItemElement) => {
    reviewItemElement.remove();
    reviewsList = reviewsList.filter((t) => {
        return t !== review;
    });
    saveToLocalStorage(reviewsList);
    calculateRating();
}

function showStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<span class="selected">&starf;</span>';
        } else {
            stars += '<span class="star">&starf;</span>';
        }
    }
    return stars;
}

const postButtonHandler = () => {
    const newReviewDescInput = document.getElementById('reviewDesc');
    const newReviewDesc = newReviewDescInput.value;

    const newReviewRating = selectedStars;
    
    const newReview = {
        description: newReviewDesc,
        rating: parseInt(newReviewRating, 10)
    }

    if(newReview.description == "" || newReview.rating == 0) {
        alert("Please, fill all the inputs");
        return;
    }

    reviewsList.push(newReview);
    addNew(newReview);
    saveToLocalStorage(reviewsList);
    calculateRating();

    newReviewDescInput.value = '';
    selectedStars = 0;
    removeStars();
};

const addNew = (review) => {
    const reviewListElement = document.getElementById('reviewList');
    reviewListElement.appendChild(createReviewItem(review));
}

function calculateRating() {
    const desc = document.getElementsByClassName('desc');
    let total = 0;

    reviewsList.forEach(review => {
        total += review.rating;
    })

    const averageRating = (total / reviewsList.length).toFixed(2);

    const rat = document.getElementById('rat');
    rat.innerText = (reviewsList.length ? averageRating : '0') + '/5';
}

function starRating(n) {
    let stars = document.getElementsByClassName('star');
    selectedStars = n;

    remove();
    for(let i = 0; i < n; i++) {
        stars[i].className = "star selected";
    }

    function remove() {
        let i = 0;
        while (i < 5) {
            stars[i].className = "star";
            i++;
        }
    }
}

function removeStars() {
    let stars = document.getElementsByClassName('star');
    for (let i = 0; i < stars.length; i++) {
        stars[i].className = "star";
    }
}

reviewsList = loadFromLocalStorage();
renderReviewList();