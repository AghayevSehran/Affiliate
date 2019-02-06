using System;
using System.Linq;
using System.Threading.Tasks;
using Megma.Partner.MobileApp.Extentions;
using Megma.Partner.MobileApp.Filters;
using Megma.Partner.MobileApp.Model;
using Microsoft.AspNetCore.Mvc;

namespace Megma.Partner.MobileApp.Controllers
{
    [Produces("application/json")]
    [Route("api")]
    [SessionFilter]
    public class ApiController : Controller
    {
        public ApiController(DbRepo repo)
        {
            _repo = repo;
        }

        private readonly DbRepo _repo;


        [Route("logout")]
        public IActionResult Logout()
        {
            try
            {
                this.ClearPartnerSession();
                return Ok();
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("getsession")]
        public async Task<IActionResult> GetSession()
        {
            try
            {
                await UpdateSessionBalance();
                return Ok(this.CreateSuccess(this.GetPartnerSession()));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        private async Task<bool> UpdateSessionBalance()
        {
            var session = this.GetPartnerSession();
            session.Balance = await _repo.GetBalance(session.Id);
            this.SetPartnerSession(session);
            return true;
        }
        [Route("getbalance")]
        public async Task<IActionResult> GetBalance()
        {
            try
            {
                var session = this.GetPartnerSession();
                var data = await _repo.GetBalance(session.Id);
                return Ok(this.CreateSuccess(data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("createpartner")]
        public async Task<IActionResult> CreatePartner(string name, string username, string password, decimal credit, bool cancreatepartner)
        {
            try
            {
                await this.UpdateSessionBalance();
                var session = this.GetPartnerSession();
                var data = await _repo.CreatePartner("tr", session.Id, name, username, password, username + "@pinolo.com", "TRY", "tr", credit, cancreatepartner);
                if (data.Status == ResponseStatus.Ok)
                {
                    return Ok(this.CreateSuccess(data.Data));
                }
                throw new Exception(data.ErrorMessage);
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("getpartner")]
        public async Task<IActionResult> GetPartner(int partnerId)
        {
            try
            {
                var data = await _repo.GetPartner("tr", partnerId);
                if (data.Status == ResponseStatus.Ok)
                {
                    return Ok(this.CreateSuccess(data.Data));
                }
                throw new Exception(data.ErrorMessage);
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("depositcreditpartner")]
        public async Task<IActionResult> DepositCreditPartner(int partnerId, decimal amount)
        {
            try
            {
                await this.UpdateSessionBalance();
                var data = await _repo.DepositCreditPartner("tr", partnerId, amount);
                if (data.Status == ResponseStatus.Ok)
                {
                    return Ok(this.CreateSuccess(data.Data));
                }
                throw new Exception(data.ErrorMessage);
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("withdrawcreditpartner")]
        public async Task<IActionResult> WithdrawCreditPartner(int partnerId, decimal amount)
        {
            try
            {
                await this.UpdateSessionBalance();
                var data = await _repo.WithdrawCreditPartner("tr", partnerId, amount);
                if (data.Status == ResponseStatus.Ok)
                {
                    return Ok(this.CreateSuccess(data.Data));
                }
                throw new Exception(data.ErrorMessage);
            }
            catch(Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("updatepartner")]
        public async Task<IActionResult> UpdatePartner(int id, string name, string email, bool active, decimal credit, bool cancreatepartner)
        {
            try
            {
                await this.UpdateSessionBalance();
                var data = await _repo.UpdatePartner("tr",id,name,email,active,credit, cancreatepartner);
                if (data.Status == ResponseStatus.Ok)
                {
                    return Ok(this.CreateSuccess(data.Data));
                }
                throw new Exception(data.ErrorMessage);
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }
        
        [Route("partnerlist")]
        public async Task<IActionResult> GetPartnerList()
        {
            try
            {
                var session = this.GetPartnerSession();
                var data = await _repo.PartnerList("tr", session.Id);
                if (data.Status == ResponseStatus.Ok)
                {
                    var minLevel = data.Data.Min(x => x.Level);

                    void Children(PartnerListResponse parent)
                    {
                        parent.children = data.Data.Where(childItem => childItem.Parent == parent.Id).ToList();
                        parent.children.ForEach(Children);
                    }

                    var hierarchicalItems = data.Data.Where(rootItem => rootItem.Level == minLevel).ToList();
                    hierarchicalItems.ForEach(Children);
                    return Ok(this.CreateSuccess(hierarchicalItems));
                }
                throw new Exception(data.ErrorMessage);
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("partnerplayers")]
        public async Task<IActionResult> GetPartnerPlayersList(int? playerId, string username, string name, string surname, bool? active, bool direct, int start, int limit)
        {
            try
            {
                var session = this.GetPartnerSession();
                var data = await _repo.PartnerPlayerList("tr", session.Id, playerId, username, name, surname, active, direct, start, limit);
                if (data.Status == ResponseStatus.Error)
                    throw new Exception(data.ErrorMessage);

                return Ok(this.CreateSuccess(data.Data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("getpartnerplayer")]
        public async Task<IActionResult> GetPartnerPlayerDetail(int playerId)
        {
            try
            {
                var session = this.GetPartnerSession();
                var data = await _repo.PartnerPlayerDetail("tr", session.Id, playerId);
                if (data.Status == ResponseStatus.Ok)
                {
                    return Ok(this.CreateSuccess(data.Data));
                }
                throw new Exception(data.ErrorMessage);
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("getplayertransactions")]
        public async Task<IActionResult> GetPlayerTransactionHistory(int playerId, int start, int limit)
        {
            try
            {
                var session = this.GetPartnerSession();
                var resp = await _repo.PlayerTransactionList("tr", session.Id, playerId, start, limit);
                if (resp.Status == ResponseStatus.Error)
                    throw new Exception(resp.ErrorMessage);

                return Ok(this.CreateSuccess(resp.Data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("getplayerlogins")]
        public async Task<IActionResult> GetPlayerLoginHistory(int playerId, int start, int limit)
        {
            try
            {
                var session = this.GetPartnerSession();
                var resp = await _repo.PlayerLoginHistoryList("tr", session.Id, playerId, start, limit);
                if (resp.Status == ResponseStatus.Error)
                    throw new Exception(resp.ErrorMessage);

                return Ok(this.CreateSuccess(resp.Data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("getplayertickets")]
        public async Task<IActionResult> GetPlayerTickets(int playerId, int start, int limit)
        {
            try
            {
                var sstart = 0;
                if (start > 0) { sstart = start * limit; }
                var session = this.GetPartnerSession();
                var resp = await _repo.PlayerTicketList("tr", session.Id, playerId, sstart, limit);
                if (resp.Status == ResponseStatus.Error)
                {
                    throw new Exception(resp.ErrorMessage);
                }
                return Ok(this.CreateSuccess(resp.Data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("changeplayerpassword")]
        [HttpPost]
        public async Task<IActionResult> ChangePlayerPassword(int playerId, string password)
        {
            try
            {
                var session = this.GetPartnerSession();
                var resp = await _repo.PartnerPlayerChangePassword("tr", session.Id, playerId, password);
                if (resp.Status == ResponseStatus.Error)
                    throw new Exception(resp.ErrorMessage);

                return Ok(this.CreateSuccess(resp.Data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("createpartnerplayer")]
        public async Task<IActionResult> CreatePartnerPlayer(string name, string surname, string username, string password, bool isActive, string type)
        {
            try
            {
                var c = new PartnerPlayerDetailResponse();
                c.Gender = "M";
                c.BirthDate = new DateTime(1970, 01, 01);
                c.Email = username + "@pinolo.com";
                c.Country = "TUR";
                c.Name = name;
                c.Surname = surname;
                c.Username = username;
                c.Password = password;
                c.IsActive = isActive;


                var session = this.GetPartnerSession();
                if (type == "NEW")
                {
                    var data = await _repo.CreatePlayer("tr", session.Id, c.Gender, c.Name, c.Surname, c.Username, c.Password, c.Email, c.BirthDate, c.Country);
                    if (data.Status == ResponseStatus.Ok)
                    {
                        return Ok(this.CreateSuccess(data.Data));
                    }
                    throw new Exception(data.ErrorMessage);
                }
                else
                {
                    var data = await _repo.UpdatePlayer("tr", session.Id, c.Id, c.Name, c.Surname, c.Email, c.IsActive, c.Country, c.BirthDate);
                    if (data.Status == ResponseStatus.Ok)
                    {
                        return Ok(this.CreateSuccess(data.Data));
                    }
                    throw new Exception(data.ErrorMessage);
                }
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("partnerplayerpayin")]
        public async Task<IActionResult> PlayerPayIn(int playerId, decimal amount)
        {
            try
            {
                await this.UpdateSessionBalance();
                var session = this.GetPartnerSession();
                var resp = await _repo.PlayerPayIn("tr", session.Id, playerId, amount); 
                if (resp.Status == ResponseStatus.Error)
                    throw new Exception(resp.ErrorMessage);


                return Ok(this.CreateSuccess(resp.Data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("partnerplayerpayout")]
        public async Task<IActionResult> PlayerPayOut(int playerId, decimal amount)
        {
            try
            {
                await this.UpdateSessionBalance();
                var session = this.GetPartnerSession();
                var resp = await _repo.PlayerPayOut("tr", session.Id, playerId, amount);
                if (resp.Status == ResponseStatus.Error)
                    throw new Exception(resp.ErrorMessage);


                return Ok(this.CreateSuccess(resp.Data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }
        
        [Route("loginhistory")]
        public async Task<IActionResult> GetLoginHistory(int start, int limit)
        {
            try
            {
                var session = this.GetPartnerSession();
                var resp = await _repo.LoginHistory("tr", session.Id, start, limit);
                if (resp.Status == ResponseStatus.Error)
                    throw new Exception(resp.ErrorMessage);

                return Ok(this.CreateSuccess(resp.Data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("transactionhistory")]
        public async Task<IActionResult> GetTransactionHistory(int start, int limit)
        {
            try
            {
                var session = this.GetPartnerSession();
                var resp = await _repo.TransactionHistory("tr", session.Id, start, limit);
                if (resp.Status == ResponseStatus.Error)
                    throw new Exception(resp.ErrorMessage);

                return Ok(this.CreateSuccess(resp.Data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("changemypassword")]
        [HttpPost]
        public async Task<IActionResult> ChangeMyPassword(int? partnerId, string password)
        {
            try
            {
                var session = this.GetPartnerSession();
                int pid = partnerId ?? session.Id;
                var resp = await _repo.ChangeMyPassword("tr", pid, password);
                if (resp.Status == ResponseStatus.Error)
                    throw new Exception(resp.ErrorMessage);


                return Ok(this.CreateSuccess(resp.Data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("productpermits")]
        public async Task<IActionResult> GetProductPermits(int partnerId)
        {
            try
            {
                var session = this.GetPartnerSession();
                var resp = await _repo.ProductPertmitList("tr", partnerId);
                if (resp.Status == ResponseStatus.Error)
                    throw new Exception(resp.ErrorMessage);

                return Ok(this.CreateSuccess(resp.Data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("playerproductpermits")]
        public async Task<IActionResult> GetPlayerProductPermits(int playerId)
        {
            try
            {
                var session = this.GetPartnerSession();
                var resp = await _repo.PlayerPermitsList(session.Id, playerId);
                if (resp.Status == ResponseStatus.Error)
                    throw new Exception(resp.ErrorMessage);

                return Ok(this.CreateSuccess(resp.Data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("playersetproductpermits")]
        public async Task<IActionResult> SetPlayerProductPermits(int playerId, bool canPlayTombala,
        bool canPlayCasino, bool canPlayLiveCasino, bool canPlayBet, bool useCashout)
        {
            try
            {
                var session = this.GetPartnerSession();
                var resp = await _repo.SetPlayerPermits("tr", session.Id, playerId, canPlayTombala, canPlayCasino, canPlayLiveCasino, canPlayBet, useCashout);
                if (resp.Status == ResponseStatus.Error)
                    throw new Exception(resp.ErrorMessage);
                return Ok(this.CreateSuccess(resp.Data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("updateproductpermits")]
        public async Task<IActionResult> UpdateProductPermits(int partnerId, int productTypeId, bool permitted)
        {
            try
            {
                var session = this.GetPartnerSession();
                var resp = await _repo.UpdateProductPermits("tr", session.Id, partnerId, productTypeId, permitted);
                if (resp.Status == ResponseStatus.Error)
                    throw new Exception(resp.ErrorMessage);

                return Ok(this.CreateSuccess(resp.Data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }


        [Route("ticketsearch")]
        public async Task<IActionResult> TicketSearch(long? ticketId, DateTime? startDate, DateTime? endDate, string username, decimal? minStake, decimal? maxStake, decimal? minPayout, decimal? maxPayout, bool? live, short? status, bool direct, int start, int limit)
        {
            try
            {
                var session = this.GetPartnerSession();
                var resp = await _repo.TicketSearch("tr", session.Id, ticketId, startDate, endDate, username, minStake, maxStake, minPayout, maxPayout, live, status, direct, start, limit);
                if (resp.Status == ResponseStatus.Error)
                    throw new Exception(resp.ErrorMessage);

                return Ok(this.CreateSuccess(resp.Data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("ticketdetail")]
        public async Task<IActionResult> TicketDetail(int playerId, long ticketId)
        {
            try
            {
                var session = this.GetPartnerSession();
                var resp = await _repo.PlayerTicketDetail("tr", session.Id, playerId, ticketId);
                var th = new TicketHeader(resp.Data.FirstOrDefault(), resp.Data);

                if (resp.Status == ResponseStatus.Error)
                    throw new Exception(resp.ErrorMessage);

                return Ok(this.CreateSuccess(th));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("ticketcancel")]
        public async Task<IActionResult> TicketCancel(long ticketId)
        {
            try
            {
                var session = this.GetPartnerSession();
                var data = await _repo.CancelTicket("tr", session.Id, ticketId);

                if (data.Status == ResponseStatus.Error)
                    throw new Exception(data.ErrorMessage);

                return Ok(this.CreateSuccess(data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }
        //string lang, int partnerId, DateTime startDate, DateTime endDate, bool? onlyActive
        [Route("getholdreports")]
        public async Task<IActionResult> GetHoldReports(DateTime startDate, DateTime endDate, bool? onlyActive)
        {
            try
            {
                var session = this.GetPartnerSession();
                var data = await _repo.PartnerBetHoldReport("tr", session.Id, startDate, endDate, onlyActive);
                if (data.Status == ResponseStatus.Ok)
                {
                    var minLevel = data.Data.Min(x => x.Level);

                    void Children(PartnerBetHoldReportResponse parent)
                    {
                        parent.children = data.Data.Where(childItem => childItem.Parent == parent.Id).ToList();
                        parent.children.ForEach(Children);
                    }

                    var hierarchicalItems = data.Data.Where(rootItem => rootItem.Level == minLevel).ToList();
                    hierarchicalItems.ForEach(Children);
                    return Ok(this.CreateSuccess(hierarchicalItems));
                }
                throw new Exception(data.ErrorMessage);
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("getshopholdreports")]
        public async Task<IActionResult> GetShopHoldReports(DateTime startDate, DateTime endDate, bool? onlyActive)
        {
            try
            {
                var session = this.GetPartnerSession();
                var data = await _repo.PartnerShopBetHoldReport("tr", session.Id, startDate, endDate, onlyActive);
                if (data.Status == ResponseStatus.Ok)
                {
                    var minLevel = data.Data.Min(x => x.Level);

                    void Children(PartnerBetHoldReportResponse parent)
                    {
                        parent.children = data.Data.Where(childItem => childItem.Parent == parent.Id).ToList();
                        parent.children.ForEach(Children);
                    }

                    var hierarchicalItems = data.Data.Where(rootItem => rootItem.Level == minLevel).ToList();
                    hierarchicalItems.ForEach(Children);
                    return Ok(this.CreateSuccess(hierarchicalItems));
                }
                throw new Exception(data.ErrorMessage);
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("getcasinoreports")]
        public async Task<IActionResult> GetCasinoReports(DateTime startDate, DateTime endDate, bool? onlyActive)
        {
            try
            {
                var session = this.GetPartnerSession();
                var data = await _repo.PartnerCasinoHoldReport("tr", session.Id, startDate, endDate, onlyActive);
                if (data.Status == ResponseStatus.Ok)
                {
                    var minLevel = data.Data.Min(x => x.Level);

                    void Children(CasinoPartnerHoldReportResponse
                        parent)
                    {
                        parent.children = data.Data.Where(childItem => childItem.Parent == parent.Id).ToList();
                        parent.children.ForEach(Children);
                    }

                    var hierarchicalItems = data.Data.Where(rootItem => rootItem.Level == minLevel).ToList();
                    hierarchicalItems.ForEach(Children);
                    return Ok(this.CreateSuccess(hierarchicalItems));
                }
                throw new Exception(data.ErrorMessage);
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("gettombalareports")]
        public async Task<IActionResult> GetTombalaReports(DateTime startDate, DateTime endDate, bool? onlyActive)
        {
            try
            {
                var session = this.GetPartnerSession();
                var data = await _repo.PartnerTombalaHoldReport("tr", session.Id, startDate, endDate, onlyActive);
                if (data.Status == ResponseStatus.Ok)
                {
                    var minLevel = data.Data.Min(x => x.Level);

                    void Children(PartnerTombalaHoldReportResponse parent)
                    {
                        parent.children = data.Data.Where(childItem => childItem.Parent == parent.Id).ToList();
                        parent.children.ForEach(Children);
                    }

                    var hierarchicalItems = data.Data.Where(rootItem => rootItem.Level == minLevel).ToList();
                    hierarchicalItems.ForEach(Children);
                    return Ok(this.CreateSuccess(hierarchicalItems));
                }
                throw new Exception(data.ErrorMessage);
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("getplayerbetreports")]
        public async Task<IActionResult> GetPlayerBetReports(DateTime startDate, DateTime endDate, bool? onlyActive)
        {
            try
            {
                var session = this.GetPartnerSession();
                var data = await this._repo.PlayerBetHoldReport("tr", session.Id, startDate, endDate);
                
                if (data.Status == ResponseStatus.Error)
                    throw new Exception(data.ErrorMessage);

                return Ok(this.CreateSuccess(data.Data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("getplayercasinoreports")]
        public async Task<IActionResult> GetPlayerCasinoReports(DateTime startDate, DateTime endDate, bool? onlyActive)
        {
            try
            {
                var session = this.GetPartnerSession();
                var data = await _repo.CasinoPlayerHoldReport("tr", session.Id, startDate, endDate);
                if (data.Status == ResponseStatus.Error)
                    throw new Exception(data.ErrorMessage);

                return Ok(this.CreateSuccess(data.Data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }


        [Route("getplayertombalareports")]
        public async Task<IActionResult> GetPlayerTombalaReports(DateTime startDate, DateTime endDate, bool? onlyActive)
        {
            try
            {
                var session = this.GetPartnerSession();
                var data = await _repo.TombalaPlayerHoldResponse("tr", session.Id, startDate, endDate);
                if (data.Status == ResponseStatus.Error)
                    throw new Exception(data.ErrorMessage);

                return Ok(this.CreateSuccess(data.Data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }


        [Route("getplayerholdreports")]
        public async Task<IActionResult> GetPlayerTotalHoldReports(DateTime startDate, DateTime endDate, bool? onlyActive)
        {
            try
            {
                var session = this.GetPartnerSession();
                var data = await _repo.PlayerHoldTotalResponse("tr", session.Id, startDate, endDate);
                if (data.Status == ResponseStatus.Error)
                    throw new Exception(data.ErrorMessage);

                return Ok(this.CreateSuccess(data.Data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("getplayercashtransactions")]
        public async Task<IActionResult> GetPlayerCashTransactions(DateTime startDate, DateTime endDate, int playerId)
        {
            try
            {
                var session = this.GetPartnerSession();
                var data = await _repo.PlayerCashTransactionReport("tr", playerId, startDate, endDate);
                if (data.Status == ResponseStatus.Error)
                    throw new Exception(data.ErrorMessage);

                return Ok(this.CreateSuccess(data.Data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        
        [Route("getlivecasinoreports")]
        public async Task<IActionResult> GetLiveCasinoReports(DateTime startDate, DateTime endDate, bool? onlyActive)
        {
            try
            {
                var session = this.GetPartnerSession();
                var data = await _repo.LiveCasinoPartnerHoldReport(session.Id, startDate, endDate, onlyActive);
                if (data.Status == ResponseStatus.Ok)
                {
                    var minLevel = data.Data.Min(x => x.Level);
                    var d = data.Data.Select(x => new PartnerLiveCasinoHoldReportModel(x));

                    void Children(PartnerLiveCasinoHoldReportModel parent)
                    {
                        parent.Children = d.Where(childItem => childItem.ParentId == parent.Id).ToList();
                        parent.Children.ForEach(Children);
                    }

                    var hierarchicalItems = d.Where(rootItem => rootItem.Level == minLevel).ToList();
                    hierarchicalItems.ForEach(Children);
                    return Ok(this.CreateSuccess(hierarchicalItems));
                }
                throw new Exception(data.ErrorMessage);
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }


        [Route("getplayerslivecasinoreport")]
        public async Task<IActionResult> GetPlayerLiveCasinoReports(DateTime startDate, DateTime endDate, bool? onlyActive)
        {
            try
            {
                var session = this.GetPartnerSession();
                var data = await _repo.LiveCasinoPlayerHoldReport("tr", session.Id, startDate, endDate);
                if (data.Status == ResponseStatus.Error)
                    throw new Exception(data.ErrorMessage);

                return Ok(this.CreateSuccess(data.Data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("partnershopreport")]
        public async Task<IActionResult> PartnerShopReport(DateTime startDate, DateTime endDate)
        {
            try
            {
                var session = this.GetPartnerSession();
                var data = await _repo.PartnerShopReport(session.Id, startDate, endDate);
                if(data.Status == ResponseStatus.Error)
                {
                    throw new Exception(data.ErrorMessage);
                }

                return Ok(this.CreateSuccess(data.Data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }



        [Route("gettotalreports")]
        public async Task<IActionResult> GetTotalReports(DateTime startDate, DateTime endDate, bool? onlyActive)
        {
            try
            {
                var session = this.GetPartnerSession();
                var data = await _repo.PartnerTotalHoldReportByPartner(session.Id, startDate, endDate);
                if (data.Status == ResponseStatus.Ok)
                {
                    var minLevel = data.Data.Min(x => x.Level);
                    var d = data.Data.Select(x => new PartnerTotalReportModel(x));

                    void Children(PartnerTotalReportModel parent)
                    {
                        parent.Children = d.Where(childItem => childItem.ParentId == parent.Id).ToList();
                        parent.Children.ForEach(Children);
                    }

                    var hierarchicalItems = d.Where(rootItem => rootItem.Level == minLevel).ToList();
                    hierarchicalItems.ForEach(Children);
                    return Ok(this.CreateSuccess(hierarchicalItems));
                }
                throw new Exception(data.ErrorMessage);
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }


        [Route("getplayerstotalreport")]
        public async Task<IActionResult> GetPlayerTotalCasinoReports(DateTime startDate, DateTime endDate, bool? onlyActive)
        {
            try
            {
                var session = this.GetPartnerSession();
                var data = await _repo.PlayerTotalReport(session.Id, startDate, endDate);
                if (data.Status == ResponseStatus.Error)
                    throw new Exception(data.ErrorMessage);

                return Ok(this.CreateSuccess(data.Data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }

        [Route("getpartnergeneralreport")]
        public async Task<IActionResult> GetPartnerGeneralReport(DateTime? startDate, DateTime? endDate)
        {
            try
            {
                var session = this.GetPartnerSession();
                var data = await _repo.GetPartnerGeneralReport(session.Id, startDate, endDate);
                if (data.Status == ResponseStatus.Error)
                    throw new Exception(data.ErrorMessage);

                return Ok(this.CreateSuccess(data.Data));
            }
            catch (Exception e)
            {
                return Ok(this.CreateError<string>(e.Message));
            }
        }
    }
}