import getMeals from './get-meals.js';

const loadList = async () => {
  const meals = await getMeals();
  const mealList = document.querySelector('div.meal-list');
  meals.forEach((meal) => {
    const mealCont = document.createElement('div');
    mealCont.setAttribute('data-mealid', meal.idMeal);
    mealCont.classList.add('meal-container');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const mealImg = document.createElement('img');
    mealImg.classList.add('meal-image');
    mealImg.id = meal.idMeal;
    mealImg.src = meal.strMealThumb;

    imgContainer.appendChild(mealImg);

    // Meal Details (beneath image)
    const mealDetails = document.createElement('div');
    mealDetails.classList.add('meal-detail-container');

    // Details First Row
    const detailFirst = document.createElement('div');
    detailFirst.classList.add('meal-detail-first');
    detailFirst.classList.add('detail-rows');

    const mealHeader = document.createElement('h2');
    mealHeader.classList.add('meal-header');
    mealHeader.textContent = meal.strMeal;

    detailFirst.appendChild(mealHeader);

    // Like button
    const likeBtn = document.createElement('i');
    likeBtn.classList.add('fa-regular');
    likeBtn.classList.add('fa-heart');
    likeBtn.classList.add('fa-xl');
    likeBtn.classList.add('like-btn');

    detailFirst.appendChild(likeBtn);

    // Details Second Row
    const detailSecond = document.createElement('div');
    detailSecond.classList.add('meal-detail-second');
    detailSecond.classList.add('detail-rows');
    const likeCount = document.createElement('span');
    likeCount.textContent = 'temp: 5 likes';
    detailSecond.appendChild(likeCount);

    // Details Third Row - Comment button
    const detailThrid = document.createElement('div');
    detailThrid.classList.add('meal-detail-third');
    detailThrid.classList.add('detail-rows');
    const commentBtn = document.createElement('button');
    commentBtn.textContent = 'Comments';
    commentBtn.classList.add('comment-btn');
    detailThrid.appendChild(commentBtn);

    mealDetails.appendChild(detailFirst);
    mealDetails.appendChild(detailSecond);
    mealDetails.appendChild(detailThrid);

    mealCont.appendChild(imgContainer);
    mealCont.appendChild(mealDetails);

    mealList.appendChild(mealCont);
  });
};

export default loadList;