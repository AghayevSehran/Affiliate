using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Megma.Partner.MobileApp.Model
{
    public class PlayerCashTransactionResponse
    {
        public long Id { get; set; }
        public DateTime TransactionDate { get; set; }
        public int OperationType { get; set; }
        public string TransactionType { get; set; }
        public string OperationTypeName { get; set; }
        public decimal Amount { get; set; }

    }
}
