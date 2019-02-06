USE [NBET]
GO
/****** Object:  StoredProcedure [partners].[player_total_hold_reports]    Script Date: 06/02/2019 00:19:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [partners].[player_total_hold_reports](@partnerId INT, @startDate DATE, @endDate DATE) AS
BEGIN
WITH c AS (
SELECT p.Id,
  p.Username, 
  b.Balance,
  'Bet' Name
FROM accounting.Players p WITH(NOLOCK) 
JOIN accounting.PlayerBalances b WITH(NOLOCK) ON b.PlayerId = p.Id
LEFT OUTER JOIN ticket.TicketHeader h WITH(NOLOCK) ON h.PlayerId = p.Id AND h.EvaluationDate BETWEEN @startDate AND DATEADD(DAY,1,@endDate)
WHERE p.PartnerId = @partnerId
GROUP BY p.Id, p.Username, b.Balance
)
--tombala
SELECT s.Id,s.Username,s.Bet,s.Casino,s.Livecasino,s.Tombala,s.Bet+s.Casino+s.Livecasino+s.Tombala Total FROM
(SELECT *
 FROM
(
SELECT p.Id, 
p.Username, 
pb.Balance,
'Tombala' Name
FROM  accounting.Players p 
JOIN accounting.PlayerBalances pb ON pb.PlayerId = p.Id
LEFT OUTER JOIN tombala.TombalaTransactions tt ON tt.PlayerId =p.Id AND tt.TransactionDate BETWEEN @startDate AND @endDate
WHERE p.PartnerId = @partnerId
GROUP BY p.Id, p.Username, pb.Balance
UNION ALL
--bet reports
SELECT * FROM c --WHERE c.TicketCount > 0;
UNION ALL
--casino reports
 SELECT p.Id, 
 p.Username,
 b.Balance, 
 'Casino' Name
  FROM accounting.Players p
JOIN accounting.PlayerBalances b ON b.PlayerId = p.Id
 LEFT OUTER JOIN slot.Transactions ct ON ct.PlayerId = p.Id AND ct.TransactionDate BETWEEN @startDate AND @endDate
  WHERE p.PartnerId = @partnerId
	GROUP BY p.Id, p.Username,b.Balance
--live casino reports
    UNION ALL
    SELECT p.Id, 
	p.Username,
	b.Balance, 
	 'Livecasino' Name
	 FROM accounting.Players p
    JOIN accounting.PlayerBalances b ON b.PlayerId = p.Id
    LEFT OUTER JOIN livecasino.Transactions ct ON ct.PlayerId = p.Id AND ct.TransactionDate BETWEEN @startDate AND @endDate
    WHERE p.PartnerId = @partnerId
    GROUP BY p.Id, p.Username,b.Balance
	) 
	 AS SourceTable PIVOT(AVG(Balance) FOR [Name] IN([Tombala],
                                                         [Casino],
                                                         [Livecasino],
                                                         [Bet])) AS PivotTable) s
														 order by Username;

END

