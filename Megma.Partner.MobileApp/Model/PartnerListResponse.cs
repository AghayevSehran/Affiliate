using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Megma.Partner.MobileApp.Model
{
  public class PartnerListResponse
  {
    public int? Id { get; set; }
    public int? SiteId { get; set; }
    public int? Parent { get; set; }
    public bool? Active { get; set; }
    public string Name { get; set; }
    public string Username { get; set; }
    public string Email { get; set; }
    public string Currency { get; set; }
    public string Language { get; set; }
    public decimal? Credit { get; set; }
    public decimal? Balance { get; set; }
    public DateTime? LastLogin { get; set; }
    public string LastLoginIp { get; set; }
    public int? Level { get; set; }

    public List<PartnerListResponse> children { get; set; }
  }
}
