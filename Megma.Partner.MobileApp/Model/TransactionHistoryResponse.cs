using System;

namespace Megma.Partner.MobileApp.Model
{
  public class TransactionHistoryResponse
  {
    public int Id { get; set; }
    public int RefId { get; set; }
    public DateTime TransactionDate { get; set; }
    public string TransactionType { get; set; }
    public int PartnerId { get; set; }
    public string Currency { get; set; }
    public decimal Amount { get; set; }
    public decimal LastBalance { get; set; }
    public decimal Balance { get; set; }
    public string Direction { get; set; }
    public int? Total { get; set; }
  }
}
