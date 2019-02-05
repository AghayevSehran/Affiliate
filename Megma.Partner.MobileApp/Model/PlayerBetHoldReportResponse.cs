using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Megma.Partner.MobileApp.Model
{
    public class PlayerBetHoldReportResponse
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public decimal Balance { get; set; }
        public int TicketCount { get; set; }
        public decimal Stake { get; set; }
        public decimal Payout { get; set; }
        public decimal Hold { get; set; }
        public decimal Fee { get; set; }
        public int OpenTickets { get; set; }
        public decimal TotalDeposit { get; set; }
        public decimal TotalWitdhraw { get; set; }
    }
}
