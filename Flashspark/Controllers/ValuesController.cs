using System;
using System.Collections.Generic;
using System.ComponentModel;
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
        public IEnumerable<GetArticle_Result> GetArticle(string param_articletitle)
        {
            using (var pe = new ProfileEntities())
            {
                var article = pe.GetArticle(param_articletitle).ToList();
                return article;
            }
           
        }

        [HttpGet]
        public IEnumerable<GetAllArticlesExceptTop5_Result> GetRestoftheArticles()
        {
            using (var pe = new ProfileEntities())
            {
                var article = pe.GetAllArticlesExceptTop5().ToList();
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

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

    }
}