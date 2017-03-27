$(function(){

    /* ======= Model ======= */

    var model = {
        projects: [
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
                "url" : "https://multi-user-blog-emily.appspot.com/",
                "githubUrl" : "https://github.com/eunbigo91/project3-multi-user-blog"
            },
             {
                "title" : "Neighborhood Map",
                "pic" : "img/project6.png",
                "date" : "Jan. 2017",
                "descriptions" : "A single-page web application, built using the Knockout framework, that displays a Google Map of an area and various points of interest. Users can search all included landmarks and, when selected, additional information about a landmark is presented from the Wikipedia APIs.",
                "url" : "",
                "githubUrl" : "https://github.com/eunbigo91/project6-neighborhood-map"
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
                "title" : "Personal Resume website",
                "pic" : "img/project7.png",
                "date" : "Jan. 2017",
                "descriptions" : "Used JavaScript to build a resume website.",
                "url" : "",
                "githubUrl" : "https://github.com/eunbigo91/project6-practice/tree/master/resume"
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
                "title" : "Movie Trailer",
                "pic" : "img/project1.png",
                "date" : "Jul. 2016",
                "descriptions" : "Server-side code written in Python to store a list of my favorite movies. This data is then served to a web page using HTML and CSS allowing visitors to review these movies and watch the trailers.",
                "url" : "",
                "githubUrl" : "https://github.com/eunbigo91/project1-movie-trailer"
            }
        ]
    };

    /* ======= Octopus ======= */

    var octopus = {
        init: function() {
            view.init();
            $("#gallery").unitegallery({
                tiles_type:"justified",
                theme_enable_preloader: false,
                tile_show_link_icon:true,
                tile_enable_textpanel:true,
                tile_textpanel_title_text_align:"center",
                tile_textpanel_title_font_size:16,
                lightbox_overlay_opacity:0.8,
                lightbox_slider_control_zoom:false,
                lightbox_textpanel_enable_description:true,
                lightbox_textpanel_title_font_family:"Ubuntu",
                lightbox_textpanel_title_font_size:16,
                lightbox_textpanel_desc_font_family:"Cormorant Garamond",
                lightbox_textpanel_desc_font_size:14,
            });
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
            var curUrl = '';
            $.each(projects, function(projectIndex, project) {
                if (project.url){
                    curUrl = project.url;
                }
                else {
                    curUrl = project.githubUrl;
                }
                html += '<a href="'+curUrl+'"><img src="'+project.pic+'" data-image="'+project.pic+'" alt="'+project.title+'" data-description="'+project.descriptions+'"></a>';
            });
            $('#gallery').html(html);
        }
    };

    octopus.init();

});
