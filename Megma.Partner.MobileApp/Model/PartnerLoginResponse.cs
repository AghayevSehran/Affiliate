using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;
using ZeroFormatter;

namespace Megma.Partner.MobileApp.Model
{

    [DataContract]
    [ZeroFormattable]
    public class PartnerLoginResponse
    {
        [DataMember]
        [Index(0)]
        public virtual int Id { get; set; }
        [DataMember]
        [Index(1)]
        public virtual int SiteId { get; set; }
        [DataMember]
        [Index(2)]
        public virtual string SiteName { get; set; }
        [DataMember]
        [Index(3)]
        public virtual string SiteDomain { get; set; }
        [DataMember]
        [Index(4)]
        public virtual int? Parent { get; set; }
        [DataMember]
        [Index(5)]
        public virtual bool Active { get; set; }
        [DataMember]
        [Index(6)]
        public virtual string Name { get; set; }
        [DataMember]
        [Index(7)]
        public virtual string Username { get; set; }
        [DataMember]
        [Index(8)]
        public virtual string Email { get; set; }
        [DataMember]
        [Index(9)]
        public virtual string Currency { get; set; }
        [DataMember]
        [Index(10)]
        public virtual string Language { get; set; }
        [DataMember]
        [Index(11)]
        public virtual decimal Credit { get; set; }
        [DataMember]
        [Index(12)]
        public virtual decimal Balance { get; set; }
        [DataMember]
        [Index(13)]
        public virtual DateTime? LastLogin { get; set; }
        [DataMember]
        [Index(14)]
        public virtual string LastLoginIp { get; set; }
        [DataMember]
        [Index(15)]
        public virtual bool CanCancelTicket { get; set; }
        [DataMember]
        [Index(16)]
        public virtual bool CanViewCountry { get; set; }
        [DataMember]
        [Index(17)]
        public virtual bool CanCreatePartner { get; set; }
    } // class partners.partner_login
}
