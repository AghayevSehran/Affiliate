using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Megma.Partner.MobileApp.Model
{
    public class PartnerGeneralReportResponse
    {
        public decimal TotalIn { get; set; }
        public decimal TotalOut { get; set; }
        public decimal Total { get; set; }
        public string Currency { get; set; }
    }
}
