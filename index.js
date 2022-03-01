const toggleBtn = document.querySelector(`.sidebar-toggle`)
const xBtn = document.querySelector(`.x-btn`)
const sidebar = document.querySelector(`.sidebar`)

toggleBtn.addEventListener(`click`, function() {
    sidebar.classList.toggle(`show-sidebar`)
    console.log(sidebar.classList)
})

xBtn.addEventListener(`click`, function() {
    sidebar.classList.remove(`show-sidebar`)
    console.log(sidebar.classList)

})