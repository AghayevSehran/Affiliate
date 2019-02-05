using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Megma.Partner.MobileApp.Model
{
    public class PlayerLoginHistory
    {
        public long Id { get; set; }
        public int PlayerId { get; set; }
        public DateTime SessionStart { get; set; }
        public DateTime? SessionEnd { get; set; }
        public string PlayerIpAddress { get; set; }
        public string PlayerCookieId { get; set; }
        public string OsFamily { get; set; }
        public string DeviceFamily { get; set; }
        public string BrowserFamily { get; set; }
        public bool IsActive { get; set; }
        public int Total { get; set; }
    }
}
