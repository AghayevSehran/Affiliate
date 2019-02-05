using System.Collections.Generic;

namespace Megma.Partner.MobileApp.Model
{
    public class PlayerTotalReportResponse
    {
        public int Id {get;set;}
        public string Username {get;set;}
        public decimal Bet {get;set;}
        public decimal Fee { get; set; }
        public decimal LiveCasino {get;set;}
        public decimal Casino {get;set;}
        public decimal Tombala {get;set;}
        public decimal Total {get;set;}
    }

    public class DBShopReportResponse
    {
        public string Username { get; set; }
        public int Type { get; set; }
        public decimal? Balance { get; set; }
        public string Currency { get; set; }
        public decimal? Amount { get; set; }
    }

    public class ShopReportResponse
    {
        public string Username { get; set; }
        public decimal? Balance { get; set; }
        public string Currency { get; set; }
        public decimal? Amount { get; set; }
    }

    public static class Extensions
    {
        public static IEnumerable<ShopReportResponse> Transform(this IEnumerable<DBShopReportResponse> a)
        {
            var response = new List<ShopReportResponse>();

            foreach (var item in a)
            {
                if(!response.Exists(c => c.Username == item.Username))
                {
                    var x = new ShopReportResponse();
                    x.Amount = item.Amount;
                    x.Balance = item.Balance;
                    x.Currency = item.Currency;
                    x.Username = item.Username;
                    response.Add(x);
                }
                else
                {
                    var index = response.FindIndex(c => c.Username == item.Username);
                    response[index].Balance += item.Balance;
                }
            }

            return response;
        }
    }
}
