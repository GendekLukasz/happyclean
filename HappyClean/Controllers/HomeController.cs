using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HappyClean.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult DopierzemyTo()
        {
            return View();
        }
        public ActionResult kontakt()
        {
            return View();
        }
        public ActionResult cennik()
        {
            string userAgent = Request.UserAgent;
            if (userAgent.Contains("BlackBerry")
              || (userAgent.Contains("iPhone") || (userAgent.Contains("Android"))))
            {
                return View("cennikmobile");

            }
            else
            {
                return View("cennikmobile");
                //return View("cennik");
            }


        }
        public ActionResult polimeryzacja()
        {
            return View();
        }
        public ActionResult wykladziny()
        {
            return View();
        }
        public ActionResult kompleksowe()
        {
            return View();
        }
        public ActionResult tapicerki()
        {
            return View();
        }
    }
}