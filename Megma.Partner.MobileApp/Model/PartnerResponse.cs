using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Megma.Partner.MobileApp.Model
{
    public class PartnerResponse
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool Active { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Lang { get; set; }
        public decimal Credit { get; set; }
        public string Currency { get; set; }
        public string LastLogin { get; set; }
        public string LastLoginIp { get; set; }
        public bool CanCreatePartner { get; set; }
    }
}
