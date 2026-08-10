
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
        let results = data.results[0];
        
        let image = results.picture.large;
        let title = results.name.title;
        let firstName = results.name.first;
        let lastName = results.name.last;
        let username = results.login.username;
        let gender = results.gender;
        let email = results.email;
        let phone = results.phone;
        let city = results.location.city;
        let state = results.location.state;
        let postcode = results.location.postcode;
        let CNcode = results.nat;
        let country = results.location.country;


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
