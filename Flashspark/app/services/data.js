(function () {
    'use strict';

    var serviceId = 'dbdata';
    angular.module('app').factory(serviceId, ['common', '$resource' ,  dbdata]);

    function dbdata(common, $resource) {
        var $q = common.$q;

        var service = {
            getData: getData,
            timelineData: timelineData,
            faqData: faqData
        };

        return service;

        function getData(callPath) {
            var setCall = $resource('/api/Values/' + callPath, { cache: true }),
                data = setCall.query({}).$promise;
            return $q.when(data);
        }

        function timelineData() {
            var timeline =
            [
            {
                "Year": "2014",
                "Updates": [
                    { "id": "2014U08", "Description": "After numerous changes in the design, <a href='http://flashspark.in'>Flashspark.in </a> is running in a new revamp version!" },
                    { "id": "2014U07", "Description": "Beta version of <a href='http://hummingnest.com'>HummingNest</a> launched, it runs on wordpress with a custom theme for the webapp" },
                    { "id": "2014U06", "Description": "alpha version of <a href='http://scrollkart.com'>Scrollkart</a> launched " },
                    { "id": "2014U05", "Description": "Moved from <strong>Hyderabad to Bangalore </strong> and started working for <strong> Philips as Usability Developer </strong>" },
                    { "id": "2014U04", "Description": "Reviving my old web magazine <a href='http://bearded-penguins.com'>www.visivoline.com(Bearded Penguins)</a> with <a href='http://facebook.com/'>Utkarsh</a> and <a href='http://facebook.com/'>Ankit</a> in a new package with the technology web loves! AngularJS <i class='fa fa-smile-o'></i>" },
                    { "id": "2014U03", "Description": "Working with Kamal Pandey on a low cost e-shopping system. A web app which can manipulate tons of product data with ease" },
                    { "id": "2014U02", "Description": "Excited to Work on mobile platfroms" },
                    { "id": "2014U01", "Description": "Immediate Targets: Angular JS and Node JS" }
                ],
                "Work": [
                    { "id": "2014W01", "title": "HummingNest", "Description": "a real estate listing site", "ImgURL": "/Content/self.jpg", "URL": "<a href='http://www.hummingnest.com'>www.hummingnest.com</a>" },
                    { "id": "2014W02", "title": "ScrollKart", "Description": "online shopping cart", "ImgURL": "/Content/self.jpg", "URL": "www.scrollkart.com" }
                ]
            },
            {
                "Year": "2013",
                "Updates": [
                    { "id": "2013U02", "Description": " <a href='http:\\www.vishaltraders.org'> Designed vishaltraders</a>" },
                    { "id": "2013U01", "Description": "Launched <a href='http:\\www.flashspark.in'> FlashSpark</a> It is built on ASP.NET MVC Web API and AngularJS and relies a lot on SVG and Bootstrap CSS" }
                ],
                "Work": [
                    { "id": "2013W01", "title": "Flashspark.in", "Description": "a real estate listing site", "ImgURL": "/Content/self.jpg", "URL": "/Content/self.jpg" },
                    { "id": "2013W02", "title": "Vishal Traders", "Description": "a real estate listing site", "ImgURL": "/Content/self.jpg", "URL": "/Content/self.jpg" }
                ]
            },
            {
                "Year": "2012",
                "Updates": [
                    { "id": "2012U05", "Description": "Completed a project dessertation on creating on an <em>Low Cost Effective Home Automation System.</em> It was built primarily on Matlab and C#, Drupal for front end design, Atmega 16 MCU for hardware." },
                    { "id": "2012U04", "Description": "Graduated from Amity University, Noida" },
                    { "id": "2012U03", "Description": "Joined Wipro Technologies as a Project Engineer in Hyderabad" },
                    { "id": "2012U02", "Description": "Trained in MS Technolgies" },
                    { "id": "2012U01", "Description": "Joined a Microsoft based project as a test Engineer" }
                ],
                "Work": [
                    { "id": "2012W01", "title": "Flashspark.in", "Description": "a real estate listing site", "ImgURL": "/Content/self.jpg", "URL": "/Content/self.jpg" },
                    { "id": "2012W02", "title": "Vishal Traders", "Description": "a real estate listing site", "ImgURL": "/Content/self.jpg", "URL": "/Content/self.jpg" }
                ]
            },
            {
                "Year": "Daysofyore",
                "Updates": [
                { "id": "DaysofyoreU08", "Description": "<strong>2011:</strong> designed and administered www.weatamity.com(we used to post assignments and old testpapers for public benefit! :P )" },
                { "id": "DaysofyoreU07", "Description": "<strong>2011:</strong> Internship in Whirlpool of India" },
                { "id": "DaysofyoreU06", "Description": "<strong>2010:</strong> Inhouse project 'German to English translater'" },
                { "id": "DaysofyoreU05", "Description": "<strong>2009:</strong> Started an online magazine with Utkarsh bhatia, www.visivonline.com, we are in the process of reviving it again" },
                { "id": "DaysofyoreU04", "Description": "<strong>2009:</strong> Designed a wired with Abhijeet Verma for IIT Kanpur techfest 'Techkriti', great learning experience" },
                { "id": "DaysofyoreU03", "Description": "<strong>2008:</strong> Joined Engineering in 'Electronics and Communication'from Amity University'" },
                { "id": "DaysofyoreU02", "Description": "<strong>2007:</strong> Completed Schooling from DPSG" },
                { "id": "DaysofyoreU01", "Description": "<strong>1989:</strong>  Born! :P" }
                ],
                "Work": [
                    { "id": "2012W01", "title": "Flashspark.in", "Description": "a real estate listing site", "ImgURL": "/Content/self.jpg", "URL": "/Content/self.jpg" },
                    { "id": "2012W02", "title": "Vishal Traders", "Description": "a real estate listing site", "ImgURL": "/Content/self.jpg", "URL": "/Content/self.jpg" }
                ]
            }
            ];
            return $q.when(timeline);

        }

        function faqData() {
            var faq =
            [
            { "Question": "Let’s begin by asking, who are you and what you do?", "Answer": "I am a web enthusiast and in love with the possibilities that web apps have provided us in the recent times! My first interaction with the web was during my school time at Delhi Public School Ghaziabad and it continues till date.I hold an engineering degree in Electronics and Communication from Amity University and I am currently part of <span class='fa-1x'> Wipro Technologies,Bangalore as Usability Developer </span> where we work with Philips in creating a seamless web presence for them by helping in designing their web portals."},
            { "Question": "What does an average day hold for you?", "Answer": "My daily musings include <em>Learning to breathe, trying to get wings to fly! :P </em> I have varied interests which ranges from writing, coding to cooking  and reading comics {addict alert!} depending on the mood and time frame." },
            { "Question": "Any specific reason for making this website?", "Answer": "Internet has always been a very fascinating topic for me and I wanted to have some space that belonged to me under this sun!This is an attempt to jump start the process. Also working on projects like these helps you understand a lot of concepts in a much better way and I can very delightfully say that after the completion of this site, I am a more learned man!" },
            { "Question": "You say, you like the potential of web. What about web attracts you?", "Answer": "The evolution of web in the last decade (the approximate amount of the time, I have been its user!) has been almost exmplerary. It has truly shrunk the boundaries in every conceivable way.We have already began our journey into the new era where virtual world is not confined to a handful of devices! In such a place internet is what connects everything like nodes, hence its better understanding should be considered as a prequisite." },
            { "Question": "Tell us about the tools and technologies you are comfortable with?", "Answer": "I learnt a good deal about Oracle and Visual Basic during my school time. By the time I joined my college, I was very much interested in learning semiconductor devices and focussed on the same but kept my interest for web going, by learning wordpress and drupal. Now I work with ASP.NET, MVC, SQL Server,HTML5, JQuery, CSS 3, Angular JS and SVG. Recently I started learning php and Wordpress {quite facinating!}" },
            { "Question": "Why is there no copyright notice on this website?", "Answer": "Aha! Its like the 1st law of thermodynamics!!<em> Knowledge cannot be created or destroyed, it just changes from brain to another! </em> Whatever I have used in this website or the ideas I have presented have been polished using the internet only, so everything is open for redistribution! All I ask, is that if there is something interesting, please contact me as I might be able to contribute more. <a href='mailto:abhijit.sinha@outlook.com'>abhijit.sinha@outlook.com</a>" },
            { "Question": "Finally, who came up with this douchy idea of interviewing yourself!", "Answer": "Hey! Well, after completing this section, it does looks a bit pompous! I guess, one of the perks of making your own webpage :P." }
            ];
            return $q.when(faq);

        }

    }

})();