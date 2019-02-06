using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Options;

namespace Megma.Partner.MobileApp.Model
{

    public class DbRepo
    {
        private Config _conf;
        public DbRepo(IOptions<Config> conf)
        {
            _conf = conf.Value;
        }
        public async Task<Response<string>> CreatePartner(string lang, int parentId, string name, string username, string password, string email, string currency, string language, decimal credit, bool canCreatePartner)
        {
            var response = new Response<string>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang, DbType.String);
                p.Add("@siteId", this._conf.SiteId, DbType.Int32);
                p.Add("@parent", parentId, DbType.Int32);
                p.Add("@name", name, DbType.String);
                p.Add("@username", username, DbType.String);
                p.Add("@password", password, DbType.String);
                p.Add("@email", email, DbType.String);
                p.Add("@currency", currency, DbType.String);
                p.Add("@language", language, DbType.String);
                p.Add("@credit", credit, DbType.Decimal);
                p.Add("@canCreatePartner", canCreatePartner, DbType.Boolean);
                response.Data = await this.ExecuteScalar<string>("partners.create_partner", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }

        public async Task<Response<string>> DepositCreditPartner(string lang, int partnerId, decimal amount)
        {
            var response = new Response<string>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang);
                p.Add("@siteId", this._conf.SiteId);
                p.Add("@partnerId", partnerId);
                p.Add("@amount", amount);
                response.Data = await this.ExecuteScalar<string>("partners.deposit_credit", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }

        public async Task<Response<string>> WithdrawCreditPartner(string lang, int partnerId, decimal amount)
        {
            var response = new Response<string>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang);
                p.Add("@siteId", this._conf.SiteId);
                p.Add("@partnerId", partnerId);
                p.Add("@amount", amount);
                response.Data = await this.ExecuteScalar<string>("partners.withdraw_credit", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }
        public async Task<Response<string>> UpdatePartner(string lang, int partnerId, string name, string email, bool active, decimal credit, bool canCreatePartner)
        {
            var response = new Response<string>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang, DbType.String);
                p.Add("@siteId", this._conf.SiteId, DbType.Int32);
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@name", name, DbType.String);
                p.Add("@email", email, DbType.String);
                p.Add("@active", active, DbType.String);
                p.Add("@credit", credit, DbType.Decimal);
                p.Add("@canCreatePartner", canCreatePartner, DbType.Boolean);
                response.Data = await this.ExecuteScalar<string>("partners.partner_update", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }
        public async Task<Response<PartnerResponse>> GetPartner(string lang, int partnerId)
        {
            var response = new Response<PartnerResponse>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang, DbType.String);
                p.Add("@partnerId", partnerId, DbType.Int32);
                response.Data = await this.QuerySingle<PartnerResponse>("partners.partner_info", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }

        public async Task<decimal> GetBalance(int partnerId)
        {
            var p = new DynamicParameters();
             p.Add("@partnerId", partnerId, DbType.Int32);
            return await this.QuerySingle<decimal>("partners.get_balance", p);
        }

