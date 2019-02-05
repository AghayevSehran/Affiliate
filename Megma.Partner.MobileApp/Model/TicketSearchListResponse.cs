using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Megma.Partner.MobileApp.Model
{
    public class TicketSearchListResponse
    {
        public long Id { get; set; }
        public int PlayerId { get; set; }
        public string Player { get; set; }
        public string Partner { get; set; }
        public DateTime TicketDate { get; set; }
        public decimal Stake { get; set; }
        public string Currency { get; set; }
        public bool IsLive { get; set; }
        public bool IsSystem { get; set; }
        public short Status { get; set; }
        public string StatusName { get; set; }
        public decimal Payout { get; set; }
        public decimal Profit { get; set; }
        public int Count { get; set; }
        public decimal TotalStake { get; set; }
        public decimal TotalPayout { get; set; }
    }
}
