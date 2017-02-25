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
                "title" : "Item Catalog",
                "pic" : "img/project5.png",
                "descriptions" : "Developed a content management system using the Flask framework in Python. Authentication is provided via OAuth and all data is stored within a PostgreSQL database."
            },
            {
                "title" : "Neighborhood Map",
                "pic" : "img/project6.png",
                "descriptions" : "A single page application, used of third-party libraries and APIs, feature a map of Seattle’s tour attractions. Used KnockoutJS to handle the list, filter, and any other information on the page that is subject to changing state."
            },
            {
                "title" : "Personal Blog Using Wordpress",
                "pic" : "img/blog.png",
                "descriptions" : "Used Wordpress and Wordpress basic theme to build my personal blog."
            }
        ]
    };

    /* ======= Octopus ======= */

    var octopus = {
        init: function() {
            view.init();
            detailView.init();
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
                html += '<div class="col-xs-12 col-sm-4 bottom-space project-tile" id="project-'+projectIndex+'" data-toggle="modal" data-target="#details">';
                html += '<picture> <img class="featured-work" src="'+project.pic+'" alt="project screen shot"></picture>';
                html += '</div>';
            });
            $('#project').html(html);
        }
    };

    var detailView = {
        init: function() {
            $('.project-tile').click(function(obj) {
                detailView.render(obj);
            });
        },
        render: function(obj) {
            var selected = obj.currentTarget.id.split("-")[1];
            var html = '';
            var project = octopus.getProjects()[selected];
            html += '<h3 class="detail-title text-center">'+project.title+'</h3>';
            html += '<picture> <img class="detail-image" src="'+project.pic+'" alt="project screen shot"></picture>';
            html += '<p class="detail-text">'+project.descriptions+'</p>';
            $("#project-detail").html(html);
        }
    };

    octopus.init();

});

