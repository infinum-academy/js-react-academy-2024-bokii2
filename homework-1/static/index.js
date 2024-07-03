let mockReviews = [
    // {
    //     description: 'Great series',
    //     rating: 5
    // },
    // {
    //     description: 'They can did it better',
    //     rating: 3
    // },   
];
let selectedStars = 0;

function saveToLocalStorage(reviewList) {
    const reviewListString = JSON.stringify(reviewList);
    localStorage.setItem('review-list', reviewListString);
}

function loadFromLocalStorage() {
    const reviewListString = localStorage.getItem('review-list');
    const reviewList = JSON.parse(reviewListString);
    return reviewList;
}

function renderReviewList() {
    const reviewListElement = document.getElementById('reviewList');
    
    reviewListElement.innerHTML = '';
    mockReviews.forEach((review) => {
        reviewListElement.appendChild(createReviewItem(review));
    });

    saveToLocalStorage(mockReviews);
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
        mockReviews = mockReviews.filter((t) => {
            return t !== review;
        });
        renderReviewList();
    };
    reviewItemElement.appendChild(deleteButton);

    return reviewItemElement;
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

    // const newReviewRatingInput = document.getElementById('reviewRating');
    // const newReviewRating = newReviewRatingInput.value;
    const newReviewRating = selectedStars;
    
    const newReview = {
        description: newReviewDesc,
        rating: parseInt(newReviewRating, 10)
    }

    mockReviews.push(newReview);
    renderReviewList();

    newReviewDescInput.value = '';
    // newReviewRatingInput.value = '';
    selectedStars = 0;
    removeStars();
};

function calculateRating() {
    const desc = document.getElementsByClassName('desc');
    let total = 0;

    mockReviews.forEach(review => {
        total += review.rating;
    })

    const averageRating = (total / mockReviews.length).toFixed(2);

    const rat = document.getElementById('rat');
    rat.innerText = averageRating + '/5';
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

mockReviews = loadFromLocalStorage();
renderReviewList();