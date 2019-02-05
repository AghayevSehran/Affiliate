using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;

namespace Megma.Partner.MobileApp.Model{
    [DataContract]
    public class PartnerLiveCasinoHoldReportModel
    {
        public PartnerLiveCasinoHoldReportModel()
        {
            this.Children = new List<PartnerLiveCasinoHoldReportModel>();
        }

        public PartnerLiveCasinoHoldReportModel(LiveCasinoPartnerHoldReportResponse d)
        {

            this.Id = d.Id;
            this.Active = d.Active;
            this.Username = d.Username;
            this.Balance = d.Balance;
            this.Credit = d.Credit;
            this.Name = d.Name;
            this.Level = d.Level.GetValueOrDefault();
            this.ParentId = d.Parent;
            this.Turnover = d.Turnover;
            this.Payout = d.Payout;
            this.Profit = d.Profit;
            //this.IconCls = "svg_icon size_16 refresh";

        }

        [DataMember]
        public int? Id { get; set; }
        public int Level { get; set; }
        public int? ParentId { get; set; }
        [DataMember]
        public bool? Active { get; set; }
        [DataMember]
        public string Username { get; set; }
        [DataMember]
        public string Name { get; set; }
        [DataMember]
        public decimal? Balance { get; set; }
        [DataMember]
        public decimal? Credit { get; set; }

        [DataMember]
        public decimal Turnover { get; set; }
        [DataMember]
        public decimal Payout { get; set; }
        [DataMember]
        public decimal Profit { get; set; }

        [DataMember(Name = "leaf")]
        public bool? Leaf => !this.Children.Any();
        [DataMember(Name = "children")]
        public List<PartnerLiveCasinoHoldReportModel> Children { get; set; }
        [DataMember(Name = "expanded")]
        public bool? Expanded { get; set; }
        [DataMember(Name = "iconCls")]
        public string IconCls { get; set; }



    }

    [DataContract]
    public class PartnerTotalReportModel
    {
        public PartnerTotalReportModel()
        {
            this.Children = new List<PartnerTotalReportModel>();
        }

        public PartnerTotalReportModel(PartnerTotalHoldReportResponse d)
        {

            this.Id = d.Id;
            this.Username = d.Username;
            this.Bet = d.Bet;
            this.LiveCasino = d.LiveCasino;
            this.Name = d.Name;
            this.Level = d.Level;
            this.ParentId = d.Parent;
            this.Casino = d.Casino;
            this.Tombala = d.Tombala;
            this.Total = d.Total;
            this.Fee = d.Fee;
            //this.IconCls = "svg_icon size_16 refresh";

        }

        [DataMember]
        public int? Id { get; set; }
        public int Level { get; set; }
        public int? ParentId { get; set; }
        [DataMember]
        public bool? Active { get; set; }
        [DataMember]
        public string Username { get; set; }
        [DataMember]
        public string Name { get; set; }
        [DataMember]
        public decimal Bet { get; set; }
        [DataMember]
        public decimal Fee { get; set; }
        [DataMember]
        public decimal LiveCasino { get; set; }

        [DataMember]
        public decimal Casino { get; set; }
        [DataMember]
        public decimal Tombala { get; set; }
        [DataMember]
        public decimal Total { get; set; }

        [DataMember(Name = "leaf")]
        public bool? Leaf => !this.Children.Any();
        [DataMember(Name = "children")]
        public List<PartnerTotalReportModel> Children { get; set; }
        [DataMember(Name = "expanded")]
        public bool? Expanded { get; set; }
        [DataMember(Name = "iconCls")]
        public string IconCls { get; set; }



    }
}