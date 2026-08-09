
let box = document.querySelector(".container");
let btn = document.querySelector("button");
console.log(box);

fetch("https://randomuser.me/api/")
.then((res) => {
        return res.json();
    })
.then((data) => {
        console.log(data);

        box.classList.add("BOX");

        let image = data.results[0].picture.large;
        let title = data.results[0].name.title;
        let firstName = data.results[0].name.first;
        let lastName = data.results[0].name.last;
        let username = data.results[0].login.username;
        let gender = data.results[0].gender;
        let email = data.results[0].email;
        let phone = data.results[0].phone;
        let city = data.results[0].location.city;
        let state = data.results[0].location.state;
        let postcode = data.results[0].location.postcode;
        let CNcode = data.results[0].nat;
        let country = data.results[0].location.country;


        // console.log(title);
        // console.log(firstName);
        // console.log(lastName);

        // console.log(gender)

        box.innerHTML = `
        
    <center>
        <img src="${image}"> 
    </center>     <br>
    <b>Name:</b> ${title} ${firstName} ${lastName} <br>
    <b>Gender:</b> ${gender} <br>
    <b>E-mail:</b> ${email} <br>
    <b>Phone:</b> ${phone} <br>
    <b>City:</b> ${city} <br>
    <b>State:</b> ${state} <br>
    <b>Post code:</b> ${postcode} <br>
    <b>CN Code:</b> ${CNcode} <br>
    <b>Country:</b> ${country} <br>

    `;
});

btn.addEventListener("click", function(){

    location.reload();
})