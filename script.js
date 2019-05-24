$(function() {
    $(".name").slideDown("slow", function() {
    });
});

function renderPages() {
    $('a').on('click', function(event) {
        event.preventDefault();
        if (this.id === 'aboutme') {
            handleAboutMe();
        }
        if (this.id === 'projects') {
            handleProjects();
        }
        if (this.id === 'contact') {
            handleContact();
        }
    })
}

function handleAboutMe() {
    $('body').html(
        `<section class="box">
            <a href="index.html"><i class="fas fa-times gray"></i></a>
            <h1 class="title gray">About Me</h1>
            <h2 class="gray">Hello! I'm Whitney.  I'm a web developer with a passion for user experience, accessibility, and responsive design.</h2>
            <p class="gray">I am a JavaScript developer based in the Central Florida area.  My interests include all things technology and space, science fiction and fantasy, sewing and crafting.  I enjoy learning new skills, building things, solving problems and puzzles.  I'm a life-long learner, and I am constantly working to add new skills to my repertoire.</p>
        </section>`
    );
}

function handleProjects() {
    $('body').html(
        `<section class="box">
            <a href="index.html"><i class="fas fa-times gray"></i></a>
            <h1 class="title gray">Projects</h1>
            <h2 class="gray">Doctor Who Quiz App</h2>
            <img class="project" alt="Quiz Screenshot" src="quizapp.png">
            <p class="gray">Take this quiz to test your knowledge of all things Doctor Who</p>
            <p class="gray">Written in HTML, CSS, Javascript, and jQuery</p>
            <p class="gray"><a class="link" href="https://wdbhook.github.io/QuizApp/">Link to Live App</a></p>
            <p class="gray"><a class="link" href="https://github.com/wdbhook/QuizApp.git">Link to Github Repository</a></p>
        </section>`
    );
}

function handleContact() {
    $('body').html(
        `<section class="box">
            <a href="index.html"><i class="fas fa-times gray"></i></a>
            <h1 class="title gray">Contact</h1>
            <p class="gray">Email: <a class="link" href="mailto:whitneyballardhook@gmail.com">whitneyballardhook@gmail.com</a></p>
            <p class="gray">LinkedIn: <a class="link" href="http://www.linkedin.com/in/whitneyhook">Whitney Hook</a></p>
            <p class="gray">GitHub: <a class="link" href="http://www.github.com/wdbhook">wdbhook</a></p>
        </section>`
        );
}

renderPages();