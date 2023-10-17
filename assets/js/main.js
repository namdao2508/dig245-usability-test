function totalScore(){
    let totalScore = 0;

    Array.from(document.querySelectorAll('.score'))
    .forEach(input => totalScore += parseFloat(input.value));

    totalScore = totalScore * 2.5;

    console.log(totalScore);

    // Display the total score in the result element
    const total = document.getElementById("total");
    total.value = totalScore;
}