using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Megma.Partner.MobileApp.Model
{
    public class PartnerBetHoldReportResponse
    {
        public int? Id { get; set; }
        public int? Parent { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public bool? Active { get; set; }
        public decimal? Credit { get; set; }
        public decimal? Balance { get; set; }
        public decimal? Stake { get; set; }
        public decimal? Payout { get; set; }
        public decimal Hold { get; set; }
        public decimal OpenBet { get; set; }
        public int? TicketCount { get; set; }
        public int? Level { get; set; }

        public List<PartnerBetHoldReportResponse> children { get; set; }

    }
}
