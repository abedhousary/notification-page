let marksasreadbtn = document.querySelector(".markasread");
let unread = document.querySelectorAll(".unread");
let notific = document.querySelectorAll(".notification-holder");


marksasreadbtn.onclick = () => {
    unread.forEach((e) => {
        e.classList.toggle("unread");
    })
    notific.forEach((e) => {
        e.classList.toggle("transparet");
    })
}