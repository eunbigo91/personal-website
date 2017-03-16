$(function(){

    /* ======= Model ======= */

    var model = {
        projects: [
            {
                "title" : "Movie Trailer",
                "pic" : "img/project1.png",
                "date" : "Jul. 2016",
                "descriptions" : "Server-side code written in Python to store a list of my favorite movies. This data is then served to a web page using HTML and CSS allowing visitors to review these movies and watch the trailers.",
                "url" : "",
                "githubUrl" : "https://github.com/eunbigo91/project1-movie-trailer"
            },
            {
                "title" : "Build Portfolio",
                "pic" : "img/project2.png",
                "date" : "Aug. 2016",
                "descriptions" : "Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers.",
                "url" : "",
                "githubUrl" : "https://github.com/eunbigo91/project2-build-portfolio"
            },
            {
                "title" : "Multi User Blog",
                "pic" : "img/project3.png",
                "date" : "Oct. 2016",
                "descriptions" : "Built a multi-user blog, hosted on Google App Engine, with comments and login functionality. Developed authentication functionality using hmac module and saved users’ password securely using hashlib. ",
                "url" : "",
                "githubUrl" : "https://github.com/eunbigo91/project3-multi-user-blog"
            },
            {
                "title" : "Item Catalog",
                "pic" : "img/project5.png",
                "date" : "Dec. 2016",
                "descriptions" : "Developed a content management system using the Flask framework in Python. Authentication is provided via OAuth and all data is stored within a PostgreSQL database.",
                "url" : "",
                "githubUrl" : "https://github.com/eunbigo91/project5-item-catalog"
            },
            {
                "title" : "Neighborhood Map",
                "pic" : "img/project6.png",
                "date" : "Jan. 2017",
                "descriptions" : "A single-page web application, built using the Knockout framework, that displays a Google Map of an area and various points of interest. Users can search all included landmarks and, when selected, additional information about a landmark is presented from the FourSquare and Wikipedia APIs.",
                "url" : "",
                "githubUrl" : "https://github.com/eunbigo91/project6-neighborhood-map"
            },
            {
                "title" : "Personal Blog Using Wordpress",
                "pic" : "img/blog.png",
                "date" : "Dec. 2016",
                "descriptions" : "Used Wordpress and Wordpress basic theme to build my personal blog.",
                "url" : "",
                "githubUrl" : "https://github.com/eunbigo91/myWordPress"
            },
            {
                "title" : "Personal Resume Using JavaScript",
                "pic" : "img/project7.png",
                "date" : "Jan. 2017",
                "descriptions" : "Used JavaScript to build resume website.",
                "url" : "",
                "githubUrl" : "https://github.com/eunbigo91/project6-practice/tree/master/resume"
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
            Galleria.loadTheme('js/lib/galleria/themes/classic/galleria.classic.min.js');
            Galleria.configure({
                showInfo: false
            });
            Galleria.run('.galleria', {
                height: 0.5625,
                autoplay: 3000
            });
        },
        render: function() {
            var projects = octopus.getProjects();
            var html = '<div class="galleria">';
            $.each(projects, function(projectIndex, project) {
                //html += '<div class="col-xs-12 col-sm-6 col-md-4 bottom-space project-tile" id="project-'+projectIndex+'" data-toggle="modal" data-target="#details">';
                html += '<picture> <img class="featured-work" src="'+project.pic+'" alt="'+project.title+'"></picture>';
                //html += '</div>';
            });
            html += '</div>';
            $('#project').html(html);
        }
    };

    var detailView = {
        init: function() {
            $('.project-tile').mouseover(function(obj) {
                detailView.render(obj);
            });
        },
        render: function(obj) {
            var selected = obj.currentTarget.id.split("-")[1];
            var html = '';
            var project = octopus.getProjects()[selected];
            html += '<h3 class="detail-title text-center">'+project.title+'</h3>';
            html += '<picture> <img class="detail-image" src="'+project.pic+'" alt="project screen shot"></picture>';
            html += '<p class="detail-text">'+project.date+'</p>';
            html += '<p class="detail-text">'+project.descriptions+'</p>';
            html += '<div class="text-center detail-icons">';
            html += '<a href="'+project.githubUrl+'"><i class="fa fa-github" style="font-size:30px"></i></a>';
            html += '</div>';
            $("#project-detail").html(html);
        }
    };

    octopus.init();

});