        public async Task<Response<IEnumerable<PartnerListResponse>>> PartnerList(string lang, int partnerId)
        {
            var response = new Response<IEnumerable<PartnerListResponse>>();

            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang, DbType.String);
                p.Add("@siteId", this._conf.SiteId, DbType.Int32);
                p.Add("@partnerId", partnerId, DbType.Int32);
                response.Data = await this.Query<PartnerListResponse>("partners.partner_list", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }
        public async Task<Response<string>> ChangeMyPassword(string lang, int partnerId, string password)
        {
            var response = new Response<string>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang, DbType.String);
                p.Add("@siteId", this._conf.SiteId, DbType.Int32);
                p.Add("@id", partnerId, DbType.Int32);
                p.Add("@password", password, DbType.String);
                response.Data = await this.ExecuteScalar<string>("partners.change_password", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }
        public async Task<Response<IEnumerable<TransactionHistoryResponse>>> TransactionHistory(string lang, int partnerId, int start, int limit)
        {
            var response = new Response<IEnumerable<TransactionHistoryResponse>>();

            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang, DbType.String);
                p.Add("@siteId", this._conf.SiteId, DbType.Int32);
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@start", start, DbType.Int32);
                p.Add("@limit", limit, DbType.Int32);
                response.Data = await this.Query<TransactionHistoryResponse>("partners.transaction_history", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }
        public async Task<Response<IEnumerable<LoginHistoryResponse>>> LoginHistory(string lang, int partnerId, int start, int limit)
        {
            var response = new Response<IEnumerable<LoginHistoryResponse>>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang, DbType.String);
                p.Add("@siteId", this._conf.SiteId, DbType.Int32);
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@start", start, DbType.Int32);
                p.Add("@limit", limit, DbType.Int32);
                response.Data = await this.Query<LoginHistoryResponse>("partners.login_history", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;

            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
            }
            return response;

        }
        public async Task<Response<PartnerLoginResponse>> PartnerLogin(string lang, string username, string password, string ip)
        {
            var response = new Response<PartnerLoginResponse>();
            try
            {
                var p = new DynamicParameters();
                p.Add("lang", lang, DbType.String);
                p.Add("siteId", _conf.SiteId, DbType.Int32);
                p.Add("username", username, DbType.String);
                p.Add("password", password, DbType.String);
                p.Add("browser", "Mobile", DbType.String);
                p.Add("os", "Mobile", DbType.String);
                p.Add("device", "Mobile", DbType.String);
                p.Add("ip", ip, DbType.String);
                response.Data = await this.QuerySingle<PartnerLoginResponse>("partners.partner_login", p);
                response.Status = ResponseStatus.Ok;

            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
            }
            return response;

        }
        public async Task<Response<IEnumerable<TicketSearchListResponse>>> TicketSearch(string lang, int partnerId, long? ticketId, DateTime? startDate, DateTime? endDate, string username, decimal? minStake, decimal? maxStake, decimal? minPayout, decimal? maxPayout, bool? live, short? status, bool direct, int start, int limit)
        {
            var response = new Response<IEnumerable<TicketSearchListResponse>>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang, DbType.String);
                p.Add("@siteId", this._conf.SiteId, DbType.Int32);
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@ticketId", ticketId, DbType.Int64);
                p.Add("@startDate", startDate, DbType.Date);
                p.Add("@endDate", endDate.GetValueOrDefault().AddDays(1), DbType.Date);
                p.Add("@username", username, DbType.String);
                p.Add("@minStake", minStake, DbType.Decimal);
                p.Add("@maxStake", maxStake, DbType.Decimal);
                p.Add("@minPayout", minPayout, DbType.Decimal);
                p.Add("@maxPayout", maxPayout, DbType.Decimal);
                p.Add("@live", live, DbType.Boolean);
                p.Add("@status", status, DbType.Int16);
                p.Add("@direct", direct, DbType.Boolean);
                p.Add("@start", start, DbType.Int32);
                p.Add("@limit", limit, DbType.Int32);

