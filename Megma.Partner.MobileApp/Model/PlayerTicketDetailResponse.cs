using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Megma.Partner.MobileApp.Model
{
    public class PlayerTicketDetailResponse
    {
        public long TicketId { get; set; }
        public string Username { get; set; }
        public string Partner { get; set; }
        public decimal Stake { get; set; }
        public DateTime TicketDate { get; set; }
        public decimal StakePerBet { get; set; }
        public string Currency { get; set; }
        public double MaxOdds { get; set; }
        public decimal? Payout { get; set; }
        public bool IsSystem { get; set; }
        public string System { get; set; }
        public int BetCount { get; set; }
        public short TicketCount { get; set; }
        public string CountryName { get; set; }
        public string PlayerIp { get; set; }
        public DateTime? EvaluationDate { get; set; }
        public short Hstatus { get; set; }
        public string HeaderStatus { get; set; }
        public DateTime MatchDate { get; set; }
        public long MatchId { get; set; }
        public long BetradarId { get; set; }
        public string Tournament { get; set; }
        public string Teams { get; set; }
        public string OddsType { get; set; }
        public string Outcome { get; set; }
        public bool Live { get; set; }
        public bool Banko { get; set; }
        public double OddValue { get; set; }
        public short DStatus { get; set; }
        public string DetailStatus { get; set; }
    }
}
