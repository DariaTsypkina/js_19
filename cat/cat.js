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
    let otherfamily = document.getElementById("otherfamily");
    let family = checkCatFamily(catfamily, otherfamily);

    let age = document.getElementById("age").value;

    let meals = document.getElementsByName("meal");
    let arrMeals = [];
    addMeal(meals, arrMeals);

    let sex = document.querySelector("input[name=sex]").value;
    let comment = document.getElementById("comment").value;
    let photo = document.querySelector("input[type=file]").value;
    photo = checkPhotoPath(photo);

    let cat = new Cat(catname,
                        name,
                        surname,
                        tel,
                        town,
                        email,
                        family,
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

function checkCatFamily(catfamily, otherfamily) {
    if (catfamily.value != "" && otherfamily.value != "") {
        alert(`Выберите либо породу из списка, либо впишите в поле "Другое..."`);
    }

    if (catfamily.value == "" && otherfamily.value == "") {
        alert(`Выберите породу из списка или впишите в поле "Другое..."`);
        document.getElementById("otherfamily").style.borderColor = "red";   
    } else if (otherfamily.value != "") {
        document.getElementById("otherfamily").style.borderColor = "none";
        catfamily.value == "";
        return otherfamily.value;
    } else return catfamily.value;
}