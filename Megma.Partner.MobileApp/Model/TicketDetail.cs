using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Megma.Partner.MobileApp.Model
{
    public class TicketDetail
    {
        public TicketDetail()
        {

        }

        public TicketDetail(PlayerTicketDetailResponse d)
        {
            this.MatchDate = d.MatchDate;
            this.MatchId = d.MatchId;
            this.BetradarId = d.BetradarId;
            this.Tournament = d.Tournament;
            this.Teams = d.Teams;
            this.OddsType = d.OddsType;
            this.Outcome = d.Outcome;
            this.OddsValue = d.OddValue;
            this.Live = d.Live;
            this.Banko = d.Banko ? "B" : null;
            this.Status = d.DetailStatus;
            this.DStatus = d.DStatus;

        }

        public DateTime MatchDate { get; set; }
        public long MatchId { get; set; }
        public long BetradarId { get; set; }
        public string Tournament { get; set; }
        public string Teams { get; set; }
        public string OddsType { get; set; }
        public string Outcome { get; set; }
        public double OddsValue { get; set; }
        public bool Live { get; set; }
        public string Banko { get; set; }
        public int DStatus { get; set; }
        public string Status { get; set; }
    }
}
