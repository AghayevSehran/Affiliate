using System;
using System.Threading.Tasks;
using Megma.Partner.MobileApp.Extentions;
using Megma.Partner.MobileApp.Model;
using Microsoft.AspNetCore.Mvc;

namespace Megma.Partner.MobileApp.Controllers
{
    public class HomeController : Controller
    {
        private DbRepo _repo;
        public HomeController(DbRepo repo)
        {
            _repo = repo;
        }

        public IActionResult Index()
        {
            return View();
        }

        public async Task<IActionResult> Login(string username, string password, string lang)
        {
            try
            {
                var trylogin = await _repo.PartnerLogin(lang, username, password,this.Request.HttpContext.Connection.RemoteIpAddress.ToString());
                if (trylogin.Status == ResponseStatus.Error)
                {
                    throw new Exception(trylogin.ErrorMessage);
                }
                this.SetPartnerSession(trylogin.Data);
                return Json(this.CreateSuccess(trylogin.Data));

            }
            catch (Exception e)
            {
                return Json(this.CreateError<string>(e.Message));
            }
        }

    }
}