namespace Megma.Partner.MobileApp.Model{
    public class LiveCasinoPlayerHoldReportResponse{
        public int Id { get; set; }
        public string Username { get; set; }
        public decimal Balance { get; set; }
        public decimal Turnover { get; set; }
        public decimal Payout { get; set; }
        public decimal Hold { get; set; }
    }
}