using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Megma.Partner.MobileApp.Model
{
    public class CasinoPlayerHoldReportResponse
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public decimal Balance { get; set; }
        public int SpinCount { get; set; }
        public decimal Turnover { get; set; }
        public decimal Payout { get; set; }
        public decimal Hold { get; set; }
    }
}
