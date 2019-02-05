using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Megma.Partner.MobileApp.Model
{
    public class JsonModel<T>
    {

        public JsonModel()
        {

        }

        public JsonModel(JsonModelStatus status, T data)
        {
            this.Status = status;
            this.Data = data;
        }
        public JsonModel(JsonModelStatus status, string message)
        {
            this.Status = status;
            this.Message = message;
        }




        public JsonModelStatus Status { get; set; }
        public T Data { get; set; }
        public string Message { get; set; }

    }
}
