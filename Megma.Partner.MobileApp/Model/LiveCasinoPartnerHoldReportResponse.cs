namespace Megma.Partner.MobileApp.Model{
    public class LiveCasinoPartnerHoldReportResponse{
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
    }
}