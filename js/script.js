$(function(){

    /* ======= Model ======= */

    var model = {
        projects: [
            {
                "title" : "Movie Trailer",
                "pic" : "img/project1.png",
                "descriptions" : "Server-side code written in Python to store a list of my favorite movies. This data is then served to a web page using HTML and CSS allowing visitors to review these movies and watch the trailers."
            },
            {
                "title" : "Build Portfolio",
                "pic" : "img/project2.png",
                "descriptions" : "Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers."
            },
            {
                "title" : "Multi User Blog",
                "pic" : "img/project3.png",
                "descriptions" : "Built a multi-user blog, hosted on Google App Engine, with comments and login functionality. Developed authentication functionality using hmac module and saved users’ password securely using hashlib. "
            },
            {
                "title" : "Tournament",
                "pic" : "img/project4.png",
                "descriptions" : "Built a PostgreSQL relational database scheme to store the results of a game tournament. Also provided a number of queries to efficiently report the results of the tournament and determine the winner."
            },
            {
                "title" : "Item Catalog",
                "pic" : "img/project5.png",
                "descriptions" : "Developed a content management system using the Flask framework in Python. Authentication is provided via OAuth and all data is stored within a PostgreSQL database."
            },
            {
                "title" : "Neighborhood Map",
                "pic" : "img/project6.png",
                "descriptions" : "A single-page web application, built using the Knockout framework, that displays a Google Map of an area and various points of interest. Users can search all included landmarks and, when selected, additional information about a landmark is presented from the Wikipedia APIs."
            },

        ]
    };

    /* ======= Octopus ======= */

    var octopus = {
        init: function() {
            view.init();
        },

        getProjects: function() {
            return model.projects;
        }

    };


    /* ======= View ======= */

    var view = {
        init: function() {
            this.render();
        },
        render: function() {
            var projects = octopus.getProjects();
            var html = '';
            $.each(projects, function(projectIndex, project) {
                html += '<div class="col-xs-12 col-sm-4 bottom-space">';
                html += '<picture> <img class="featured-work" src="'+project.pic+'" alt="project screen shot"></picture>';
                html += '<h3 class="small-text">'+project.title+'</h3>';
                html += '<p>'+project.descriptions+'</p>';
                html += '</div>';
            });
            $('#project').html(html);
        }
    };
    octopus.init();
});