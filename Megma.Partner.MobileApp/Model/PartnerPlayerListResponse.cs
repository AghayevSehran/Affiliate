using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Megma.Partner.MobileApp.Model
{
    public class PartnerPlayerListResponse
    {
        public int Id { get; set; }
        public string Partner { get; set; }
        public string Username { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public bool IsActive { get; set; }
        public string Currency { get; set; }
        public DateTime? LastLoginDate { get; set; }
        public decimal Balance { get; set; }
        public int Total { get; set; }
    }
}
