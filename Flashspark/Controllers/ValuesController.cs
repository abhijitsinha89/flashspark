using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data.Objects;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.UI.WebControls;
using DB;

namespace Flashspark.Controllers
{
    public class ValuesController : ApiController
    {
        [HttpGet]
        public IEnumerable<DB.GetTopArticles_Result> GetTopArticles()
        {
            using (var pe = new ProfileEntities())
            {
                var articles = pe.GetTopArticles().ToList();
                return articles;
            }
            
        }

        [HttpGet]
        public IEnumerable<GetArticle_Result> GetArticle(string paramArticletitle)
        {
            using (var pe = new ProfileEntities())
            {
                var article = pe.GetArticle(paramArticletitle).ToList();
                return article;
            }
           
        }

        [HttpGet]
        public IEnumerable<GetAllArticlesExceptTop6_Result> GetRestoftheArticles()
        {
            using (var pe = new ProfileEntities())
            {
                var article = pe.GetAllArticlesExceptTop6().ToList();
                return article;
            }

        }

        [HttpGet]
        public IEnumerable<string> GetNavigationArticles(int articleId)
        {
            using (var pe = new ProfileEntities())
            {
                var article = pe.NavigateArticles(articleId).ToList();
                return article;
            }

        }

        [HttpGet]
        public IEnumerable<Aboutme_Result> AboutMe()
        {
            using (var pe = new ProfileEntities())
            {
                var about = pe.Aboutme().ToList();
                return about;
            }

        }

        [HttpGet]
        public IEnumerable<ViewCurrentCity_Result> GetCurrentCity()
        {
            using (var pe = new ProfileEntities())
            {
                var city = pe.ViewCurrentCity().ToList();
                return city;
            }

        }

        [HttpGet]
        public IEnumerable<ViewAllFaq_Result> GetAllFaq()
        {
            using (var pe = new ProfileEntities())
            {
                var faq = pe.ViewAllFaq().ToList();
                return faq;
            }

        }

        [HttpGet]
        public int GetAllArticleCount()
        {
            using (var pe = new ProfileEntities())
            {
               int count = pe.GetAllCountArticle().FirstOrDefault() ?? -1 ;
                return count;
            }

        }

    }

}