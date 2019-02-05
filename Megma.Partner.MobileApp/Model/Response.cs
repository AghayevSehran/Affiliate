using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Megma.Partner.MobileApp.Model
{
    public class Response<T>
    {
        public T Data { get; set; }
        public ResponseStatus Status { get; set; }
        public string ErrorMessage { get; set; }
    }
}