                response.Data = await this.Query<TicketSearchListResponse>("partners.search_tickets", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }
        public async Task<Response<IEnumerable<PlayerTicketDetailResponse>>> PlayerTicketDetail(string lang, int partnerId, int playerId, long ticketId)
        {
            var response = new Response<IEnumerable<PlayerTicketDetailResponse>>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang, DbType.String);
                p.Add("@siteId", this._conf.SiteId, DbType.Int32);
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@playerId", playerId, DbType.Int32);
                p.Add("@ticketId", ticketId, DbType.Int64);
                response.Data = await this.Query<PlayerTicketDetailResponse>("partners.player_ticket_detail", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }
        public async Task<Response<IEnumerable<PartnerPlayerListResponse>>> PartnerPlayerList(string lang, int partnerId, int? playerId, string username, string name, string surname, bool? active, bool direct, int start, int end)
        {
            var response = new Response<IEnumerable<PartnerPlayerListResponse>>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang, DbType.String);
                p.Add("@siteId", this._conf.SiteId, DbType.Int32);
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@playerId", playerId, DbType.Int32);
                p.Add("@username", username, DbType.String);
                p.Add("@name", name, DbType.String);
                p.Add("@surname", surname, DbType.String);
                p.Add("@active", active, DbType.Boolean);
                p.Add("@direct", direct, DbType.Boolean);
                p.Add("@start", start, DbType.Int32);
                p.Add("@limit", end, DbType.Int32);
                response.Data = await this.Query<PartnerPlayerListResponse>("partners.player_list_search", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }
        public async Task<Response<PartnerPlayerDetailResponse>> PartnerPlayerDetail(string lang, int partnerId, int playerId)
        {
            var response = new Response<PartnerPlayerDetailResponse>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang, DbType.String);
                p.Add("@siteId", this._conf.SiteId, DbType.Int32);
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@playerId", playerId, DbType.Int32);
                response.Data = await this.QuerySingle<PartnerPlayerDetailResponse>("partners.player_detail", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }
        public async Task<Response<IEnumerable<PlayerTransactionResponse>>> PlayerTransactionList(string lang, int partnerId, int playerId, int start, int limit)
        {
            var response = new Response<IEnumerable<PlayerTransactionResponse>>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang, DbType.String);
                //p.Add("@siteId", _conf.SiteId, DbType.Int32);
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@playerId", playerId, DbType.Int32);
                p.Add("@start", start, DbType.Int32);
                p.Add("@limit", limit, DbType.Int32);
                response.Data = await this.Query<PlayerTransactionResponse>("partners.player_transaction", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }
        public async Task<Response<IEnumerable<PlayerLoginHistory>>> PlayerLoginHistoryList(string lang, int partnerId, int playerId, int start, int limit)
        {
            var response = new Response<IEnumerable<PlayerLoginHistory>>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang, DbType.String);
                //p.Add("@siteId", _conf.SiteId, DbType.Int32);
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@playerId", playerId, DbType.Int32);
                p.Add("@start", start, DbType.Int32);
                p.Add("@limit", limit, DbType.Int32);
                response.Data = await this.Query<PlayerLoginHistory>("partners.player_login_history", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }
        public async Task<Response<IEnumerable<PlayerTicketListResponse>>> PlayerTicketList(string lang, int partnerId, int playerId, int start, int limit)
        {
            var response = new Response<IEnumerable<PlayerTicketListResponse>>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang, DbType.String);
                p.Add("@siteId", this._conf.SiteId, DbType.Int32);
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@playerId", playerId, DbType.Int32);
                p.Add("@start", start, DbType.Int32);
                p.Add("@limit", limit, DbType.Int32);
                response.Data = await this.Query<PlayerTicketListResponse>("partners.player_ticket_list", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }
        public async Task<Response<string>> PartnerPlayerChangePassword(string lang, int partnerId, int playerId, string password)
        {
            var response = new Response<string>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang, DbType.String);
                p.Add("@siteId", this._conf.SiteId, DbType.Int32);
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@playerId", playerId, DbType.Int32);
                p.Add("@password", password, DbType.String);
                response.Data = await this.ExecuteScalar<string>("partners.change_player_password", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }
        public async Task<Response<string>> UpdatePlayer(string lang, int partnerId, int playerId, string name, string surname, string email, bool isActive, string country, DateTime birthDate)
        {
            var response = new Response<string>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang, DbType.String);
                p.Add("@siteId", this._conf.SiteId, DbType.Int32);
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@playerId", playerId, DbType.Int32);
                p.Add("@name", name, DbType.String);
                p.Add("@surname", surname, DbType.String);
                p.Add("@email", email, DbType.String);
                p.Add("@isActive", isActive, DbType.Boolean);
                p.Add("@country", country, DbType.String);
                p.Add("@birthDate", birthDate, DbType.Date);
                response.Data = await this.ExecuteScalar<string>("partners.update_player", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }
        public async Task<Response<string>> CreatePlayer(string lang, int partnerId, string gender, string name, string surname, string username, string password, string email, DateTime birthDate, string country)
        {
            var response = new Response<string>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang, DbType.String);
                p.Add("@siteId", this._conf.SiteId, DbType.Int32);
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@gender", gender, DbType.String);
                p.Add("@username", username, DbType.String);
                p.Add("@password", password, DbType.String);
                p.Add("@name", name, DbType.String);
                p.Add("@surname", surname, DbType.String);
                p.Add("@email", email, DbType.String);
                p.Add("@country", country, DbType.String);
                p.Add("@birthDate", birthDate, DbType.Date);
                response.Data = await this.ExecuteScalar<string>("partners.create_player", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }
        public async Task<Response<decimal>> PlayerPayIn(string lang, int partnerId, int playerId, decimal amount)
        {
            var response = new Response<decimal>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang, DbType.String);
                p.Add("@siteId", this._conf.SiteId, DbType.Int32);
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@playerId", playerId, DbType.Int32);
                p.Add("@amount", amount, DbType.Decimal);
                response.Data = await this.ExecuteScalar<decimal>("partners.payin_player", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }
        public async Task<Response<decimal>> PlayerPayOut(string lang, int partnerId, int playerId, decimal amount)
        {
            var response = new Response<decimal>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang, DbType.String);
                p.Add("@siteId", this._conf.SiteId, DbType.Int32);
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@playerId", playerId, DbType.Int32);
                p.Add("@amount", amount, DbType.Decimal);
                response.Data = await this.ExecuteScalar<decimal>("partners.payout_player", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }



