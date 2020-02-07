console.clear();
let users = [];

const validateInfo = (user) => {
    let flag = 0;
    if (user.name == null) {
        console.log("Name can't be empty, please enter your Full Name...");
        flag++;
        return false;
    } else {
        let regex = /^[a-zA-Z ]+$/;
        if (!regex.test(user.name)) {
            console.log("Please enter valid name. e.g. John Doe.");
            flag++;
            return false;
        }
    }

    if (user.email == null) {
        console.log("e-Mail can't be empty, please enter your e-Mail ID...");
        flag++;
        return false;
    } else {
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!regex.test(user.email)) {
            console.log("Please enter valid email. e.g. johndoe@example.com");
            flag++;
            return false;
        }
    }
    if (user.age == null) {
        console.log("Age can't be empty, please enter your age...");
        flag++;
        return false;
    } else {
        if (user.age <= 13) {
            console.log("Age must be less greater than 13 & less then 85.");
            flag++;
            return false;
        }
    }

    if (user.gender == "") {
        console.log("Gender can't be empty, please enter your gender...");
        flag++;
        return false;
    } else {
        if (user.gender != "male" && user.gender != "female") {
            console.log(user.gender != "male");
            console.log("Gender must be Male or Female.");
            flag++;
            return false;
        }
    }

    if (user.agreed != true) {
        console.log("You must agree to our terms & conditions...");
        flag++;
        return false;
    }

    if (flag == 0) {
        return true;
    }
}

const create = (name, email, age, gender, agreed) => {
    let newUser = {
        name,
        email,
        age,
        gender,
        agreed
    }
    //console.log(newUser);
    if (validateInfo(newUser)) {
        users.push(newUser);
        console.log("-------------------User Added:-------------------");
        console.log("User Name: " + newUser.name);
        console.log("User email: " + newUser.email);
        console.log("User age: " + newUser.age);
        console.log("User gender: " + newUser.gender);
        console.log("User agreed to terms & conditions: " + newUser.agreed);
    } else {
        console.log("User isn't added...");
    }
}

const update = (index, key, value) => {
    let temp = {
        name: "John Doe",
        email: "johndoe@example.com",
        age: 25,
        gender: "male",
        agreed: true
    }
    temp[key] = value;
    //console.log(temp);
    if (validateInfo(temp)) {
        const updatedUserInfo = users.find((item) =>
            item["email"] === index
        );
        //console.log(updatedUserInfo);
        if (updatedUserInfo) {
            console.log("-------------------Information Updated:-------------------");
            console.log("User Name: " + updatedUserInfo.name);
            console.log("User email: " + updatedUserInfo.email);
            console.log("User age: " + updatedUserInfo.age);
            console.log("User gender: " + updatedUserInfo.gender);
            console.log("User agreed to terms & conditions: " + updatedUserInfo.agreed);
        } else {
            console.log("-------------------No Users Left.../No user found for updating information-------------------");
        }
    } else {
        console.log("User can't be added...");
    }
}

const read = (index) => {
    let data = users.filter(item => item["email"] === index);
    if (data.length == 0) {
        console.log("-------------------No Users Left...Can't read-------------------");
    } else {
        console.log("-------------------User Info:-------------------");
        console.log("User Name: " + data[0].name);
        console.log("User email: " + data[0].email);
        console.log("User age: " + data[0].age);
        console.log("User gender: " + data[0].gender);
        console.log("User agreed to terms & conditions: " + data[0].agreed);
    }
}

const deleteUser = (index) => {
    let data = users.filter(item => item["email"] != index);
    if (data.length == 0) {
        console.log("-------------------No Users Left...Can't delete-------------------");
    } else {
        data.forEach(item => {
            console.log("-------------------After Deletion User Info:-------------------");
            console.log("User Name: " + item.name);
            console.log("User email: " + item.email);
            console.log("User age: " + item.age);
            console.log("User gender: " + item.gender);
            console.log("User agreed to terms & conditions: " + item.agreed);
        });
    }
}

const compareValues = (key, order = 'asc') => {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
        }

        const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order === 'desc') ? (comparison * -1) : comparison
        );
    };
}

const sortBy = (key, order = 'asc') => {
    let sortedArray = users.sort((compareValues(key, order)));
    if (sortedArray.length == 0) {
        console.log("-------------------Nothing for Sorting:-------------------");
    } else {
        sortedArray.forEach((item, index) => {
            console.log(`-------------------After Sorting ${index + 1} User Info:-------------------`);
            console.log("User Name: " + item.name);
            console.log("User email: " + item.email);
            console.log("User age: " + item.age);
            console.log("User gender: " + item.gender);
            console.log("User agreed to terms & conditions: " + item.agreed);
        });
    }
}
create("John Doe", "johndoe@example.com", 32, "male", true);
create("Tushar Kanjariya", "tushar@example.com", 32, "male", true);
create("Deep Manek", "deep@example.com", 32, "male", true);
//update("tushar@example.com", "age", "15");
//deleteUser("johndoe@example.com");
//read("johndoe@example.com");
//console.log(users.sort(compareValues("email")));
sortBy("email", order = 'desc');
