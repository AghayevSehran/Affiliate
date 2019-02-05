using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Megma.Partner.MobileApp.Model
{
    public class PlayerTicketListResponse
    {
        public long Id { get; set; }
        public DateTime TicketDate { get; set; }
        public int PlayerId { get; set; }
        public string Username { get; set; }
        public decimal Stake { get; set; }
        public string Currency { get; set; }
        public double MaxOdds { get; set; }
        public bool IsLive { get; set; }
        public bool IsSystem { get; set; }
        public short BetCount { get; set; }
        public decimal? Payout { get; set; }
        public short Status { get; set; }
        public string StatusName { get; set; }
        public int Total { get; set; }
    }
}
