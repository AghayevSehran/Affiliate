using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Megma.Partner.MobileApp.Model
{
    public class ProductPermitListResponse
    {
        public int ProductTypeId { get; set; }
        public string Name { get; set; }
        public bool Permitted { get; set; }
    }
}
