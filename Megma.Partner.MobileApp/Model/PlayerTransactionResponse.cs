using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Megma.Partner.MobileApp.Model
{
    public class PlayerTransactionResponse
    {
        public long Id { get; set; }
        public DateTime TransactionDate { get; set; }
        public string TransactionType { get; set; }
        public string OperationType { get; set; }
        public string Currency { get; set; }
        public decimal Amount { get; set; }
        public decimal LastBalance { get; set; }
        public decimal Balance { get; set; }
        public int? OperationsId { get; set; }
        public int Total { get; set; }
    }
}
