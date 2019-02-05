using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Megma.Partner.MobileApp.Model
{
    public class CasinoPartnerHoldReportResponse
    {
        public int Id { get; set; }
        public int Parent { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public bool Active { get; set; }
        public decimal Credit { get; set; }
        public decimal Balance { get; set; }
        public decimal Turnover { get; set; }
        public decimal Payout { get; set; }
        public decimal Profit { get; set; }
        public int? Level { get; set; }

        public List<CasinoPartnerHoldReportResponse> children { get; set; }
        
    }

    public class PlayerPermits {
        public bool? CanPlayBet {get;set;}
        public bool? CanPlayCasino {get;set;}
        public bool? CanPlayLiveCasino {get;set;}
        public bool? CanPlayTombala {get;set;}
        public bool? UseCashout {get;set;}
    } 
}
