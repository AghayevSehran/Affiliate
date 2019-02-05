namespace Megma.Partner.MobileApp.Model
{
    public class PartnerTotalHoldReportResponse
    {
        public int Id {get;set;}
        public int? Parent {get;set;}
        public string Name {get;set;}
        public string Username {get;set;}
        public decimal Bet {get;set;}
        public decimal Fee { get; set; }
        public decimal LiveCasino {get;set;}
        public decimal Casino {get;set;}
        public decimal Tombala {get;set;}
        public decimal Total {get;set;}
        public int Level {get;set;}
    }
}