        public async Task<Response<IEnumerable<ProductPermitListResponse>>> ProductPertmitList(string lang, int partnerId)
        {
            var response = new Response<IEnumerable<ProductPermitListResponse>>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang, DbType.String);
                p.Add("@siteId", this._conf.SiteId, DbType.Int32);
                p.Add("@partnerId", partnerId, DbType.Int32);
                response.Data = await this.Query<ProductPermitListResponse>("partners.product_permits", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }

        public async Task<Response<string>> SetPlayerPermits(string lang, int partnerId, int playerId, bool canPlayTombala,
            bool canPlayCasino, bool canPlayLiveCasino, bool canPlayBet, bool useCashout)
        {
            var response = new Response<string>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang);
                p.Add("@siteId", this._conf.SiteId);
                p.Add("@partnerId", partnerId);
                p.Add("@playerId", playerId);
                p.Add("@canPlayTombala", canPlayTombala);
                p.Add("@canPlayCasino", canPlayCasino);
                p.Add("@canPlayLiveCasino", canPlayLiveCasino);
                p.Add("@canPlayBet", canPlayBet);
                p.Add("@useCashout", useCashout);
                response.Data = await this.QuerySingle<string>("accounting.set_player_product_permits", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) response.ErrorMessage += e.InnerException.Message;
            }

            return response;
        }

        public async Task<Response<PlayerPermits>> PlayerPermitsList(int partnerId, int playerId)
        {
            var response = new Response<PlayerPermits>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@siteId", this._conf.SiteId);
                p.Add("@partnerId", partnerId);
                p.Add("@playerId", playerId);
                response.Data = await this.QuerySingle<PlayerPermits>("accounting.get_player_product_permits", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }

        public async Task<Response<string>> UpdateProductPermits(string lang, int operatorId, int partnerId, int productTypeId, bool permitted)
        {
            var response = new Response<string>();

            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang, DbType.String);
                p.Add("@siteId", this._conf.SiteId, DbType.Int32);
                p.Add("@operatorId", operatorId, DbType.Int32);
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@productTypeId", productTypeId, DbType.Int32);
                p.Add("@permit", permitted, DbType.Boolean);
                response.Data = await this.ExecuteScalar<string>("partners.product_permit_update", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }
        public async Task<Response<IEnumerable<PartnerBetHoldReportResponse>>> PartnerBetHoldReport(string lang, int partnerId, DateTime startDate, DateTime endDate, bool? onlyActive)
        {
            var response = new Response<IEnumerable<PartnerBetHoldReportResponse>>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@startDate", startDate, DbType.Date);
                p.Add("@endDate", endDate.AddDays(1), DbType.Date);
                p.Add("@onlyActive", onlyActive, DbType.Boolean);
                response.Data = await this.Query<PartnerBetHoldReportResponse>("partners.partner_bet_hold_report", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }

        public async Task<Response<IEnumerable<PartnerBetHoldReportResponse>>> PartnerShopBetHoldReport(string lang, int partnerId, DateTime startDate, DateTime endDate, bool? onlyActive)
        {
            var response = new Response<IEnumerable<PartnerBetHoldReportResponse>>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@startDate", startDate, DbType.Date);
                p.Add("@endDate", endDate.AddDays(1), DbType.Date);
                p.Add("@onlyActive", onlyActive, DbType.Boolean);
                response.Data = await this.Query<PartnerBetHoldReportResponse>("partners.partner_shop_bet_hold_report", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }

        public async Task<Response<IEnumerable<CasinoPartnerHoldReportResponse>>> PartnerCasinoHoldReport(string lang, int partnerId, DateTime startDate, DateTime endDate, bool? onlyActive)
        {
            var response = new Response<IEnumerable<CasinoPartnerHoldReportResponse>>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@startDate", startDate, DbType.Date);
                p.Add("@endDate", endDate.AddDays(1), DbType.Date);
                p.Add("@onlyActive", onlyActive, DbType.Boolean);
                response.Data = await this.Query<CasinoPartnerHoldReportResponse>("partners.partner_casino_hold_report", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }
            return response;
        }
        public async Task<Response<IEnumerable<PartnerTombalaHoldReportResponse>>> PartnerTombalaHoldReport(string lang, int partnerId, DateTime startDate, DateTime endDate, bool? onlyActive)
        {
            var response = new Response<IEnumerable<PartnerTombalaHoldReportResponse>>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@startDate", startDate, DbType.Date);
                p.Add("@endDate", endDate.AddDays(1), DbType.Date);
                p.Add("@onlyActive", onlyActive, DbType.Boolean);
                response.Data = await this.Query<PartnerTombalaHoldReportResponse>("partners.partner_tombala_hold_report", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }
            return response;
        }
        public async Task<Response<IEnumerable<PlayerBetHoldReportResponse>>> PlayerBetHoldReport(string lang, int partnerId, DateTime startDate, DateTime endDate)
        {
            var response = new Response<IEnumerable<PlayerBetHoldReportResponse>>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@startDate", startDate, DbType.Date);
                p.Add("@endDate", endDate.AddDays(1), DbType.Date);
                response.Data = await this.Query<PlayerBetHoldReportResponse>("partners.player_ticket_hold_report", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }
        public async Task<Response<IEnumerable<CasinoPlayerHoldReportResponse>>> CasinoPlayerHoldReport(string lang, int partnerId, DateTime startDate, DateTime endDate)
        {
            var response = new Response<IEnumerable<CasinoPlayerHoldReportResponse>>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang, DbType.String);
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@startDate", startDate, DbType.Date);
                p.Add("@endDate", endDate.AddDays(1), DbType.Date);
                response.Data = await this.Query<CasinoPlayerHoldReportResponse>("partners.casino_hold_report_by_player", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }
            return response;
        }
        public async Task<Response<IEnumerable<TombalaPlayerHoldReportResponse>>> TombalaPlayerHoldResponse(string lang, int partnerId, DateTime startDate, DateTime endDate)
        {
            var response = new Response<IEnumerable<TombalaPlayerHoldReportResponse>>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@startDate", startDate, DbType.Date);
                p.Add("@endDate", endDate.AddDays(1), DbType.Date);
                response.Data = await this.Query<TombalaPlayerHoldReportResponse>("partners.player_tombala_hold_report", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }
        public async Task<Response<IEnumerable<PlayerTotalHoldReports>>> PlayerHoldTotalResponse(string lang, int partnerId, DateTime startDate, DateTime endDate)
        {
            var response = new Response<IEnumerable<PlayerTotalHoldReports>>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@startDate", startDate, DbType.Date);
                p.Add("@endDate", endDate.AddDays(1), DbType.Date);
                response.Data = await this.Query<PlayerTotalHoldReports>("partners.player_total_hold_reports", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }
        public async Task<Response<IEnumerable<PlayerCashTransactionResponse>>> PlayerCashTransactionReport(string lang, int playerId, DateTime startDate, DateTime endDate)
        {
            var response = new Response<IEnumerable<PlayerCashTransactionResponse>>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang, DbType.String);
                p.Add("@playerId", playerId, DbType.Int32);
                p.Add("@start", startDate, DbType.Date);
                p.Add("@end", endDate.AddDays(1), DbType.Date);
                response.Data = await this.Query<PlayerCashTransactionResponse>("partners.player_cash_transaction", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }

        public async Task<Response<string>> CancelTicket(string lang, int partnerId, long ticketId)
        {
            var response = new Response<string>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang, DbType.String);
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@ticketId", ticketId, DbType.Int64);
                response.Data = await this.ExecuteScalar<string>("partners.cancel_ticket", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }


        /// <inheritdoc />
        public async Task<Response<IEnumerable<LiveCasinoPartnerHoldReportResponse>>> LiveCasinoPartnerHoldReport(int partnerId, DateTime startDate, DateTime endDate, bool? onlyActive)
        {
            var response = new Response<IEnumerable<LiveCasinoPartnerHoldReportResponse>>();
            try
            {
                var p = new DynamicParameters();

                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@startDate", startDate, DbType.Date);
                p.Add("@endDate", endDate.AddDays(1), DbType.Date);
                p.Add("@onlyActive", onlyActive, DbType.Boolean);
                response.Data = await this.Query<LiveCasinoPartnerHoldReportResponse>("partners.partner_livecasino_hold_report", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }

        public async Task<Response<PartnerGeneralReportResponse>> GetPartnerGeneralReport(int partnerId, DateTime? startDate, DateTime? endDate)
        {
            var response = new Response<PartnerGeneralReportResponse>();

            try
            {
                var p = new DynamicParameters();

                startDate = startDate != DateTime.MinValue ? startDate : null;
                endDate = endDate != DateTime.MinValue ? endDate : null;

                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@transactionDateFrom", startDate, DbType.Date);
                p.Add("@transactionDateTo", endDate, DbType.Date);
                response.Data = await this.QuerySingle<PartnerGeneralReportResponse>("partners.get_general_report", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }


        /// <inheritdoc />
        public async Task<Response<IEnumerable<LiveCasinoPlayerHoldReportResponse>>> LiveCasinoPlayerHoldReport(string lang, int partnerId, DateTime startDate, DateTime endDate)
        {
            var response = new Response<IEnumerable<LiveCasinoPlayerHoldReportResponse>>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@lang", lang, DbType.String);
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@startDate", startDate, DbType.Date);
                p.Add("@endDate", endDate.AddDays(1), DbType.Date);
                response.Data = await this.Query<LiveCasinoPlayerHoldReportResponse>("partners.livecasino_hold_report_by_player", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }

        /// <inheritdoc />
        public async Task<Response<IEnumerable<LiveCasinoBrandReportByPartner>>> LiveCasinoBrandReportByPartner(int partnerId, DateTime startDat, DateTime endDate)
        {
            var response = new Response<IEnumerable<LiveCasinoBrandReportByPartner>>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@startDate", startDat, DbType.Date);
                p.Add("@endDate", endDate.AddDays(1), DbType.Date);
                response.Data = await this.Query<LiveCasinoBrandReportByPartner>("partners.brand_report_by_partner", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }

        
        public async Task<Response<IEnumerable<PartnerTotalHoldReportResponse>>> PartnerTotalHoldReportByPartner(int partnerId, DateTime startDate, DateTime endDate)
        {
            var response = new Response<IEnumerable<PartnerTotalHoldReportResponse>>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@startDate", startDate, DbType.Date);
                p.Add("@endDate", endDate.AddDays(1), DbType.Date);
                response.Data = await this.Query<PartnerTotalHoldReportResponse>("partners.partner_total_hold_report", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }

        public async Task<Response<IEnumerable<PlayerTotalReportResponse>>> PlayerTotalReport(int partnerId, DateTime startDate, DateTime endDate)
        {
            var response = new Response<IEnumerable<PlayerTotalReportResponse>>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@partnerId", partnerId, DbType.Int32);
                p.Add("@startDate", startDate, DbType.Date);
                p.Add("@endDate", endDate.AddDays(1), DbType.Date);
                response.Data = await this.Query<PlayerTotalReportResponse>("partners.player_total_hold_report", p);
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }

            return response;
        }

        public async Task<Response<IEnumerable<ShopReportResponse>>> PartnerShopReport(int partnerId, DateTime startDate, DateTime endDate)
        {
            var response = new Response<IEnumerable<ShopReportResponse>>();
            try
            {
                var p = new DynamicParameters();
                p.Add("@partnerId", partnerId);
                p.Add("@startDate", startDate);
                p.Add("@endDate", endDate);
                var dbResponse = await this.Query<DBShopReportResponse>("reports.partner_shop_reports", p);
                response.Data = dbResponse.Transform();
                response.ErrorMessage = null;
                response.Status = ResponseStatus.Ok;
            }
            catch (Exception e)
            {
                response.Status = ResponseStatus.Error;
                response.ErrorMessage = e.Message;
                response.Data = null;
                if (e.InnerException != null) { response.ErrorMessage += e.InnerException.Message; }
            }
            return response;
        }


        private async Task<T> QuerySingle<T>(string procedureName, DynamicParameters p)
        {
            try
            {
                using (var db = Connection())
                {
                    await db.OpenAsync();
                    return await db.QuerySingleAsync<T>(procedureName, p, commandType: CommandType.StoredProcedure);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }

        }
        private async Task<IEnumerable<T>> Query<T>(string procedureName, DynamicParameters p)
        {
            try
            {
                using (var db = Connection())
                {
                    await db.OpenAsync();
                    return await db.QueryAsync<T>(procedureName, p, commandType: CommandType.StoredProcedure);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }

        }
        private async Task<T> ExecuteScalar<T>(string procedureName, DynamicParameters p)
        {
            try
            {
                using (var db = Connection())
                {
                    await db.OpenAsync();
                    return await db.ExecuteScalarAsync<T>(procedureName, p, commandType: CommandType.StoredProcedure);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }

        }
        private SqlConnection Connection()
        {
            return new SqlConnection(_conf.SqlConnectionString);
        }

    }
}
