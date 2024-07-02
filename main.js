const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2500,
    delay: 100,
    reset: true
})

sr.reveal(`#header`,{origin: 'left'})
sr.reveal(`#about`,{origin: 'left'})
sr.reveal(`#Services`,{origin: 'right'})
sr.reveal(`#Portfolio`,{origin: 'left'})
sr.reveal(`#contact`,{origin: 'left'})

