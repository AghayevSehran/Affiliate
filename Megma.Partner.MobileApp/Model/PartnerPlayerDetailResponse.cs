using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Megma.Partner.MobileApp.Model
{
    public class PartnerPlayerDetailResponse
    {
        public int Id { get; set; }
        public string Partner { get; set; }
        public string Gender { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Gsm { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Language { get; set; }
        public string CountryId { get; set; }
        public string Country { get; set; }
        public bool IsActive { get; set; }
        public DateTime BirthDate { get; set; }
        public string Currency { get; set; }
        public decimal Balance { get; set; }
    }
}
