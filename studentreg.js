 //selecting td
 var submit = document.getElementById("submit")
        var gender = document.getElementsByName("gender")
        for (count = 0; count < 2; count++) {
            gender[count].addEventListener("click", function () {
                gender = event.target.id

            })
        }

        function del(event) {
            event.target.closest("tr").remove()
        }

 submit.addEventListener("click", function () {
     event.preventDefault()
     var name = document.getElementById("name").value
     var age = document.getElementById("age").value
     var course = document.getElementById("course").value
     var email = document.getElementById("email").value
     var nameRegex = /^[a-zA-Z]+$/
     var ageRegex = /^\d{2}$/
     var emailRegex = /^[a-zA-z0-9]+@gmail\.com/
     var validate = true
     if (nameRegex.test(name) == false) {
         document.querySelector(".nameError").style.display = "block"
         validate = false
     }
     else {
         document.querySelector(".nameError").style.display = "none"
     }
     if (ageRegex.test(age) == false) {
         document.querySelector(".ageError").style.display = "block"
         validate = false
     }
     else {
         document.querySelector(".ageError").style.display = "none"
     }
     if (emailRegex.test(email) == false) {
         document.querySelector(".emailError").style.display = "block"
         validate = false
     }
     else {
         document.querySelector(".emailError").style.display = "none"
     }

     if (validate == true) {
         var settab = document.getElementById("tabdb")
         var settr = document.createElement("tr")

         var setname = document.createElement("td")
         var setage = document.createElement("td")
         var setgender = document.createElement("td")
         var setcourse = document.createElement("td")
         var setemail = document.createElement("td")
         var setdel = document.createElement("td")

         setname.innerHTML = name
         setage.innerHTML = age
         setgender.innerHTML = gender
         setcourse.innerHTML = course
         setemail.innerHTML = email
         setdel.innerHTML = "<button onclick=" + "del(event)" + "> Delete Data</button>"
         settr.append(setname)
         settr.append(setage)
         settr.append(setgender)
         settr.append(setcourse)
         settr.append(setemail)
         settr.append(setdel)
         settab.append(settr)
         console.log(settr)
     }
 })
