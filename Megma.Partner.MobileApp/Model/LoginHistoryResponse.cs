using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Megma.Partner.MobileApp.Model
{
  public class LoginHistoryResponse
  {
    public long Id { get; set; }
    public int PartnerId { get; set; }
    public DateTime LoginDate { get; set; }
    public string Ip { get; set; }
    public string Browser { get; set; }
    public string Device { get; set; }
    public string Os { get; set; }
    public int Total { get; set; }
  }
}
