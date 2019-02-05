using System;
using System.Threading.Tasks;
using Megma.Partner.MobileApp.Extentions;
using Megma.Partner.MobileApp.Model;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Megma.Partner.MobileApp.Filters
{
    public class SessionFilterAttribute : ActionFilterAttribute
    {
        public override Task OnResultExecutionAsync(ResultExecutingContext context, ResultExecutionDelegate next)
        {
            var sessionData = context.HttpContext.Session.GetPartnerSession();
            if (!sessionData.IsNull()) return base.OnResultExecutionAsync(context, next);
            throw new Exception("Unauthorized Exception");
            
        }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            var sessionData = context.HttpContext.Session.GetPartnerSession();
            if (sessionData.IsNull()) { throw new Exception("Unauthorized request");}
            else { base.OnActionExecuting(context); }

        }
    
    }


  public class CustomExceptionFilterAttribute : ExceptionFilterAttribute
  {
    
    public override void OnException(ExceptionContext context)
    {
      var result = new JsonResult(new JsonModel<string>(JsonModelStatus.Error, context.Exception.Message));
      context.Result = result;
    }
  }
}
