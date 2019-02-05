using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Megma.Partner.MobileApp.Model
{
    public class TombalaPlayerHoldReportResponse
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public decimal Balance { get; set; }
        public int CardCount { get; set; }
        public decimal Amount { get; set; }
    }
}
