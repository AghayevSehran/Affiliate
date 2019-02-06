using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Megma.Partner.MobileApp.Model
{
    public class PlayerTotalHoldReports
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public decimal Tombala { get; set; }
        public decimal Casino { get; set; }
        public decimal Livecasino { get; set; }
        public decimal Bet { get; set; }
        public decimal Total { get; set; }
    }
}
