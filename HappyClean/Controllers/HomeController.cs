using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HappyClean.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult main()
        {
            string userAgent = Request.UserAgent;
            if (userAgent.Contains("BlackBerry")
              || (userAgent.Contains("iPhone") || (userAgent.Contains("Android"))))
            {
                return View("mainmobile");

            }
            else
            {
                return View("mainmobile");
                //return View("main");
            }
        }
        public ActionResult kontakt()
        {
            string userAgent = Request.UserAgent;
            if (userAgent.Contains("BlackBerry")
              || (userAgent.Contains("iPhone") || (userAgent.Contains("Android"))))
            {
                return View("kontaktmobile");

            }
            else
            {
                return View("kontaktmobile");
                //return View("kontakt");
            }
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
            string userAgent = Request.UserAgent;
            if (userAgent.Contains("BlackBerry")
              || (userAgent.Contains("iPhone") || (userAgent.Contains("Android"))))
            {
                return View("polimeryzacjamobile");

            }
            else
            {
                //return View("cennikmobile");
                return View("polimeryzacja");
            }
        }
        public ActionResult wykladziny()
        {
            string userAgent = Request.UserAgent;
            if (userAgent.Contains("BlackBerry")
              || (userAgent.Contains("iPhone") || (userAgent.Contains("Android"))))
            {
                return View("wykladzinymobile");

            }
            else
            {
                return View("wykladzinymobile");
                //return View("wykladziny");
            }
        }
        public ActionResult kompleksowe()
        {
            string userAgent = Request.UserAgent;
            if (userAgent.Contains("BlackBerry")
              || (userAgent.Contains("iPhone") || (userAgent.Contains("Android"))))
            {
                return View("kompleksowemobile");

            }
            else
            {
                //return View("cennikmobile");
                return View("kompleksowe");
            }
        }
        public ActionResult tapicerki()
        {
            string userAgent = Request.UserAgent;
            if (userAgent.Contains("BlackBerry")
              || (userAgent.Contains("iPhone") || (userAgent.Contains("Android"))))
            {
                return View("tapicerkimobile");

            }
            else
            {
                //return View("cennikmobile");
                return View("tapicerki");
            }
        }
    }
}