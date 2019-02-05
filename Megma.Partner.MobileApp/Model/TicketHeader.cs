using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Megma.Partner.MobileApp.Model
{
    public class TicketHeader
    {
        public TicketHeader()
        {

        }

        public TicketHeader(PlayerTicketDetailResponse d, IEnumerable<PlayerTicketDetailResponse> data)
        {
            this.TicketId = d.TicketId;
            this.TicketDate = d.TicketDate;
            this.Player = d.Username;
            this.Partner = d.Partner;
            this.Stake = d.Stake;
            this.StakePerbet = d.StakePerBet;
            this.Status = d.HeaderStatus;
            this.Currency = d.Currency;
            this.MaxOdds = d.MaxOdds;
            this.Payout = d.Payout;
            this.IsSystem = d.IsSystem;
            this.BetCount = d.BetCount;
            this.System = d.System;
            this.TicketCount = d.TicketCount;
            this.CountryName = d.CountryName;
            this.PlayerIp = d.PlayerIp;
            this.EvaluationDate = d.EvaluationDate;
            this.Details = new List<TicketDetail>();
            foreach (var da in data)
            {
                this.Details.Add(new TicketDetail(da));
            }

        }

        public long TicketId { get; set; }
        public DateTime TicketDate { get; set; }
        public string Player { get; set; }
        public string Partner { get; set; }
        public decimal Stake { get; set; }
        public decimal StakePerbet { get; set; }
        public string Status { get; set; }
        public string Currency { get; set; }
        public double MaxOdds { get; set; }
        public decimal? Payout { get; set; }
        public int BetCount { get; set; }
        public bool IsSystem { get; set; }
        public string System { get; set; }
        public int TicketCount { get; set; }
        public string CountryName { get; set; }
        public string PlayerIp { get; set; }
        public DateTime? EvaluationDate { get; set; }

        public List<TicketDetail> Details { get; set; }

    }
}