create database Profile
use Profile
/*=============================================================================================================================================================================*/
/*---------------------------------------------------------------------ARTICLES-----------------------------------------------------------------------------------------------*/
CREATE TABLE Articles(Id INT IDENTITY(1,1) PRIMARY KEY ,
DatePosted NVARCHAR(50) DEFAULT CAST(getdate() as varchar(12)),
Description nvarchar(1000),Title varchar(200),
 Body nvarchar(max), Likes int );

 select * from Articles
/*-----------------------ARTICLES TABLE--------------------------------------------------*/
insert into Articles values( DEFAULT, 'this works','Video_Perfect_31111',
 '<video controls="controls"
                   class="video-stream"
                   x-webkit-airplay="allow"
                   data-youtube-id="N9oxmRT2YWw"
                   src="http://www.youtube.com/embed/XGSy3_Czz8k"></video>',5) 

insert into Articles values(DEFAULT,'Why is this article title so dumb 1, you ask...! Well the database is still in the process of migration and some bugs needs to be fixed! So keep calm and enjoy Angular! <i class="fa fa-smile-o"></i>','Empty Title for a test article with bugs! Why is this article title so dumb 1, you ask...! Well the database is still in the process of migration and some bugs needs to be fixed! So keep calm and enjoy Angular! <i class="fa fa-smile-o"></i>','Empty Title for a test article with bugs!','','','')

insert into Articles values( 'Mar 24 2014', 'Why is this article title so dumb 1, you ask...! Well the database is still in the process of migration and some bugs needs to be fixed! So keep calm and enjoy Angular! <i class="fa fa-smile-o"></i> Empty Title for a test article with bugs! Why is this article title so dumb 1, you ask...! Well the database is still in the process of migration and some bugs needs to be fixed! So keep calm and enjoy Angular! <i class="fa fa-smile-o"></i> Why is this article title so dumb 1, you ask...! Well the database is still in the process of migration and some bugs needs to be fixed! So keep calm and enjoy Angular! <i class="fa fa-smile-o"></i> Empty Title for a test article with bugs! Why is this article title so dumb 1, you ask...! Well the database is still in the process of migration and some bugs needs to be fixed! So keep calm and enjoy Angular! <i class="fa fa-smile-o"></i>','Empty Title for a test article with bugs 111!',
 'I wanted to start this blog with a very fundamental question that I have been asking myself for quite some time “Why to Code!”
Growing up in a country like India, which has become a hot bed for software engineers in the past decade. And on the top of that, if you find yourself living in one of the IT hubs of the country, there will to be code everywhere!
So, what is the motivation to get up, go to office and code!!
There is no true answer here and I am not looking for one as it is a “to each their own scenario”.
 It could be just another type of work to pay the bills or motivation to find solutions that can help in building a more connected world, there can be a myriad of reasons and I suppose if I go out and meet more people there is no dearth of enthusiasm.  
My motivation is a bit simpler, learning to code and actually getting my hands dirty has made realize one thing, coding is fun! It’s about getting that sense of accomplishment that in this digitized world, you can see through the eyes of code!
I remember while building this website, one day while coming home I saw a bunch of clouds and the first thing that popped into my head was is there a way to design clouds with this precision. After searching for a while on the internet I came across a bunch of ways to do it and within a couple of hours my digitized cloud was ready! Those were the early and my God, I was elated!
Fast forwarding to now, there have been loads of such moments and I know my inspiration to code and deciding on the path my career should go, lies in the pure joy of visualizing a scenario or object and digitizing it.
Please allow me to describe this transition in the corniest way: what started as a way of coding to live and has quietly and remarkably turned into living to code!!
',5)
insert into Articles values( DEFAULT, 'I wanted to start this blog with a very fundamental question that I have been asking myself for quite some time
“Why to Code!"','Why to code 7', 'I wanted to start this blog with a very fundamental question that I have been asking myself for quite some time
“Why to Code!”
Growing up in a country like India, which has become a hot bed for software engineers in the past decade. And on the top of that, if you find yourself living in one of the IT hubs of the country, there will to be code everywhere!
So, what is the motivation to get up, go to office and code!!
There is no true answer here and I am not looking for one as it is a “to each their own scenario”.
 It could be just another type of work to pay the bills or motivation to find solutions that can help in building a more connected world, there can be a myriad of reasons and I suppose if I go out and meet more people there is no dearth of enthusiasm.  
My motivation is a bit simpler, learning to code and actually getting my hands dirty has made realize one thing, coding is fun! It’s about getting that sense of accomplishment that in this digitized world, you can see through the eyes of code!
I remember while building this website, one day while coming home I saw a bunch of clouds and the first thing that popped into my head was is there a way to design clouds with this precision. After searching for a while on the internet I came across a bunch of ways to do it and within a couple of hours my digitized cloud was ready! Those were the early and my God, I was elated!
Fast forwarding to now, there have been loads of such moments and I know my inspiration to code and deciding on the path my career should go, lies in the pure joy of visualizing a scenario or object and digitizing it.
Please allow me to describe this transition in the corniest way: what started as a way of coding to live and has quietly and remarkably turned into living to code!!
',5) 

insert into Articles values( DEFAULT, 'I wanted to start this blog with a very fundamental question that I have been asking myself for quite some time
“Why to Code!"','Why to code 9', 'I wanted to start this blog with a very fundamental question that I have been asking myself for quite some time
“Why to Code!”
Growing up in a country like India, which has become a hot bed for software engineers in the past decade. And on the top of that, if you find yourself living in one of the IT hubs of the country, there will to be code everywhere!
So, what is the motivation to get up, go to office and code!!
There is no true answer here and I am not looking for one as it is a “to each their own scenario”.
 It could be just another type of work to pay the bills or motivation to find solutions that can help in building a more connected world, there can be a myriad of reasons and I suppose if I go out and meet more people there is no dearth of enthusiasm.  
My motivation is a bit simpler, learning to code and actually getting my hands dirty has made realize one thing, coding is fun! It’s about getting that sense of accomplishment that in this digitized world, you can see through the eyes of code!
I remember while building this website, one day while coming home I saw a bunch of clouds and the first thing that popped into my head was is there a way to design clouds with this precision. After searching for a while on the internet I came across a bunch of ways to do it and within a couple of hours my digitized cloud was ready! Those were the early and my God, I was elated!
Fast forwarding to now, there have been loads of such moments and I know my inspiration to code and deciding on the path my career should go, lies in the pure joy of visualizing a scenario or object and digitizing it.
Please allow me to describe this transition in the corniest way: what started as a way of coding to live and has quietly and remarkably turned into living to code!!
',5) 

insert into Articles values( DEFAULT, 'I wanted to start this blog with a very fundamental question that I have been asking myself for quite some time
“Why to Code!"','Why to code 4', 'I wanted to start this blog with a very fundamental question that I have been asking myself for quite some time
“Why to Code!”
Growing up in a country like India, which has become a hot bed for software engineers in the past decade. And on the top of that, if you find yourself living in one of the IT hubs of the country, there will to be code everywhere!
So, what is the motivation to get up, go to office and code!!
There is no true answer here and I am not looking for one as it is a “to each their own scenario”.
 It could be just another type of work to pay the bills or motivation to find solutions that can help in building a more connected world, there can be a myriad of reasons and I suppose if I go out and meet more people there is no dearth of enthusiasm.  
My motivation is a bit simpler, learning to code and actually getting my hands dirty has made realize one thing, coding is fun! It’s about getting that sense of accomplishment that in this digitized world, you can see through the eyes of code!
I remember while building this website, one day while coming home I saw a bunch of clouds and the first thing that popped into my head was is there a way to design clouds with this precision. After searching for a while on the internet I came across a bunch of ways to do it and within a couple of hours my digitized cloud was ready! Those were the early and my God, I was elated!
Fast forwarding to now, there have been loads of such moments and I know my inspiration to code and deciding on the path my career should go, lies in the pure joy of visualizing a scenario or object and digitizing it.
Please allow me to describe this transition in the corniest way: what started as a way of coding to live and has quietly and remarkably turned into living to code!!
',5) 

insert into Articles values( DEFAULT, 'I wanted to start this blog with a very fundamental question that I have been asking myself for quite some time
“Why to Code!"','Why to code 5', 'I wanted to start this blog with a very fundamental question that I have been asking myself for quite some time
“Why to Code!”
Growing up in a country like India, which has become a hot bed for software engineers in the past decade. And on the top of that, if you find yourself living in one of the IT hubs of the country, there will to be code everywhere!
So, what is the motivation to get up, go to office and code!!
There is no true answer here and I am not looking for one as it is a “to each their own scenario”.
 It could be just another type of work to pay the bills or motivation to find solutions that can help in building a more connected world, there can be a myriad of reasons and I suppose if I go out and meet more people there is no dearth of enthusiasm.  
My motivation is a bit simpler, learning to code and actually getting my hands dirty has made realize one thing, coding is fun! It’s about getting that sense of accomplishment that in this digitized world, you can see through the eyes of code!
I remember while building this website, one day while coming home I saw a bunch of clouds and the first thing that popped into my head was is there a way to design clouds with this precision. After searching for a while on the internet I came across a bunch of ways to do it and within a couple of hours my digitized cloud was ready! Those were the early and my God, I was elated!
Fast forwarding to now, there have been loads of such moments and I know my inspiration to code and deciding on the path my career should go, lies in the pure joy of visualizing a scenario or object and digitizing it.
Please allow me to describe this transition in the corniest way: what started as a way of coding to live and has quietly and remarkably turned into living to code!!
',5) 

insert into Articles values( DEFAULT, 'I wanted to start this blog with a very fundamental question that I have been asking myself for quite some time
“Why to Code!"','Why to code 8', 'I wanted to start this blog with a very fundamental question that I have been asking myself for quite some time
“Why to Code!”
Growing up in a country like India, which has become a hot bed for software engineers in the past decade. And on the top of that, if you find yourself living in one of the IT hubs of the country, there will to be code everywhere!
So, what is the motivation to get up, go to office and code!!
There is no true answer here and I am not looking for one as it is a “to each their own scenario”.
 It could be just another type of work to pay the bills or motivation to find solutions that can help in building a more connected world, there can be a myriad of reasons and I suppose if I go out and meet more people there is no dearth of enthusiasm.  
My motivation is a bit simpler, learning to code and actually getting my hands dirty has made realize one thing, coding is fun! It’s about getting that sense of accomplishment that in this digitized world, you can see through the eyes of code!
I remember while building this website, one day while coming home I saw a bunch of clouds and the first thing that popped into my head was is there a way to design clouds with this precision. After searching for a while on the internet I came across a bunch of ways to do it and within a couple of hours my digitized cloud was ready! Those were the early and my God, I was elated!
Fast forwarding to now, there have been loads of such moments and I know my inspiration to code and deciding on the path my career should go, lies in the pure joy of visualizing a scenario or object and digitizing it.
Please allow me to describe this transition in the corniest way: what started as a way of coding to live and has quietly and remarkably turned into living to code!!
',5) 

select * from Articles

drop table Articles
/*---------------------------------------------------------------------ARTICLES PROC----------------------------------------------------------------------------------*/
/*Insert Articles*/
create proc [dbo].[InsertArticles]
@Description nvarchar(1000),
@Title nvarchar(200),
@Body nvarchar(max)
as
begin
insert into Articles values(DEFAULT,@Description,@Title,@Body,0)
end
/*--------------------------------------*/
/*Get Articles Summary*/
create proc [dbo].[GetArticleHeader]
as
begin
select Id, Title from Articles
end
/*--------------------------------------*/
/*Update Articles*/
create proc [dbo].[UpdateArticles]
@Id int,
@Date nvarchar(12),
@Description nvarchar(1000),
@Title nvarchar(200),
@Body nvarchar(max),
@Likes int
as
begin
update Articles set DatePosted=@Date,Description = @Description, Title = @Title, Body = @Body,Likes = @Likes where Id=@Id
end
/*--------------------------------------*/
/*Get Article based on its title*/
create proc [dbo].[GetArticle]
 @GetArticleTitle varchar(200)
 as
begin 
select Id,Title,DatePosted,Body from Articles where Title = @GetArticleTitle;
 end
/*--------------------------------------*/
/*Navigate between Articles*/
create proc [dbo].[NavigateArticles]
 @GetArticleId int
 as
begin 
SELECT Title FROM Articles WHERE id = (SELECT MAX(id) FROM Articles WHERE id < @GetArticleId)
UNION
SELECT Title FROM Articles WHERE id = (SELECT MIN(id) FROM Articles WHERE id > @GetArticleId)
 end

 exec NavigateArticles 18

/*--------------------------------------*/
/*Get top Articles*/
create proc [dbo].[GetTopArticles]
 as
begin 
select top 6 Id,DatePosted,Description,Title, Likes from Articles order by Id desc 
 end
/*--------------------------------------*/
 create proc [dbo].[GetAllArticlesExceptTop6]
 as
begin 
select * from Articles EXCEPT select * from (select top 6 * from Articles order by Id desc) T order by Id  desc
 end
/*--------------------------------------*/
 ---------------------------------------------------GET CURRENT,PREVIOUS and NEXT Article--------------------------------------
--SELECT * FROM Articles WHERE id = 5
--UNION
----Select the first item less than Id
--SELECT * FROM Articles WHERE id = (SELECT MAX(id) FROM Articles WHERE id < 6)
--UNION
----select the first item greater than Id
--SELECT * FROM Articles WHERE id = (SELECT MIN(id) FROM Articles WHERE id > 6)
-----------------------------------------------------------------------------------------------------------------------------
/*=============================================================================================================================================================================*/

/*---------------------------------------------------------------------LOGIN-----------------------------------------------------------------------------------------------*/
create TABLE Login(
                   Id nvarchar(100) PRIMARY KEY, 
                   Password nvarchar(200) NOT NULL,
				   PasswordSalt nvarchar(200) NOT NULL)

/*---------------------------------------------------------------------LOGIN TABLE----------------------------------------------------------------------------------*/
insert into Login values('webuild@flashspark.in','jjj6lrSb6iehzoZrdVyYk2ljPWEj7sA3wtDJRTgwdqTcA14De8rYucpG1oqSatkmGpWgiUSCSxzrTcqWz58z7w==',
                         '100000.pYfIrp/ZbQ9pN/ocXzHWdb8GxKNs4c1RwuAFOH2fgSj/Mw==')
select * from Login

/*---------------------------------------------------------------------LOGIN PROC----------------------------------------------------------------------------------*/
exec UpdatePassword 'webuild@flashspark.in','jjj6lrSb6iehzoZrdVyYk2ljPWEj7sA3wtDJRTgwdqTcA14De8rYucpG1oqSatkmGpWgiUSCSxzrTcqWz58z7w==','100000.pYfIrp/ZbQ9pN/ocXzHWdb8GxKNs4c1RwuAFOH2fgSj/Mw=='
/*Update Password*/
create proc [dbo].[UpdatePassword]
@Id nvarchar(100),
@Password nvarchar(200),
@PasswordSalt nvarchar(200)
as
begin
update Login set Password=@Password,PasswordSalt = @PasswordSalt where Id=@Id;
end

/*=============================================================================================================================================================================*/

/*---------------------------------------------------------------------UPDATES-----------------------------------------------------------------------------------------------*/
CREATE TABLE Updates(Id INT IDENTITY(100,1) PRIMARY KEY ,
DatePosted NVARCHAR(50) DEFAULT CAST(getdate() as varchar(12)),
Description nvarchar(2000),Year nvarchar(10),count int);

drop table Updates
/*---------------------------------------------------------------------UPDATES TABLE----------------------------------------------------------------------------------*/
insert into Updates values(DEFAULT,'Reviving my old web magazine www.visivoline.com in a new package with the
 technology web loves! AngularJS','2014',1)
insert into Updates values(DEFAULT,'Working with Kamal Pandey on a low cost e-shopping system. A web app which can manipulate tons of product data with ease','2014',2)
insert into Updates values(DEFAULT,'Excited to Work on mobile platfroms','2014',3)
insert into Updates values(DEFAULT,'Reviving my old web magazine www.visivoline.com in a new package with the
 technology web loves! AngularJS','2014',4)
insert into Updates values(DEFAULT,'Designed vishaltraders','2013',1)

select * from Updates

/*---------------------------------------------------------------------UPDATES PROC----------------------------------------------------------------------------------*/
/*ADD A NEW UPDATE*/
create proc [dbo].[InsertUpdates]
@Description nvarchar(2000),
@Year nvarchar(10),
@count int
as
begin
insert into Updates values(DEFAULT,@Description,@Year,@count)
end

/*VIEW ALL UPDATES*/
create proc [dbo].[ViewAllUpdates]
as
begin
select * from Updates order by Year desc;
end

/*Update updates!*/
create proc [dbo].[Updateupdates]
@Id int,
@Description nvarchar(2000),
@Date nvarchar(12),
@Year nvarchar(10)
as
begin
update Updates set DatePosted=@Date,Description = @Description, Year=@Year where Id=@Id
end

/*=============================================================================================================================================================================*/
/*---------------------------------------------------------------------WORK-----------------------------------------------------------------------------------------------*/
CREATE TABLE Work(Id INT IDENTITY(500,1) PRIMARY KEY ,
DatePosted NVARCHAR(50) DEFAULT CAST(getdate() as varchar(12)),
Title nvarchar(100),
Description nvarchar(500),
ImgURL nvarchar(200),
URL nvarchar(200),
Year nvarchar(10),
count int);

drop table Work
/*---------------------------------------------------------------------WORK TABLE----------------------------------------------------------------------------------*/
insert into Work values(DEFAULT,'Vishal Traders','a real estate listing site','/Content/self.png','/Content/self.png','2013',1);
insert into Work values(DEFAULT,'Humming Nest','a real estate listing site','/Content/self.png','/Content/self.png','2014',1);

/*---------------------------------------------------------------------WORK PROC----------------------------------------------------------------------------------*/
/*ADD A NEW WORK*/
create proc [dbo].[InsertWork]
@Title nvarchar(100),
@Description nvarchar(500),
@ImgURL nvarchar(200),
@URL nvarchar(200),
@Year nvarchar(10)
as
begin
insert into Work values(DEFAULT,@Title,@Description,@ImgURL,@URL,@Year)
end


/*VIEW ALL WORK*/
create proc [dbo].[ViewAllWork]
as
begin
select * from Work order by Year desc;
end

/*Update work!*/
create proc [dbo].[UpdateWork]
@Id int,
@Title nvarchar(100),
@Description nvarchar(2000),
@Date nvarchar(12),
@Year nvarchar(10),
@ImgURL nvarchar(200),
@URL nvarchar(200)
as
begin
update Work set DatePosted = @Date, Description = @Description, Year = @Year,Title=@Title,ImgURl=@ImgURL,URL=@Url where Id=@Id
end
/*=============================================================================================================================================================================*/

/*---------------------------------------------------------------------CITIES-----------------------------------------------------------------------------------------------*/
CREATE TABLE Cities(Id INT IDENTITY(200,1) PRIMARY KEY ,
DatePosted NVARCHAR(50) DEFAULT CAST(getdate() as varchar(12)),
CityName nvarchar(200),Coordinates nvarchar(500), Year nvarchar(10));

/*---------------------------------------------------------------------CITIES TABLE----------------------------------------------------------------------------------*/
insert into Cities values(DEFAULT,'Bangalore,India','[12.9259, 77.6229]','2014')
insert into Cities values(DEFAULT,'Hyderabad,India','[17.4372, 78.3444]','2013')

/*---------------------------------------------------------------------CITIES PROC----------------------------------------------------------------------------------*/
/*ADD A NEW CITY*/
create proc [dbo].[InsertCity]
@CityName nvarchar(200),
@Coordinates nvarchar(500),
@Year nvarchar(10)
as
begin
insert into Cities values(DEFAULT,@CityName,@Coordinates,@Year)
end


/*VIEW ALL CITIES*/
create proc [dbo].[ViewAllCities]
as
begin
select * from Cities;
end
/*VIEW CURRENT CITY*/
create proc [dbo].[ViewCurrentCity]
as
begin
select top 1 * from Cities;
end
/*=============================================================================================================================================================================*/
/*---------------------------------------------------------------------FAQ-----------------------------------------------------------------------------------------------*/
CREATE TABLE Faq(Id INT IDENTITY(800,1) PRIMARY KEY ,
Question nvarchar(500),Answer nvarchar(max));
/*---------------------------------------------------------------------Faq TABLE----------------------------------------------------------------------------------*/
insert into Faq values('Let’s begin by asking, who are you and what you do?','I am a web enthusiast and in love with the possibilities that web apps have provided us in the recent times!
                My first interaction with the web was during my school time at Delhi Public School Ghaziabad and it continues till date.
                I hold an engineering degree in Electronics and Communication from Amity University and currently I am part of Wipro Technologies,
                Hyderabad where my role is of a Test Engineer and we work with Microsoft to help build better and bug free products <i class="fa fa-smile-o"></i>')

insert into Faq values('What does an average day hold for you?','I am a web enthusiast and in love with the possibilities that web apps have provided us in the recent times!')

insert into Faq values('Any specific reason for making this website?','Internet has always been a very fascinating topic for me and I wanted to have some space that belongs to me under this sun!
                This is an attempt to jump start the process. Also working on projects
                like these helps you understand a lot of concepts in a much better way and I can very delightfully say that after the
                completion of flashspark.in, I am a more learned man!')

insert into Faq values('You say, you like the potential of web. What about web attracts you?','The evolution of web in the last decade (the approximate amount of the time, I have been its user!)
                has been almost exmplerary. It has truly shrunk the boundaries in every conceivable way.
                We have already began our journey into the new era where virtual world is not confined to a handful of devices!')

insert into Faq values('Tell us about the tools and technologies you are comfortable with?','I learnt a good deal about Oracle and Visual Basic during my school time.
                By the time I joined my college, I was very much interested in learning semiconductor devices
                and focussed on the same but kept my interest for web going, by learning wordpress and drupal.
                Now I work with ASP.NET, MVC, SQL Server,HTML5, JQuery, CSS 3, Angular JS and SVG.')

insert into Faq values('Why is there no copyright notice on this website?','Aha! Its like the 1st law of thermodynamics!!<em> Knowledge cannot be created or destroyed, it just changes from brain to another! </em>
                Whatever I have used in this website or the ideas I have presented have been polished using the internet only,
                so everything is open for redistribution! All I ask, is that if there is something interesting, please contact me as I might be able to contribute more!')

insert into Faq values('Finally, who came up with this douchy idea of interviewing yourself!','Hey! Well, after completing this section, it does looks a bit pompous! I guess, one of the perks of making your own webpage :P.')
            
/*---------------------------------------------------------------------Faq PROC----------------------------------------------------------------------------------*/
/*ADD A Question*/
create proc [dbo].[InsertQuestion]
@Question nvarchar(500),
@Answer nvarchar(max)
as
begin
insert into Faq values(@Question,@Answer)
end
/*VIEW ALL Faq*/
create proc [dbo].[ViewAllFaq]
as
begin
select * from Faq;
end

drop proc [ViewAllFaq]
/*Update FAQ!*/
create proc [dbo].[UpdateFaq]
@Id int,
@Question nvarchar(500),
@Answer nvarchar(max)
as
begin
update Faq set Question = @Question, Answer = @Answer where Id=@Id
end
/*=============================================================================================================================================================================*/
--/*---------------------------------------------------------------------About-----------------------------------------------------------------------------------------------*/
--CREATE TABLE About(Id INT IDENTITY(900,1) PRIMARY KEY ,
--Aboutme nvarchar(max),ProfilePicture nvarchar(100));

--drop table about
--/*---------------------------------------------------------------------About TABLE----------------------------------------------------------------------------------*/
--insert into About values('','')
--/*---------------------------------------------------------------------About PROC----------------------------------------------------------------------------------*/
--/*Update About me*/
--create proc [dbo].[UpdateAboutMe]
--@Id int,
--@Aboutme nvarchar(max),
--@ProfilePicture nvarchar(100)
--as
--begin
--update About set Aboutme = @Aboutme where Id=@Id
--end

--drop proc [UpdateAboutMe]

--/*VIEW ALL Aboutme*/
--create proc [dbo].[ViewAllAbout]
--as
--begin
--select * from About;
--end

--drop proc [ViewAllAbout]


/*=============================================================================================================================================================================*/
/*-----------------------------------------------------------------------------MASTER PROCEDURE--------------------------------------------------------------------------------*/
create proc [dbo].[Aboutme]
as
BEGIN
SELECT u.Year,u.Description as Updates ,w.Description Work,w.ImgURL,w.URL,w.Title
FROM (select distinct * from work) as w RIGHT OUTER JOIN updates u
   ON u.Year = w.Year AND u.count = w.count  ORDER BY u.Year desc
END

drop proc [Aboutme]