class Cat {
    constructor(catname,
                name,
                surname,
                tel,
                town,
                email,
                catfamily,
                age,
                meals,
                sex,
                comment,
                photo) {
                    this.catname = catname;
                    this.name = name;
                    this.surname = surname;
                    this.tel = tel;
                    this.town = town;
                    this.email = email;
                    this.catfamily = catfamily;
                    this.age = age;
                    this.meals = meals;
                    this.sex = sex;
                    this.comment = comment;
                    this.photo = photo;
                }
}

function save() {
    let catname = document.getElementById("catname").value;
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let tel = document.getElementById("tel").value;
    let town = document.getElementById("town").value;
    let email = document.getElementById("email").value;

    let catfamily = document.getElementById("catfamily");
    catfamily = checkCatFamily(catfamily);

    let age = document.getElementById("age").value;

    let meals = document.getElementsByName("meal");
    let arrMeals = [];
    addMeal(meals, arrMeals);

    let arrSex = document.querySelectorAll("input[name=sex]");
    let sex;
    sex = checkSex(arrSex, sex);

    let comment = document.getElementById("comment").value;
    let photo = document.querySelector("input[type=file]").value;
    photo = checkPhotoPath(photo);

    let inputs = document.querySelectorAll("input");
    checkAllInputs(inputs);

    let cat = new Cat(catname,
                        name,
                        surname,
                        tel,
                        town,
                        email,
                        catfamily,
                        age,
                        arrMeals,
                        sex,
                        comment,
                        photo);

    console.log(cat);
}


function addMeal(meals, arrMeals) {
    for (let i = 0; i < meals.length; i++) {
        if (meals[i].checked) {
            arrMeals.push(meals[i].value);
        }
    }
}

function checkPhotoPath(str) {
    return str = str.replace(/ /g, "");
}

function checkCatFamily(catfamily) {
    document.getElementById('familyInfo').innerHTML = "";
    if (catfamily.value == "") {
        document.getElementById('familyInfo').innerHTML = "Выберите породу";
    } else return catfamily.value;
}

function checkSex(arr, sex) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].checked) {
            document.getElementById("sexInfo").innerHTML = "";
            sex = arr[i].value;
        } else document.getElementById("sexInfo").innerHTML = "Необходимо выбрать пол животного!";
    }
    return sex;
}

function checkAllInputs(inputs) {
    document.getElementById('mainInfo').innerHTML = "";
    for (let input of inputs) {
        if (input.value == "") {
            document.getElementById('mainInfo').innerHTML = "Необходимо заполнить все поля";
        }
    }
}